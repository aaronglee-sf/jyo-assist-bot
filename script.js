// ============================================================
// JYO ASSIST BOT — script.js
// API key stored in localStorage — never hardcoded in source
// ============================================================

// ============================================================
// KNOWLEDGE BASE
// ============================================================
const knowledgeBase = {
  shared: {
    codeOfConduct: {
      name: "JYO Code of Conduct",
      url: "https://drive.google.com/file/d/1UE855nXh2m4won2nLcnC6m_9YLif240P/view?usp=sharing",
      content: `JYO Basketball Code of Conduct (Last Updated September 18, 2025)

OVERVIEW: JYO offers recreational sports programs in a fun and safe environment, promoting respect, dignity, sportsmanship, ethical conduct, and fair play.

RULES FOR ALL MEMBERS:
- Conduct yourself in a sportsmanlike manner at all JYO events. Warnings issued first; excessive abuse results in loss of membership.
- No abusive or profane language; no trash talking at any JYO function.
- Respect the integrity and judgment of officials.
- Show courtesy and good sportsmanship to opposing teams and their fans.
- Direct feedback/criticism to the team manager or JYO Board of Directors.

RULES FOR PLAYERS:
- Show courtesy to officials, coaches, managers, and other players. Do not undermine their authority.
- Do not bring up disagreements with officials directly — direct concerns to coaches.
- Attend all practices and games. If unable to attend, notify coach at least 24 hours in advance via TeamSnap.
- Missing practices (other than illness or excused family matters) may result in reduced playing time.
- Excessive missed practices and games: coach can ask player to leave team for remainder of season.
- Support teammates with a positive attitude.

PLAYING TIME RULES (IMPORTANT):
- Coaches must enforce equal playing time among active players in both instructional and league divisions, including jamborees and tournaments.
- Playing time CAN be reduced for: missing practice, bad attitude, poor effort, or poor sportsmanship.
- Playing time CAN be increased for: good effort, attendance, attitude, and sportsmanship.
- In league divisions only: in the 4th quarter of close games, coaches have discretion to adjust playing time.
- NYBA minimum playing time rules: minimum 1 quarter for Boys 6th/7th/8th grade and Girls 7th/8th grade; minimum 2 quarters for all other league divisions.
- If playing time is uneven in one game, coaches should make up the imbalance in future games.

PARENTS' RESPONSIBILITIES:
- Ensure child attends all practices and games on time. Arrange transportation if needed.
- Instructional teams: at least one parent must stay for the full duration of practice and jamboree/tournament games — no drop-off and pick-up later.
- Volunteer time to support the team, coaches, and managers.
- Provide feedback directly to coaching staff and team manager in a timely manner — do not hold concerns until later.
- Update TeamSnap availability at least one week in advance. Include a reason in notes for limited or no availability.
- Promptly provide waivers and tournament fee payments when requested by the manager.
- Never aggressively confront players, coaches, managers, other parents, or officials.
- If problems arise: notify the coach first. If uncomfortable, contact a JYO Board of Directors or Athletic Commission member.

COACHES' RESPONSIBILITIES:
- Teach players in a safe and fun environment. Set a good example. No favoritism.
- Establish and communicate ground rules to the team.
- Equal playing time must be actively enforced (see Playing Time Rules above).
- Attend all practices and games, or make accommodations so they are not canceled.
- Notify team manager of any changes in team activity in a timely manner.
- Notify JYO Board or Athletic Commission of any problems with a player, parent, coach, or team.
- Never aggressively confront players, coaches, managers, parents, or officials.`
    },
    managerHandbook: {
      name: "Manager Handbook",
      url: "https://docs.google.com/document/d/1sish6XTWJNNUP0VZeEHsQtl5sLhQskEnb9Q3sDQi1iE/edit?usp=sharing",
      content: `JYO Manager's Handbook (Revised August 2025)

OVERVIEW: Team Managers handle logistical tasks off the court so coaches can focus on basketball. You are a conduit between the JYO Board and your team's parents.

TEAM MANAGER SUPPORT: Contact Ginger Ng (TMSL) at gin6er@hotmail.com or via Slack for advice. Use #2025-emergencies Slack channel for gym issues, refs not showing up, etc.

TEAMSNAP RESPONSIBILITIES:
- Update your team's practice and game schedule
- Make sure all parents download the TeamSnap App and can see the team
- Send a test message to confirm parents are receiving messages
- Encourage parents to update availability at least one week in advance

BOARD MEETINGS: All team managers are JYO Board members and expected to attend monthly board meetings (September–March) held online via Zoom.

UNIFORMS:
- Returning players reuse uniforms if they still fit
- New uniform orders: Jersey $45, Shorts $20
- Ordering closed September 19, 2025
- Do not share the uniform file with parents — managers only
- Track all players' jersey numbers
- For used uniforms: JYO Marketplace Google Sheet available for families

INSTRUCTIONAL TEAMS (no league games):
- Divisions: Girls 1st/2nd/3rd Grade, Boys E Jr. 1st/2nd Grade, Boys E 3rd Grade
- Practice once a week + Jamborees
- At least one parent must stay for full duration of all practices and games

LEAGUE TEAMS (8 NYBA league games, December–February):
- Divisions: Girls G4 (4th), G3 (5th/6th), G2 (7th/8th); Boys DA (4th/5th), DN (6th), CA (7th), CN (8th/9th)
- Practice once a week + league games

JYO JAMBOREE: January 24–25, 2026. All JYO instructional teams expected to participate. All parents on instructional teams expected to volunteer.

TOURNAMENTS & JAMBOREES — KEY EVENTS:
- CYS San Jose (November): G2, CA, CN and DA, DN, G3
- Tri-City Santa Clara (November): G3, G2, DA, DN, CA, CN
- SF Associates (February): Boys DN, DA, E, E Jr, Girls 2nd–3rd, G4, G3
- SF Enchantees (February): Girls grades 4–6
- SF YAO E-Jam (February): K–3rd grade
- Tri-City Instructional (February): Instructional–G4
- Sacramento Betsuin (March): Season-ending tournament

TOURNAMENT LOGISTICS:
- Consult coach at season start on which tournaments to attend
- Get parent commitments before registration deadline
- Registration fees split among players' families
- Manager fronts fee then collects from families — committed families are obligated to pay
- You need: parent/guardian waivers, roster with birthdates, grade, and height
- Confirm entry was received; confirm acceptance/rejection after deadline
- If canceling practice for a tournament, notify JYO Board at least one week in advance

COLLECTING MONEY & SIGNATURES: Don't rely only on emails — collect at practices and games. Bring checklists. You can collect a set amount upfront per family and deduct for each event.

LEAGUE GAME TO-DOS (League Teams Only):
- Arrange scorekeeper (scorebooks provided)
- Pay referee fees (each team pays for ONE referee — $40 cash in envelope labeled with team name and game time, left at scorer's table)
- Provide other team your player roster and jersey numbers (bring 8 copies)
- Report final scores to NYBA that evening
- For HOME games: arrange clock/scoreboard operator; confirm other team has their referee payment before game starts

REFEREE FEES: Treasurer pays manager a lump sum at start of season for all referee fees. Contact treasurer@sanmateojyo.org if not received before first game. If one referee shows up, they get 1.5x normal fee.

GYM SETUP (Home Games):
- Gym opens at 9:00 AM. First game starts at 9:30 AM
- First team sets up: chairs for both teams, bleachers pulled out, score table and scoreboard
- Last team cleans up: pick up water bottles and garbage

SCOREKEEPING: Recruit parent volunteer(s) for each game. Track fouls and points per player. Exchange rosters with opposing team before game. Report final score to NYBA that same evening.

PARENT QUESTIONS & DISPUTES:
- Parents bring issues to manager first → manager discusses with coach
- If unresolved: contact commissioner at commission@sanmateojyo.org
- If still unresolved: contact board at board@sanmateojyo.org
- Parents should NOT go directly to coaches with concerns

TEAM PHOTOS: Designate a team photographer. JYO publishes a yearbook — submit group and individual photos. Best times: after games, between tournament games, at scrimmages.

VOLUNTEER TRACKING: Fill out columns F, G, H, I in the JYO Volunteer Hours Tracker for your team's families. Do not share this sheet with parents.`
    },
    gameDayGuide: {
      name: "NYBA Game Day Guide",
      url: "https://docs.google.com/document/d/11b4gSPZExmVcoQr78kdi7JfqhSvQTmK1Q8-idn-1DEE/edit?usp=sharing",
      content: `JYO Game Day Checklist (2025–2026)

GYM SETUP:
- Gym opens at 9:00 AM. First game starts at 9:30 AM
- First team sets up: chairs for both teams, bleachers pulled out, score table and scoreboard
- Last team cleans up: pick up all water bottles and garbage

REFEREE PAYMENT:
- Put $40 cash in an envelope
- Label: "JYO", Team Name (e.g. 3rd Grade Boys Red), and Game Time
- Place on Scorer's table and inform the refs

GAME DAY ROLES TO ASSIGN:
- Clock Keeper (home games): runs the game clock. New clock keepers should arrive 30 min early to shadow.
- Score Keeper: maintains scoresheet and submits final scores to NYBA League Scores 2025-2026 by Monday after game
- Spotter: assists Clock Keeper and Score Keeper — identifies player numbers for points/fouls, clock stoppages, timeouts

UNIFORMS: Home games = white uniforms. Away games = black uniforms. Undershirts must match the uniform color.

ROSTERS: Scorekeepers exchange rosters (name and number of each active player) with opposing team before game.

GUEST PLAYERS (when short on players):
- A team cannot have more than 6 active players total (e.g. if 4 available, max 2 guest players)
- Guest players must come from within the org, not outside
- Guest player cannot be an impact player; can come from a lower age division
- Notify Aaron Lee and Dave Lin on Slack as early as possible if adding guest players
- If fewer than 4 players on either side: coordinate with opposing coach for an organized scrimmage (not an official game)

GAME DAY CONTACTS (use Slack first):
- #2025-emergencies Slack channel for any issues
- Gym Coordinator: Lynn Kiwata Tom
- Athletic Director: Dave Lin
- Girls' League Commissioner: John Dao
- Boys' League Commissioner: Frank Hsu
- On-site gym issues: Rodrigo Del Toro (650-280-8130)
- Referees not showing up: Greg Ong (650-296-4837)

NYBA GAME RULES:
- Quarter length: 7 min (D, C, G2, G3, G4 divisions); 8 min (B, G1 divisions)
- Timeouts: 3 full + 2 thirty-second per game
- Overtime: 3 minutes; if tied, team scoring first point wins; 2nd overtime tie = game tie
- DA, G4, G3 divisions: NO overtime — all games end in a tie
- Minimum playing time: 1 quarter for G1, G2, B, C, D National; 2 quarters for G4, G3, D American
- Game can start with 4 players; 5-minute grace period from scheduled start time
- No pressing in backcourt for G3, G4, D American divisions
- Mercy rule: if a team leads by 25+ points, no full-court pressure allowed; in 4th quarter with 25+ lead, clock runs continuously (stops only for timeouts, injuries, technicals)
- Basketball size: 28.5" for all Girls and Boys D American divisions
- Score reporting: both teams must report scores to NYBA weekly

SCOREBOARD INSTRUCTIONS (Hillsdale High):
- Set Clock: Press CLOCK SET → enter 07 or 08 (quarter) or 05 (halftime) or 03 (overtime) → press ENTER
- Running Clock: TIME IN to start, TIME OUT to stop
- Scoring: Blue = Home (+1 free throw, +2 basket, +3 three-pointer); Yellow = Visitor; use -1 to correct errors
- Horn: Auto horn should always be ON. Press TIME OUT to turn off. Press Horn for substitutions.
- Periods: Press PERIOD → enter quarter number → press ENTER
- Team Fouls: Blue Home Fouls +1 for home; Yellow Visitor Fouls +1 for visitors. Reset at halftime.
- Between quarters: 1 minute — use phone stopwatch, press Horn when done
- Timeouts: Full = 60 sec (horn at 40s warning, 60s end); Short = 30 sec (horn at 20s warning, 30s end)

SCOREBOOK INSTRUCTIONS:
- Record player names and numbers for both teams
- Record 1 pt (free throw), 2 pts (basket), 3 pts (three-pointer) per player
- Track player fouls — warn coaches when players are in foul trouble (2 fouls in Q1, or 3–4 in Q2–Q4)
- Track team fouls and timeouts
- Summarize score at end of each quarter; verify with scoreboard
- Report final score to NYBA that evening`
    },
    newCoachesPrimer: {
      name: "JYO New Coaches Primer",
      url: "https://drive.google.com/file/d/1iuRMlnJNyHmn9p7AQayvYr4-eTaovI0S/view?usp=sharing",
      content: `JYO New Coaches Primer (Updated August 2025)

HIGH LEVEL GOALS:
- Coaching should reflect JYO values — recreational, not strictly competitive
- Help kids fall in love with the game
- All participants must follow the JYO Code of Conduct

ROLES:
- Head Coach: instructs players, sets culture for team and parents
- Manager and Assistant Coaches: support the Head Coach

SETTING EXPECTATIONS EARLY (with players):
- Introduce yourself and your background
- Expect players to: pay attention, try their best, ask relevant questions, be respectful, show good sportsmanship
- Water breaks are done as a team, not whenever a player wants
- Explain disciplinary actions upfront

SETTING EXPECTATIONS EARLY (with parents):
- Describe your coaching background and vision for the team
- Explain expectations: show up to practice, notify when absent, be present (especially for younger teams — practice is NOT childcare drop-off)
- Explain how player discipline will be handled
- Make clear that coaching staff makes final decisions on messages and approaches
- Send expectations in written form (email) — not all parents may be physically present

PRACTICE PLANNING:
- Come prepared with a Practice Plan for every session
- Consider the team's skill and ability level
- Find drills from: YouTube, your playing experience, other coaches
- Use a spreadsheet to schedule drills with expected clock times
- Maximize time players are active — minimize standing/waiting
- Reduce transition time: reuse drill setups, use drill progressions
- Prioritize high-importance drills earlier in practice
- Always include scrimmages or small-sided games at the end
- Add water breaks (more frequent for younger teams)
- Plan for a little more than you can cover — extra time = longer scrimmage

PRACTICE EXECUTION:
- Keep track of time and your practice plan schedule
- For younger teams: use attention cues (e.g. "1-2-3 eyes on me!")
- Position players to minimize distractions during instruction
- Physically, visually, AND verbally demonstrate every drill
- Don't over-correct — coaches constantly stopping play causes kids to tune out
- Prioritize celebrating effort and correct decisions over results
- Provide truthful and specific feedback; reframe mistakes as learning opportunities
- If a child is disruptive: have them sit on sideline with their parent until ready to rejoin
- Use scrimmages to reinforce skills taught that day — don't expect skills you haven't taught yet

DISCIPLINE:
- Address issues early to prevent escalation
- For younger teams: disruptive child sits with their parent on sideline
- Have the child explain to the parent what they did wrong`
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
        seasonSchedule: { description: "Full season schedule — game dates, times, and locations", url: null, name: "Season Schedule" },
        jerseyTracker: { description: "Uniform jersey number tracker — look up your player's jersey number", url: null, name: "Jersey Number Tracker" },
        eventInfo: { description: "Game and event info including gym locations — available in TeamSnap", url: null, name: "Event & Game Info (TeamSnap)" },
        contactInfo: { description: "JYO org contact info — president, commissioners, and key roles", url: null, name: "JYO Contact Info" },
        specialEvents: { description: "Special events like Warriors Night (PWTPP) — waivers, logistics, late arrival", url: null, name: "Special Event Info" },
        waiverForms: { description: "Waiver forms for special events", url: null, name: "Waiver Forms" },
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
        newCoachesPrimer: "shared.newCoachesPrimer",
        teamContacts: { description: "Team contact information for all coaches", url: null, name: "Team Contact List" },
        nybaRules: { description: "NYBA league game rules", url: null, name: "NYBA League Game Rules" },
        leagueScheduleRosters: { description: "League schedule and rosters", url: null, name: "League Schedule & Rosters" },
        scrimmageWaiver: { description: "Scrimmage waiver forms — required for hosting non-JYO teams at practices", url: null, name: "Scrimmage Waiver Form" },
        teammateOfMonth: { description: "Teammate of the Month nomination process and deadlines", url: null, name: "Teammate of the Month Sheet" },
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
        managerHandbook: "shared.managerHandbook",
        gameDayGuide: "shared.gameDayGuide",
        jamboreeTracker: { description: "Jamboree and tournament tracker — sign-ups and logistics", url: "https://docs.google.com/spreadsheets/d/1HKHfQGDzUdVyLYW8mD60iDEA-JMzETH6eL1XBhQgFms/edit?usp=drive_link", name: "Jamboree & Tournament Tracker" },
        practiceSchedule: { description: "Practice schedule spreadsheet — most-referenced doc, shows all team practice times and gym assignments", url: "https://docs.google.com/spreadsheets/d/1zs4oW1Rl7Os8NPImDUmIRCARbFraOEO5urh8gHzaXAA/edit?usp=sharing", name: "Practice Schedule Spreadsheet" },
        jerseyTracker: { description: "Uniform jersey number tracker", url: null, name: "Jersey Number Tracker" },
        nybaScoreReport: { description: "NYBA score report — how to submit game scores after each game", url: null, name: "NYBA Score Report" },
        teamBuildingFunds: { description: "Team building funds — each team is eligible for $600. Instructions on eligibility, how to request, and deadlines.", url: null, name: "Team Building Funds Instructions" },
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
        seasonLearnings: { description: "Season learnings document — feedback, notes, and improvements across the season", url: "https://docs.google.com/spreadsheets/d/19pGTvU6UINOXZyIRVJwPm4tSqBiZkRqftBkz4j7vrQo/edit?usp=sharing", name: "Season Learnings Doc" },
        meetingMinutes: { description: "JYO board meeting minutes", url: null, name: "Meeting Minutes" },
        contactList: { description: "Full JYO leadership and staff contact list", url: null, name: "Contact List" },
        parentSurvey: { description: "Parent survey — links and coordination", url: null, name: "Parent Survey" },
        coachManagerSurvey: { description: "Coach and manager feedback survey", url: null, name: "Coach/Manager Survey" },
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
function resolveResource(ref) {
  if (typeof ref === "string" && ref.startsWith("shared.")) {
    const key = ref.replace("shared.", "");
    return knowledgeBase.shared[key] || null;
  }
  return ref;
}

function buildKnowledgeBaseText(audience) {
  const audienceData = knowledgeBase.audiences[audience];

  // Define which audiences' resources to include based on current audience
  const audiencesToInclude = {
    parent: ["parent"],
    coach: ["coach", "manager", "parent"],
    manager: ["manager", "coach", "parent"],
    leadership: ["parent", "coach", "manager", "leadership"]
  };

  const lines = ["=== SHARED RESOURCES ==="];

  // Shared resources (all audiences)
  Object.values(knowledgeBase.shared).forEach(r => {
    if (r.content) {
      lines.push(`\n--- ${r.name} ---\n${r.content}\nSource URL: ${r.url}\n`);
    } else {
      lines.push(`- ${r.name}: ${r.description} | URL: ${r.url}`);
    }
  });

  // Include resources for each permitted audience
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
const STORAGE_KEY = "jyo_assist_api_key";

// ============================================================
// DOM REFS
// ============================================================
const setupScreen = document.getElementById("setup-screen");
const selectorScreen = document.getElementById("selector-screen");
const chatScreen = document.getElementById("chat-screen");
const apiKeyInput = document.getElementById("api-key-input");
const saveKeyBtn = document.getElementById("save-key-btn");
const keyError = document.getElementById("key-error");
const changeKeyBtn = document.getElementById("change-key-btn");
const audienceBtns = document.querySelectorAll(".audience-btn");
const backBtn = document.getElementById("back-btn");
const audienceBadge = document.getElementById("audience-badge");
const chatMessages = document.getElementById("chat-messages");
const welcomeMsg = document.getElementById("welcome-msg");
const suggestionsEl = document.getElementById("suggestions");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// ============================================================
// INIT — check for saved key
// ============================================================
function init() {
  showScreen("selector");
}

function showScreen(name) {
  setupScreen.style.display = "none";
  selectorScreen.style.display = "none";
  chatScreen.style.display = "none";
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
apiKeyInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") saveApiKey();
});

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
  showScreen("chat");

  const labels = { parent: "👨‍👩‍👧 Parent", coach: "📋 Coach", manager: "📊 Manager", leadership: "🏆 Leadership" };
  audienceBadge.textContent = labels[audience] || audience;
  welcomeMsg.textContent = audienceData.welcomeMessage;

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

  const typingEl = showTyping();
  isLoading = true;
  sendBtn.disabled = true;

  const apiKey = localStorage.getItem(STORAGE_KEY);

  try {
    const response = await fetch("https://jyo-assist-bot.aaronglee.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    } else if (data.error) {
      if (data.error.type === "authentication_error") {
        appendMessage("Your API key was rejected. Please update it by clicking the key icon above.", "bot");
        // Don't auto-clear — let user decide
      } else {
        appendMessage("Sorry, I had trouble responding. Please try again.", "bot");
      }
    }
  } catch (err) {
    typingEl.remove();
    appendMessage("I'm having trouble connecting. Please check your connection and try again.", "bot");
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
    div.innerHTML = formatBotMessage(text);
  } else {
    div.textContent = text;
  }
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

function formatBotMessage(text) {
  let html = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  html = html.replace(/(📄 Source:.*)/g, '<div class="source-line">$1</div>');
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
