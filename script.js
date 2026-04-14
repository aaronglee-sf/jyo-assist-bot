// ============================================================
// JYO ASSIST BOT — script.js
// ============================================================

const API_KEY = "YOUR_API_KEY_HERE"; // ← paste your Anthropic API key here

// ============================================================
// KNOWLEDGE BASE
// ============================================================
const knowledgeBase = {
  shared: {
    codeOfConduct: {
      description: "JYO Code of Conduct — player playing time expectations and parent behavior guidelines",
      url: "https://drive.google.com/file/d/1UE855nXh2m4won2nLcnC6m_9YLif240P/view?usp=sharing",
      name: "JYO Code of Conduct"
    },
    practiceSchedules: {
      description: "Practice schedules spreadsheet for all teams",
      url: "https://docs.google.com/spreadsheets/d/1zs4oW1Rl7Os8NPImDUmIRCARbFraOEO5urh8gHzaXAA/edit?usp=sharing",
      name: "Practice Schedules"
    },
    website: {
      description: "JYO official website — sanmateojyo.org",
      url: "https://sanmateojyo.org",
      name: "JYO Website"
    },
    merchStore: {
      description: "JYO merchandise and apparel store — ordering, sizing, deadlines, pickup",
      url: "https://store.nakoshi.com/jyo/shop/home",
      name: "JYO Merch Store"
    }
  },

  audiences: {
    parent: {
      welcomeMessage: "Hi! I'm JYO Assist Bot 👋 I'm here to help you get quick answers about events, schedules, registration, and more. What can I help you with?",
      suggestions: ["Where are games played?", "How do I register?", "Code of conduct", "Merch & apparel"],
      resources: {
        seasonSchedule: {
          description: "Full season schedule — game dates, times, and locations",
          url: null,
          name: "Season Schedule"
        },
        jerseyTracker: {
          description: "Uniform jersey number tracker — look up your player's jersey number",
          url: null,
          name: "Jersey Number Tracker"
        },
        eventInfo: {
          description: "Game and event info including gym locations — available in TeamSnap",
          url: null,
          name: "Event & Game Info (TeamSnap)"
        },
        contactInfo: {
          description: "JYO org contact info — president, commissioners, and key roles",
          url: null,
          name: "JYO Contact Info"
        },
        specialEvents: {
          description: "Special events like Warriors Night (PWTPP) — waivers, logistics, late arrival",
          url: null,
          name: "Special Event Info"
        },
        waiverForms: {
          description: "Waiver forms for special events",
          url: null,
          name: "Waiver Forms"
        },
        codeOfConduct: "shared.codeOfConduct",
        practiceSchedules: "shared.practiceSchedules",
        website: "shared.website",
        merch: "shared.merchStore"
      },
      context: `You are helping a JYO PARENT. Parents are families of current or prospective players. 
They commonly ask about: event info (game locations, times), registration and waitlist status, 
code of conduct (player playing time expectations, parent behavior), season schedule, 
jersey numbers, merch/apparel ordering, TeamSnap how-to, refund policy, and special events like Warriors Night.
Keep your tone warm and welcoming — many parents are new to the league.`
    },

    coach: {
      welcomeMessage: "Hey Coach! 👋 I'm JYO Assist Bot. Ask me anything about gym access, equipment, league rules, jamborees, or resources for your team.",
      suggestions: ["Gym access & keys", "Equipment location", "Jamboree sign-ups", "Coach apparel"],
      resources: {
        newCoachesPrimer: {
          description: "JYO New Coaches Primer — essential info for coaches, gym access, resources",
          url: "https://drive.google.com/file/d/1iuRMlnJNyHmn9p7AQayvYr4-eTaovI0S/view?usp=sharing",
          name: "JYO New Coaches Primer"
        },
        teamContacts: {
          description: "Team contact information for all coaches",
          url: null,
          name: "Team Contact List"
        },
        nybaRules: {
          description: "NYBA league game rules",
          url: null,
          name: "NYBA League Game Rules"
        },
        leagueScheduleRosters: {
          description: "League schedule and rosters",
          url: null,
          name: "League Schedule & Rosters"
        },
        scrimmageWaiver: {
          description: "Scrimmage waiver forms — required for hosting non-JYO teams at practices",
          url: null,
          name: "Scrimmage Waiver Form"
        },
        teammateOfMonth: {
          description: "Teammate of the Month nomination process and deadlines",
          url: null,
          name: "Teammate of the Month Sheet"
        },
        codeOfConduct: "shared.codeOfConduct",
        practiceSchedules: "shared.practiceSchedules",
        website: "shared.website",
        merch: "shared.merchStore"
      },
      context: `You are helping a JYO COACH. Coaches are volunteers who lead teams.
They commonly ask about: gym access and which schools require keys, equipment location (basketballs, scoreboard, rim extenders), 
NYBA game rules, league schedule and rosters, scrimmage waiver forms, jamboree sign-ups (CYS, Taisho, Associates, etc.), 
Teammate of the Month nominations, and coach apparel.
Keep your tone collegial and practical — coaches are busy volunteers.`
    },

    manager: {
      welcomeMessage: "Hi Manager! 📊 I'm JYO Assist Bot. I can help with practice schedules, game day setup, scoring, team funds, and more.",
      suggestions: ["Practice schedule", "NYBA score report", "Team building funds", "Game day setup"],
      resources: {
        managerHandbook: {
          description: "Manager Handbook — comprehensive guide for team managers",
          url: "https://docs.google.com/document/d/1sish6XTWJNNUP0VZeEHsQtl5sLhQskEnb9Q3sDQi1iE/edit?usp=sharing",
          name: "Manager Handbook"
        },
        gameDayGuide: {
          description: "NYBA Game Day Guide — game day setup, responsibilities, and procedures",
          url: "https://docs.google.com/document/d/11b4gSPZExmVcoQr78kdi7JfqhSvQTmK1Q8-idn-1DEE/edit?usp=sharing",
          name: "NYBA Game Day Guide"
        },
        jamboreeTracker: {
          description: "Jamboree and tournament tracker — sign-ups and logistics",
          url: "https://docs.google.com/spreadsheets/d/1HKHfQGDzUdVyLYW8mD60iDEA-JMzETH6eL1XBhQgFms/edit?usp=drive_link",
          name: "Jamboree & Tournament Tracker"
        },
        practiceSchedule: {
          description: "Practice schedule spreadsheet — most-referenced doc, shows all team practice times and gym assignments",
          url: "https://docs.google.com/spreadsheets/d/1zs4oW1Rl7Os8NPImDUmIRCARbFraOEO5urh8gHzaXAA/edit?usp=sharing",
          name: "Practice Schedule Spreadsheet"
        },
        jerseyTracker: {
          description: "Uniform jersey number tracker",
          url: null,
          name: "Jersey Number Tracker"
        },
        nybaScoreReport: {
          description: "NYBA score report — how to submit game scores after each game",
          url: null,
          name: "NYBA Score Report"
        },
        teamBuildingFunds: {
          description: "Team building funds — each team is eligible for $600. Instructions on eligibility, how to request, and deadlines.",
          url: null,
          name: "Team Building Funds Instructions"
        },
        website: "shared.website"
      },
      context: `You are helping a JYO MANAGER. Managers handle team logistics, score reporting, and game day operations.
They commonly ask about: practice schedules (most-referenced doc), game day setup, available gym time (releasing or claiming slots), 
gym keys and access, NYBA score reporting, jamboree and tournament tracking, jersey number tracking, 
team building funds ($600 per team — eligibility, how to request, deadline), and coach gift guidance.
Keep your tone efficient and direct — managers are organized, detail-oriented volunteers.`
    },

    leadership: {
      welcomeMessage: "Welcome! 🏆 I'm JYO Assist Bot. I can help with meeting minutes, conduct issues, survey coordination, volunteer structure, and league resources.",
      suggestions: ["NYBA conduct issues", "Survey links", "Volunteer structure", "Season learnings"],
      resources: {
        seasonLearnings: {
          description: "Season learnings document — feedback, notes, and improvements across the season",
          url: "https://docs.google.com/spreadsheets/d/19pGTvU6UINOXZyIRVJwPm4tSqBiZkRqftBkz4j7vrQo/edit?usp=sharing",
          name: "Season Learnings Doc"
        },
        meetingMinutes: {
          description: "JYO board meeting minutes",
          url: null,
          name: "Meeting Minutes"
        },
        contactList: {
          description: "Full JYO leadership and staff contact list",
          url: null,
          name: "Contact List"
        },
        parentSurvey: {
          description: "Parent survey — links and coordination",
          url: null,
          name: "Parent Survey"
        },
        coachManagerSurvey: {
          description: "Coach and manager feedback survey",
          url: null,
          name: "Coach/Manager Survey"
        },
        codeOfConduct: "shared.codeOfConduct",
        practiceSchedules: "shared.practiceSchedules",
        website: "shared.website"
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

function resolveResource(ref, audience) {
  if (typeof ref === "string" && ref.startsWith("shared.")) {
    const key = ref.replace("shared.", "");
    return knowledgeBase.shared[key] || null;
  }
  return ref;
}

function buildKnowledgeBaseText(audience) {
  const audienceData = knowledgeBase.audiences[audience];
  const resources = audienceData.resources;
  const lines = ["=== SHARED RESOURCES ==="];

  Object.values(knowledgeBase.shared).forEach(r => {
    lines.push(`- ${r.name}: ${r.description} | URL: ${r.url}`);
  });

  lines.push(`\n=== ${audience.toUpperCase()} RESOURCES ===`);
  Object.entries(resources).forEach(([key, val]) => {
    const r = resolveResource(val, audience);
    if (r && typeof r === "object") {
      const urlText = r.url ? r.url : "(URL pending — tell user to check with JYO leadership)";
      lines.push(`- ${r.name}: ${r.description} | URL: ${urlText}`);
    }
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
2. If a resource has a URL, always include a clickable source link at the end of your response formatted as:
   📄 Source: [Document Name](URL)
3. If your answer draws from multiple resources, list all relevant source links.
4. If a resource URL is listed as "(URL pending...)", tell the user the resource exists but the direct link isn't available yet, and suggest they contact JYO leadership or check sanmateojyo.org.
5. If a question is outside the scope of the knowledge base, respond with:
   "I don't have that info — please contact JYO directly at sanmateojyo.org or reach out to your commissioner."
6. Never make up information. Only answer from what's in the knowledge base.
7. Keep responses friendly and under 150 words unless detail is truly needed.
8. Do not mention that you are powered by Claude or reference any AI company.`;
}

// ============================================================
// STATE
// ============================================================
let selectedAudience = null;
let conversationHistory = [];
let isLoading = false;

// ============================================================
// DOM REFS
// ============================================================
const selectorScreen = document.getElementById("selector-screen");
const chatScreen = document.getElementById("chat-screen");
const audienceBtns = document.querySelectorAll(".audience-btn");
const backBtn = document.getElementById("back-btn");
const audienceBadge = document.getElementById("audience-badge");
const chatMessages = document.getElementById("chat-messages");
const welcomeMsg = document.getElementById("welcome-msg");
const suggestionsEl = document.getElementById("suggestions");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

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
  selectorScreen.classList.add("active");
  chatScreen.classList.remove("active");
  chatScreen.style.display = "none";
  selectorScreen.style.display = "flex";
  conversationHistory = [];
  // Clear chat messages except welcome
  while (chatMessages.children.length > 1) {
    chatMessages.removeChild(chatMessages.lastChild);
  }
});

function startChat(audience) {
  const audienceData = knowledgeBase.audiences[audience];

  // Show chat screen
  selectorScreen.classList.remove("active");
  selectorScreen.style.display = "none";
  chatScreen.classList.add("active");
  chatScreen.style.display = "flex";

  // Set badge
  const labels = { parent: "👨‍👩‍👧 Parent", coach: "📋 Coach", manager: "📊 Manager", leadership: "🏆 Leadership" };
  audienceBadge.textContent = labels[audience] || audience;

  // Set welcome message
  welcomeMsg.textContent = audienceData.welcomeMessage;

  // Set suggestions
  suggestionsEl.innerHTML = "";
  audienceData.suggestions.forEach(s => {
    const chip = document.createElement("button");
    chip.className = "suggestion-chip";
    chip.textContent = s;
    chip.addEventListener("click", () => {
      userInput.value = s;
      sendMessage();
    });
    suggestionsEl.appendChild(chip);
  });

  // Reset history
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

  // Clear suggestions after first message
  suggestionsEl.innerHTML = "";

  // Add user message to UI
  appendMessage(text, "user");
  userInput.value = "";
  userInput.style.height = "auto";

  // Add to history
  conversationHistory.push({ role: "user", content: text });

  // Show typing indicator
  const typingEl = showTyping();

  isLoading = true;
  sendBtn.disabled = true;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: buildSystemPrompt(selectedAudience),
        messages: conversationHistory
      })
    });

    const data = await response.json();
    typingEl.remove();

    if (data.content && data.content[0]) {
      const botText = data.content[0].text;
      conversationHistory.push({ role: "assistant", content: botText });
      appendMessage(botText, "bot");
    } else {
      appendMessage("Sorry, I had trouble responding. Please try again.", "bot");
    }
  } catch (err) {
    typingEl.remove();
    appendMessage("I'm having trouble connecting right now. Please check your connection and try again.", "bot");
    console.error("API error:", err);
  }

  isLoading = false;
  sendBtn.disabled = false;
  userInput.focus();
}

function appendMessage(text, type) {
  const div = document.createElement("div");
  div.className = `message ${type === "bot" ? "bot-message" : "user-message"}`;

  if (type === "bot") {
    // Render markdown-style links and line breaks
    div.innerHTML = formatBotMessage(text);
  } else {
    div.textContent = text;
  }

  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

function formatBotMessage(text) {
  // Convert markdown links [text](url) to <a> tags
  let html = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // Detect and style 📄 Source lines
  html = html.replace(/(📄 Source:.*)/g, '<div class="source-line">$1</div>');

  // Convert line breaks
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
