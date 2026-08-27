// ============================================================
// JYO ASSIST BOT — script.js
// API key stored in localStorage — never hardcoded in source
// ============================================================

// ============================================================
// KNOWLEDGE BASE
// Content for each doc lives in its own file under /knowledge — see index.html
// for load order (each knowledge/*.js file must load before this one).
// ============================================================
const knowledgeBase = {
  shared: {
    codeOfConduct: window.JYO_KB.codeOfConduct,
    merchStore: window.JYO_KB.merchStore,
    managerHandbook: window.JYO_KB.managerHandbook
  },

  audiences: {
    parent: {
      welcomeMessage: "Hi! I'm JYO Assist Bot 👋 I'm here to help you get quick answers about events, schedules, registration, and more. What can I help you with?",
      resources: {
        seasonSchedule:   { description: "Full season schedule — game dates, times, and locations", url: null, name: "Season Schedule" },
        jerseyTracker:    { description: "Uniform jersey number tracker — look up your player's jersey number", url: null, name: "Jersey Number Tracker" },
        eventInfo:        { description: "Game and event info including gym locations — available in TeamSnap", url: null, name: "Event & Game Info (TeamSnap)" },
        contactInfo:      { description: "JYO org contact info — president, commissioners, and key roles", url: null, name: "JYO Contact Info" },
        specialEvents:    { description: "Special events like Warriors Night (PWTPP) — waivers, logistics, late arrival", url: null, name: "Special Event Info" },
        waiverForms:      { description: "Waiver forms for special events", url: null, name: "Waiver Forms" },
        codeOfConduct:    "shared.codeOfConduct",
        practiceSchedules:"shared.practiceSchedules",
        website:          "shared.website",
        merch:            "shared.merchStore"
      },
      context: `You are helping a JYO PARENT. Parents are families of current or prospective players.
They commonly ask about: event info (game locations, times), registration and waitlist status,
code of conduct (player playing time expectations, parent behavior), season schedule,
jersey numbers, merch/apparel ordering, TeamSnap how-to, refund policy, and special events like Warriors Night.
Keep your tone warm and welcoming — many parents are new to the league.`
    },

    coach: {
      welcomeMessage: "Hey Coach! 👋 I'm JYO Assist Bot. Ask me anything about gym access, equipment, league rules, jamborees, or resources for your team.",
      resources: {
        newCoachesPrimer:     "shared.newCoachesPrimer",
        teamContacts:         { description: "Team contact information for all coaches", url: null, name: "Team Contact List" },
        nybaRules:            { description: "NYBA league game rules", url: null, name: "NYBA League Game Rules" },
        leagueScheduleRosters:{ description: "League schedule and rosters", url: null, name: "League Schedule & Rosters" },
        scrimmageWaiver:      { description: "Scrimmage waiver forms — required for hosting non-JYO teams at practices", url: null, name: "Scrimmage Waiver Form" },
        teammateOfMonth:      { description: "Teammate of the Month nomination process and deadlines", url: null, name: "Teammate of the Month Sheet" },
        codeOfConduct:        "shared.codeOfConduct",
        practiceSchedules:    "shared.practiceSchedules",
        website:              "shared.website",
        merch:                "shared.merchStore"
      },
      context: `You are helping a JYO COACH. Coaches are volunteers who lead teams.
They commonly ask about: gym access and which schools require keys, equipment location (basketballs, scoreboard, rim extenders),
NYBA game rules, league schedule and rosters, scrimmage waiver forms, jamboree sign-ups (CYS, Taisho, Associates, etc.),
Teammate of the Month nominations, and coach apparel.
Keep your tone collegial and practical — coaches are busy volunteers.`
    },

    manager: {
      welcomeMessage: "Hi Manager! 📊 I'm JYO Assist Bot. I can help with practice schedules, game day setup, scoring, team funds, and more.",
      resources: {
        managerHandbook:  "shared.managerHandbook",
        gameDayGuide:     "shared.gameDayGuide",
        jamboreeTracker:  { description: "Jamboree and tournament tracker — sign-ups and logistics", url: "https://docs.google.com/spreadsheets/d/1HKHfQGDzUdVyLYW8mD60iDEA-JMzETH6eL1XBhQgFms/edit?usp=drive_link", name: "Jamboree & Tournament Tracker" },
        practiceSchedule: { description: "Practice schedule spreadsheet — most-referenced doc, shows all team practice times and gym assignments", url: "https://docs.google.com/spreadsheets/d/1zs4oW1Rl7Os8NPImDUmIRCARbFraOEO5urh8gHzaXAA/edit?usp=sharing", name: "Practice Schedule Spreadsheet" },
        jerseyTracker:    { description: "Uniform jersey number tracker", url: null, name: "Jersey Number Tracker" },
        nybaScoreReport:  { description: "NYBA score report — how to submit game scores after each game", url: null, name: "NYBA Score Report" },
        teamBuildingFunds:{ description: "Team building funds — each team is eligible for $600. Instructions on eligibility, how to request, and deadlines.", url: null, name: "Team Building Funds Instructions" },
        website:          "shared.website"
      },
      context: `You are helping a JYO MANAGER. Managers handle team logistics, score reporting, and game day operations.
They commonly ask about: practice schedules (most-referenced doc), game day setup, available gym time (releasing or claiming slots),
gym keys and access, NYBA score reporting, jamboree and tournament tracking, jersey number tracking,
team building funds ($600 per team — eligibility, how to request, deadline), and coach gift guidance.
Keep your tone efficient and direct — managers are organized, detail-oriented volunteers.`
    },

    leadership: {
      welcomeMessage: "Welcome! 🧭 I'm JYO Assist Bot. I can help with meeting minutes, conduct issues, survey coordination, volunteer structure, and league resources.",
      resources: {
        seasonLearnings:    { description: "Season learnings document — feedback, notes, and improvements across the season", url: "https://docs.google.com/spreadsheets/d/19pGTvU6UINOXZyIRVJwPm4tSqBiZkRqftBkz4j7vrQo/edit?usp=sharing", name: "Season Learnings Doc" },
        meetingMinutes:     { description: "JYO board meeting minutes", url: null, name: "Meeting Minutes" },
        contactList:        { description: "Full JYO leadership and staff contact list", url: null, name: "Contact List" },
        parentSurvey:       { description: "Parent survey — links and coordination", url: null, name: "Parent Survey" },
        coachManagerSurvey: { description: "Coach and manager feedback survey", url: null, name: "Coach/Manager Survey" },
        codeOfConduct:      "shared.codeOfConduct",
        practiceSchedules:  "shared.practiceSchedules",
        website:            "shared.website"
      },
      context: `You are helping JYO LEADERSHIP (President, Athletic Director, Division Commissioners).
They commonly ask about: NYBA conduct issues (guest player violations, sportsmanship complaints, escalation process),
survey coordination (coach/manager feedback, parent surveys), volunteer structure (roles, coverage gaps, adding positions),
website and domain management (TeamSnap hosting, Ionos domain questions), meeting minutes, season learnings, and contact lists.
Keep your tone collegial and strategic — these are experienced league leaders.`
    }
  }
};

// ============================================================
// HELPERS
// ============================================================
function resolveResource(ref) {
  if (typeof ref === "string" && ref.startsWith("shared.")) {
    const key = ref.replace("shared.", "");
    return knowledgeBase.shared[key] || null;
  }
  return ref;
}

function buildKnowledgeBaseText(audience) {
  const audiencesToInclude = {
    parent:     ["parent"],
    coach:      ["coach", "manager", "parent"],
    manager:    ["manager", "coach", "parent"],
    leadership: ["parent", "coach", "manager", "leadership"]
  };

  const lines = ["=== SHARED RESOURCES ==="];

  Object.values(knowledgeBase.shared).forEach(r => {
    if (r.content) {
      lines.push(`\n--- ${r.name} ---\n${r.content}\nSource URL: ${r.url}\n`);
    } else {
      lines.push(`- ${r.name}: ${r.description} | URL: ${r.url}`);
    }
  });

  audiencesToInclude[audience].forEach(a => {
    const aData = knowledgeBase.audiences[a];
    lines.push(`\n=== ${a.toUpperCase()} RESOURCES ===`);
    Object.entries(aData.resources).forEach(([key, val]) => {
      const r = resolveResource(val);
      if (r && typeof r === "object") {
        if (r.content) {
          lines.push(`\n--- ${r.name} ---\n${r.content}\nSource URL: ${r.url}\n`);
        } else {
          const urlText = r.url ? r.url : "(URL pending — tell user to check with JYO leadership or visit sanmateojyo.org)";
          lines.push(`- ${r.name}: ${r.description} | URL: ${urlText}`);
        }
      }
    });
  });

  return lines.join("\n");
}

function buildSystemPrompt(audience) {
  const audienceData = knowledgeBase.audiences[audience];
  const kbText = buildKnowledgeBaseText(audience);

  return `You are JYO Assist Bot, a helpful assistant for San Mateo JYO (Japanese Youth Organization), a recreational youth basketball league for grades 1–8 in San Mateo, CA.

${audienceData.context}

=== KNOWLEDGE BASE ===
${kbText}

=== GUIDELINES ===
1. Answer questions using only the knowledge base above. Be helpful, warm, and concise.
2. ALWAYS include a clickable source link at the end of EVERY response, formatted EXACTLY as:
   📄 Source: [Document Name](URL)
   If your answer draws from a named document in the knowledge base, link to it. If multiple documents apply, list all of them. Never omit the source line — even if you're answering from inline content, include the source document name and URL.
3. If your answer draws from multiple resources, list all relevant source links.
4. If a resource URL is listed as "(URL pending...)", tell the user the resource exists but the direct link isn't available yet, and suggest they contact JYO leadership or check sanmateojyo.org.
5. If a question is outside the scope of the knowledge base, respond with:
   "I don't have that info — please contact JYO directly at sanmateojyo.org or reach out to your commissioner."
6. Never make up information. Only answer from what's in the knowledge base.
7. Keep responses friendly and under 150 words unless detail is truly needed.
8. Do not mention that you are powered by Claude or reference any AI company.`;
}

// ============================================================
// DYNAMIC SUGGESTION CHIPS
// ============================================================
function buildSuggestions(audience) {
  const topQuestions = {
    parent: [
      "What's the code of conduct?",
      "Where can I buy JYO merch?",
      "How does playing time work?",
      "Where do I find the practice schedule?"
    ],
    coach: [
      "How do I run an effective practice?",
      "What are the NYBA game rules?",
      "How do I handle guest players?",
      "What's the jamboree schedule?"
    ],
    manager: [
      "How do I set up for a home game?",
      "How do I pay the referees?",
      "How do I report the final score?",
      "How do team building funds work?"
    ],
    leadership: [
      "How do I handle a conduct issue?",
      "What's the guest player policy?",
      "Where are the meeting minutes?",
      "How do I coordinate surveys?"
    ]
  };

  const audiencesToInclude = {
    parent:     ["parent", "all"],
    coach:      ["coach", "manager", "parent", "all"],
    manager:    ["manager", "coach", "parent", "all"],
    leadership: ["parent", "coach", "manager", "leadership", "all"]
  };
  const permitted = audiencesToInclude[audience] || [audience];

  const kbDocChips = [];
  permitted.forEach(a => {
    const source = ["parent","coach","manager","leadership"].includes(a)
      ? knowledgeBase.audiences[a]?.resources
      : null;
    if (!source) return;
    Object.values(source).forEach(val => {
      const r = resolveResource(val);
      if (r && typeof r === "object" && r.url && r.name && kbDocChips.length < 2) {
        const chip = `Tell me about: ${r.name}`;
        if (!kbDocChips.includes(chip)) kbDocChips.push(chip);
      }
    });
  });

  const combined = [...topQuestions[audience].slice(0, 3), ...kbDocChips.slice(0, 1)];
  return combined.slice(0, 4);
}

// ============================================================
// STATE
// ============================================================
let selectedAudience = null;
let conversationHistory = [];
let isLoading = false;
let isNewSession = false;
const STORAGE_KEY = "jyo_assist_api_key";
const sessionId = crypto.randomUUID();

// ============================================================
// DOM REFS
// ============================================================
const setupScreen    = document.getElementById("setup-screen");
const selectorScreen = document.getElementById("selector-screen");
const chatScreen     = document.getElementById("chat-screen");
const apiKeyInput    = document.getElementById("api-key-input");
const saveKeyBtn     = document.getElementById("save-key-btn");
const keyError       = document.getElementById("key-error");
const changeKeyBtn   = document.getElementById("change-key-btn");
const audienceBtns   = document.querySelectorAll(".audience-btn");
const backBtn        = document.getElementById("back-btn");
const audienceBadge  = document.getElementById("audience-badge");
const chatMessages   = document.getElementById("chat-messages");
const welcomeMsg     = document.getElementById("welcome-msg");
const suggestionsEl  = document.getElementById("suggestions");
const userInput      = document.getElementById("user-input");
const sendBtn        = document.getElementById("send-btn");

// ============================================================
// INIT
// ============================================================
function init() {
  showScreen("selector");
}

function showScreen(name) {
  setupScreen.style.display    = "none";
  selectorScreen.style.display = "none";
  chatScreen.style.display     = "none";
  setupScreen.classList.remove("active");
  selectorScreen.classList.remove("active");
  chatScreen.classList.remove("active");

  if (name === "setup") {
    setupScreen.style.display = "flex";
    setupScreen.classList.add("active");
  } else if (name === "selector") {
    selectorScreen.style.display = "flex";
    selectorScreen.classList.add("active");
  } else if (name === "chat") {
    chatScreen.style.display = "flex";
    chatScreen.classList.add("active");
  }
}

// ============================================================
// API KEY SETUP
// ============================================================
saveKeyBtn.addEventListener("click", saveApiKey);
apiKeyInput.addEventListener("keydown", (e) => { if (e.key === "Enter") saveApiKey(); });

function saveApiKey() {
  const key = apiKeyInput.value.trim();
  if (!key.startsWith("sk-ant-")) {
    keyError.textContent = "That doesn't look like a valid Anthropic API key. It should start with sk-ant-";
    keyError.style.display = "block";
    return;
  }
  localStorage.setItem(STORAGE_KEY, key);
  keyError.style.display = "none";
  apiKeyInput.value = "";
  showScreen("selector");
}

changeKeyBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  showScreen("setup");
});

// ============================================================
// AUDIENCE SELECTION
// ============================================================
audienceBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedAudience = btn.dataset.audience;
    startChat(selectedAudience);
  });
});

backBtn.addEventListener("click", () => {
  showScreen("selector");
  conversationHistory = [];
  while (chatMessages.children.length > 1) {
    chatMessages.removeChild(chatMessages.lastChild);
  }
});

function startChat(audience) {
  const audienceData = knowledgeBase.audiences[audience];
  isNewSession = true;
  showScreen("chat");

  const labels = { parent: "👨‍👩‍👧 Parent", coach: "📋 Coach", manager: "📊 Manager", leadership: "🧭 Leadership" };
  audienceBadge.textContent = labels[audience] || audience;
  welcomeMsg.textContent = audienceData.welcomeMessage;

  suggestionsEl.innerHTML = "";
  buildSuggestions(audience).forEach(s => {
    const chip = document.createElement("button");
    chip.className = "suggestion-chip";
    chip.textContent = s;
    chip.addEventListener("click", () => {
      userInput.value = s;
      sendMessage();
    });
    suggestionsEl.appendChild(chip);
  });

  conversationHistory = [];
  userInput.focus();
}

// ============================================================
// MESSAGING
// ============================================================
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("input", () => {
  userInput.style.height = "auto";
  userInput.style.height = Math.min(userInput.scrollHeight, 120) + "px";
});

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text || isLoading) return;

  suggestionsEl.innerHTML = "";
  appendMessage(text, "user");
  userInput.value = "";
  userInput.style.height = "auto";
  conversationHistory.push({ role: "user", content: text });

  isLoading = true;
  sendBtn.disabled = true;

  // Show typing indicator while waiting for first chunk
  const typingEl = showTyping();

  try {
    const response = await fetch("https://jyo-assist-bot.aaronglee.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: conversationHistory,
        audience: selectedAudience,
        knowledgeBaseText: buildKnowledgeBaseText(selectedAudience),
        sessionId: sessionId,
        isNewSession: isNewSession
      })
    });

    if (!response.ok) {
      typingEl.remove();
      appendMessage("Sorry, I had trouble responding. Please try again.", "bot");
      isLoading = false;
      sendBtn.disabled = false;
      return;
    }

    // ── Stream the response ──────────────────────────────────────────────────
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = "";
    let botBubble = null;        // created on first text chunk
    let firstChunk = true;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });

      // Parse SSE lines — each looks like: "data: {...}"
      for (const line of chunk.split("\n")) {
        if (!line.startsWith("data: ")) continue;
        const raw = line.slice(6).trim();
        if (raw === "[DONE]") continue;

        let json;
        try { json = JSON.parse(raw); } catch (_) { continue; }

        // Extract text delta
        if (json.type === "content_block_delta" && json.delta?.type === "text_delta") {
          const delta = json.delta.text;
          if (!delta) continue;

          // Remove typing indicator on first real text
          if (firstChunk) {
            typingEl.remove();
            isNewSession = false;
            firstChunk = false;
            botBubble = createBotBubble();
          }

          fullText += delta;

          // Re-render the full accumulated text so formatting stays correct
          botBubble.innerHTML = formatBotMessage(fullText);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }
      }
    }

    // Finalise — add to history, add permissions notice if needed
    if (botBubble) {
      // Permissions notice is added by formatBotMessage — nothing extra needed
      conversationHistory.push({ role: "assistant", content: fullText });
    } else {
      // Stream ended with no text (shouldn't happen, but handle gracefully)
      typingEl.remove();
      appendMessage("Sorry, I had trouble responding. Please try again.", "bot");
    }

  } catch (err) {
    typingEl.remove();
    appendMessage("I'm having trouble connecting. Please check your connection and try again.", "bot");
    console.error("Stream error:", err);
  }

  isLoading = false;
  sendBtn.disabled = false;
  userInput.focus();
}

// Creates an empty bot bubble and appends it to the chat
function createBotBubble() {
  const div = document.createElement("div");
  div.className = "message bot-message";
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

function appendMessage(text, type) {
  const div = document.createElement("div");
  div.className = `message ${type === "bot" ? "bot-message" : "user-message"}`;
  if (type === "bot") {
    div.innerHTML = formatBotMessage(text);
  } else {
    div.textContent = text;
  }
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

function formatBotMessage(text) {
  // Step 1: Convert **bold** to <strong>
  let html = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Step 2: Convert markdown links [text](url) → clickable anchor
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Step 3: Convert bare URLs not already in an <a> tag
  html = html.replace(/(?<!href="|">)(https?:\/\/[^\s<>"]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');

  // Step 4: Style the 📄 Source line (legacy format, if present)
  html = html.replace(/(📄 Source:.*)/g, '<div class="source-line">$1</div>');

  // Step 5: (Reserved) hasSourceLink flag is available here if you want to
  // conditionally show a permissions/disclaimer notice for messages that
  // contain a linked document. Currently unused — add logic if needed:
  const hasSourceLink = /📄/.test(html) || /<a\s+href=/.test(html);

  // Step 6: Convert line breaks
  html = html.replace(/\n/g, "<br/>");

  return html;
}

function showTyping() {
  const div = document.createElement("div");
  div.className = "message bot-message typing-indicator";
  div.innerHTML = "<span></span><span></span><span></span>";
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

// ============================================================
// START
// ============================================================
init();
