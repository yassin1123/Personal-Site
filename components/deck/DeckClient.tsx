"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SLIDES = [
  { id: "01", label: "Pitch" },
  { id: "02", label: "Problem" },
  { id: "03", label: "Why now" },
  { id: "04", label: "Solution" },
  { id: "05", label: "How it works" },
  { id: "06", label: "Wedge to platform" },
  { id: "07", label: "Moat" },
  { id: "08", label: "Traction" },
  { id: "09", label: "Founder" },
  { id: "10", label: "The ask" },
];

const TOTAL = SLIDES.length;

export function DeckClient() {
  const [cur, setCur] = useState(0);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(
              (e.target as HTMLElement).dataset.idx ?? "0",
            );
            setCur(idx);
          }
        });
      },
      { threshold: 0.55 },
    );
    slideRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    function go(dir: number) {
      const y = window.scrollY + window.innerHeight * 0.5;
      let idx = 0;
      slideRefs.current.forEach((el, i) => {
        if (el && el.offsetTop <= y) idx = i;
      });
      const next = Math.max(0, Math.min(TOTAL - 1, idx + dir));
      slideRefs.current[next]?.scrollIntoView({ behavior: "smooth" });
    }
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowRight" ||
        e.key === "PageDown"
      ) {
        e.preventDefault();
        go(1);
      } else if (
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "PageUp"
      ) {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slideTo = (i: number) =>
    slideRefs.current[i]?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="deck-root">
      {/* Top bar — uses mix-blend-mode to invert on dark slides */}
      <div
        className="deck-bar fixed inset-x-0 top-0 z-[200] flex items-center justify-between pointer-events-none"
        style={{
          padding: "16px var(--gutter)",
          mixBlendMode: "difference",
          color: "#fff",
        }}
      >
        <Link
          href="/substrate"
          className="pointer-events-auto font-mono uppercase"
          style={{ fontSize: 11, letterSpacing: "0.12em" }}
        >
          ← Substrate
        </Link>
        <span
          className="font-mono uppercase"
          style={{ fontSize: 11, letterSpacing: "0.12em" }}
        >
          <b style={{ color: "#fff" }}>
            {String(cur + 1).padStart(2, "0")}
          </b>{" "}
          / {String(TOTAL).padStart(2, "0")}
        </span>
      </div>

      {/* Side dots */}
      <div
        className="fixed right-[22px] top-1/2 z-[200] hidden flex-col gap-[11px] sm:flex"
        style={{ transform: "translateY(-50%)" }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => slideTo(i)}
            className="cursor-pointer border-0 p-0 transition-[transform,background] duration-200"
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background:
                cur === i ? "#fff" : "var(--line-2)",
              transform: cur === i ? "scale(1.5)" : "scale(1)",
              mixBlendMode: "difference",
            }}
          />
        ))}
      </div>

      <main
        className="deck-main"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {/* 01 TITLE */}
        <Slide
          ref={(el) => {
            slideRefs.current[0] = el;
          }}
          idx={0}
          dark
          label="01 — Pitch"
        >
          <Kicker dark>Pre-seed · 2026</Kicker>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(80px, 17vw, 220px)",
              lineHeight: 0.84,
              letterSpacing: "-0.05em",
              margin: "18px 0 0",
            }}
          >
            Substrate
          </h1>
          <p
            className="font-serif italic"
            style={{
              fontWeight: 300,
              fontSize: "clamp(22px, 3.4vw, 40px)",
              color: "#c9c2b2",
              marginTop: 18,
            }}
          >
            AI agents for the physical world.
          </p>
          <p
            className="font-mono uppercase"
            style={{
              fontSize: 12,
              letterSpacing: "0.14em",
              color: "#8d8678",
              marginTop: 40,
            }}
          >
            Yassin Al-Yassin · Hardware-AI bilingual founder
          </p>
        </Slide>

        {/* 02 PROBLEM */}
        <Slide
          ref={(el) => {
            slideRefs.current[1] = el;
          }}
          idx={1}
          label="02 — The problem"
        >
          <Kicker>The problem</Kicker>
          <Big maxCh="16ch">
            Every great AI company is built for{" "}
            <Em>software</Em> developers.
          </Big>
          <Sub>
            The engineers who design the physical world — chips, circuits,
            embedded systems, hardware — still work in tools from the 1990s.
            The AI revolution skipped them entirely.
          </Sub>
        </Slide>

        {/* 03 WHY NOW */}
        <Slide
          ref={(el) => {
            slideRefs.current[2] = el;
          }}
          idx={2}
          band
          label="03 — Why now"
        >
          <Kicker>Why now</Kicker>
          <Mid>
            Three things are <Em>true at once.</Em>
          </Mid>
          <ThreeGrid
            items={[
              {
                n: "01",
                h: "Models can see",
                p: "Frontier multimodal models can finally read schematics end to end.",
              },
              {
                n: "02",
                h: "Budgets are urgent",
                p: "Defence reshoring and supply-chain mandates created real modernisation budgets.",
              },
              {
                n: "03",
                h: "Engineers are ready",
                p: "They want a tool that works alongside them — not a black box.",
              },
            ]}
          />
        </Slide>

        {/* 04 SOLUTION */}
        <Slide
          ref={(el) => {
            slideRefs.current[3] = el;
          }}
          idx={3}
          label="04 — The solution"
        >
          <Kicker>The wedge</Kicker>
          <Big maxCh="15ch">
            Tracer — a <Em>verifiable</Em> copilot for legacy circuits.
          </Big>
          <Sub>
            It helps engineers modernise legacy electronic circuits step by
            step, with the engineer checking every output. Ships inside the
            EDA tools they already use — Altium, KiCad, Cadence.
          </Sub>
        </Slide>

        {/* 05 HOW IT WORKS */}
        <Slide
          ref={(el) => {
            slideRefs.current[4] = el;
          }}
          idx={4}
          band
          label="05 — How it works"
        >
          <Kicker>How it works</Kicker>
          <Rows
            items={[
              {
                n: "01",
                h: "Read the circuit",
                p: "Infers what each component is, what the sub-circuits do, and what the whole design is for. The hard part — and the primitive we built at the AMD contest.",
              },
              {
                n: "02",
                h: "Propose, step by step",
                p: "A modernisation one verifiable step at a time — never an autonomous black box.",
              },
              {
                n: "03",
                h: "Engineer verifies",
                p: "Every output inspectable and reversible. Trust compounds with each confirmed step.",
              },
            ]}
          />
        </Slide>

        {/* 06 WEDGE TO PLATFORM */}
        <Slide
          ref={(el) => {
            slideRefs.current[5] = el;
          }}
          idx={5}
          label="06 — The path"
        >
          <Kicker>From wedge to platform</Kicker>
          <Mid>
            Win the wedge. <Em>Inherit</Em> the platform.
          </Mid>
          <ThreeGrid
            items={[
              {
                n: "Now",
                h: "Tracer",
                p: "Verifiable modernisation copilot inside existing EDA tools.",
              },
              {
                n: "Next",
                h: "Modernisation EDA",
                p: "A purpose-built platform — the foundation other agents build on.",
              },
              {
                n: "Then",
                h: "Substrate agents",
                p: "Schematic, Embedded & beyond — for everyone designing the physical world.",
              },
            ]}
          />
        </Slide>

        {/* 07 MOAT */}
        <Slide
          ref={(el) => {
            slideRefs.current[6] = el;
          }}
          idx={6}
          band
          label="07 — The moat"
        >
          <Kicker>The compounding moat</Kicker>
          <Big maxCh="17ch">
            Every engagement makes the next one{" "}
            <Em>harder to beat.</Em>
          </Big>
          <Sub>
            Each modernisation adds proprietary design data and engineer trust
            the next layer inherits. Data the market can&apos;t get; trust a
            black box can&apos;t earn.
          </Sub>
        </Slide>

        {/* 08 TRACTION */}
        <Slide
          ref={(el) => {
            slideRefs.current[7] = el;
          }}
          idx={7}
          dark
          label="08 — Proof"
        >
          <Kicker dark>Proof &amp; traction</Kicker>
          <Mid dark style={{ marginBottom: 14 }}>
            Already on the board.
          </Mid>
          <div className="grid gap-[0_60px] sm:grid-cols-2 mt-4">
            {[
              {
                n: "2nd",
                t: (
                  <>
                    of 100+ teams at the{" "}
                    <b style={{ color: "#fff", fontWeight: 600 }}>
                      AMD Pervasive AI Contest
                    </b>{" "}
                    — led the core circuit-reasoning primitive
                  </>
                ),
              },
              {
                n: "1st",
                t: (
                  <>
                    at{" "}
                    <b style={{ color: "#fff", fontWeight: 600 }}>
                      BAE Systems Hack the Future
                    </b>{" "}
                    — full system shipped in 24 hours
                  </>
                ),
              },
              {
                n: "150",
                t: (
                  <>
                    users on{" "}
                    <b style={{ color: "#fff", fontWeight: 600 }}>Argus</b>,
                    built solo — £3K enterprise prize, pitched at Future Worlds
                  </>
                ),
              },
              {
                n: "∞",
                t: (
                  <>
                    <b style={{ color: "#fff", fontWeight: 600 }}>
                      Problem validated
                    </b>{" "}
                    through interviews across modernisation, defence &amp;
                    biomedical
                  </>
                ),
              },
            ].map((tr, i) => (
              <div
                key={i}
                className="flex items-baseline gap-[18px]"
                style={{
                  padding: "22px 0",
                  borderBottom: "1px solid #34302a",
                }}
              >
                <span
                  className="font-serif flex-none"
                  style={{
                    fontSize: "clamp(34px, 4vw, 50px)",
                    color: "var(--accent-light)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {tr.n}
                </span>
                <span
                  style={{
                    fontSize: 15,
                    color: "#c9c2b2",
                    lineHeight: 1.4,
                  }}
                >
                  {tr.t}
                </span>
              </div>
            ))}
          </div>
        </Slide>

        {/* 09 FOUNDER */}
        <Slide
          ref={(el) => {
            slideRefs.current[8] = el;
          }}
          idx={8}
          label="09 — Founder"
        >
          <Kicker>Why me</Kicker>
          <Big maxCh="15ch">
            One of the few founders fluent in <Em>both</Em> worlds.
          </Big>
          <Sub>
            Second-year Electronic Engineering at Southampton, two years
            building and shipping AI products. Building AI for hardware needs
            someone who understands electronics <em>and</em> modern ML. Those
            populations barely overlap — that&apos;s the whole thesis.
          </Sub>
        </Slide>

        {/* 10 ASK */}
        <Slide
          ref={(el) => {
            slideRefs.current[9] = el;
          }}
          idx={9}
          dark
          label="10 — The ask"
        >
          <Kicker dark>The bet</Kicker>
          <Big maxCh="16ch">
            What Cursor is to software,{" "}
            <Em dark>Substrate</Em> is for the physical world.
          </Big>
          <Sub dark>
            Pre-seed, building the Tracer MVP, available for founder
            conversations.
          </Sub>
          <div className="mt-10 flex flex-wrap items-center gap-x-[24px] gap-y-[16px]">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-[9px] rounded-full border bg-paper px-[22px] py-[12px] font-medium text-ink transition-all duration-200 hover:bg-[var(--accent-light)] hover:border-[var(--accent-light)] hover:-translate-y-px"
              style={{
                fontSize: 15,
                borderColor: "var(--paper)",
              }}
            >
              Get in touch
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              >
                ↗
              </span>
            </Link>
            <a
              href="https://www.yassinalyassin.com/substrate-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-[9px] border-b pb-[2px] text-paper transition-colors duration-200 hover:text-[var(--accent-light)] hover:border-[var(--accent-light)]"
              style={{
                fontSize: 15,
                fontWeight: 500,
                borderColor: "#4a443a",
              }}
            >
              Download PDF
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              >
                ↗
              </span>
            </a>
            <Link
              href="/substrate"
              className="group inline-flex items-center gap-[9px] border-b pb-[2px] text-paper transition-colors duration-200 hover:text-[var(--accent-light)] hover:border-[var(--accent-light)]"
              style={{
                fontSize: 15,
                fontWeight: 500,
                borderColor: "#4a443a",
              }}
            >
              Full thesis
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              >
                ↗
              </span>
            </Link>
          </div>
        </Slide>
      </main>

      <style>{`
        .deck-root { background: var(--paper); }
      `}</style>
    </div>
  );
}

/* ============================================================
   Slide primitives
   ============================================================ */

type SlideProps = {
  idx: number;
  dark?: boolean;
  band?: boolean;
  label: string;
  children: React.ReactNode;
};

const Slide = function Slide({
  idx,
  dark,
  band,
  label,
  children,
  ref,
}: SlideProps & { ref: React.Ref<HTMLElement> }) {
  return (
    <section
      ref={ref}
      data-idx={idx}
      className="relative flex items-center"
      style={{
        minHeight: "100svh",
        scrollSnapAlign: "start",
        padding: "92px var(--gutter) 76px",
        background: dark
          ? "var(--ink)"
          : band
            ? "var(--paper-deep)"
            : "var(--paper)",
        color: dark ? "var(--paper)" : "var(--ink)",
      }}
    >
      <span
        className="absolute font-mono uppercase"
        style={{
          top: "clamp(70px, 11vh, 104px)",
          left: "var(--gutter)",
          fontSize: 11,
          letterSpacing: "0.18em",
          color: dark ? "#8d8678" : "var(--ink-3)",
        }}
      >
        {label}
      </span>
      <div
        className="mx-auto w-full"
        style={{ maxWidth: "var(--maxw)" }}
      >
        {children}
      </div>
    </section>
  );
};

function Kicker({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className="font-mono uppercase"
      style={{
        fontSize: 11.5,
        letterSpacing: "0.16em",
        color: dark ? "var(--accent-light)" : "var(--accent-deep)",
        marginBottom: 22,
      }}
    >
      {children}
    </div>
  );
}

function Big({
  children,
  maxCh,
}: {
  children: React.ReactNode;
  maxCh?: string;
}) {
  return (
    <div
      className="font-serif"
      style={{
        fontWeight: 400,
        fontSize: "clamp(40px, 7vw, 92px)",
        lineHeight: 1.0,
        letterSpacing: "-0.035em",
        maxWidth: maxCh,
      }}
    >
      {children}
    </div>
  );
}

function Mid({
  children,
  dark = false,
  style,
}: {
  children: React.ReactNode;
  dark?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="font-serif"
      style={{
        fontWeight: 300,
        fontSize: "clamp(26px, 4vw, 50px)",
        lineHeight: 1.14,
        letterSpacing: "-0.025em",
        maxWidth: "20ch",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Sub({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      style={{
        fontSize: "clamp(17px, 2vw, 20px)",
        color: dark ? "#c9c2b2" : "var(--ink-2)",
        maxWidth: "52ch",
        lineHeight: 1.6,
        marginTop: 24,
      }}
    >
      {children}
    </p>
  );
}

function Em({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <em
      className="not-italic font-serif italic"
      style={{ color: dark ? "var(--accent-light)" : "var(--accent)" }}
    >
      {children}
    </em>
  );
}

function ThreeGrid({
  items,
}: {
  items: { n: string; h: string; p: string }[];
}) {
  return (
    <div
      className="grid gap-[26px] sm:grid-cols-3"
      style={{ marginTop: "clamp(38px, 6vh, 56px)" }}
    >
      {items.map((it) => (
        <div key={it.n}>
          <div
            className="font-mono uppercase"
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "var(--accent-deep)",
            }}
          >
            {it.n}
          </div>
          <h3
            className="font-serif"
            style={{
              fontWeight: 400,
              fontSize: 25,
              letterSpacing: "-0.02em",
              margin: "12px 0 10px",
            }}
          >
            {it.h}
          </h3>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.55,
              color: "var(--ink-2)",
            }}
          >
            {it.p}
          </p>
        </div>
      ))}
    </div>
  );
}

function Rows({
  items,
}: {
  items: { n: string; h: string; p: string }[];
}) {
  return (
    <div className="mt-[18px]">
      {items.map((r) => (
        <div
          key={r.n}
          className="grid items-baseline"
          style={{
            gridTemplateColumns: "56px 1fr",
            gap: 22,
            padding: "24px 0",
            borderTop: "1px solid var(--line)",
          }}
        >
          <div
            className="font-serif"
            style={{
              fontSize: 26,
              color: "var(--accent)",
            }}
          >
            {r.n}
          </div>
          <div>
            <h3
              className="font-serif"
              style={{
                fontWeight: 400,
                fontSize: "clamp(22px, 2.8vw, 30px)",
                letterSpacing: "-0.015em",
              }}
            >
              {r.h}
            </h3>
            <p
              style={{
                margin: "7px 0 0",
                color: "var(--ink-2)",
                fontSize: 16,
                maxWidth: "62ch",
              }}
            >
              {r.p}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
