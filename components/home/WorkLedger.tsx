"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import { work } from "@/lib/content";

const EXTRA_LINKS: Record<string, string[]> = {
  "AMD Pervasive AI Contest": ["Codebase & trained artefacts available"],
  DormDrop: ["Codebase available"],
};

export function WorkLedger() {
  const [active, setActive] = useState(0);
  const item = work[active];
  const meta = `${item.kind} · ${item.year}`;
  const [cat, year] = meta.split(" · ");
  const links = EXTRA_LINKS[item.title] ?? [];

  return (
    <section
      id="work"
      style={{ padding: "clamp(72px, 11vh, 140px) 0" }}
    >
      <div className="wrap">
        <ScrollReveal>
          <div style={{ marginBottom: "clamp(40px, 6vh, 70px)" }}>
            <Eyebrow>03 — Work</Eyebrow>
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
              Selected{" "}
              <em
                className="not-italic font-serif italic"
                style={{ color: "var(--accent)" }}
              >
                work.
              </em>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid items-start gap-[clamp(30px,5vw,66px)] lg:grid-cols-[0.92fr_1.08fr]">
            {/* list */}
            <div style={{ borderTop: "1px solid var(--line-2)" }}>
              {work.map((w, i) => {
                const on = active === i;
                return (
                  <div
                    key={w.title}
                    role="button"
                    tabIndex={0}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") setActive(i);
                    }}
                    className="group grid cursor-pointer items-baseline border-b transition-colors duration-200"
                    style={{
                      gridTemplateColumns: "44px 1fr",
                      gap: 14,
                      padding: "17px 6px",
                      borderColor: "var(--line)",
                      background: on
                        ? "color-mix(in srgb, var(--accent) 5%, transparent)"
                        : "transparent",
                    }}
                  >
                    <div
                      className="font-mono transition-colors duration-200"
                      style={{
                        fontSize: 12,
                        color: on ? "var(--accent-deep)" : "var(--ink-3)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div
                        className="font-serif transition-colors duration-200"
                        style={{
                          fontSize: "clamp(20px, 2.3vw, 26px)",
                          letterSpacing: "-0.015em",
                          lineHeight: 1.12,
                          color: on ? "var(--accent)" : "var(--ink)",
                        }}
                      >
                        {w.title}
                      </div>
                      <span
                        className="block font-mono uppercase"
                        style={{
                          fontSize: 9.5,
                          letterSpacing: "0.12em",
                          color: "var(--ink-3)",
                          marginTop: 7,
                        }}
                      >
                        {w.kind} · {w.year}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* detail pane */}
            <div className="lg:sticky lg:top-[104px]">
              <div key={active} className="wc-fade">
                <div
                  className="font-mono uppercase"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    color: "var(--accent-deep)",
                  }}
                >
                  {cat} · {year}
                </div>
                <div
                  className="font-serif text-ink"
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(32px, 4.4vw, 56px)",
                    lineHeight: 1.0,
                    letterSpacing: "-0.03em",
                    margin: "14px 0 18px",
                    minHeight: "2em",
                  }}
                >
                  {item.title}
                </div>
                <p
                  className="text-ink-2"
                  style={{
                    fontSize: 17.5,
                    lineHeight: 1.6,
                    maxWidth: "52ch",
                  }}
                >
                  {item.body}
                </p>
                {links.length > 0 ? (
                  <div className="mt-[22px] flex flex-col gap-[9px]">
                    {links.map((l) => (
                      <span
                        key={l}
                        className="font-mono uppercase"
                        style={{
                          fontSize: 10.5,
                          letterSpacing: "0.12em",
                          color: "var(--ink-3)",
                        }}
                      >
                        ↳ {l}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .wc-fade { animation: wcfade .46s cubic-bezier(.4,0,.2,1); }
        @keyframes wcfade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
}
