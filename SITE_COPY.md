# Site copy — yassinalyassin.com

Every piece of human-readable text on the site, in one document, organized by where it appears. Rewrite freely. The header for each section tells you **where in the codebase it lives** so we know what to update when you're done.

---

## 0. Profile / identity
**Location:** `lib/content.ts` → `profile`

- **Name:** Yassin Al-Yassin
- **Tagline:** Hardware engineer building agentic AI for the engineers who design the physical world.
- **Meta description (SEO):** Second-year Electronic Engineering at Southampton. Building Substrate — an agentic platform for deep-tech engineering, starting with Tracer, a verifiable copilot for legacy circuit modernisation. Problem validated through interviews with engineers at modernisation, defence, and biomedical firms. Previously: Argus (multi-agent product I built solo and deployed to 150 users at 180DC Southampton), 2nd of 100+ at the AMD Pervasive AI Contest (team of 4, led the core), 1st at BAE Systems Hack the Future. Available for founder conversations.
- **Location:** Southampton / London, UK
- **Email:** yassinalyassin771@gmail.com
- **Substrate venture status pill (on home Substrate teaser):** BUILDING · PROBLEM VALIDATED · PRE-SEED

---

## 1. Nav
**Location:** `components/site/SiteNav.tsx`

- Name brand: **Yassin Al-Yassin**
- Links: **Substrate** · **Work** · **Notes**
- CTA: **Get in touch**

Mobile sheet numbers them 01 / 02 / 03 / →

---

## 2. Home (`/`)

### 2a. Hero
**Location:** `components/home/Hero.tsx`

- Eyebrow: **01 — Now**
- Greeting (italic, small): *Hi, I'm*
- Big name: **Yassin** / Al-Yassin
- Lead (with green underline on "physical world"):
  > I build agentic AI for the engineers who design the *physical world*.
- Sub line:
  > Right now that's **Substrate**, and I'm all in. Second-year Electronic Engineering at Southampton — one of the few founders fluent in both hardware and AI.
- Primary CTA: **See what I'm building ↓** (jumps to #substrate)
- Pill CTA: **● Available for founder conversations ↗** (jumps to #contact)
- Scroll cue label: **Scroll**

### 2b. Substrate teaser
**Location:** `components/home/SubstrateTeaser.tsx`

- Eyebrow: **02 — The bet**
- Big headline: **Substrate**
- Italic tagline: *AI agents for the physical world.*
- Chips: **Building** · **Problem validated** · **Pre-seed**
- Lede (right column, top):
  > Every great AI company is being built for software developers. The engineers who design the physical world still work in tools from the 1990s.
- Pull-quote (full width):
  > What Cursor is to software, **Substrate** is being built to be for everyone who designs the physical world.
- Column 1 label: **The thesis**
  - Para 1: Substrate is the agentic platform for that gap — chips, circuits, embedded systems, hardware. **I'm building it because I'm one of the few founders fluent in both worlds.**
  - Para 2: I'm starting with **Tracer**: a verifiable copilot that helps engineers modernise legacy electronic circuits step by step, with the engineer checking each output. I picked this wedge because defence reshoring and supply-chain mandates have created urgent modernisation budgets, and frontier multimodal models can finally read schematics end-to-end.
  - Para 3: The engineers I interviewed all said the same thing — they want a tool that works **alongside** them, not an autonomous black box that multiplies errors in high-stakes work.
- Column 2 label: **The plan**
  - Para 1: Ship Tracer first as an assistant inside engineers' existing EDA tools — Altium, KiCad, Cadence — low friction, no behaviour change. From there it grows into a purpose-built modernisation platform that becomes the foundation other Substrate agents are built on.
  - Para 2: Each engagement adds proprietary design data and engineer trust the next layer inherits. I led the team that built the core technical primitive at the AMD Pervasive AI Contest, where it placed **2nd of 100+ teams**.
- Stats row (5 cells):
  | Key | Value |
  |---|---|
  | Wedge | **Tracer** — verifiable copilot for legacy circuit modernisation |
  | Stage | Pre-seed — **building MVP** |
  | Proof | Core primitive built at **AMD AI Contest** (2nd of 100+) |
  | Validation | Engineer interviews — modernisation, defence, biomedical |
  | Status | **Problem validated**; building Tracer MVP |
- CTAs: **Full thesis ↗** (→ /substrate) · **Download deck (PDF) ↗**

### 2c. Work (Selected work)
**Location:** `components/home/WorkLedger.tsx` reads entries from `lib/content.ts` → `work[]`

- Eyebrow: **03 — Work**
- Section title: Selected *work.*

**Entries** (in order):

1. **Argus** — Venture · 2025–26
   > Multi-agent AI product built solo and deployed to 150 users across 180DC Southampton. £3K Enterprise Prize. Pitched at Future Worlds. Closed May 2026 to focus on Substrate.

2. **AMD Pervasive AI Contest** — Competition · 2025
   > 2nd of 100+ teams. Team of 4 — I led and built the circuits parser and core circuit-reasoning logic. The system takes a schematic and infers what each component is, what sub-circuits do, and what the whole circuit functionally does. This understanding layer is the genuinely hard part — and the primitive Tracer is being built on. Codebase and trained artefacts available; runnable on GPU hardware.
   > *Footnote:* Codebase & trained artefacts available

3. **BAE Systems Hack the Future** — Competition · 2024
   > 1st of ~15 teams. Designed and shipped an end-to-end World Cup fan-experience system spanning hardware, networking, backend, and UI in 24 hours.

4. **Vigil — Offline Edge AI Detection** — Project · 2024
   > Computer-vision prototype on NVIDIA Jetson Orin Nano for object detection, tracking, and tamper-evident event logging. Designed for denied-network deployment with no cloud dependency.

5. **Accenture — Data & AI Practice** — Incoming Intern · Summer 2026
   > Selected for the 12-week Data & AI summer internship in London.

6. **180 Degrees Consulting Southampton** — Vice President · 2024–present
   > Co-president of a ~150-person chapter; led recruitment of 40+ consultants; sourced and led engagements with Cancer Research UK and British Heart Foundation.

7. **Blackmont Consulting** — Project Manager · 2026
   > Led MyTender.io build (multi-agent LLM tender platform) with founders. Drove ~75 sign-ups; promoted from Consultant after the Gononet Technologies engagement.

8. **Zepler Prize** — Award · 2024
   > University of Southampton — top practical lab grades in cohort.

### 2d. Notes preview
**Location:** `components/home/NotesPreview.tsx` reads from `lib/content.ts` → `notes[]`

- Eyebrow: **04 — Notes**
- Section title: Things I'm *thinking about.*
- 3 preview rows (date, title, subtitle) — content matches the index in §4
- Link below: **All notes ↗** (→ /notes)

---

## 3. /substrate (dedicated thesis page)
**Location:** `app/substrate/page.tsx`

### 3a. Hero
- Eyebrow: **● The company**
- Massive headline: **Substrate**
- Italic tagline: *AI agents for the physical world.*
- Chips: **Building** · **Problem validated** · **Pre-seed**
- CTAs: **Read the deck ↗** · **Download PDF ↗** · **Get in touch ↗**

### 3b. The problem (paper-deep band)
- Eyebrow: **● The problem**
- Big claim (left):
  > Every great AI company is being built for software developers. The engineers who design the *physical world* were left behind.
- Right column:
  > **Lede:** Chips, circuits, embedded systems, hardware — the foundations everything else runs on.
  >
  > The people who design them still work in tools from the 1990s. They read schematics by hand, trace nets across pages from memory, and modernise decades-old designs with almost no leverage from the AI revolution happening one floor up.
  >
  > It isn't a small niche. It's the entire substrate beneath modern technology — and it's been structurally skipped.

### 3c. Why me
- Eyebrow: **● Why me**
- Big claim (left):
  > Building this needs someone fluent in *both* worlds. Almost no one is.
- Right column:
  > **Lede:** To build AI for hardware you have to actually understand electronics *and* modern machine learning. Those two populations barely overlap.
  >
  > I'm a second-year Electronic Engineering student who has spent two years building and shipping AI products. **That combination is the whole thesis.** The software-AI world is building for software; the hardware world can't build the tools it wishes existed. I sit on both sides of that wall.
- Link: **Read: The knowledge wall ↗** (→ /notes/the-knowledge-wall)

### 3d. The wedge — Tracer (paper-deep band)
- Eyebrow: **● The wedge**
- Section title:
  > Tracer — a *verifiable* copilot for legacy circuit modernisation.
- Lede:
  > A wedge you can win beats a platform you can only describe. Tracer helps engineers modernise legacy electronic circuits step by step — with the engineer checking every output.
- 4 numbered steps:
  1. **Read the circuit** — Tracer ingests a legacy schematic and infers what each component is, what the sub-circuits do, and what the whole design is functionally *for*. This understanding layer is the genuinely hard part — and the primitive my team built at the AMD contest.
  2. **Propose, step by step** — It suggests a modernisation one verifiable step at a time — never an autonomous black box that multiplies errors in high-stakes work.
  3. **Engineer verifies** — Each output is inspectable and reversible. The engineer stays in command; trust compounds with every confirmed step.
  4. **Ships inside their tools** — Tracer lands as an assistant inside the EDA tools engineers already use — Altium, KiCad, Cadence. Low friction, no behaviour change required.

### 3e. Why now
- Eyebrow: **● Why now**
- Section title: Three things are *true at once.*
- 3 cards:
  1. **Models can finally see** — Frontier multimodal models can now read schematics end to end. The inputs are no longer the bottleneck they were even a year ago.
  2. **Budgets are urgent** — Defence reshoring and supply-chain mandates have created real, time-pressured budgets for modernising legacy electronics.
  3. **Engineers are ready** — Every engineer I interviewed wants a tool that works alongside them — not one that replaces their judgement. The demand is shaped and waiting.

### 3f. The path (roadmap + stack) (paper-deep band)
- Eyebrow: **● The path**
- Section title: From wedge to *platform.*
- Roadmap 3 phases:
  - **Now — Tracer:** A verifiable modernisation copilot inside engineers' existing EDA tools. Win the wedge; earn the trust and the data.
  - **Next — Modernisation EDA:** Tracer grows into a purpose-built modernisation platform — the foundation other Substrate agents are built on.
  - **Then — The Substrate agents:** Schematic, Embedded, and beyond — a family of agents for everyone who designs the physical world.
- Stack diagram (top to bottom):
  | Layer | Caption |
  |---|---|
  | Schematic · Embedded · … | Future agents |
  | Modernisation EDA platform | The foundation |
  | Tracer — verifiable copilot | The wedge · today |
  | Circuit-understanding primitive | Built at AMD · 2nd of 100+ |

### 3g. The compounding moat
- Eyebrow: **● The compounding moat**
- Big claim (left):
  > Every engagement makes the next one *harder to beat.*
- Right column:
  > **Lede:** Each modernisation Tracer touches adds proprietary design data and engineer trust that the next layer inherits.
  >
  > Data the rest of the market can't get. Trust a black box can't earn. The platform doesn't just grow — it gets structurally more defensible with use.

### 3h. Where it stands (paper-deep band)
- Eyebrow: **● Where it stands**
- 4 stat cards:
  | Key | Value |
  |---|---|
  | Stage | Pre-seed — **building Tracer MVP** |
  | Proof | Core primitive built at the **AMD Pervasive AI Contest** — 2nd of 100+ teams |
  | Validation | Engineer interviews across **modernisation, defence & biomedical** |
  | Status | **Problem validated.** Building the MVP and talking to founders |

### 3i. The bet
- Eyebrow: **● The bet**
- Closing line:
  > What Cursor is to software, ***Substrate*** is being built to be for everyone who designs the physical world.
- CTAs: **Read the deck ↗** · **Download PDF ↗** · **Get in touch ↗**

---

## 4. /notes (index)
**Location:** `app/notes/page.tsx`

### Header
- Eyebrow: **● Writing**
- H1: Notes**.**
- Dek:
  > Things I'm thinking about while building Substrate — agentic UX, the engineers who design the physical world, and what I'm learning along the way.

### Index entries

| Date | Category | Read | Title | Dek |
|---|---|---|---|---|
| 2026.05 | Essay | 6 min | **The knowledge wall** | Where Substrate came from — and the wall between the people who can build AI and the people who understand the physical world. |
| 2026.05 | Field notes | 7 min | **What 150 users taught me about agentic UX** | Notes from shipping Argus — why verifiability beats autonomy, and what users actually do with an agent. |
| 2026.04 | Essay | 5 min | **Why I left Argus at Southampton** | On killing something that worked, and building things that outlast you. |

---

## 5. Note bodies (full text)
**Location:** `lib/content.ts` → `notes[]` (each note's `body` field is markdown)

### 5a. The knowledge wall
- Slug: `the-knowledge-wall`
- Title: The knowledge wall.
- Subtitle: Where Substrate came from.
- Date: 2026-05-25
- Category (on /notes index): Essay · 6 min read
- **Body:**

> When I was a kid I was obsessed with drones. I wanted to build one that could fly alongside kites. Random, I know, but to me it was the best idea in the world.
>
> I couldn't build it.
>
> Not because the idea was bad. Between me and the thing I wanted to make stood a wall. Years of knowledge I didn't have yet. Datasheets I couldn't read. Circuits I didn't understand. Tools that assumed I already knew everything. The wall didn't care how good the idea was. It blocked everyone the same.
>
> Most ideas die at that wall. Mine did.
>
> What gets me isn't the ideas that fail. It's the ones that never get tried. Some teenager right now has a better idea than anything I'll ever have, and they'll never build it, because the wall is too high and they'll quit before they get over it.
>
> Then AI got good. Really good. And I realised the wall isn't permanent.
>
> Software people already proved it. Cursor, Copilot. They took the wall down for code. A kid with an idea and no CS degree can ship a real product now. That's not a small thing. That's the world changing.
>
> But the wall is still standing everywhere else. For anyone who wants to build something physical: a circuit, a device, a machine. It's exactly as high as it was when I was fifteen.
>
> That's Substrate. AI that stands next to you and hands you the knowledge as you go, so the idea is the only thing that has to be good. Not your years of training. Just the idea.
>
> I'm starting with the engineers who hit that wall professionally, every day. But that's the wedge, not the point.
>
> I got over the wall. It took years I shouldn't have needed. Now I'm tearing it down, so anyone with a dream can build it, the way I never could.
>
> Starting with the kid who wants to fly a drone next to a kite.

### 5b. What 150 users taught me about agentic UX
- Slug: `150-users-agentic-ux`
- Title: What 150 users taught me about agentic UX.
- Subtitle: Notes from shipping Argus.
- Date: 2026-05-08
- Category: Field notes · 7 min read
- **Body:**

> I shipped Argus in 2025. I closed it down in May 2026.
>
> It wasn't a failure. Argus did exactly what it was supposed to do — it got deployed across a hundred and fifty users at 180 Degrees Consulting Southampton, won the £3K Future Worlds Enterprise Prize, got me into rooms with Future Worlds, and pulled fifteen contributors across four university societies into a real engineering team. It taught me how to build, ship, recruit, and sell. Then I let it go.
>
> I'm letting it go because the future is Substrate, and you can't run two ventures at full intensity. But before I move on, I want to write down what shipping Argus taught me about building agentic products. These lessons are the foundation of how I'm thinking about Substrate's UX from day one.
>
> ## Lesson one: the agent isn't the product. The trust is.
>
> When I first built Argus, I was obsessed with the technical core — multi-agent orchestration, the reasoning loop, getting the LLM calls to chain reliably. I assumed users would care about the same things I did.
>
> They didn't.
>
> What users cared about was whether they could trust the output. Whether the agent's confidence matched its actual accuracy. Whether they could see what it was doing and why. Whether they could correct it without starting over. Whether it remembered what it had done last week.
>
> The technical sophistication of the underlying system mattered exactly zero to the people using it. What mattered was the relationship between the user and the agent's outputs. That relationship is built and broken in tiny moments — a misformatted response, a confidently wrong answer, a slow load with no feedback.
>
> I wasted months optimising the wrong layer. The lesson: **build the trust surface first, then make the underlying reasoning good enough to support it. Not the other way around.**
>
> ## Lesson two: agentic UX is a new design discipline
>
> Designing for agentic systems isn't designing for software in the traditional sense. In traditional software, the user has a model in their head of what the program will do, and the UI is a way of expressing that intent precisely. The user is in control, the software is deterministic, and the design problem is making the controls discoverable.
>
> Agentic software is different. The user has a fuzzy goal, the system has latitude in how to achieve it, and the design problem is *managing the gap between the user's mental model and the agent's actual behaviour*.
>
> This means new primitives:
> - **Intent confirmation** before expensive operations
> - **Live progress streams** so users see thinking, not just results
> - **Reversibility** as a first-class feature, not an afterthought
> - **Confidence signals** baked into outputs, not hidden behind APIs
> - **Memory affordances** — letting users see, edit, and prune what the agent remembers
>
> None of this is in the standard UX playbook. I had to figure it out by watching Argus users get confused, frustrated, and occasionally delighted, and reverse-engineering why.
>
> For Substrate, this isn't a one-person product anymore — it's going to be a tool engineers spend hours a day inside. The UX bar is higher and the failure modes are more expensive (a hallucinated circuit modification can cost a defence customer six figures). The lessons from Argus are the starting point, not the ending one.
>
> ## Lesson three: the cost of LLM tokens shapes everything you can build
>
> This sounds obvious until you ship something real. With Argus, I had to engineer the entire system to run on a Student Union budget — meaning every prompt, every retrieval call, every agent step had to be economically justifiable.
>
> That constraint forced clarity. I learned to:
> - Cache aggressively at every layer
> - Route tasks to the cheapest model that can plausibly handle them
> - Compress context ruthlessly with structured summaries
> - Use small embedding models for retrieval, big models only for reasoning
> - Batch operations whenever the latency budget allows
>
> The multi-provider LLM router I'm building into Substrate's core is a direct descendant of this thinking. Routing per task and per cost was a lesson Argus beat into me. At a startup scale where you're shipping to one user at a time, you can be sloppy. At a hundred and fifty concurrent users, every wasted token is a dollar that could have been a feature.
>
> ## Lesson four: you can't recruit people into a project. You recruit them into a story.
>
> When I started building Argus, I tried recruiting contributors by explaining the technical scope. *"We're building a multi-agent system that automates consulting workflows."* This worked on basically nobody.
>
> What worked was telling people the story. *"Here's a 150-person consulting org wasting hundreds of hours a year on busywork that an AI could do. We're going to build the thing that fixes it. The team will outlast me. You'll have something real to point to."* When you frame it that way, talented people from societies that have nothing to do with engineering — Business, Marketing — show up and ask how to help.
>
> The fifteen contributors I pulled across four societies didn't come because they were excited about agent orchestration. They came because the story was something they wanted to be part of. The technical problem was just the vehicle.
>
> For Substrate, the story is bigger and the stakes are higher. *"AI finished software. Deep-tech is what's next. The companies building the future of defence, energy, and manufacturing have no AI tools, and we're going to build the platform they end up running on."* That's a story I can recruit a senior EE engineer into. *"Multi-provider LLM router with agentic orchestration"* is not.
>
> ## Lesson five: knowing when to leave is the same skill as knowing when to commit
>
> Argus could have continued. There were paths to making it bigger — selling it as a SaaS product, expanding to other 180DC chapters, raising on it as a venture. I chose to wind it down.
>
> The reason is simple: the ceiling on Argus was lower than the ceiling on Substrate, and you only get one career to bet. Argus was the proof that I could ship. Substrate is the bet that requires the proof. Continuing both at full intensity would have meant doing both at half intensity, which is the most reliable way to fail at both.
>
> The instinct that pulled me to keep Argus running was the same instinct that made me start it: *I don't abandon things I've built*. But the founders I respect most have all done this — finished one chapter cleanly, moved to the next, didn't apologise. Sam Altman left Loopt to run YC. Patrick Collison shut down Auctomatic to start Stripe. The pattern is consistent: smart people give themselves permission to stop.
>
> So Argus closes here. The team continues with the codebase as a stable internal tool. I move my full intensity to Substrate. The fifteen contributors who shipped with me have a real product to point to on their CVs. The £3K paid for the development. The lessons go forward.
>
> ## What I'm taking into Substrate
>
> Six things, ranked by how much they'll shape the early product:
>
> 1. **Trust surface first, capabilities second.** Every agent in Substrate ships with confidence signals, reversibility, and visible reasoning before it ships with new capabilities.
> 2. **Multi-provider routing as a first-principle design decision.** Built into the core, not bolted on. Cost per task is a feature, not an optimisation.
> 3. **Memory affordances visible to the user.** Engineers don't trust black boxes. They will trust a system whose memory they can inspect, edit, and audit.
> 4. **Story-shaped recruiting.** Every hire pitch is an articulation of why this matters, not a job description.
> 5. **Tight wedge, slow expansion.** Tracer for the first year. Don't get distracted by the platform vision before the first product is selling.
> 6. **The willingness to close chapters.** If something inside Substrate isn't working in twelve months, kill it cleanly. Don't let sunk cost run the show.
>
> Argus was the right thing to build. Closing it is the right thing to do. The lessons travel with me.
>
> Substrate is what's next.
>
> — Yassin

### 5c. Why I left Argus at Southampton
- Slug: `leaving-argus-at-southampton`
- Title: Why I left Argus at Southampton.
- Subtitle: Where Substrate came from. *(actually current subtitle in code is "On building things that outlast you.")*
- Date: 2026-04-15
- Category: Essay · 5 min read
- **Body:**

> Argus could've been my company. I gave it away.
>
> In April 2026, I had a clean shot at turning Argus into my pre-seed venture. The product was deployed across 150 users at 180 Degrees Consulting Southampton. The £3K Future Worlds Enterprise Prize had paid for the build. I'd pitched at Future Worlds. I'd recruited and trained a fifteen-person engineering team across four university societies that knew how to ship features.
>
> The path was open. I could've taken the team with me, raised on the back of the deployment, and made Argus the venture I'd spend the next five years on. Most founders in my position would have.
>
> I didn't. I left Argus at the university — codebase, team, institutional structure, all of it — and walked toward Substrate instead.
>
> This is the essay about why.
>
> ## What Argus actually was
>
> Argus is a multi-agent AI product I built solo in 2024–25 to automate consultant workflows at 180DC Southampton. It started as my personal project and grew into something the chapter actually used. By the time I let go of it, fifteen contributors from four societies were shipping features, the Student Union was funding our LLM credits, and the consultancy itself had become Argus's anchor customer. There was a credible path to making it monetisable — selling into other 180DC chapters, productising the workflow agents, eventually charging for it.
>
> I'm spelling that out because the move I'm about to describe — leaving it behind — only makes sense if you understand that the option to keep it was real.
>
> ## Why most founders would've kept it
>
> The default founder playbook says: when something works, double down. Argus worked. The technical core was de-risked, the customer was paying attention, the team was operational. Everything investors say they want to see was sitting there.
>
> Most undergrads in my position would've turned it into their LinkedIn-headline venture. Some would've raised on it. A few would've gone to YC with it. The path was conventional and respectable.
>
> The problem is I had a different bet to make.
>
> ## The structural reason I left
>
> Substrate is bigger than Argus could ever be. Argus is a workflow tool for a student consultancy. Substrate is the agentic platform for deep-tech engineering — chips, circuits, embedded systems, hardware. The TAM gap between them is roughly four orders of magnitude. The technical moat is incomparable. The customers, the investors, the timeline, the scale — all different categories.
>
> Trying to run both simultaneously would've meant doing each at half intensity, which is the most reliable way to fail at both. Founders who can't choose are founders who don't compound.
>
> So I had to pick. I picked Substrate.
>
> But the question that took longer to answer wasn't which one — it was what to do with the one I wasn't picking.
>
> ## Three options
>
> Option one was to wind it down. Send a message to the team thanking them, archive the codebase, move on. Clean exit. But it kills the value the team had built and leaves the consultancy with a half-deprecated tool.
>
> Option two was to keep Argus as a passive side project. Run it at 10% effort, do the bare minimum to keep it operational, make it a footnote on my CV. This is what most people do. It's also what most products in this state quietly die from — neglect dressed up as ongoing operation.
>
> Option three was to leave it at the university properly. Hand the codebase, the team, and the institutional relationships over to the next generation of students. Structure the cross-society programme so it could recruit, ship, and operate without me. Let Argus become an institutional asset — something that lives at Southampton, that future undergrads can join, that the consultancy keeps using and improving. If the team eventually monetises it for the university, even better.
>
> I picked option three.
>
> ## Why option three is rare
>
> Option three is uncommon for a reason. It requires you to do extra work for an outcome you don't directly benefit from. You have to write the documentation that lets the next person take over. You have to formalise the team's structure so it can absorb new recruits without you in the loop. You have to negotiate the institutional terms with the consultancy and the Student Union so the relationships transfer cleanly.
>
> Most founders won't do this work. The math doesn't favour it: you're spending weeks of effort making a thing better that you've already decided not to own. The narrowly rational move is option one or option two.
>
> But the narrow math is wrong, because it doesn't price in what the handoff actually accomplishes.
>
> ## What it accomplishes
>
> Leaving Argus properly does three things at once.
>
> It honours the team I recruited. They came in on a pitch I made — that we'd build something real, that the programme would outlast me, that they'd have something concrete to point to. Sunsetting Argus the day I pivot would have made me a liar. Handing it over keeps the promise.
>
> It builds an institution at Southampton. Most undergraduate ventures end the day the founder graduates. The cross-society engineering programme I structured was designed from the start to outlast me — to give future Southampton students a way to ship real products under real org structure, regardless of who's leading at any given moment. Whether the next cohort grows Argus, monetises it for the university, or pivots it into something better, the structure persists. That's worth more than any single product I could have walked away with.
>
> It teaches me how to let go cleanly, which turns out to be the most important founder skill I'll need at Substrate. The default failure mode at any stage isn't picking the wrong bet — it's failing to put down the bets you already made. Companies fail more often from founders holding onto dead chapters than from founders missing live ones.
>
> ## How this connects to Substrate
>
> Substrate's whole thesis is platform compounding — building infrastructure that outlasts any individual agent, any individual customer, any individual engagement. Each Tracer modernisation feeds the next. Each agent inherits the trust of the last. The platform is bigger than any single product.
>
> The version of me who builds that company is the same version who left Argus at Southampton. Both decisions come from the same instinct: care about the structure, not the spotlight. Build the thing that survives you. Trust the team you recruit to be more than your audience.
>
> Argus is still alive. The team is still shipping. New recruits will join in September. The consultancy is still using it. None of that benefits me directly anymore.
>
> All of it is exactly as it should be.
>
> — Yassin

---

## 6. /deck (10-slide presentation)
**Location:** `components/deck/DeckClient.tsx`

Top bar (overlay, mix-blend): **← Substrate** | **01 / 10** (auto-updates)

### Slide 01 — Pitch (dark)
- Kicker: **Pre-seed · 2026**
- Big title: **Substrate**
- Italic tag: *AI agents for the physical world.*
- Byline (mono): Yassin Al-Yassin · Hardware-AI bilingual founder

### Slide 02 — The problem
- Kicker: **The problem**
- Big: Every great AI company is built for *software* developers.
- Sub:
  > The engineers who design the physical world — chips, circuits, embedded systems, hardware — still work in tools from the 1990s. The AI revolution skipped them entirely.

### Slide 03 — Why now (band)
- Kicker: **Why now**
- Mid: Three things are *true at once.*
- 3-grid:
  1. **Models can see** — Frontier multimodal models can finally read schematics end to end.
  2. **Budgets are urgent** — Defence reshoring and supply-chain mandates created real modernisation budgets.
  3. **Engineers are ready** — They want a tool that works alongside them — not a black box.

### Slide 04 — The solution
- Kicker: **The wedge**
- Big: Tracer — a *verifiable* copilot for legacy circuits.
- Sub:
  > It helps engineers modernise legacy electronic circuits step by step, with the engineer checking every output. Ships inside the EDA tools they already use — Altium, KiCad, Cadence.

### Slide 05 — How it works (band)
- Kicker: **How it works**
- 3 rows:
  1. **Read the circuit** — Infers what each component is, what the sub-circuits do, and what the whole design is for. The hard part — and the primitive we built at the AMD contest.
  2. **Propose, step by step** — A modernisation one verifiable step at a time — never an autonomous black box.
  3. **Engineer verifies** — Every output inspectable and reversible. Trust compounds with each confirmed step.

### Slide 06 — The path
- Kicker: **From wedge to platform**
- Mid: Win the wedge. *Inherit* the platform.
- 3-grid:
  - **Now — Tracer:** Verifiable modernisation copilot inside existing EDA tools.
  - **Next — Modernisation EDA:** A purpose-built platform — the foundation other agents build on.
  - **Then — Substrate agents:** Schematic, Embedded & beyond — for everyone designing the physical world.

### Slide 07 — The moat (band)
- Kicker: **The compounding moat**
- Big: Every engagement makes the next one *harder to beat.*
- Sub:
  > Each modernisation adds proprietary design data and engineer trust the next layer inherits. Data the market can't get; trust a black box can't earn.

### Slide 08 — Proof (dark)
- Kicker: **Proof & traction**
- Mid: Already on the board.
- 4 traction rows:
  - **2nd** — of 100+ teams at the **AMD Pervasive AI Contest** — led the core circuit-reasoning primitive
  - **1st** — at **BAE Systems Hack the Future** — full system shipped in 24 hours
  - **150** — users on **Argus**, built solo — £3K enterprise prize, pitched at Future Worlds
  - **∞** — **Problem validated** through interviews across modernisation, defence & biomedical

### Slide 09 — Founder
- Kicker: **Why me**
- Big: One of the few founders fluent in *both* worlds.
- Sub:
  > Second-year Electronic Engineering at Southampton, two years building and shipping AI products. Building AI for hardware needs someone who understands electronics *and* modern ML. Those populations barely overlap — that's the whole thesis.

### Slide 10 — The ask (dark)
- Kicker: **The bet**
- Big: What Cursor is to software, *Substrate* is for the physical world.
- Sub: Pre-seed, building the Tracer MVP, available for founder conversations.
- CTAs: **Get in touch ↗** · **Download PDF ↗** · **Full thesis ↗**

---

## 7. Footer (shared across every page)
**Location:** `components/site/SiteFooter.tsx`

- Eyebrow: **● 05 — Contact**
- Big line:
  > Building Substrate.
  > *Open to the right early conversations.*
- Email block: **yassinalyassin771@gmail.com** (click to copy → "✓ Copied")
- Link column:
  - LinkedIn ↗
  - GitHub ↗
  - CV (PDF) ↗
  - Substrate deck ↗
- Bottom line (left): **Hardware-AI bilingual founder**
- Bottom line (right): **Built in Southampton · Updated May 2026**

---

## 8. Misc / chrome strings

| Where | Text |
|---|---|
| Browser tab / OG titles | Yassin Al-Yassin — Building Substrate · Substrate — AI agents for the physical world · Substrate — Pitch · Notes — Yassin Al-Yassin · {note title} — Yassin Al-Yassin |
| Skip-to-content link | Skip to main content |
| Hero scroll cue | Scroll |
| Note article-back link | ← All notes |
| Note byline role | Building Substrate · Southampton |
| Note pager labels | ← Previous · Next → · ← Index · Index → |
| Notes preview footer link | All notes ↗ |
| Substrate-page link to knowledge wall | Read: The knowledge wall ↗ |
| Mobile sheet last item | → Get in touch |

---

## Editing this file

When you rewrite, mark each section clearly and I'll diff what changed and push the edits to the right files in one pass. The two big locations are:

1. **`lib/content.ts`** — `profile`, `work[]`, `notes[]` (title, subtitle, date, **body**)
2. **Component files listed under each section above** — anything not in `lib/content.ts` lives directly in the component JSX.

If you change `lib/content.ts`, the home Work section, Notes preview, /notes index, and /notes/[slug] all update automatically. If you change a component, only that section updates.
