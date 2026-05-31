"use client";

import * as m from "motion/react-m";
import { profile } from "@/lib/content";

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

function renderHighlightedTagline(tagline: string) {
  const phrase = "agentic AI";
  const parts = tagline.split(phrase);
  if (parts.length < 2) return tagline;
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [
          part,
          <em
            key={`hl-${i}`}
            className="not-italic font-serif italic text-fg"
          >
            {phrase}
          </em>,
        ]
      : [part],
  );
}

export function Hero() {
  // "Yassin Al-Yassin" → "Yassin" / "Al-" + italic accent "Yassin"
  const nameParts = profile.name.split(" ");
  const first = nameParts[0] ?? profile.name;
  const last = nameParts.slice(1).join(" ");
  const hyphenIdx = last.indexOf("-");
  const surnamePrefix = hyphenIdx >= 0 ? last.slice(0, hyphenIdx + 1) : last;
  const surnameAccent = hyphenIdx >= 0 ? last.slice(hyphenIdx + 1) : "";

  return (
    <header
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pt-40"
    >
      <m.div
        className="mx-auto w-full max-w-[1180px]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <m.div
          className="mb-9 flex items-center gap-[14px] font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-subtle"
          variants={item}
        >
          <span className="relative inline-block h-[7px] w-[7px] rounded-full bg-accent">
            <span
              aria-hidden="true"
              className="absolute -inset-[5px] rounded-full border border-accent"
              style={{
                animation: "heroPulse 2.6s cubic-bezier(0.16,1,0.3,1) infinite",
              }}
            />
          </span>
          01 / NOW
        </m.div>

        <m.h1
          variants={item}
          aria-label={profile.name}
          className="mb-8 font-serif font-normal leading-[0.93] tracking-[-0.035em] text-fg"
          style={{
            fontSize: "clamp(3.4rem, 9vw, 8.2rem)",
            fontWeight: 340,
          }}
        >
          <span className="block">{first}</span>
          <span className="block">
            {surnamePrefix}
            {surnameAccent ? (
              <em
                className="not-italic font-serif italic text-accent"
                style={{ fontWeight: 340 }}
              >
                {surnameAccent}
              </em>
            ) : null}
          </span>
        </m.h1>

        <m.p
          variants={item}
          className="max-w-[600px] font-serif text-fg-muted"
          style={{
            fontSize: "clamp(1.18rem, 2.4vw, 1.5rem)",
            lineHeight: 1.5,
            fontWeight: 340,
          }}
        >
          {renderHighlightedTagline(profile.tagline)}
        </m.p>
      </m.div>

      <m.div
        className="absolute bottom-10 left-6 flex items-center gap-3 sm:left-10 lg:left-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.85, ease: heroEase }}
      >
        <span className="relative block h-[42px] w-px overflow-hidden bg-border">
          <span
            aria-hidden="true"
            className="absolute left-0 top-[-42px] block h-[42px] w-full bg-accent"
            style={{
              animation: "heroTrickle 2.4s cubic-bezier(0.16,1,0.3,1) infinite",
            }}
          />
        </span>
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-subtle">
          Scroll
        </span>
      </m.div>

      <style>{`
        @keyframes heroPulse {
          0% { transform: scale(0.7); opacity: 0.9; }
          70%, 100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes heroTrickle {
          0% { top: -42px; }
          60%, 100% { top: 42px; }
        }
      `}</style>
    </header>
  );
}
