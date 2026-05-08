"use client";

import * as m from "motion/react-m";
import { FooterScrollLink } from "@/components/ui/FooterScrollLink";
import { SmoothScrollLink } from "@/components/ui/SmoothScrollLink";

const revealEase = [0.21, 0.47, 0.32, 0.98] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: revealEase },
  },
};

export function DeckHero() {
  const words = ["AI", "agents", "for", "the", "physical", "world."];

  return (
    <section className="relative grid min-h-screen px-6 py-20 sm:px-10 lg:px-16">
      <m.div
        className="mx-auto grid w-full max-w-6xl content-end pb-16 lg:pb-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <m.p
          className="font-mono text-xs uppercase tracking-[0.08em] text-accent"
          variants={item}
        >
          ● BUILDING SUBSTRATE · TRACER SHIPPING
        </m.p>

        <h1
          className="mt-9 max-w-[10ch] font-serif text-7xl font-normal leading-[0.95] tracking-[-0.055em] text-fg md:text-8xl"
          aria-label="AI agents for the physical world."
        >
          {words.map((word) => (
            <m.span key={word} className="mr-[0.18em] inline-block" variants={item}>
              {word}
            </m.span>
          ))}
        </h1>

        <m.p
          className="mt-8 max-w-[50ch] font-serif text-2xl italic leading-[1.16] tracking-[-0.025em] text-fg-muted"
          variants={item}
        >
          The agentic platform for deep-tech engineering.
        </m.p>

        <m.div className="mt-10 flex flex-wrap gap-4" variants={item}>
          <SmoothScrollLink href="#gap" variant="button">
            Read the thesis ↓
          </SmoothScrollLink>
          <FooterScrollLink className="border border-border px-5 py-3 hover:border-accent">
            Get in touch
          </FooterScrollLink>
        </m.div>
      </m.div>

      <p className="absolute bottom-7 left-6 font-mono text-xs uppercase tracking-[0.08em] text-fg-subtle sm:left-10 lg:left-16">
        ↓ scroll
      </p>
    </section>
  );
}
