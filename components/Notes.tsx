import { ScrollReveal } from "@/components/ScrollReveal";
import { notes } from "@/lib/content";

function formatDate(iso: string) {
  return iso.slice(0, 7).replace("-", ".");
}

export function Notes() {
  const published = notes.filter((n) => n.published);

  return (
    <section id="notes" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <ScrollReveal>
          <div className="mb-3 flex items-baseline gap-[18px]">
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent">
              04
            </span>
            <h2
              className="font-serif font-normal leading-[1.04] tracking-[-0.028em] text-fg"
              style={{ fontSize: "clamp(2rem, 4.6vw, 3.4rem)", fontWeight: 380 }}
            >
              Notes.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <p className="mb-12 font-serif text-[1.1rem] italic text-fg-subtle">
            Things I&apos;m thinking about.
          </p>
        </ScrollReveal>

        {published.length === 0 ? (
          <ScrollReveal>
            <p className="max-w-[60ch] border-t border-border pt-6 font-serif text-xl italic leading-[1.3] text-fg-muted">
              Working on the first one.
            </p>
          </ScrollReveal>
        ) : (
          <div className="border-b border-border">
            {published.map((note, idx) => (
              <ScrollReveal key={note.slug} delay={Math.min(idx * 0.05, 0.2)}>
                <a
                  href={`/notes/${note.slug}`}
                  className="group/note relative flex flex-col gap-1 border-t border-border py-[28px] transition-[padding] duration-500 hover:pl-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  aria-label={`${note.title} — ${note.subtitle}`}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="whitespace-nowrap font-mono text-[0.66rem] uppercase tracking-[0.08em] text-accent">
                      {formatDate(note.date)} →
                    </span>
                    <div>
                      <h3
                        className="inline font-serif text-[1.4rem] tracking-[-0.015em] text-fg transition-colors duration-300 group-hover/note:text-accent"
                        style={{ fontWeight: 400 }}
                      >
                        {note.title}
                      </h3>{" "}
                      <span className="font-serif italic text-fg-subtle">
                        {note.subtitle}
                      </span>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden font-mono text-border transition-[color,transform] duration-300 group-hover/note:translate-x-1 group-hover/note:text-accent sm:inline"
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    ↗
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
