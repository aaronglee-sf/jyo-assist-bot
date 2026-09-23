async function importPrivateKey(pem) {
  const pemContents = pem
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\n/g, '');
  const binaryDer = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));
  return await crypto.subtle.importKey(
    'pkcs8',
    binaryDer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );
}

async function createJWT(credentials) {
  const header = btoa(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const now = Math.floor(Date.now() / 1000);
  const payload = btoa(JSON.stringify({
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  })).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const signingInput = `${header}.${payload}`;
  const key = await importPrivateKey(credentials.private_key);
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    key,
    new TextEncoder().encode(signingInput)
  );
  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  return `${signingInput}.${encodedSignature}`;
}

async function getGoogleAccessToken(env) {
  const credentials = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT);
  const jwt = await createJWT(credentials);
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
  });
  const data = await response.json();
  return data.access_token;
}

async function fetchSheet(spreadsheetId, range, accessToken) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  const data = await response.json();
  return data.values || [];
}

async function getDocumentRegistry(accessToken) {
  const REGISTRY_SHEET_ID = '1-nO9TjP0O4t_DJzQfeFeoeA9_qmn5mqupDn43SU1ThM';
  const rows = await fetchSheet(REGISTRY_SHEET_ID, 'Sheet1!A2:E50', accessToken);
  return rows.map(row => ({
    name: row[0] || '',
    link: row[1] || '',
    summary: row[2] || '',
    lastUpdated: row[3] || 'Date not available',
    audience: row[4] || ''
  }));
}

async function appendToAnalytics(accessToken, row) {
  const ANALYTICS_SHEET_ID = '1MzNv8K_inFSWafDjoFbA63XPnSvXwilzk0rkky613v4';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${ANALYTICS_SHEET_ID}/values/Analytics!A:F:append?valueInputOption=USER_ENTERED`;
  await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ values: [row] })
  });
}

function detectResponseSource(botText, registryDocs) {
  const registryLinkUsed = registryDocs.some(doc => doc.link && botText.includes(doc.link));
  if (registryLinkUsed) return 'registry';
  const isFallback = botText.toLowerCase().includes("i don't have that info") ||
                     botText.toLowerCase().includes("please contact jyo directly");
  if (isFallback) return 'neither';
  return 'knowledge_base';
}

// ---- MODEL CONFIG — update this one line when Anthropic retires a model ----
const CLAUDE_MODEL = 'claude-haiku-4-5-20251001';
// ---------------------------------------------------------------------------

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const { messages, audience, knowledgeBaseText, sessionId, isNewSession } = await request.json();

      // Fetch Google token + registry (unchanged from original)
      const accessToken = await getGoogleAccessToken(env);
      const registry = await getDocumentRegistry(accessToken);

      const audiencesToInclude = {
        parent:     ['parent', 'all'],
        coach:      ['coach', 'manager', 'parent', 'all'],
        manager:    ['manager', 'coach', 'parent', 'all'],
        leadership: ['parent', 'coach', 'manager', 'leadership', 'all']
      };
      const permittedAudiences = audiencesToInclude[audience.toLowerCase()] || [audience.toLowerCase(), 'all'];

      const relevantDocs = registry.filter(doc => {
        if (!doc.audience || !doc.name) return false;
        const a = doc.audience.toLowerCase();
        return permittedAudiences.some(p => a.includes(p));
      });

      const registryText = relevantDocs.map(doc =>
        `- ${doc.name}: ${doc.summary} [${doc.link}] (Last updated: ${doc.lastUpdated})`
      ).join('\n');

      const systemPrompt = `You are JYO Assist Bot, a helpful assistant for San Mateo JYO (Japanese Youth Organization) basketball league.
You are currently helping a ${audience}.

=== INLINE KNOWLEDGE BASE ===
Use this content to answer questions directly and in detail when relevant:
${knowledgeBaseText}

=== DOCUMENT REGISTRY ===
Use these links when referencing or recommending specific documents:
${registryText}

Guidelines:
- Prefer answering from the inline knowledge base when the content is there — give a real answer, not just a link
- Always include a clickable source link when referencing a document, formatted as: 📄 Source: [Document Name](URL)
- If multiple docs are relevant, list all source links
- If the answer isn't in either source, say: "I don't have that info — please contact JYO directly at president@sanmateojyo.org"
- Keep responses concise and friendly
- Never make up information not present in the knowledge base or registry`;

      const timestamp = new Date().toISOString();

      // Log session_start (non-blocking)
      if (isNewSession) {
        ctx.waitUntil(appendToAnalytics(accessToken, [
          timestamp, sessionId, 'session_start', audience, '', ''
        ]));
      }

      // ── Call Anthropic with stream: true ───────────────────────────────────
      const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: CLAUDE_MODEL,
          max_tokens: 1000,
          stream: true,                        // ← NEW: enable streaming
          system: systemPrompt,
          messages: messages
        })
      });

      if (!anthropicResponse.ok) {
        const errText = await anthropicResponse.text();
        return new Response(JSON.stringify({ error: { type: 'api_error', message: errText } }), {
          status: anthropicResponse.status,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }

      // ── Pipe SSE stream to browser; capture full text for analytics ────────
      const { readable, writable } = new TransformStream();
      const writer = writable.getWriter();
      const encoder = new TextEncoder();

      ctx.waitUntil((async () => {
        const reader = anthropicResponse.body.getReader();
        const decoder = new TextDecoder();
        let fullText = '';
        let lineBuffer = ''; // accumulates partial lines across chunks

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });

            // Forward chunk to browser immediately
            await writer.write(encoder.encode(chunk));

            // Buffer lines — a chunk can split a data: line mid-way
            lineBuffer += chunk;
            const lines = lineBuffer.split('\n');
            // Keep the last (potentially incomplete) line in the buffer
            lineBuffer = lines.pop();

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const raw = line.slice(6).trim();
                if (raw === '[DONE]') continue;
                try {
                  const json = JSON.parse(raw);
                  if (json.type === 'content_block_delta' && json.delta?.type === 'text_delta') {
                    fullText += json.delta.text;
                  }
                } catch (_) { /* skip non-JSON lines */ }
              }
            }
          }

          // Process any remaining buffered line
          if (lineBuffer.startsWith('data: ')) {
            const raw = lineBuffer.slice(6).trim();
            if (raw && raw !== '[DONE]') {
              try {
                const json = JSON.parse(raw);
                if (json.type === 'content_block_delta' && json.delta?.type === 'text_delta') {
                  fullText += json.delta.text;
                }
              } catch (_) {}
            }
          }

        } finally {
          await writer.close();
        }

        // Log message event after stream completes — must be awaited inside ctx.waitUntil
        const userQuestion = messages[messages.length - 1]?.content || '';
        const responseSource = detectResponseSource(fullText, relevantDocs);
        await appendToAnalytics(accessToken, [
          timestamp, sessionId, 'message', audience, userQuestion, responseSource, fullText
        ]);
      })());

      // Return streaming response immediately — browser starts receiving text at once
      return new Response(readable, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        }
      });

    } catch (error) {
      console.error('Worker error:', error.message, error.stack);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }
  }
};
