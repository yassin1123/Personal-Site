import type { Metadata } from "next";
import { DeckHero } from "@/components/DeckHero";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BackNav } from "@/components/chrome/BackNav";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";
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
    status: "● Building",
    code: "Tracer",
    headline: "Modernise legacy circuits",
    description:
      "A verifiable copilot that reverse-engineers legacy circuits step by step. The wedge. Core primitive proven at AMD; MVP in development.",
    featured: true,
  },
  {
    status: "Direction",
    code: "Schematic",
    headline: "Design new circuits",
    description: "Generates new circuit designs from functional intent.",
    featured: false,
  },
  {
    status: "Direction",
    code: "Embedded",
    headline: "Low-level firmware",
    description: "Writes and verifies embedded code against real hardware.",
    featured: false,
  },
  {
    status: "Direction",
    code: "Mechanical",
    headline: "3D / CAD generation",
    description: "Produces parametric mechanical designs from spec.",
    featured: false,
  },
  {
    status: "Direction",
    code: "Silicon",
    headline: "Chip design & verification",
    description: "Agentic RTL design, synthesis, and verification.",
    featured: false,
  },
  {
    status: "Direction",
    code: "Assembly",
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
    subtitle: "of 100+ teams",
    title: "AMD Pervasive AI Contest",
    body: "Team of 4. I led and built the circuits parser and core circuit-reasoning logic — the primitive Tracer is being built on. Codebase and trained artefacts available.",
  },
  {
    figure: "150",
    subtitle: "User deployment",
    title: "Argus (prior venture)",
    body: "Multi-agent AI I built solo and deployed across 180DC Southampton. Proof I can take agentic systems from prototype to real users.",
  },
  {
    figure: "£3K",
    subtitle: "Future Worlds prize",
    title: "Argus, pitched and funded",
    body: "Argus won the Future Worlds Enterprise Prize and was pitched at Future Worlds. Proof I can build venture-grade product and pitch it to investors.",
  },
  {
    figure: "1st",
    subtitle: "of ~15 teams",
    title: "BAE Systems Hack the Future",
    body: "End-to-end hardware + networking + backend + UI in 24 hours. The hardware fluency almost no AI founder has.",
  },
] as const;

const whyNow = [
  {
    number: "01",
    claim:
      "Multimodal frontier models can finally read schematics, datasheets, and CAD in the same pass.",
    support: "The visual half of engineering is finally tractable.",
  },
  {
    number: "02",
    claim: "Agentic orchestration crossed the reliability line.",
    support:
      "Tool-using, multi-step agents are now production-grade — the piece needed to make a verifiable copilot feel real.",
  },
  {
    number: "03",
    claim:
      "Defence reshoring and American Dynamism made this commercially urgent.",
    support:
      "Real budgets are being allocated this fiscal year for legacy modernisation, secure supply chains, and domestic chip capacity.",
  },
] as const;

function SectionLabel({ num, name }: { num: string; name: string }) {
  return (
    <div className="mb-5 flex items-baseline gap-4">
      <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-accent">
        {num}
      </span>
      <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-fg-subtle">
        {name}
      </span>
    </div>
  );
}

function SectionShell({
  id,
  alt = false,
  children,
}: {
  id?: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 py-24 sm:px-10 lg:px-16 lg:py-28 ${alt ? "bg-bg-elevated" : ""}`}
    >
      <div className="mx-auto max-w-[1180px]">{children}</div>
    </section>
  );
}

export default function DeckPage() {
  return (
    <MotionProvider>
      <ScrollProgress />
      <BackNav
        links={[
          { href: "#gap", label: "The gap" },
          { href: "#proven", label: "Proof" },
          {
            href: profile.substrateDeck,
            label: "Download PDF ↓",
            cta: true,
            external: true,
            download: true,
          },
        ]}
      />

      <main id="main">
        <DeckHero />

        {/* 01 THE GAP */}
        <SectionShell id="gap">
          <ScrollReveal>
            <SectionLabel num="01" name="The gap" />
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="mt-8 grid gap-px overflow-hidden rounded-[4px] border border-border bg-border md:grid-cols-2">
              <div className="bg-bg p-8 sm:p-10 lg:p-12">
                <p className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-fg-subtle">
                  Software
                </p>
                <h3
                  className="mb-4 font-serif leading-[1.05] tracking-[-0.025em] text-fg"
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    fontWeight: 380,
                  }}
                >
                  Cursor. Copilot. Devin. Lovable.
                </h3>
                <p className="text-[1.02rem] leading-[1.6] text-fg-muted">
                  Multi-billion-dollar AI companies. Every fund has a thesis;
                  every grad with an LLM API key is launching one.
                </p>
              </div>
              <div className="bg-fg p-8 text-[color:var(--ink-on-dark)] sm:p-10 lg:p-12">
                <p
                  className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.16em]"
                  style={{ color: "rgba(244,239,230,0.55)" }}
                >
                  Hardware
                </p>
                <h3
                  className="mb-4 font-serif leading-[1.05] tracking-[-0.025em] text-accent-soft"
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    fontWeight: 380,
                  }}
                >
                  Nothing.
                </h3>
                <p
                  className="text-[1.02rem] leading-[1.6]"
                  style={{ color: "rgba(244,239,230,0.78)" }}
                >
                  The engineers designing chips, satellites, defence systems,
                  energy grids, and medical devices still work in tools from the
                  1990s. The AI revolution skipped them.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <p className="mt-9 max-w-[680px] font-serif text-[1.25rem] italic leading-[1.3] text-fg">
              To build the platform for them, you need a founder fluent in both
              worlds. The intersection is empty.
            </p>
          </ScrollReveal>
        </SectionShell>

        {/* 02 SUBSTRATE */}
        <SectionShell id="substrate" alt>
          <ScrollReveal>
            <SectionLabel num="02" name="Substrate" />
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h2
              className="mb-5 max-w-[18ch] font-serif leading-[1.05] tracking-[-0.028em] text-fg"
              style={{
                fontSize: "clamp(2.2rem, 5.2vw, 3.8rem)",
                fontWeight: 360,
              }}
            >
              The agentic platform for{" "}
              <em
                className="not-italic font-serif italic text-accent"
                style={{ fontWeight: 360 }}
              >
                deep-tech engineering.
              </em>
            </h2>
            <p className="mb-5 max-w-[680px] text-[1.12rem] leading-[1.6] text-fg-muted">
              Tracer first. The other agents are the direction — each unlocked
              by the data and engineer trust the previous one earns.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="mt-10 grid gap-px overflow-hidden rounded-[4px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {agents.map((agent) => (
                <article
                  key={agent.code}
                  className="relative bg-bg p-7 transition-colors duration-500 hover:bg-bg-elevated"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {agent.featured ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-[2px] bg-accent"
                    />
                  ) : null}
                  <p
                    className={`mb-4 inline-block font-mono text-[0.58rem] uppercase tracking-[0.13em] ${
                      agent.featured ? "text-accent" : "text-fg-subtle"
                    }`}
                  >
                    {agent.status}
                  </p>
                  <p className="mb-[10px] font-mono text-[0.68rem] uppercase tracking-[0.12em] text-fg-subtle">
                    {agent.code}
                  </p>
                  <h4
                    className="mb-2 font-serif text-[1.32rem] leading-[1.1] tracking-[-0.018em] text-fg"
                    style={{ fontWeight: 420 }}
                  >
                    {agent.headline}
                  </h4>
                  <p className="text-[0.95rem] leading-[1.5] text-fg-muted">
                    {agent.description}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="mt-9 max-w-[680px] font-serif text-[1.25rem] italic leading-[1.3] text-fg">
              What Cursor is to software, Substrate is being built to be for the
              rest.
            </p>
          </ScrollReveal>
        </SectionShell>

        {/* 03 THE WEDGE */}
        <SectionShell id="wedge">
          <ScrollReveal>
            <SectionLabel num="03" name="The wedge" />
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h2
              className="mb-5 max-w-[18ch] font-serif leading-[1.05] tracking-[-0.028em] text-fg"
              style={{
                fontSize: "clamp(2.2rem, 5.2vw, 3.8rem)",
                fontWeight: 360,
              }}
            >
              We start with Tracer.
            </h2>
            <p className="mb-5 max-w-[680px] text-[1.12rem] leading-[1.6] text-fg-muted">
              A verifiable copilot that helps engineers modernise legacy
              electronic circuits — step by step, engineer-in-the-loop.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="mt-10 grid gap-px overflow-hidden rounded-[4px] border border-border bg-border md:grid-cols-2">
              {wedgeReasons.map((reason) => (
                <article
                  key={reason.number}
                  className="bg-bg p-8 transition-colors duration-500 hover:bg-bg-elevated"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div
                    className="mb-4 font-serif italic leading-none text-accent"
                    style={{ fontSize: "2.2rem", fontWeight: 340 }}
                  >
                    {reason.number}
                  </div>
                  <h4
                    className="mb-3 font-serif text-[1.28rem] tracking-[-0.015em] text-fg"
                    style={{ fontWeight: 440 }}
                  >
                    {reason.claim}
                  </h4>
                  <p className="text-[0.98rem] leading-[1.6] text-fg-muted">
                    {reason.body}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="mt-9 max-w-[680px] font-serif text-[1.25rem] italic leading-[1.3] text-fg">
              Tracer is the wedge. The platform compounds underneath as
              engagements accumulate.
            </p>
          </ScrollReveal>
        </SectionShell>

        {/* 04 WHAT'S PROVEN */}
        <SectionShell id="proven" alt>
          <ScrollReveal>
            <SectionLabel num="04" name="What's proven" />
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h2
              className="mb-10 max-w-[20ch] font-serif leading-[1.05] tracking-[-0.028em] text-fg"
              style={{
                fontSize: "clamp(2.2rem, 5.2vw, 3.8rem)",
                fontWeight: 360,
              }}
            >
              The hardest part is proven. The plan is grounded in real engineer
              pain.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="grid gap-px overflow-hidden rounded-[4px] border border-border bg-border md:grid-cols-2">
              {evidence.map((item) => (
                <article
                  key={item.figure}
                  className="bg-bg p-8 transition-colors duration-500 hover:bg-bg-elevated"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div
                    className="mb-1 font-serif leading-[0.9] tracking-[-0.03em] text-fg"
                    style={{
                      fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
                      fontWeight: 330,
                    }}
                  >
                    {item.figure}
                  </div>
                  <p className="mb-5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-accent">
                    {item.subtitle}
                  </p>
                  <h4
                    className="mb-3 font-serif text-[1.22rem] tracking-[-0.015em] text-fg"
                    style={{ fontWeight: 440 }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[0.96rem] leading-[1.6] text-fg-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <div
              className="mt-12 rounded-[4px] border border-border border-l-[3px] border-l-accent bg-bg p-8 sm:p-12 lg:p-14"
            >
              <p className="mb-6 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-fg-subtle">
                Discovery · What engineers told me
              </p>
              <blockquote
                className="mb-6 font-serif italic leading-[1.3] tracking-[-0.02em] text-fg"
                style={{
                  fontSize: "clamp(1.5rem, 3.4vw, 2.2rem)",
                  fontWeight: 340,
                }}
              >
                &ldquo;Don&apos;t give us an autonomous black box. In our domain
                that just multiplies errors. Give us a tool that works step by
                step alongside the engineer, so we can verify every step.&rdquo;
              </blockquote>
              <p className="max-w-[680px] text-[1rem] leading-[1.6] text-fg-muted">
                I interviewed practising engineers at firms specialising in
                modernisation, and at defence and biomedical companies that
                also do modernisation work. The signal was consistent: legacy
                circuit and system modernisation is real, painful, and they
                urgently need a faster way to do it. Paraphrased from the
                interviews — it is the design brief for Tracer: a verifiable
                copilot, not autopilot.
              </p>
            </div>
          </ScrollReveal>
        </SectionShell>

        {/* 05 WHY NOW */}
        <SectionShell id="whynow">
          <ScrollReveal>
            <SectionLabel num="05" name="Why now" />
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h2
              className="mb-10 max-w-[15ch] font-serif leading-[1.05] tracking-[-0.028em] text-fg"
              style={{
                fontSize: "clamp(2.2rem, 5.2vw, 3.8rem)",
                fontWeight: 360,
              }}
            >
              AI finished software. Deep-tech is{" "}
              <em
                className="not-italic font-serif italic text-accent"
                style={{ fontWeight: 360 }}
              >
                what&apos;s next.
              </em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="border-b border-border">
              {whyNow.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-[26px] border-t border-border py-8 md:grid-cols-[60px_1fr]"
                >
                  <div
                    className="font-serif italic leading-[1.2] text-accent"
                    style={{ fontSize: "1.6rem" }}
                  >
                    {item.number}
                  </div>
                  <div>
                    <h4
                      className="mb-3 font-serif leading-[1.2] tracking-[-0.018em] text-fg"
                      style={{
                        fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
                        fontWeight: 420,
                      }}
                    >
                      {item.claim}
                    </h4>
                    <p className="text-[1.02rem] leading-[1.6] text-fg-muted">
                      {item.support}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <p className="mt-9 max-w-[680px] font-serif text-[1.25rem] italic leading-[1.3] text-fg">
              The window is open. It won&apos;t be for long.
            </p>
          </ScrollReveal>
        </SectionShell>

        {/* 06 WHY ME */}
        <SectionShell id="whyme" alt>
          <ScrollReveal>
            <SectionLabel num="06" name="Why me" />
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h2
              className="max-w-[22ch] font-serif leading-[1.1] tracking-[-0.028em] text-fg"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                fontWeight: 350,
              }}
            >
              Most AI founders can&apos;t read a schematic.
            </h2>
            <p
              className="mt-5 max-w-[40ch] font-serif text-fg-muted"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
            >
              Most hardware engineers can&apos;t ship an agentic system.{" "}
              <em className="not-italic font-serif italic text-accent">
                I do both.
              </em>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p className="mt-10 max-w-[760px] font-mono text-[0.72rem] uppercase leading-[2] tracking-[0.06em] text-fg-subtle">
              Second-year EE at Southampton ·{" "}
              <strong className="font-medium text-accent">Zepler Prize</strong> ·{" "}
              <strong className="font-medium text-accent">
                2nd at AMD Pervasive AI
              </strong>{" "}
              (led 4-person team, built the core) ·{" "}
              <strong className="font-medium text-accent">
                1st at BAE Hack the Future
              </strong>{" "}
              · Argus built solo, deployed to 150 users · Tracer validated
              through engineer interviews
            </p>
          </ScrollReveal>
        </SectionShell>

        {/* KICKER */}
        <section className="px-6 py-28 text-center sm:px-10 lg:py-32">
          <ScrollReveal>
            <h2
              className="mx-auto max-w-[20ch] font-serif leading-[1.18] tracking-[-0.03em] text-fg"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.6rem)",
                fontWeight: 340,
              }}
            >
              Software ate the world. AI agents are about to build it.{" "}
              <em
                className="not-italic font-serif italic text-accent"
                style={{ fontWeight: 340 }}
              >
                Substrate is where they live.
              </em>
            </h2>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </MotionProvider>
  );
}
