"use client";

import * as m from "motion/react-m";
import { profile } from "@/lib/content";

const revealEase = [0.21, 0.47, 0.32, 0.98] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.06,
      delayChildren: 0.1,
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

export function Hero() {
  const [firstName, lastName] = profile.name.split(" ");

  return (
    <m.header
      className="relative min-h-screen overflow-hidden px-6 py-8 sm:px-10 lg:px-16"
      initial={{ backgroundColor: "#000000" }}
      animate={{ backgroundColor: "var(--bg)" }}
      transition={{ duration: 0.2 }}
    >
      <m.div
        className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 content-center gap-12 lg:grid-cols-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <m.div
          className="font-mono text-xs uppercase tracking-[0.08em] text-accent lg:col-span-2 lg:pt-3"
          variants={item}
        >
          01 / NOW
        </m.div>

        <div className="min-w-0 lg:col-span-8 lg:col-start-3">
          <h1
            className="font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.04em] text-fg sm:text-3xl lg:text-4xl"
            aria-label={profile.name}
          >
            <m.span className="block" variants={item}>
              {firstName}
            </m.span>
            <m.span className="block" variants={item}>
              {lastName}
            </m.span>
          </h1>

          <m.p
            className="mt-14 max-w-[24ch] font-serif text-lg italic leading-[1.14] tracking-[-0.02em] text-fg sm:max-w-[30ch] sm:text-2xl"
            variants={item}
          >
            {profile.tagline}
          </m.p>

          <m.div
            className="mt-9 h-px w-6 bg-border"
            variants={item}
            aria-hidden="true"
          />

          <m.p
            className="mt-8 max-w-[32ch] text-sm leading-[1.62] text-fg-muted sm:max-w-[60ch] sm:text-base"
            variants={item}
          >
            {profile.meta}
          </m.p>
        </div>
      </m.div>

      <m.div
        className="absolute bottom-7 left-6 font-mono text-xs uppercase tracking-[0.08em] text-fg-subtle sm:left-10 lg:left-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ↓ scroll
      </m.div>
    </m.header>
  );
}
