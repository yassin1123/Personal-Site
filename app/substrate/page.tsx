import type { Metadata } from "next";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";

export const metadata: Metadata = {
  title: "Substrate — AI agents for the physical world",
  description:
    "The agentic platform for deep-tech engineering. Built by Yassin Al-Yassin.",
  openGraph: {
    title: "Substrate",
    description: "AI agents for the physical world.",
    url: "https://yassinalyassin.com/substrate",
    images: [{ url: "/substrate/opengraph-image", width: 1200, height: 630 }],
    type: "article",
  },
};

const STEPS = [
  {
    n: "01",
    h: "Read the circuit",
    p: (
      <>
        Tracer ingests a legacy schematic and infers what each component is,
        what the sub-circuits do, and what the whole design is functionally{" "}
        <em>for</em>. This understanding layer is the genuinely hard part — and
        the primitive my team built at the AMD contest.
      </>
    ),
  },
  {
    n: "02",
    h: "Propose, step by step",
    p: "It suggests a modernisation one verifiable step at a time — never an autonomous black box that multiplies errors in high-stakes work.",
  },
  {
    n: "03",
    h: "Engineer verifies",
    p: "Each output is inspectable and reversible. The engineer stays in command; trust compounds with every confirmed step.",
  },
  {
    n: "04",
    h: "Ships inside their tools",
    p: "Tracer lands as an assistant inside the EDA tools engineers already use — Altium, KiCad, Cadence. Low friction, no behaviour change required.",
  },
];

const WHY_NOW = [
  {
    n: "01",
    h: "Models can finally see",
    p: "Frontier multimodal models can now read schematics end to end. The inputs are no longer the bottleneck they were even a year ago.",
  },
  {
    n: "02",
    h: "Budgets are urgent",
    p: "Defence reshoring and supply-chain mandates have created real, time-pressured budgets for modernising legacy electronics.",
  },
  {
    n: "03",
    h: "Engineers are ready",
    p: "Every engineer I interviewed wants a tool that works alongside them — not one that replaces their judgement. The demand is shaped and waiting.",
  },
];

const ROADMAP = [
  {
    when: "Now",
    h: "Tracer",
    p: "A verifiable modernisation copilot inside engineers' existing EDA tools. Win the wedge; earn the trust and the data.",
    live: true,
  },
  {
    when: "Next",
    h: "Modernisation EDA",
    p: "Tracer grows into a purpose-built modernisation platform — the foundation other Substrate agents are built on.",
  },
  {
    when: "Then",
    h: "The Substrate agents",
    p: "Schematic, Embedded, and beyond — a family of agents for everyone who designs the physical world.",
  },
];

const STACK = [
  {
    lk: "Schematic · Embedded · …",
    lv: "Future agents",
    cls: "l4",
  },
  {
    lk: "Modernisation EDA platform",
    lv: "The foundation",
    cls: "l3",
  },
  {
    lk: "Tracer — verifiable copilot",
    lv: "The wedge · today",
    cls: "l2",
  },
  {
    lk: "Circuit-understanding primitive",
    lv: "Built at AMD · 2nd of 100+",
    cls: "l1",
  },
];

const STATS = [
  {
    k: "Stage",
    v: (
      <>
        Pre-seed — <b>building Tracer MVP</b>
      </>
    ),
  },
  {
    k: "Proof",
    v: (
      <>
        Core primitive built at the <b>AMD Pervasive AI Contest</b> — 2nd of
        100+ teams
      </>
    ),
  },
  {
    k: "Validation",
    v: (
      <>
        Engineer interviews across{" "}
        <b>modernisation, defence &amp; biomedical</b>
      </>
    ),
  },
  {
    k: "Status",
    v: (
      <>
        <b>Problem validated.</b> Building the MVP and talking to founders
      </>
    ),
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-serif text-ink"
      style={{
        fontWeight: 400,
        fontSize: "clamp(34px, 5.4vw, 64px)",
        lineHeight: 1.0,
        letterSpacing: "-0.03em",
        marginTop: 22,
      }}
    >
      {children}
    </h2>
  );
}

const cardBg = "var(--paper-card)";

export default function SubstratePage() {
  return (
    <MotionProvider>
      <SiteNav active="substrate" />
      <main id="main">
        {/* HERO */}
        <header
          className="relative"
          style={{
            padding: "clamp(128px, 19vh, 200px) 0 clamp(60px, 9vh, 104px)",
          }}
        >
          <div className="wrap">
            <ScrollReveal>
              <Eyebrow>The company</Eyebrow>
            </ScrollReveal>
            <ScrollReveal>
              <h1
                className="font-serif text-ink"
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(72px, 16vw, 200px)",
                  lineHeight: 0.86,
                  letterSpacing: "-0.045em",
                  margin: "26px 0 0",
                }}
              >
                Substrate
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <p
                className="font-serif italic text-ink-2"
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(24px, 4vw, 44px)",
                  letterSpacing: "-0.01em",
                  margin: "14px 0 30px",
                }}
              >
                AI agents for the physical world.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <div className="flex flex-wrap gap-[10px]">
                {["Building", "Problem validated", "Pre-seed"].map((c) => (
                  <span
                    key={c}
                    className="font-mono uppercase"
                    style={{
                      fontSize: 10.5,
                      letterSpacing: "0.12em",
                      padding: "6px 12px",
                      borderRadius: 100,
                      background: "var(--accent-soft)",
                      color: "var(--accent-deep)",
                      border:
                        "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div
                className="flex flex-wrap items-center gap-x-[26px] gap-y-[16px]"
                style={{ marginTop: 36 }}
              >
                <a
                  href="/deck"
                  className="group inline-flex items-center gap-[9px] rounded-full border border-ink bg-ink px-[22px] py-[12px] font-medium text-paper transition-all duration-200 hover:bg-accent hover:border-accent hover:-translate-y-px"
                  style={{ fontSize: 15 }}
                >
                  Read the deck
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href="https://www.yassinalyassin.com/substrate-deck.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-[9px] border-b border-line-2 pb-[2px] text-ink transition-colors duration-200 hover:text-accent hover:border-accent"
                  style={{ fontSize: 15, fontWeight: 500 }}
                >
                  Download PDF
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-[9px] border-b border-line-2 pb-[2px] text-ink transition-colors duration-200 hover:text-accent hover:border-accent"
                  style={{ fontSize: 15, fontWeight: 500 }}
                >
                  Get in touch
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </header>

        {/* PROBLEM */}
        <section
          style={{
            background: "var(--paper-deep)",
            padding: "clamp(72px, 11vh, 140px) 0",
          }}
        >
          <div className="wrap">
            <ScrollReveal>
              <Eyebrow>The problem</Eyebrow>
            </ScrollReveal>
            <div
              className="grid items-start gap-[clamp(32px,5vw,72px)] md:grid-cols-2"
              style={{ marginTop: "clamp(40px, 6vh, 64px)" }}
            >
              <ScrollReveal>
                <p
                  className="font-serif text-ink"
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(30px, 5vw, 60px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    maxWidth: "18ch",
                  }}
                >
                  Every great AI company is being built for software developers.
                  The engineers who design the{" "}
                  <em
                    className="not-italic font-serif italic"
                    style={{ color: "var(--accent)" }}
                  >
                    physical world
                  </em>{" "}
                  were left behind.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <p
                  className="font-serif text-ink"
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(21px, 2.6vw, 27px)",
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Chips, circuits, embedded systems, hardware — the foundations
                  everything else runs on.
                </p>
                <p
                  className="text-ink-2"
                  style={{
                    fontSize: 19.5,
                    lineHeight: 1.62,
                    maxWidth: "46ch",
                    margin: "20px 0",
                  }}
                >
                  The people who design them still work in tools from the 1990s.
                  They read schematics by hand, trace nets across pages from
                  memory, and modernise decades-old designs with almost no
                  leverage from the AI revolution happening one floor up.
                </p>
                <p
                  className="text-ink-2"
                  style={{
                    fontSize: 19.5,
                    lineHeight: 1.62,
                    maxWidth: "46ch",
                  }}
                >
                  It isn&apos;t a small niche. It&apos;s the entire substrate
                  beneath modern technology — and it&apos;s been structurally
                  skipped.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* WHY ME */}
        <section style={{ padding: "clamp(72px, 11vh, 140px) 0" }}>
          <div className="wrap">
            <ScrollReveal>
              <Eyebrow>Why me</Eyebrow>
            </ScrollReveal>
            <div
              className="grid items-start gap-[clamp(32px,5vw,72px)] md:grid-cols-2"
              style={{ marginTop: "clamp(40px, 6vh, 64px)" }}
            >
              <ScrollReveal>
                <p
                  className="font-serif text-ink"
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(30px, 5vw, 60px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    maxWidth: "18ch",
                  }}
                >
                  Building this needs someone fluent in{" "}
                  <em
                    className="not-italic font-serif italic"
                    style={{ color: "var(--accent)" }}
                  >
                    both
                  </em>{" "}
                  worlds. Almost no one is.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <p
                  className="font-serif text-ink"
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(21px, 2.6vw, 27px)",
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em",
                  }}
                >
                  To build AI for hardware you have to actually understand
                  electronics <em>and</em> modern machine learning. Those two
                  populations barely overlap.
                </p>
                <p
                  className="text-ink-2"
                  style={{
                    fontSize: 19.5,
                    lineHeight: 1.62,
                    maxWidth: "46ch",
                    margin: "20px 0",
                  }}
                >
                  I&apos;m a second-year Electronic Engineering student who has
                  spent two years building and shipping AI products.{" "}
                  <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                    That combination is the whole thesis.
                  </strong>{" "}
                  The software-AI world is building for software; the hardware
                  world can&apos;t build the tools it wishes existed. I sit on
                  both sides of that wall.
                </p>
                <a
                  href="/notes/the-knowledge-wall"
                  className="group inline-flex items-center gap-[9px] border-b border-line-2 pb-[2px] text-ink transition-colors duration-200 hover:text-accent hover:border-accent"
                  style={{ fontSize: 15, fontWeight: 500, marginTop: 8 }}
                >
                  Read: The knowledge wall
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                  >
                    ↗
                  </span>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* TRACER */}
        <section
          style={{
            background: "var(--paper-deep)",
            padding: "clamp(72px, 11vh, 140px) 0",
          }}
        >
          <div className="wrap">
            <ScrollReveal>
              <Eyebrow>The wedge</Eyebrow>
            </ScrollReveal>
            <ScrollReveal>
              <SectionTitle>
                <span style={{ maxWidth: "16ch", display: "inline-block" }}>
                  Tracer — a{" "}
                  <em
                    className="not-italic font-serif italic"
                    style={{ color: "var(--accent)" }}
                  >
                    verifiable
                  </em>{" "}
                  copilot for legacy circuit modernisation.
                </span>
              </SectionTitle>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p
                className="font-serif text-ink"
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(21px, 2.6vw, 27px)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                  maxWidth: "56ch",
                  marginTop: 18,
                }}
              >
                A wedge you can win beats a platform you can only describe.
                Tracer helps engineers modernise legacy electronic circuits step
                by step — with the engineer checking every output.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div
                style={{
                  marginTop: "clamp(40px, 6vh, 60px)",
                  borderTop: "1px solid var(--line-2)",
                }}
              >
                {STEPS.map((s) => (
                  <div
                    key={s.n}
                    className="grid items-start"
                    style={{
                      gridTemplateColumns: "64px 1fr",
                      gap: 24,
                      padding: "28px 4px",
                      borderBottom: "1px solid var(--line)",
                    }}
                  >
                    <div
                      className="font-serif text-accent"
                      style={{ fontSize: 30, lineHeight: 1 }}
                    >
                      {s.n}
                    </div>
                    <div>
                      <h3
                        className="font-serif text-ink"
                        style={{
                          fontWeight: 400,
                          fontSize: "clamp(21px, 2.6vw, 27px)",
                          letterSpacing: "-0.015em",
                          margin: "0 0 8px",
                        }}
                      >
                        {s.h}
                      </h3>
                      <p
                        className="text-ink-2"
                        style={{
                          fontSize: 17.5,
                          lineHeight: 1.58,
                          maxWidth: "60ch",
                        }}
                      >
                        {s.p}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* WHY NOW */}
        <section style={{ padding: "clamp(72px, 11vh, 140px) 0" }}>
          <div className="wrap">
            <ScrollReveal>
              <Eyebrow>Why now</Eyebrow>
            </ScrollReveal>
            <ScrollReveal>
              <SectionTitle>
                Three things are{" "}
                <em
                  className="not-italic font-serif italic"
                  style={{ color: "var(--accent)" }}
                >
                  true at once.
                </em>
              </SectionTitle>
            </ScrollReveal>
            <div
              className="grid gap-[20px] md:grid-cols-3"
              style={{ marginTop: "clamp(40px, 6vh, 60px)" }}
            >
              {WHY_NOW.map((c, i) => (
                <ScrollReveal key={c.n} delay={i * 0.06}>
                  <div
                    className="rounded-[14px] border border-line"
                    style={{
                      background: cardBg,
                      padding: "30px 28px",
                    }}
                  >
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        color: "var(--accent-deep)",
                      }}
                    >
                      {c.n}
                    </div>
                    <h3
                      className="font-serif text-ink"
                      style={{
                        fontSize: 24,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        margin: "16px 0 12px",
                      }}
                    >
                      {c.h}
                    </h3>
                    <p
                      className="text-ink-2"
                      style={{ fontSize: 16.5, lineHeight: 1.58 }}
                    >
                      {c.p}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ROADMAP + STACK */}
        <section
          style={{
            background: "var(--paper-deep)",
            padding: "clamp(72px, 11vh, 140px) 0",
          }}
        >
          <div className="wrap">
            <ScrollReveal>
              <Eyebrow>The path</Eyebrow>
            </ScrollReveal>
            <ScrollReveal>
              <SectionTitle>
                From wedge to{" "}
                <em
                  className="not-italic font-serif italic"
                  style={{ color: "var(--accent)" }}
                >
                  platform.
                </em>
              </SectionTitle>
            </ScrollReveal>
            <div
              className="grid gap-0 md:grid-cols-3"
              style={{
                marginTop: "clamp(40px, 6vh, 60px)",
                borderTop: "2px solid var(--ink)",
              }}
            >
              {ROADMAP.map((p, i) => (
                <ScrollReveal key={p.when} delay={i * 0.06}>
                  <div
                    className="relative"
                    style={{
                      padding: "28px 24px 32px 0",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute"
                      style={{
                        top: -2,
                        left: 0,
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: p.live ? "var(--accent)" : "var(--ink)",
                        transform: "translateY(-50%)",
                        boxShadow: p.live
                          ? "0 0 0 4px var(--accent-soft)"
                          : undefined,
                      }}
                    />
                    <div
                      className="font-mono uppercase"
                      style={{
                        fontSize: 10.5,
                        letterSpacing: "0.14em",
                        color: p.live ? "var(--accent-deep)" : "var(--ink-3)",
                        marginBottom: 14,
                      }}
                    >
                      {p.when}
                    </div>
                    <h3
                      className="font-serif text-ink"
                      style={{
                        fontWeight: 400,
                        fontSize: "clamp(24px, 3vw, 32px)",
                        letterSpacing: "-0.02em",
                        margin: "0 0 12px",
                      }}
                    >
                      {p.h}
                    </h3>
                    <p
                      className="text-ink-2"
                      style={{
                        fontSize: 17,
                        lineHeight: 1.6,
                        maxWidth: "34ch",
                      }}
                    >
                      {p.p}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* stack */}
            <div
              className="flex flex-col gap-[8px]"
              style={{ marginTop: "clamp(36px, 5vh, 52px)" }}
            >
              {STACK.map((l) => {
                const isL1 = l.cls === "l1";
                const isL2 = l.cls === "l2";
                const isL4 = l.cls === "l4";
                return (
                  <ScrollReveal key={l.lk}>
                    <div
                      className="flex items-center justify-between gap-[18px] rounded-[12px] border"
                      style={{
                        padding: "20px 26px",
                        background: isL1
                          ? "var(--accent)"
                          : isL2
                            ? "color-mix(in srgb, var(--accent) 16%, var(--paper-card))"
                            : cardBg,
                        borderColor: isL1 ? "var(--accent)" : "var(--line)",
                        borderStyle: isL4 ? "dashed" : "solid",
                      }}
                    >
                      <span
                        className="font-serif"
                        style={{
                          fontSize: "clamp(18px, 2.4vw, 23px)",
                          letterSpacing: "-0.01em",
                          color: isL1
                            ? "#fff"
                            : isL4
                              ? "var(--ink-2)"
                              : "var(--ink)",
                        }}
                      >
                        {l.lk}
                      </span>
                      <span
                        className="font-mono uppercase text-right"
                        style={{
                          fontSize: 11,
                          letterSpacing: "0.08em",
                          color: isL1
                            ? "color-mix(in srgb, #fff 78%, var(--accent))"
                            : "var(--ink-3)",
                        }}
                      >
                        {l.lv}
                      </span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* MOAT */}
        <section style={{ padding: "clamp(72px, 11vh, 140px) 0" }}>
          <div className="wrap">
            <div className="grid items-start gap-[clamp(32px,5vw,72px)] md:grid-cols-2">
              <ScrollReveal>
                <Eyebrow>The compounding moat</Eyebrow>
                <p
                  className="font-serif text-ink"
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(30px, 5vw, 60px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    maxWidth: "18ch",
                    marginTop: 26,
                  }}
                >
                  Every engagement makes the next one{" "}
                  <em
                    className="not-italic font-serif italic"
                    style={{ color: "var(--accent)" }}
                  >
                    harder to beat.
                  </em>
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <p
                  className="font-serif text-ink self-end"
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(21px, 2.6vw, 27px)",
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Each modernisation Tracer touches adds proprietary design data
                  and engineer trust that the next layer inherits.
                </p>
                <p
                  className="text-ink-2"
                  style={{
                    fontSize: 19.5,
                    lineHeight: 1.62,
                    maxWidth: "46ch",
                    marginTop: 20,
                  }}
                >
                  Data the rest of the market can&apos;t get. Trust a black box
                  can&apos;t earn. The platform doesn&apos;t just grow — it gets
                  structurally more defensible with use.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section
          style={{
            background: "var(--paper-deep)",
            padding: "clamp(72px, 11vh, 140px) 0",
          }}
        >
          <div className="wrap">
            <ScrollReveal>
              <Eyebrow>Where it stands</Eyebrow>
            </ScrollReveal>
            <div
              className="grid gap-[clamp(24px,3vw,44px)] sm:grid-cols-2 lg:grid-cols-4"
              style={{
                marginTop: "clamp(40px, 6vh, 60px)",
                paddingTop: 34,
                borderTop: "1px solid var(--line-2)",
              }}
            >
              {STATS.map((s) => (
                <ScrollReveal key={s.k}>
                  <div>
                    <div
                      className="font-mono uppercase"
                      style={{
                        fontSize: 10.5,
                        letterSpacing: "0.14em",
                        color: "var(--accent-deep)",
                        marginBottom: 13,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="block"
                        style={{
                          width: 22,
                          height: 2,
                          background: "var(--accent)",
                          marginBottom: 15,
                          borderRadius: 2,
                        }}
                      />
                      {s.k}
                    </div>
                    <div
                      className="text-ink"
                      style={{ fontSize: 15.5, lineHeight: 1.46 }}
                    >
                      {s.v}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* THE BET */}
        <section style={{ padding: "clamp(72px, 11vh, 140px) 0" }}>
          <div className="wrap">
            <ScrollReveal>
              <Eyebrow>The bet</Eyebrow>
            </ScrollReveal>
            <ScrollReveal>
              <p
                className="font-serif text-ink"
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(30px, 5.2vw, 64px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  maxWidth: "16ch",
                  marginTop: 26,
                }}
              >
                What Cursor is to software,{" "}
                <b
                  className="not-italic font-serif italic"
                  style={{
                    fontWeight: 400,
                    color: "var(--accent)",
                  }}
                >
                  Substrate
                </b>{" "}
                is being built to be for everyone who designs the physical
                world.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div
                className="flex flex-wrap items-center gap-x-[26px] gap-y-[16px]"
                style={{ marginTop: 44 }}
              >
                <a
                  href="/deck"
                  className="group inline-flex items-center gap-[9px] rounded-full border border-ink bg-ink px-[22px] py-[12px] font-medium text-paper transition-all duration-200 hover:bg-accent hover:border-accent hover:-translate-y-px"
                  style={{ fontSize: 15 }}
                >
                  Read the deck
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href="https://www.yassinalyassin.com/substrate-deck.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-[9px] border-b border-line-2 pb-[2px] text-ink transition-colors duration-200 hover:text-accent hover:border-accent"
                  style={{ fontSize: 15, fontWeight: 500 }}
                >
                  Download PDF
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-[9px] border-b border-line-2 pb-[2px] text-ink transition-colors duration-200 hover:text-accent hover:border-accent"
                  style={{ fontSize: 15, fontWeight: 500 }}
                >
                  Get in touch
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </MotionProvider>
  );
}
