import type { Metadata } from "next";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";
import { notes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notes — Yassin Al-Yassin",
  description:
    "Things I'm thinking about while building Substrate — agentic UX, the engineers who design the physical world, and what I'm learning along the way.",
};

const META: Record<string, { category: string; read: string }> = {
  "the-knowledge-wall": { category: "Essay", read: "6 min" },
  "150-users-agentic-ux": { category: "Field notes", read: "7 min" },
  "leaving-argus-at-southampton": { category: "Essay", read: "5 min" },
};

function formatDate(iso: string) {
  return iso.slice(0, 7).replace("-", ".");
}

export default function NotesIndexPage() {
  const published = notes.filter((n) => n.published);

  return (
    <MotionProvider>
      <SiteNav active="notes" />
      <main id="main">
        <header
          style={{
            padding: "clamp(130px, 20vh, 200px) 0 clamp(40px, 6vh, 64px)",
          }}
        >
          <div className="wrap">
            <ScrollReveal>
              <Eyebrow>Writing</Eyebrow>
            </ScrollReveal>
            <ScrollReveal>
              <h1
                className="font-serif text-ink"
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(52px, 9vw, 104px)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.035em",
                  margin: "22px 0 24px",
                }}
              >
                Notes
                <em
                  className="not-italic font-serif italic"
                  style={{ color: "var(--accent)" }}
                >
                  .
                </em>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p
                className="font-serif text-ink-2"
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(20px, 2.8vw, 28px)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                  maxWidth: "30ch",
                }}
              >
                Things I&apos;m thinking about while building Substrate —
                agentic UX, the engineers who design the physical world, and
                what I&apos;m learning along the way.
              </p>
            </ScrollReveal>
          </div>
        </header>

        <div className="wrap">
          <ScrollReveal>
            <div
              style={{
                borderTop: "1px solid var(--line-2)",
                marginBottom: "clamp(70px, 12vh, 130px)",
              }}
            >
              {published.map((n) => {
                const m = META[n.slug] ?? { category: "Essay", read: "" };
                return (
                  <a
                    key={n.slug}
                    href={`/notes/${n.slug}`}
                    className="group grid items-baseline border-b transition-[background-color,padding-left] duration-300 hover:pl-4 sm:grid-cols-[120px_1fr_auto]"
                    style={{
                      gap: 30,
                      padding: "34px 6px",
                      borderColor: "var(--line)",
                    }}
                  >
                    <span className="flex flex-col gap-[8px]">
                      <span
                        className="font-mono text-ink-3"
                        style={{ fontSize: 12 }}
                      >
                        {formatDate(n.date)}
                      </span>
                      <span
                        className="font-mono uppercase"
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.14em",
                          color: "var(--accent-deep)",
                        }}
                      >
                        {m.category}
                      </span>
                    </span>
                    <span className="flex flex-col gap-[8px]" style={{ maxWidth: "52ch" }}>
                      <span
                        className="font-serif text-ink transition-colors duration-200 group-hover:text-accent"
                        style={{
                          fontSize: "clamp(24px, 3.4vw, 38px)",
                          fontWeight: 400,
                          lineHeight: 1.04,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {n.title}
                      </span>
                      <span
                        className="text-ink-2"
                        style={{ fontSize: 16 }}
                      >
                        {n.subtitle}
                      </span>
                    </span>
                    <span
                      className="hidden items-center gap-[14px] font-mono uppercase text-ink-3 sm:flex"
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.08em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {m.read}
                      <span
                        aria-hidden="true"
                        className="transition-[color,transform] duration-200 group-hover:translate-x-[4px] group-hover:-translate-y-[4px] group-hover:text-accent"
                      >
                        ↗
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </main>
      <SiteFooter />
    </MotionProvider>
  );
}
