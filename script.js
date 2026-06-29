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
      url: "https://docs.google.com/document/d/1uQwaB6CoeP0ndrzl-bPyLmeT9TcSlpsQtF2I1_ljVsI/edit?usp=sharing",
      content: `JYO Basketball Code of Conduct (Last Updated June 2026)

San Mateo Japanese Youth Organization                                                                                                                                                                                                                                                                                                                            
Basketball Code of Conduct
Last Updated June 2026




The San Mateo Japanese Youth Organization (JYO) offers recreational sports programs that give young athletes the opportunity to play sports in a fun and safe environment.   JYO promotes the ideals of respect, dignity, sportsmanship, ethical conduct, and fair play, and fosters a positive environment where athletes can achieve athletic and personal growth. 


JYO members (including participants, their parents, coaches, and managers) are ambassadors of the organization and are expected to uphold the ideals of JYO at practices, games, tournaments, and any organizational event.  As such, they are to adhere to the rules below:


Rules of Conduct for All Members
1) Members are to conduct themselves in a sportsman-like manner, emphasizing the proper ideals of respect, dignity, sportsmanship, ethical conduct, and fair play, both on and off the field of any JYO event.  Members will be given warnings initially if these policies are not followed, after a warning is not heeded, an official written notification will be made by the JYO board.  Excessive abuse will result in loss of membership to JYO.


2) Members will not direct abusive or profane language at anyone. Members are to refrain from “trash” talking while at any JYO functions (e.g., practices, games, etc). 


3) Members are expected to respect the integrity and judgment of officials.  


4) Members should show courtesy and good sportsmanship to opposing teams and their fans.


5) Members should have a positive and constructive attitude toward JYO programs.  Members should always act and speak in the best interest of JYO. Members should direct any feedback or criticism to the team manager or a member of the San Mateo JYO Board of Directors and/or Athletic Commission.




Rules of Conduct for Players
1) Players will show courtesy to the officials, coaches, managers, and other players, and will not direct abusive or profane language to them or undermine their authority.  Players are expected to respect and listen to their coaches, managers, and parents supporting JYO at all times.


1.1) It is the responsibility of all JYO members to learn and abide by the rules of conduct governing any event in which their team participates in order to properly represent JYO at the event.


1.2) Players are not allowed to bring up disagreements with officials, and should direct concerns about calls, opposite team conduct, or any other game issues with the coaches, the coaches will decide whether to hold a meeting with the officials to discuss.


2) Players are expected to attend - practice sessions and games. Players unable to attend a practice or game must notify their coach as soon as possible. Parents are required to RSVP for all practices and games via JYO’s team management tool — this helps coaches plan effectively. If no RSVP is submitted, the player will be marked absent for that activity. For limited availability or absence of availability, a reason should be listed in the notes.


2.5(a) Basketball is a team sport, and a JYO player’s participation at practices and games directly affects their teammates' development and the quality of the team experience. JYO players are expected to attend 75% or more of practices beginning in November, following skill development clinics in September and October for select teams. Failure to meet the attendance requirement may result in the player not being accepted to JYO the following season. Families in volunteer roles credited at 25 or more hours are exempt from this requirement.


2.5(b) If players miss practices other than illness or excused family matters approved by the coaching staff, coaches may decide for the next game to start those players who have attended more practice times and or limit or reduce the playing time for players who have missed practices in upcoming games and tournaments. 


3) Each player is expected to support his/her team. They are to be helpful and encouraging to their teammates.  Players should have a positive attitude, lead by example and hold themselves and their teammates accountable to the JYO ideals.


Parents’ Responsibilities
1) Parents will ensure that their child attends all practices as well as games on time.  If a parent cannot provide timely transportation for the player(s) – both dropping them off and picking them up on time – the parent is responsible for making other transportation arrangements for the player(s).


2) Kinder and Instructional Teams:  Unless otherwise specified or agreed by the coaches, at least one parent of a kinder/instructional player will be at their practice and jamboree/tournament games for the duration of the practice/game.  There is no dropping off and picking up later for kinder and instructional parents.


3) Parents are expected to volunteer their time to support the JYO organization, their child's team, coaches, and managers at a minimum of 6 hours per family per season. Failure to meet the minimum may result in the player being placed in poor standing with JYO. 


4) Parents are expected to promptly provide communication/information and/or funds the manager needs to properly coordinate team events and activities. This includes (but is not limited to) providing player info, a waiver signature, and paying jamboree/tournament fees or any other team fees.


5) Parents are expected to provide issues directly to the coaching staff (as well as the Team Manager) in a timely manner to clarify matters. Parents are expected to provide constructive criticisms to coaches, rather than hold their concerns among parents or players until a later time.  Issues that are not voiced, can not be considered as issues and can not be addressed in a timely and reasonable manner. Team Managers and Coaches, it is your responsibility to notify the Commission of any issues (per item 6 below).


6) If there are any problems with the player, coach, or team, parents should notify the coach first, but if the parent does not feel comfortable, they shall bring the issue to a member of the JYO Board of Directors and/or Athletic Commission in a timely manner.


7) Parents should never aggressively confront players, coaches, managers, other parents or officials. 


Coaches’ Responsibilities
1) Coaches are responsible for teaching our players how to play sports in a safe & fun environment.


2) Coaches will set a good example for the players by conducting activities in a manner that upholds the JYO ideals.  Coaches should not conduct favoritism among players, parents, or family in practices and games for any reason. Coaches should work cohesively with other coaches. Coaches should exemplify good sportsmanship with opposing teams and referees on the court and off.


3) Coaches will establish ground rules for their team and ensure that those rules are understood by each team member.


3.1) In both instructional and league divisions (including in any jamborees or tournaments entered into for the applicable JYO team), coaches should actively try to enforce equal playing time among active players in each game, except (i) playing time can be reduced for not attending practice (as set forth above) or bad attitude, behavior, effort, or sportsmanship, (ii) playing time can conversely be increased for good effort, attendance, attitude and sportsmanship, and (iii) solely for the league divisions, in the fourth quarter of close games, coaches can have leeway to adjust playing time in their discretion and otherwise in accordance with these rules of conduct. If playing time ends up uneven during one game among the participating players (except for a reduction under clause (i) above), coaches should try their best to make-up the imbalance in future games in the spirit of a recreational sports league.  


Note that in any event, playing time in league games must follow the NYBA rules (a minimum of one quarter of playing time in the 6, 7 and 8 boys, and 7th and 8th girls, and a minimum of 2 quarters for all other league divisions).


4) Coaches will notify the team manager of any changes in team activity in a timely manner.


5) Coaches should attend all practices and games or make the appropriate accommodations to ensure practices and games are not canceled.


6) Coaches will notify a member of the team manager JYO Board of Directors and/or Athletic Commission if there are any problems with a player, parent, coach or team.


7) Coaches should never aggressively confront players, other coaches, managers, parents or officials.`
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
  JYOCoachesPrimer: {
      name: "JYO Coaches Primer",
      url: "https://docs.google.com/document/d/1o1xQVRm_ywSSZoaQuZ95Rl5CW9PSmwM2ExOzE9V5J4A/edit",
      content: `JYO Coaches Primer (Updated May 2026)

HIGH LEVEL GOALS:

- Coaching should reflect the values of JYO

- Youth basketball is primarily for instructional purposes — not strictly competitive

- Help kids fall in love with the game

ROLES AND RESPONSIBILITIES:

- Head Coach: instructs players, sets culture for team and parents, makes final decisions in the best interest of the team

- Manager and Assistant Coaches: support the Head Coach

SETTING EXPECTATIONS EARLY (with players):

- Introduce yourself and your background

- Expect players to: pay attention, try their best, ask relevant questions, be respectful, show good sportsmanship

- Water breaks are done as a team, not whenever a player wants

- Explain disciplinary actions upfront

- All participants must follow the JYO Code of Conduct

SETTING EXPECTATIONS EARLY (with parents):

- Describe your coaching background and vision for the team

- Explain expectations: show up to practice, notify when absent, be present at practice

- Parents should RSVP for practice ~3 days in advance — this helps with planning and accountability

- It is MANDATORY that a parent attends practice if: (1) the player is on an Instructional Level (3rd grade or younger) team, or (2) the coach deems it necessary due to previous behavioral issues

- Practice is NOT childcare drop-off for Instructional Level teams

- Talk about how player discipline will be handled

- Coaching staff makes final decisions on messages and approaches to prevent confusion

- Send expectations in written form (email) — not all parents may be present or attentive at the meeting

PRACTICE PLANNING:

- Come prepared with a Practice Plan for every session

- Consider the team's talent, skill, and ability to learn

- Find drills from: YouTube, your playing experience, other coaches, or Google Drive: JYO Share > Basketball > Coaching Material

- Review the Points of Emphasis for each drill in your practice plan

- Use a spreadsheet to schedule drills with expected clock times (also useful as a historical reference)

- Estimate time for instruction, drills, and transitions between drills

- Maximize time players are active — minimize standing/waiting

- Reduce transition time: reuse drill setups, use drill progressions, run drills that involve both offense and defense

- Prioritize high-importance drills earlier in practice in case you need to cut some

- Plan for a little more than you can cover — extra time = longer scrimmage

- Always include scrimmages or small-sided games at the end

- Add water breaks (more frequent for Instructional Teams)

- Consider utilizing parents during practice

- Try to make practice fun, especially for Instructional Teams — kids who enjoy practice are more likely to attend and practice on their own

PRACTICE EXECUTION:

- Keep track of time and where you are in your Practice Plan schedule

- For Instructional Teams: use attention cues familiar from school (e.g. "1-2-3 eyes on me!" → kids respond "1-2 eyes on you!")

- Position players to minimize distractions during instruction

- Physically, visually, AND verbally demonstrate every drill

- If players don't get it after the allotted time, move on — you may need to rethink your teaching approach or consider if the lesson is beyond their current ability

- Don't over-correct — coaches constantly stopping play causes kids to tune out; prioritize which mistakes to address

- Use scrimmages to reinforce skills taught that day — don't expect players to perform skills you haven't taught yet; scrimmages also validate drill effectiveness

- Prioritize celebrating effort and correct decisions over results

- Provide truthful and specific feedback; reframe mistakes as learning opportunities

- Keep encouraging players — let them know it's OK to fail when trying a new skill

- Keep practice fun, especially for younger teams

HANDLING PLAYERS WITH BEHAVIORAL PROBLEMS:

- Address issues early to prevent escalation ("nip it in the bud")

- For Instructional Teams: if a child is disruptive, have them sit on the sideline with their parent until ready to rejoin; have the child explain to the parent what they did wrong

- Make it mandatory that the parent attends practice for players with consistent behavioral issues

- For repeated or excessive issues, the coach may ask the player to leave practice — follow up with a parent phone call to explain the situation, hear the player's side, set expectations, and agree on a solution

- For consistent issues, work with parents to understand the problem and explore solutions — but note there are limits to accommodation given the rest of the team

- Escalate to Commissioner and, if necessary, Athletic Director

ADDITIONAL COACHING RESOURCES:

- Instructional Level: Google Drive: JYO Share > Basketball > Coaching Material > Instructional Level (includes Instructional Coaching Manual, Instructional Roadmap, and Instr Level BBall Notes)

- All Coaching Levels: Google Drive: JYO Share > Basketball > Coaching Material (drills, plays, practice plan template, game substitution template, clinic materials, and more)

- JYO Slack: "20YY-bball-nerds" channel — passive posting of basketball material for coaching enthusiasts; previous years' channels are archived`
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

  // Step 4: Style the 📄 Source line
  const hasSourceLink = /(📄 Source:)/.test(html);
  html = html.replace(/(📄 Source:.*)/g, '<div class="source-line">$1</div>');

  // Step 5: Add permissions notice if there's a source link
  if (hasSourceLink) {
    html += '<div class="permissions-notice">If you\'re unable to open a linked document, contact <a href="mailto:secretary@sanmateojyo.org">secretary@sanmateojyo.org</a> for access.</div>';
  }

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
