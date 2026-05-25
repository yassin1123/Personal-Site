import type { Metadata } from "next";
import Link from "next/link";
import { DeckHero } from "@/components/DeckHero";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FooterScrollLink } from "@/components/ui/FooterScrollLink";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Substrate — AI agents for the physical world",
  description:
    "The agentic platform for deep-tech engineering. Built by Yassin Al-Yassin.",
  openGraph: {
    title: "Substrate",
    description: "AI agents for the physical world.",
    url: "https://yassinalyassin.com/deck",
    images: [{ url: "/deck/opengraph-image", width: 1200, height: 630 }],
    type: "article",
  },
};

const agents = [
  {
    status: "● BUILDING",
    agent: "TRACER",
    headline: "Modernise legacy circuits",
    description: "A verifiable copilot that reverse-engineers legacy circuits step by step. The wedge. Core primitive proven at AMD; MVP in development.",
    featured: true,
  },
  {
    status: "DIRECTION",
    agent: "SCHEMATIC",
    headline: "Design new circuits",
    description: "Generates new circuit designs from functional intent.",
    featured: false,
  },
  {
    status: "DIRECTION",
    agent: "EMBEDDED",
    headline: "Low-level firmware",
    description: "Writes and verifies embedded code against real hardware.",
    featured: false,
  },
  {
    status: "DIRECTION",
    agent: "MECHANICAL",
    headline: "3D / CAD generation",
    description: "Produces parametric mechanical designs from spec.",
    featured: false,
  },
  {
    status: "DIRECTION",
    agent: "SILICON",
    headline: "Chip design & verification",
    description: "Agentic RTL design, synthesis, and verification.",
    featured: false,
  },
  {
    status: "DIRECTION",
    agent: "ASSEMBLY",
    headline: "Chip packaging & assembly",
    description: "Optimises packaging, layout, and assembly workflows.",
    featured: false,
  },
] as const;

const wedgeReasons = [
  {
    number: "01",
    claim: "Existing budgets, today.",
    body: "Defence reshoring and supply-chain mandates have already allocated procurement budgets for modernisation work.",
  },
  {
    number: "02",
    claim: "No behaviour change required.",
    body: "The engineers I interviewed told me this directly — they have the problem, and they want a tool that fits inside their existing EDA workflow.",
  },
  {
    number: "03",
    claim: "AI-tractable today.",
    body: "Multimodal frontier models can finally read schematics, datasheets, and CAD in the same pass. The AMD core primitive proves it works on real circuits.",
  },
  {
    number: "04",
    claim: "The work compounds.",
    body: "Each modernisation engagement adds proprietary design data and engineer trust — the foundation the next agent in the roadmap is unlocked by.",
  },
] as const;

const evidence = [
  {
    figure: "2nd",
    subtitle: "OF 100+ TEAMS",
    title: "AMD Pervasive AI Contest",
    body: "Team of 4. I led and built the circuits parser and core circuit-reasoning logic — the primitive Tracer is being built on. Codebase and trained artefacts available.",
  },
  {
    figure: "150",
    subtitle: "USER DEPLOYMENT",
    title: "Argus (prior venture)",
    body: "Multi-agent AI I built solo and deployed across 180DC Southampton. Proof I can take agentic systems from prototype to real users.",
  },
  {
    figure: "£3K",
    subtitle: "FUTURE WORLDS PRIZE",
    title: "Argus, pitched and funded",
    body: "Argus won the Future Worlds Enterprise Prize and was pitched at Future Worlds. Proof I can build venture-grade product and pitch it to investors.",
  },
  {
    figure: "1st",
    subtitle: "OF ~15 TEAMS",
    title: "BAE Systems Hack the Future",
    body: "End-to-end hardware + networking + backend + UI in 24 hours. The hardware fluency almost no AI founder has.",
  },
] as const;

const whyNow = [
  {
    number: "01.",
    claim:
      "Multimodal frontier models can finally read schematics, datasheets, and CAD in the same pass.",
    support: "The visual half of engineering is finally tractable.",
  },
  {
    number: "02.",
    claim: "Agentic orchestration crossed the reliability line.",
    support:
      "Tool-using, multi-step agents are now production-grade. The piece needed to make a verifiable copilot feel real.",
  },
  {
    number: "03.",
    claim:
      "Defence reshoring and American Dynamism made this commercially urgent.",
    support:
      "Real budgets are being allocated this fiscal year for legacy modernisation, secure supply chains, and domestic chip capacity.",
  },
] as const;

function DeckTopBar() {
  return (
    <div className="sticky top-0 z-40 h-14 border-b border-border-soft bg-bg/80 px-4 backdrop-blur sm:px-8 lg:px-12">
      <div className="mx-auto grid h-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.08em] text-fg-subtle transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          ← BACK TO HOME
        </Link>
        <span className="font-serif text-xl font-medium tracking-[-0.02em] text-fg">
          Substrate
        </span>
        <a
          href={profile.substrateDeck}
          download
          className="justify-self-end font-mono text-xs uppercase tracking-[0.08em] text-fg-subtle transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          DOWNLOAD PDF ↓
        </a>
      </div>
    </div>
  );
}

function DeckSection({
  id,
  label,
  children,
  className = "",
}: {
  id?: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={[
        "grid min-h-screen content-center border-t border-border-soft px-6 py-20 sm:px-10 lg:px-16",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-6xl">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
            {label}
          </p>
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
}

export default function DeckPage() {
  return (
    <MotionProvider>
      <DeckTopBar />
      <main>
        <DeckHero />

        <DeckSection id="gap" label="01 / THE GAP">
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <ScrollReveal delay={0.05}>
              <div className="min-h-[20rem] bg-bg-elevated p-7 sm:p-9">
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
                  SOFTWARE
                </p>
                <h2 className="mt-8 max-w-[11ch] font-serif text-3xl font-medium leading-[1.04] tracking-[-0.035em] text-fg sm:text-5xl">
                  Cursor. Copilot. Devin. Lovable.
                </h2>
                <p className="mt-8 max-w-[35ch] text-base leading-[1.6] text-fg-muted">
                  Multi-billion-dollar AI companies. Every fund has a thesis;
                  every grad with an LLM API key is launching one.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="min-h-[20rem] p-7 sm:p-9">
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
                  HARDWARE
                </p>
                <h2 className="mt-8 font-serif text-5xl font-medium leading-none tracking-[-0.04em] text-fg sm:text-7xl">
                  Nothing.
                </h2>
                <p className="mt-8 max-w-[35ch] text-base leading-[1.6] text-fg-muted">
                  The engineers designing chips, satellites, defence systems,
                  energy grids, and medical devices still work in tools from the
                  1990s. The AI revolution skipped them.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <p className="mx-auto mt-12 max-w-[70ch] text-center font-serif text-2xl italic leading-[1.18] tracking-[-0.025em] text-fg">
              To build the platform for them, you need a founder fluent in both
              worlds. The intersection is empty.
            </p>
          </ScrollReveal>
        </DeckSection>

        <DeckSection label="02 / SUBSTRATE">
          <ScrollReveal delay={0.05}>
            <h2 className="mt-10 max-w-[14ch] font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-fg md:text-6xl">
              The agentic platform for deep-tech engineering.
            </h2>
            <p className="mt-7 max-w-[60ch] text-lg leading-[1.55] text-fg-muted">
              Tracer first. The other agents are the direction — each unlocked
              by the data and engineer trust the previous one earns.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent, index) => (
              <ScrollReveal key={agent.agent} delay={index * 0.05}>
                <article
                  className={[
                    "relative min-h-48 border border-border p-5 transition-colors hover:bg-bg-elevated",
                    agent.featured ? "border-accent" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <p
                    className={[
                      "text-right font-mono text-xs uppercase tracking-[0.08em]",
                      agent.featured ? "text-teal" : "text-fg-subtle",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {agent.status}
                  </p>
                  <p className="mt-8 font-mono text-xs uppercase tracking-[0.08em] text-fg-subtle">
                    {agent.agent}
                  </p>
                  <h3 className="mt-4 font-serif text-xl font-medium leading-[1.12] tracking-[-0.025em] text-fg">
                    {agent.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.5] text-fg-muted">
                    {agent.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <p className="mx-auto mt-10 max-w-[62ch] text-center font-serif text-xl italic leading-[1.24] tracking-[-0.02em] text-fg">
              What Cursor is to software, Substrate is being built to be for the rest.
            </p>
          </ScrollReveal>
        </DeckSection>

        <DeckSection label="03 / THE WEDGE">
          <ScrollReveal delay={0.05}>
            <h2 className="mt-10 font-serif text-5xl font-normal leading-none tracking-[-0.045em] text-fg md:text-6xl">
              We start with Tracer.
            </h2>
            <p className="mt-6 max-w-[50ch] font-serif text-2xl italic leading-[1.18] tracking-[-0.025em] text-fg-muted">
              A verifiable copilot that helps engineers modernise legacy electronic circuits — step by step, engineer-in-the-loop.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {wedgeReasons.map((reason, index) => (
              <ScrollReveal key={reason.number} delay={index * 0.05}>
                <article className="border-t border-border pt-5">
                  <p className="font-mono text-xs text-accent">
                    {reason.number}
                  </p>
                  <h3 className="mt-6 font-serif text-xl font-medium leading-[1.12] tracking-[-0.025em] text-fg">
                    {reason.claim}
                  </h3>
                  <p className="mt-4 max-w-[30ch] text-sm leading-[1.52] text-fg-muted">
                    {reason.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <p className="mx-auto mt-14 max-w-[62ch] text-center font-serif text-xl italic leading-[1.24] tracking-[-0.02em] text-fg">
              Tracer is the wedge. The platform compounds underneath as engagements accumulate.
            </p>
          </ScrollReveal>
        </DeckSection>

        <DeckSection label="04 / WHAT'S PROVEN">
          <ScrollReveal delay={0.05}>
            <h2 className="mt-10 max-w-[18ch] font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-fg md:text-6xl">
              The hardest part is proven. The plan is grounded in real engineer pain.
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {evidence.map((item, index) => (
              <ScrollReveal key={item.figure} delay={index * 0.1}>
                <article>
                  <p className="font-serif text-7xl font-normal leading-none tracking-[-0.055em] text-fg">
                    {item.figure}
                  </p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-accent">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-7 font-serif text-xl font-medium leading-[1.12] tracking-[-0.025em] text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[30ch] text-sm leading-[1.52] text-fg-muted">
                    {item.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <article className="mt-20 border-t border-border pt-10">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
                DISCOVERY
              </p>
              <h3 className="mt-6 max-w-[22ch] font-serif text-4xl font-normal leading-[1.02] tracking-[-0.04em] text-fg md:text-5xl">
                What engineers told me.
              </h3>
              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                <div className="space-y-5 text-base leading-[1.6] text-fg-muted">
                  <p>
                    I interviewed practising engineers at firms specialising in
                    modernisation, and at defence and biomedical companies that
                    also do modernisation work.
                  </p>
                  <p>
                    The signal was consistent: legacy circuit and system
                    modernisation is real, painful, and they urgently need a
                    faster way to do it.
                  </p>
                </div>
                <div className="space-y-5">
                  <p className="font-serif text-xl italic leading-[1.3] tracking-[-0.02em] text-fg">
                    &ldquo;Don&apos;t give us an autonomous black box. In our
                    domain that just multiplies errors. Give us a tool that
                    works step by step alongside the engineer, so we can verify
                    every step.&rdquo;
                  </p>
                  <p className="text-sm leading-[1.55] text-fg-muted">
                    Paraphrased from the engineer interviews. It is the design
                    brief for Tracer: a verifiable copilot, not autopilot.
                  </p>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </DeckSection>

        <DeckSection label="05 / WHY NOW">
          <ScrollReveal delay={0.05}>
            <h2 className="mt-10 max-w-[13ch] font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-fg md:text-6xl">
              AI finished software. Deep-tech is what&apos;s next.
            </h2>
          </ScrollReveal>

          <div className="mt-14 space-y-9">
            {whyNow.map((item, index) => (
              <ScrollReveal key={item.number} delay={index * 0.15}>
                <article className="grid gap-4 border-t border-border pt-7 md:grid-cols-[5rem_1fr]">
                  <p className="font-mono text-3xl text-accent">
                    {item.number}
                  </p>
                  <div>
                    <h3 className="max-w-[34ch] font-serif text-2xl font-medium leading-[1.12] tracking-[-0.025em] text-fg">
                      {item.claim}
                    </h3>
                    <p className="mt-3 max-w-[70ch] font-serif text-lg italic leading-[1.35] tracking-[-0.015em] text-fg-muted">
                      {item.support}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-12 max-w-[62ch] text-center font-serif text-xl italic leading-[1.24] tracking-[-0.02em] text-fg">
              The window is open. It won&apos;t be for long.
            </p>
          </ScrollReveal>
        </DeckSection>

        <DeckSection label="06 / WHY ME">
          <ScrollReveal delay={0.05}>
            <h2 className="mt-10 max-w-[30ch] font-serif text-5xl font-normal leading-[0.98] tracking-[-0.045em] text-fg md:text-6xl">
              Most AI founders can&apos;t read a schematic.
            </h2>
            <p className="mt-8 max-w-[24ch] font-serif text-3xl leading-[1.1] tracking-[-0.035em] text-fg-muted">
              Most hardware engineers can&apos;t ship an agentic system.
            </p>
            <p className="mt-16 font-serif text-4xl leading-none tracking-[-0.04em] text-accent md:text-6xl">
              I do both.
            </p>
            <p className="mt-12 max-w-5xl font-mono text-xs uppercase leading-[1.8] tracking-[0.08em] text-fg-subtle">
              Second-year EE at Southampton · Zepler Prize · 2nd at AMD Pervasive
              AI (led 4-person team, built the core) · 1st at BAE Hack the
              Future · Argus built solo, deployed to 150 users · Tracer
              validated through engineer interviews
            </p>
          </ScrollReveal>
        </DeckSection>

        <section
          id="footer"
          className="grid min-h-[80vh] content-center border-t border-border-soft px-6 py-20 sm:px-10 lg:px-16"
        >
          <ScrollReveal>
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-[-0.04em] text-fg md:text-5xl">
                Software ate the world.
                <br />
                AI agents are about to build it.
                <br />
                <em className="text-accent">Substrate is where they live.</em>
              </h2>

              <a
                href={`mailto:${profile.email}`}
                className="mt-16 inline-flex break-all font-serif text-2xl leading-[1.15] tracking-[-0.025em] text-fg transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                {profile.email}
              </a>

              <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-3 font-mono text-xs uppercase tracking-[0.08em] text-fg-subtle">
                <a
                  href={profile.substrateDeck}
                  download
                  className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  Download deck (PDF)
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  LinkedIn
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  GitHub
                </a>
                <span aria-hidden="true">·</span>
                <Link
                  href="/"
                  className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  Back to home
                </Link>
              </div>

              <p className="mt-20 font-mono text-xs text-fg-subtle">
                Yassin Al-Yassin · Founder, Substrate · 2026
              </p>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </MotionProvider>
  );
}
