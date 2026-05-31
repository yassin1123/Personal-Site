import { ScrollReveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/site/Eyebrow";

const STATS: { k: string; v: React.ReactNode }[] = [
  {
    k: "Wedge",
    v: (
      <>
        <b>Tracer</b> — verifiable copilot for legacy circuit modernisation
      </>
    ),
  },
  {
    k: "Stage",
    v: (
      <>
        Pre-seed — <b>building MVP</b>
      </>
    ),
  },
  {
    k: "Proof",
    v: (
      <>
        Core primitive built at <b>AMD AI Contest</b> (2nd of 100+)
      </>
    ),
  },
  {
    k: "Validation",
    v: <>Engineer interviews — modernisation, defence, biomedical</>,
  },
  {
    k: "Status",
    v: (
      <>
        <b>Problem validated</b>; building Tracer MVP
      </>
    ),
  },
];

export function SubstrateTeaser() {
  return (
    <section
      id="substrate"
      className="relative"
      style={{
        background: "var(--paper-deep)",
        padding: "clamp(72px, 11vh, 140px) 0",
      }}
    >
      <div className="wrap">
        <ScrollReveal>
          <Eyebrow>02 — The bet</Eyebrow>
        </ScrollReveal>

        {/* sub-hero */}
        <div
          className="grid items-end gap-[clamp(34px,5vw,72px)] md:grid-cols-[1.05fr_0.95fr]"
          style={{ marginTop: 34 }}
        >
          <ScrollReveal>
            <h2
              className="font-serif text-ink"
              style={{
                fontWeight: 400,
                fontSize: "clamp(56px, 9vw, 116px)",
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
              }}
            >
              Substrate
            </h2>
            <p
              className="font-serif italic text-ink-2"
              style={{
                fontWeight: 300,
                fontSize: "clamp(22px, 3vw, 32px)",
                marginTop: 12,
              }}
            >
              AI agents for the physical world.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
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
            <p
              className="font-serif text-ink"
              style={{
                fontWeight: 300,
                fontSize: "clamp(22px, 2.7vw, 30px)",
                lineHeight: 1.36,
                letterSpacing: "-0.01em",
                marginTop: 22,
              }}
            >
              Every great AI company is being built for software developers. The
              engineers who design the physical world still work in tools from
              the 1990s.
            </p>
          </ScrollReveal>
        </div>

        {/* pull quote */}
        <ScrollReveal>
          <blockquote
            className="font-serif italic text-ink"
            style={{
              fontWeight: 300,
              fontSize: "clamp(26px, 3.6vw, 44px)",
              lineHeight: 1.26,
              letterSpacing: "-0.018em",
              maxWidth: "28ch",
              margin: "clamp(40px, 6vh, 64px) 0",
              borderLeft: "2px solid var(--accent)",
              padding: "8px 0 8px 28px",
            }}
          >
            What Cursor is to software,{" "}
            <b
              className="not-italic"
              style={{ fontWeight: 500, color: "var(--accent)" }}
            >
              Substrate
            </b>{" "}
            is being built to be for everyone who designs the physical world.
          </blockquote>
        </ScrollReveal>

        {/* two-col body */}
        <div className="grid items-start gap-[clamp(30px,4vw,60px)] md:grid-cols-2">
          <ScrollReveal>
            <div
              className="font-mono uppercase"
              style={{
                fontSize: 11,
                letterSpacing: "0.16em",
                color: "var(--accent-deep)",
                paddingTop: 18,
                borderTop: "1px solid var(--line-2)",
                marginBottom: 22,
              }}
            >
              The thesis
            </div>
            <p
              className="text-ink-2"
              style={{ maxWidth: "48ch", marginBottom: 18 }}
            >
              Substrate is the agentic platform for that gap — chips, circuits,
              embedded systems, hardware.{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                I&apos;m building it because I&apos;m one of the few founders
                fluent in both worlds.
              </strong>
            </p>
            <p
              className="text-ink-2"
              style={{ maxWidth: "48ch", marginBottom: 18 }}
            >
              I&apos;m starting with{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                Tracer
              </strong>
              : a verifiable copilot that helps engineers modernise legacy
              electronic circuits step by step, with the engineer checking each
              output. I picked this wedge because defence reshoring and
              supply-chain mandates have created urgent modernisation budgets,
              and frontier multimodal models can finally read schematics
              end-to-end.
            </p>
            <p
              className="text-ink-2"
              style={{ maxWidth: "48ch", marginBottom: 18 }}
            >
              The engineers I interviewed all said the same thing — they want a
              tool that works
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                {" "}alongside
              </strong>{" "}
              them, not an autonomous black box that multiplies errors in
              high-stakes work.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div
              className="font-mono uppercase"
              style={{
                fontSize: 11,
                letterSpacing: "0.16em",
                color: "var(--accent-deep)",
                paddingTop: 18,
                borderTop: "1px solid var(--line-2)",
                marginBottom: 22,
              }}
            >
              The plan
            </div>
            <p
              className="text-ink-2"
              style={{ maxWidth: "48ch", marginBottom: 18 }}
            >
              Ship Tracer first as an assistant inside engineers&apos; existing
              EDA tools — Altium, KiCad, Cadence — low friction, no behaviour
              change. From there it grows into a purpose-built modernisation
              platform that becomes the foundation other Substrate agents are
              built on.
            </p>
            <p
              className="text-ink-2"
              style={{ maxWidth: "48ch", marginBottom: 18 }}
            >
              Each engagement adds proprietary design data and engineer trust
              the next layer inherits. I led the team that built the core
              technical primitive at the AMD Pervasive AI Contest, where it
              placed{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                2nd of 100+ teams
              </strong>
              .
            </p>
          </ScrollReveal>
        </div>

        {/* stats */}
        <ScrollReveal>
          <div
            className="grid gap-[clamp(26px,3vw,48px)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
            style={{
              marginTop: "clamp(48px, 6vh, 78px)",
              paddingTop: 36,
              borderTop: "1px solid var(--line-2)",
            }}
          >
            {STATS.map((s) => (
              <div key={s.k}>
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
                <div className="text-ink" style={{ fontSize: 15.5, lineHeight: 1.46 }}>
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal>
          <div
            className="flex flex-wrap items-center gap-x-[28px] gap-y-[16px]"
            style={{ marginTop: "clamp(40px, 5vh, 60px)" }}
          >
            <a
              href="/substrate"
              className="group inline-flex items-center gap-[9px] rounded-full border border-ink bg-ink px-[22px] py-[12px] font-medium text-paper transition-all duration-200 hover:bg-accent hover:border-accent hover:-translate-y-px"
              style={{ fontSize: 15 }}
            >
              Full thesis
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
              Download deck (PDF)
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
  );
}
