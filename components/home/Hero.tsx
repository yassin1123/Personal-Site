"use client";

import { useEffect, useRef } from "react";
import * as m from "motion/react-m";
import { Eyebrow } from "@/components/site/Eyebrow";

const ease = [0.4, 0, 0.2, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease },
  }),
};

export function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => ref.current?.classList.add("lit"), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      id="now"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="hero-section relative flex flex-col justify-center"
      style={{
        minHeight: "100svh",
        padding: "clamp(78px, 11vh, 120px) 0 clamp(64px, 11vh, 96px)",
      }}
    >
      <div className="wrap" style={{ maxWidth: 1340 }}>
        <m.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
          <Eyebrow>01 — Now</Eyebrow>
        </m.div>

        <m.p
          initial="hidden"
          animate="show"
          custom={0.08}
          variants={fadeUp}
          className="font-serif italic text-ink-2"
          style={{
            fontSize: "clamp(22px, min(3.3vw, 3.7vh), 30px)",
            fontWeight: 300,
            marginBottom: 6,
            marginTop: 24,
          }}
        >
          Hi, I&apos;m
        </m.p>

        <m.h1
          initial="hidden"
          animate="show"
          custom={0.08}
          variants={fadeUp}
          className="font-serif text-ink"
          style={{
            fontWeight: 400,
            fontSize: "clamp(50px, min(11.5vw, 16vh), 134px)",
            lineHeight: 0.9,
            letterSpacing: "-0.035em",
            margin: "0 0 clamp(18px, 3vh, 34px)",
            maxWidth: "18ch",
          }}
        >
          <span className="block">Yassin</span> Al-Yassin
        </m.h1>

        <m.p
          initial="hidden"
          animate="show"
          custom={0.16}
          variants={fadeUp}
          className="font-serif text-ink"
          style={{
            fontWeight: 300,
            fontSize: "clamp(22px, min(3.2vw, 4vh), 34px)",
            lineHeight: 1.32,
            letterSpacing: "-0.015em",
            maxWidth: "clamp(320px, 56vw, 680px)",
            margin: "0 0 clamp(26px, 3.8vh, 34px)",
          }}
        >
          I build agentic AI for the engineers who design
          <br />
          the{" "}
          <span className="hero-uline relative inline-block whitespace-nowrap font-serif italic text-accent">
            physical world
            <svg
              aria-hidden="true"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              className="absolute left-0 right-0 w-full overflow-visible"
              style={{ bottom: "-0.18em", height: "0.4em" }}
            >
              <path
                d="M3 8 C 50 2, 150 2, 197 7"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="3.4"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 340,
                  strokeDashoffset: 340,
                  animation:
                    "heroDraw 1s cubic-bezier(0.7,0,0.3,1) 0.55s forwards",
                }}
              />
            </svg>
          </span>
          .
        </m.p>

        <m.p
          initial="hidden"
          animate="show"
          custom={0.24}
          variants={fadeUp}
          className="text-ink-2"
          style={{
            maxWidth: "clamp(320px, 56vw, 680px)",
            fontSize: "clamp(15.5px, min(1.7vw, 2vh), 17px)",
            margin: "0 0 clamp(20px, 3.2vh, 32px)",
          }}
        >
          Right now that&apos;s{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
            Substrate
          </strong>
          , and I&apos;m all in. Second-year Electronic Engineering at Southampton —
          one of the few founders fluent in both hardware and AI.
        </m.p>

        <m.div
          initial="hidden"
          animate="show"
          custom={0.32}
          variants={fadeUp}
          className="flex flex-wrap items-center gap-x-[18px] gap-y-[14px]"
        >
          <a
            href="#substrate"
            className="group inline-flex items-center gap-[9px] rounded-full border border-ink bg-ink px-[22px] text-paper transition-all duration-200 hover:bg-accent hover:border-accent hover:-translate-y-px"
            style={{ height: 52, fontSize: 15, fontWeight: 500 }}
          >
            See what I&apos;m building
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-y-[3px]"
            >
              ↓
            </span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-[9px] rounded-full border border-line-2 px-4 text-ink transition-all duration-200 hover:border-accent hover:-translate-y-px"
            style={{
              height: 52,
              background: "var(--paper-card)",
              fontSize: 11.5,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            <span
              className="inline-block rounded-full"
              style={{
                width: 7,
                height: 7,
                background: "#2faa66",
                animation: "heroLivePulse 2.4s infinite",
              }}
            />
            Available for founder conversations
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              style={{ color: "var(--ink-3)" }}
            >
              ↗
            </span>
          </a>
        </m.div>
      </div>

      <div
        className="absolute flex items-center gap-[10px] font-mono uppercase"
        style={{
          left: "var(--gutter)",
          bottom: "clamp(20px, 4vh, 34px)",
          fontSize: 11,
          letterSpacing: "0.16em",
          color: "var(--ink-3)",
        }}
      >
        <span
          className="relative block overflow-hidden"
          style={{ width: 1, height: 30, background: "var(--line-2)" }}
        >
          <span
            aria-hidden="true"
            className="absolute left-0 block"
            style={{
              top: -30,
              width: 1,
              height: 30,
              background: "var(--accent)",
              animation: "heroCue 2.2s infinite",
            }}
          />
        </span>
        Scroll
      </div>

      <style>{`
        @keyframes heroDraw { to { stroke-dashoffset: 0; } }
        @keyframes heroLivePulse {
          0% { box-shadow: 0 0 0 0 rgba(47,170,102,.45); }
          70% { box-shadow: 0 0 0 7px rgba(47,170,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(47,170,102,0); }
        }
        @keyframes heroCue {
          0% { top: -30px; }
          60%, 100% { top: 30px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-section svg path { animation: none !important; stroke-dashoffset: 0 !important; }
        }
      `}</style>
    </header>
  );
}
