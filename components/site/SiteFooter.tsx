"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/ScrollReveal";

const EMAIL = "yassinalyassin771@gmail.com";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yassinalyassin", external: true },
  { label: "GitHub", href: "https://github.com/yassin1123", external: true },
  { label: "Substrate deck", href: "/deck", external: false },
] as const;

export function SiteFooter() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard
      ?.writeText(EMAIL)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      })
      .catch(() => {});
  };

  return (
    <footer
      id="contact"
      className="bg-ink text-paper"
      style={{
        padding: "clamp(72px, 11vh, 130px) 0 44px",
      }}
    >
      <div className="wrap">
        <ScrollReveal>
          <Eyebrow onDark>05 — Contact</Eyebrow>
        </ScrollReveal>

        <div className="mt-[30px] grid items-start gap-[50px] md:grid-cols-[1.3fr_1fr]">
          <ScrollReveal>
            <h2
              className="font-serif"
              style={{
                fontWeight: 300,
                fontSize: "clamp(34px, 5vw, 58px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                margin: "24px 0 0",
              }}
            >
              Building Substrate.
            </h2>
            <p
              className="font-serif italic"
              style={{
                color: "var(--accent-light)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.6vw, 30px)",
                lineHeight: 1.32,
                letterSpacing: "-0.012em",
                maxWidth: "26ch",
                marginTop: 18,
              }}
            >
              If you modernise legacy circuits, build EDA tools, invest in
              deep-tech AI, or want to join early, email me.
            </p>
            <button
              type="button"
              onClick={copy}
              className="mt-[28px] inline-flex cursor-pointer items-center gap-3 border-b pb-[5px] font-mono transition-colors"
              style={{
                color: "var(--paper)",
                borderColor: "#4a443a",
                fontSize: "clamp(14px, 2vw, 17px)",
              }}
            >
              {EMAIL}
              <span
                className="font-mono uppercase transition-colors"
                style={{
                  fontSize: 10.5,
                  letterSpacing: "0.1em",
                  color: copied ? "var(--accent-light)" : "#8d8678",
                }}
              >
                {copied ? "✓ Copied" : "Click to copy"}
              </span>
            </button>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="flex flex-col gap-[2px]">
              {LINKS.map((l, idx) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between border-t font-mono uppercase transition-[color,padding-left] duration-200 hover:pl-2"
                  style={{
                    padding: "14px 0",
                    borderColor: "#2c281f",
                    borderBottom:
                      idx === LINKS.length - 1 ? "1px solid #2c281f" : undefined,
                    fontSize: 12.5,
                    letterSpacing: "0.06em",
                    color: "#c9c2b2",
                  }}
                >
                  <span className="group-hover:text-[#fff]">{l.label}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                    style={{ color: "#6f6859" }}
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div
          className="mt-16 flex flex-wrap justify-between gap-3 border-t pt-[22px] font-mono uppercase"
          style={{
            borderColor: "#2c281f",
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "#6f6859",
          }}
        >
          <span>Hardware-AI bilingual founder</span>
          <span>Built in Southampton · Updated May 2026</span>
        </div>
      </div>
    </footer>
  );
}
