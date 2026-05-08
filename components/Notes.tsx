import { ScrollReveal } from "@/components/ScrollReveal";
import { notes } from "@/lib/content";

export function Notes() {
  const publishedNotes = notes.filter((note) => note.published);

  return (
    <section id="notes" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12">
        <ScrollReveal className="lg:col-span-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
              04 / NOTES
            </p>
          </div>
        </ScrollReveal>

        <div className="min-w-0 lg:col-span-8">
          <ScrollReveal delay={0.05}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-5">
              <h2 className="font-serif text-2xl font-normal leading-[1.08] tracking-[-0.03em] text-fg">
                Notes.
              </h2>
              <p className="font-serif text-xl italic tracking-[-0.02em] text-fg-muted">
                Things I&apos;m thinking about.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 space-y-8">
            {publishedNotes.length === 0 ? (
              <ScrollReveal>
                <p className="max-w-[60ch] border-t border-border pt-6 font-serif text-xl italic leading-[1.3] tracking-[-0.02em] text-fg-muted">
                  Working on the first one.
                </p>
              </ScrollReveal>
            ) : (
              publishedNotes.map((note, index) => (
                <ScrollReveal key={note.slug} delay={0.05 * index}>
                <a
                  href={`/notes/${note.slug}`}
                  className="group/note grid gap-3 border-t border-border pt-6 transition-colors hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-bg sm:grid-cols-[7rem_1fr]"
                  aria-label={`${note.title} ${note.subtitle}`}
                >
                  <p className="font-mono text-xs text-fg-subtle">
                    {note.date.slice(0, 7).replace("-", ".")} →
                  </p>
                  <div>
                    <h3 className="font-serif text-xl font-normal leading-[1.15] tracking-[-0.025em] text-fg transition-colors group-hover/note:text-accent">
                      {note.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.55] text-fg-muted">
                      {note.subtitle}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
