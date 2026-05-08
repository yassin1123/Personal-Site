export const profile = {
  name: "Yassin Al-Yassin",
  tagline: "I build AI agents for the engineers who design the physical world.",
  meta: "Currently building Substrate — the agentic platform for deep-tech engineering. Previously: Argus (deployed across 150 users), 2nd of 100+ at the AMD Pervasive AI Contest, 1st at BAE Systems Hack the Future. Final-year EE at Southampton. Available for founder conversations and Tracer design partners.",
  location: "Southampton / London, UK",
  email: "yassinalyassin771@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/yassinalyassin",
    github: "https://github.com/yassin1123",
  },
  cv: "/cv.pdf",
  substrateDeck: "/substrate-deck.pdf",
} as const;

export const footerLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yassinalyassin",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/yassin1123", external: true },
  { label: "CV (PDF)", href: "/cv.pdf", external: false },
  { label: "Substrate deck", href: "/deck", external: false },
] as const;

export const ventures = [
  {
    name: "Substrate",
    subtitle: "AI agents for the physical world.",
    status: "BUILDING · TRACER SHIPPING",
    weight: "primary",
    lede:
      "Every great AI company is being built for software developers. The engineers who design the physical world — chips, circuits, embedded systems, hardware — still work in tools from the 1990s. Substrate is the agentic platform for that gap.",
    paragraphs: [
      "I'm starting with Tracer, an agent that modernises legacy electronic circuits. It's the wedge: defence reshoring and supply-chain mandates have created urgent budgets, engineers come to us with problems they already have, and frontier multimodal models can finally reason about schematics end-to-end. I built the technical core for this at the AMD Pervasive AI Contest, where it placed 2nd of over 100 teams.",
      "The platform compounds underneath. Each Tracer engagement adds proprietary design data and engineer trust that the next agent — Schematic, Embedded, beyond — inherits. What Cursor is doing for software, Substrate is doing for everything engineers build outside it.",
    ],
    metadata: [
      ["WEDGE", "Tracer — legacy circuit modernisation"],
      ["STAGE", "Pre-seed"],
      ["PROOF", "AMD AI Contest — 2nd of 100+"],
      ["STACK", "Multi-provider LLM router · agentic core · domain models"],
      ["STATUS", "Live design-partner conversations"],
    ],
    links: [
      { label: "Read the deck", href: "/deck" },
      { label: "Get in touch", href: "#footer" },
      { label: "Download deck (PDF)", href: "/substrate-deck.pdf", download: true },
    ],
  },
] as const;

export const work = [
  {
    title: "Argus",
    kind: "VENTURE",
    year: "2025–26",
    body: "Multi-agent AI product built solo and deployed to 150 users across 180DC Southampton. £3K Enterprise Prize. Pitched at Future Worlds. Closed May 2026 to focus on Substrate.",
  },
  {
    title: "AMD Pervasive AI Contest",
    kind: "COMPETITION",
    year: "2025",
    body: "2nd of 100+ teams. Built an AI system on AMD GPUs that infers a circuit's components and functional intent end-to-end — the technical core Substrate is built on.",
  },
  {
    title: "BAE Systems Hack the Future",
    kind: "COMPETITION",
    year: "2024",
    body: "1st of ~15 teams. Designed and shipped an end-to-end World Cup fan-experience system spanning hardware, networking, backend, and UI in 24 hours.",
  },
  {
    title: "Vigil — Offline Edge AI Detection",
    kind: "PROJECT",
    year: "2024",
    body: "Computer-vision prototype on NVIDIA Jetson Orin Nano for object detection, tracking, and tamper-evident event logging. Designed for denied-network deployment with no cloud dependency.",
  },
  {
    title: "Accenture — Data & AI Practice",
    kind: "INCOMING INTERN",
    year: "Summer 2026",
    body: "Selected for the 12-week Data & AI summer internship in London.",
  },
  {
    title: "180 Degrees Consulting Southampton",
    kind: "VICE PRESIDENT",
    year: "2024–present",
    body: "Co-president of a ~150-person chapter; led recruitment of 40+ consultants; sourced and led engagements with Cancer Research UK and British Heart Foundation.",
  },
  {
    title: "Blackmont Consulting",
    kind: "PROJECT MANAGER",
    year: "2026",
    body: "Led MyTender.io build (multi-agent LLM tender platform) with founders. Drove ~75 sign-ups; promoted from Consultant after the Gononet Technologies engagement.",
  },
  {
    title: "Zepler Prize",
    kind: "AWARD",
    year: "2024",
    body: "University of Southampton — top practical lab grades in cohort.",
  },
] as const;

export const notes = [
  {
    slug: "ai-for-the-physical-world",
    title: "AI for the physical world.",
    subtitle: "Why deep-tech engineering is the next AI frontier.",
    date: "2026-05-10",
    body: "[markdown body here, write later]",
    published: false,
  },
  {
    slug: "150-users-agentic-ux",
    title: "What 150 users taught me about agentic UX.",
    subtitle: "Notes from shipping Argus.",
    date: "2026-05-08",
    body: `I shipped Argus in 2025. I closed it down in May 2026.

It wasn't a failure. Argus did exactly what it was supposed to do — it got deployed across a hundred and fifty users at 180 Degrees Consulting Southampton, won the £3K Future Worlds Enterprise Prize, got me into rooms with Entrepreneur First and Future Worlds, and pulled fifteen contributors across four university societies into a real engineering team. It taught me how to build, ship, recruit, and sell. Then I let it go.

I'm letting it go because the future is Substrate, and you can't run two ventures at full intensity. But before I move on, I want to write down what shipping Argus taught me about building agentic products. These lessons are the foundation of how I'm thinking about Substrate's UX from day one.

## Lesson one: the agent isn't the product. The trust is.

When I first built Argus, I was obsessed with the technical core — multi-agent orchestration, the reasoning loop, getting the LLM calls to chain reliably. I assumed users would care about the same things I did.

They didn't.

What users cared about was whether they could trust the output. Whether the agent's confidence matched its actual accuracy. Whether they could see what it was doing and why. Whether they could correct it without starting over. Whether it remembered what it had done last week.

The technical sophistication of the underlying system mattered exactly zero to the people using it. What mattered was the relationship between the user and the agent's outputs. That relationship is built and broken in tiny moments — a misformatted response, a confidently wrong answer, a slow load with no feedback.

I wasted months optimising the wrong layer. The lesson: **build the trust surface first, then make the underlying reasoning good enough to support it. Not the other way around.**

## Lesson two: agentic UX is a new design discipline

Designing for agentic systems isn't designing for software in the traditional sense. In traditional software, the user has a model in their head of what the program will do, and the UI is a way of expressing that intent precisely. The user is in control, the software is deterministic, and the design problem is making the controls discoverable.

Agentic software is different. The user has a fuzzy goal, the system has latitude in how to achieve it, and the design problem is *managing the gap between the user's mental model and the agent's actual behaviour*.

This means new primitives:

- **Intent confirmation** before expensive operations
- **Live progress streams** so users see thinking, not just results
- **Reversibility** as a first-class feature, not an afterthought
- **Confidence signals** baked into outputs, not hidden behind APIs
- **Memory affordances** — letting users see, edit, and prune what the agent remembers

None of this is in the standard UX playbook. I had to figure it out by watching Argus users get confused, frustrated, and occasionally delighted, and reverse-engineering why.

For Substrate, this isn't a one-person product anymore — it's going to be a tool engineers spend hours a day inside. The UX bar is higher and the failure modes are more expensive (a hallucinated circuit modification can cost a defence customer six figures). The lessons from Argus are the starting point, not the ending one.

## Lesson three: the cost of LLM tokens shapes everything you can build

This sounds obvious until you ship something real. With Argus, I had to engineer the entire system to run on a Student Union budget — meaning every prompt, every retrieval call, every agent step had to be economically justifiable.

That constraint forced clarity. I learned to:

- Cache aggressively at every layer
- Route tasks to the cheapest model that can plausibly handle them
- Compress context ruthlessly with structured summaries
- Use small embedding models for retrieval, big models only for reasoning
- Batch operations whenever the latency budget allows

The multi-provider LLM router I'm building into Substrate's core is a direct descendant of this thinking. Routing per task and per cost was a lesson Argus beat into me. At a startup scale where you're shipping to one user at a time, you can be sloppy. At a hundred and fifty concurrent users, every wasted token is a dollar that could have been a feature.

## Lesson four: you can't recruit people into a project. You recruit them into a story.

When I started building Argus, I tried recruiting contributors by explaining the technical scope. *"We're building a multi-agent system that automates consulting workflows."* This worked on basically nobody.

What worked was telling people the story. *"Here's a 150-person consulting org wasting hundreds of hours a year on busywork that an AI could do. We're going to build the thing that fixes it. The team will outlast me. You'll have something real to point to."* When you frame it that way, talented people from societies that have nothing to do with engineering — Business, Marketing — show up and ask how to help.

The fifteen contributors I pulled across four societies didn't come because they were excited about agent orchestration. They came because the story was something they wanted to be part of. The technical problem was just the vehicle.

For Substrate, the story is bigger and the stakes are higher. *"AI finished software. Deep-tech is what's next. The companies building the future of defence, energy, and manufacturing have no AI tools, and we're going to build the platform they end up running on."* That's a story I can recruit a senior EE engineer into. *"Multi-provider LLM router with agentic orchestration"* is not.

## Lesson five: knowing when to leave is the same skill as knowing when to commit

Argus could have continued. There were paths to making it bigger — selling it as a SaaS product, expanding to other 180DC chapters, raising on it as a venture. I chose to wind it down.

The reason is simple: the ceiling on Argus was lower than the ceiling on Substrate, and you only get one career to bet. Argus was the proof that I could ship. Substrate is the bet that requires the proof. Continuing both at full intensity would have meant doing both at half intensity, which is the most reliable way to fail at both.

The instinct that pulled me to keep Argus running was the same instinct that made me start it: *I don't abandon things I've built*. But the founders I respect most have all done this — finished one chapter cleanly, moved to the next, didn't apologise. Sam Altman left Loopt to run YC. Patrick Collison shut down Auctomatic to start Stripe. The pattern is consistent: smart people give themselves permission to stop.

So Argus closes here. The team continues with the codebase as a stable internal tool. I move my full intensity to Substrate. The fifteen contributors who shipped with me have a real product to point to on their CVs. The £3K paid for the development. The lessons go forward.

## What I'm taking into Substrate

Six things, ranked by how much they'll shape the early product:

1. **Trust surface first, capabilities second.** Every agent in Substrate ships with confidence signals, reversibility, and visible reasoning before it ships with new capabilities.
2. **Multi-provider routing as a first-principle design decision.** Built into the core, not bolted on. Cost per task is a feature, not an optimisation.
3. **Memory affordances visible to the user.** Engineers don't trust black boxes. They will trust a system whose memory they can inspect, edit, and audit.
4. **Story-shaped recruiting.** Every hire pitch is an articulation of why this matters, not a job description.
5. **Tight wedge, slow expansion.** Tracer for the first year. Don't get distracted by the platform vision before the first product is selling.
6. **The willingness to close chapters.** If something inside Substrate isn't working in twelve months, kill it cleanly. Don't let sunk cost run the show.

Argus was the right thing to build. Closing it is the right thing to do. The lessons travel with me.

Substrate is what's next.

— Yassin`,
    published: true,
  },
  {
    slug: "leaving-argus-at-southampton",
    title: "Why I left Argus at Southampton.",
    subtitle: "On building things that outlast you.",
    date: "2026-04-15",
    body: `Argus could've been my company. I gave it away.

In April 2026, I had a clean shot at turning Argus into my pre-seed venture. The product was deployed across 150 users at 180 Degrees Consulting Southampton. The £3K Future Worlds Enterprise Prize had paid for the build. EF and Future Worlds had pitched me. Blackmont Consulting was in active integration talks. I'd recruited and trained a fifteen-person engineering team across four university societies that knew how to ship features.

The path was open. I could've taken the team with me, raised on the back of the deployment, and made Argus the venture I'd spend the next five years on. Most founders in my position would have.

I didn't. I left Argus at the university — codebase, team, institutional structure, all of it — and walked toward Substrate instead.

This is the essay about why.

## What Argus actually was

Argus is a multi-agent AI product I built solo in 2024–25 to automate consultant workflows at 180DC Southampton. It started as my personal project and grew into something the chapter actually used. By the time I let go of it, fifteen contributors from four societies were shipping features, the Student Union was funding our LLM credits, and the consultancy itself had become Argus's anchor customer. There was a credible path to making it monetisable — selling into other 180DC chapters, productising the workflow agents, eventually charging for it.

I'm spelling that out because the move I'm about to describe — leaving it behind — only makes sense if you understand that the option to keep it was real.

## Why most founders would've kept it

The default founder playbook says: when something works, double down. Argus worked. The technical core was de-risked, the customer was paying attention, the team was operational. Everything investors say they want to see was sitting there.

Most undergrads in my position would've turned it into their LinkedIn-headline venture. Some would've raised on it. A few would've gone to YC with it. The path was conventional and respectable.

The problem is I had a different bet to make.

## The structural reason I left

Substrate is bigger than Argus could ever be. Argus is a workflow tool for a student consultancy. Substrate is the agentic platform for deep-tech engineering — chips, circuits, embedded systems, hardware. The TAM gap between them is roughly four orders of magnitude. The technical moat is incomparable. The customers, the investors, the timeline, the scale — all different categories.

Trying to run both simultaneously would've meant doing each at half intensity, which is the most reliable way to fail at both. Founders who can't choose are founders who don't compound.

So I had to pick. I picked Substrate.

But the question that took longer to answer wasn't which one — it was what to do with the one I wasn't picking.

## Three options

Option one was to wind it down. Send a message to the team thanking them, archive the codebase, move on. Clean exit. But it kills the value the team had built and leaves the consultancy with a half-deprecated tool.

Option two was to keep Argus as a passive side project. Run it at 10% effort, do the bare minimum to keep it operational, make it a footnote on my CV. This is what most people do. It's also what most products in this state quietly die from — neglect dressed up as ongoing operation.

Option three was to leave it at the university properly. Hand the codebase, the team, and the institutional relationships over to the next generation of students. Structure the cross-society programme so it could recruit, ship, and operate without me. Let Argus become an institutional asset — something that lives at Southampton, that future undergrads can join, that the consultancy keeps using and improving. If the team eventually monetises it for the university, even better.

I picked option three.

## Why option three is rare

Option three is uncommon for a reason. It requires you to do extra work for an outcome you don't directly benefit from. You have to write the documentation that lets the next person take over. You have to formalise the team's structure so it can absorb new recruits without you in the loop. You have to negotiate the institutional terms with the consultancy and the Student Union so the relationships transfer cleanly.

Most founders won't do this work. The math doesn't favour it: you're spending weeks of effort making a thing better that you've already decided not to own. The narrowly rational move is option one or option two.

But the narrow math is wrong, because it doesn't price in what the handoff actually accomplishes.

## What it accomplishes

Leaving Argus properly does three things at once.

It honours the team I recruited. They came in on a pitch I made — that we'd build something real, that the programme would outlast me, that they'd have something concrete to point to. Sunsetting Argus the day I pivot would have made me a liar. Handing it over keeps the promise.

It builds an institution at Southampton. Most undergraduate ventures end the day the founder graduates. The cross-society engineering programme I structured was designed from the start to outlast me — to give future Southampton students a way to ship real products under real org structure, regardless of who's leading at any given moment. Whether the next cohort grows Argus, monetises it for the university, or pivots it into something better, the structure persists. That's worth more than any single product I could have walked away with.

It teaches me how to let go cleanly, which turns out to be the most important founder skill I'll need at Substrate. The default failure mode at any stage isn't picking the wrong bet — it's failing to put down the bets you already made. Companies fail more often from founders holding onto dead chapters than from founders missing live ones.

## How this connects to Substrate

Substrate's whole thesis is platform compounding — building infrastructure that outlasts any individual agent, any individual customer, any individual engagement. Each Tracer modernisation feeds the next. Each agent inherits the trust of the last. The platform is bigger than any single product.

The version of me who builds that company is the same version who left Argus at Southampton. Both decisions come from the same instinct: care about the structure, not the spotlight. Build the thing that survives you. Trust the team you recruit to be more than your audience.

Argus is still alive. The team is still shipping. New recruits will join in September. The consultancy is still using it. None of that benefits me directly anymore.

All of it is exactly as it should be.

— Yassin`,
    published: true,
  },
] as const;

export const deckAgents = [
  {
    icon: "Cpu",
    agent: "TRACER",
    status: "SHIPPING",
    headline: "Modernise legacy circuits",
    description: "Reverse-engineers and modernises legacy electronic designs.",
    featured: true,
  },
  {
    icon: "Wand2",
    agent: "SCHEMATIC",
    status: "Q3 2026",
    headline: "Design new circuits",
    description: "Generates new circuit designs from functional intent.",
    featured: false,
  },
  {
    icon: "Terminal",
    agent: "EMBEDDED",
    status: "Q1 2027",
    headline: "Low-level firmware",
    description: "Writes and verifies embedded code against real hardware.",
    featured: false,
  },
  {
    icon: "Box",
    agent: "MECHANICAL",
    status: "Q2 2027",
    headline: "3D / CAD generation",
    description: "Produces parametric mechanical designs from spec.",
    featured: false,
  },
  {
    icon: "Layers",
    agent: "SILICON",
    status: "2028",
    headline: "Chip design & verification",
    description: "Agentic RTL design, synthesis, and verification.",
    featured: false,
  },
  {
    icon: "Wrench",
    agent: "ASSEMBLY",
    status: "2028",
    headline: "Chip packaging & assembly",
    description: "Optimises packaging, layout, and assembly workflows.",
    featured: false,
  },
] as const;

export const deckEvidence = [
  {
    figure: "2nd",
    subfigure: "of 100+ teams",
    title: "AMD Pervasive AI Contest.",
    body: "Built the AI core that infers a circuit's components and functional intent end-to-end. The exact technical primitive Tracer is built on.",
  },
  {
    figure: "150",
    subfigure: "person deployment",
    title: "Argus (prior venture).",
    body: "Multi-agent AI tool deployed across 180DC Southampton. Proves the ability to take agentic systems from prototype into real users' workflows.",
  },
  {
    figure: "£3K",
    subfigure: "Enterprise Prize",
    title: "EF + Future Worlds + Blackmont.",
    body: "Pitched at Entrepreneur First and Future Worlds. Active integration talks with Blackmont Consulting.",
  },
  {
    figure: "1st",
    subfigure: "of ~15 teams",
    title: "BAE Systems Hack the Future.",
    body: "Built a full hardware + backend + UI system end-to-end. Hardware fluency that almost no AI founder has.",
  },
] as const;
