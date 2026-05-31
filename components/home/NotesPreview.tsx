import { ScrollReveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import { notes } from "@/lib/content";

function formatDate(iso: string) {
  return iso.slice(0, 7).replace("-", ".");
}

export function NotesPreview() {
  const published = notes.filter((n) => n.published);

  return (
    <section
      id="notes"
      style={{
        background: "var(--paper-deep)",
        padding: "clamp(72px, 11vh, 140px) 0",
      }}
    >
      <div className="wrap">
        <ScrollReveal>
          <div style={{ marginBottom: "clamp(40px, 6vh, 70px)" }}>
            <Eyebrow>04 — Notes</Eyebrow>
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
              Things I&apos;m{" "}
              <em
                className="not-italic font-serif italic"
                style={{ color: "var(--accent)" }}
              >
                thinking about.
              </em>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col">
            {published.map((n, idx) => (
              <a
                key={n.slug}
                href={`/notes/${n.slug}`}
                className="group grid items-center border-t transition-[background-color,padding-left] duration-300 hover:pl-[14px] sm:grid-cols-[92px_1fr_auto]"
                style={{
                  gridTemplateColumns: undefined,
                  gap: 26,
                  padding: "28px 4px",
                  borderColor: "var(--line)",
                  borderBottom:
                    idx === published.length - 1
                      ? "1px solid var(--line)"
                      : undefined,
                }}
              >
                <span
                  className="font-mono text-ink-3"
                  style={{ fontSize: 12 }}
                >
                  {formatDate(n.date)}
                </span>
                <span className="flex flex-col gap-[3px]">
                  <span
                    className="font-serif text-ink transition-colors duration-200 group-hover:text-accent"
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 27px)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {n.title}
                  </span>
                  <span
                    className="text-ink-2"
                    style={{ fontSize: 15 }}
                  >
                    {n.subtitle}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="hidden font-mono text-ink-3 transition-[color,transform] duration-200 group-hover:translate-x-[4px] group-hover:-translate-y-[4px] group-hover:text-accent sm:inline"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <a
            href="/notes"
            className="group mt-[34px] inline-flex items-center gap-[9px] border-b pb-[2px] text-ink transition-colors duration-200 hover:text-accent hover:border-accent"
            style={{
              borderColor: "var(--line-2)",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            All notes
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
            >
              ↗
            </span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
