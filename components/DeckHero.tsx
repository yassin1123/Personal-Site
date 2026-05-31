"use client";

import * as m from "motion/react-m";
import { FooterScrollLink } from "@/components/ui/FooterScrollLink";
import { SmoothScrollLink } from "@/components/ui/SmoothScrollLink";

const heroEase = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: heroEase },
  },
};

export function DeckHero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[96vh] flex-col justify-center px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pt-40"
    >
      <m.div
        className="mx-auto w-full max-w-[1180px]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <m.div
          variants={item}
          className="mb-9 flex items-center gap-[13px] font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-subtle"
        >
          <span className="relative inline-block h-[7px] w-[7px] rounded-full bg-accent">
            <span
              aria-hidden="true"
              className="absolute -inset-[5px] rounded-full border border-accent"
              style={{
                animation: "deckHeroPulse 2.6s cubic-bezier(0.16,1,0.3,1) infinite",
              }}
            />
          </span>
          Building Substrate · Problem Validated
        </m.div>

        <m.h1
          variants={item}
          aria-label="AI agents for the physical world."
          className="mb-8 max-w-[14ch] font-serif font-normal leading-[0.95] tracking-[-0.035em] text-fg"
          style={{
            fontSize: "clamp(2.9rem, 8vw, 7rem)",
            fontWeight: 330,
          }}
        >
          AI agents for the{" "}
          <em
            className="not-italic font-serif italic text-accent"
            style={{ fontWeight: 330 }}
          >
            physical
          </em>{" "}
          world.
        </m.h1>

        <m.p
          variants={item}
          className="mb-10 font-serif italic text-fg-muted"
          style={{
            fontSize: "clamp(1.3rem, 2.6vw, 1.8rem)",
          }}
        >
          The agentic platform for deep-tech engineering.
        </m.p>

        <m.div variants={item} className="flex flex-wrap gap-[14px]">
          <SmoothScrollLink
            href="#gap"
            variant="button"
            className="group inline-flex items-center gap-2 rounded-[3px] bg-fg px-[22px] py-[13px] font-mono text-[0.72rem] uppercase tracking-[0.1em] text-bg transition-all duration-300 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            Read the thesis ↓
          </SmoothScrollLink>
          <FooterScrollLink className="group inline-flex items-center gap-2 rounded-[3px] border border-border px-[22px] py-[13px] font-mono text-[0.72rem] uppercase tracking-[0.1em] text-fg transition-all duration-300 hover:border-fg hover:bg-bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
            Get in touch
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              ↗
            </span>
          </FooterScrollLink>
        </m.div>
      </m.div>

      <style>{`
        @keyframes deckHeroPulse {
          0% { transform: scale(0.7); opacity: 0.9; }
          70%, 100% { transform: scale(1.9); opacity: 0; }
        }
      `}</style>
    </header>
  );
}
