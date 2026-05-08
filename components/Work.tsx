import { ScrollReveal } from "@/components/ScrollReveal";
import { work } from "@/lib/content";

export function Work() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12">
        <ScrollReveal className="lg:col-span-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
              03 / WORK
            </p>
          </div>
        </ScrollReveal>

        <div className="min-w-0 lg:col-span-10">
          <ScrollReveal delay={0.05}>
            <h2 className="font-serif text-2xl font-normal leading-[1.08] tracking-[-0.03em] text-fg">
              Selected work.
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {work.map((item, index) => (
              <ScrollReveal key={item.title} delay={0.03 * (index % 4)}>
                <article className="grid min-h-56 grid-rows-[auto_1fr] border-t border-border pt-5">
                  <p
                    className={[
                      "font-mono text-xs uppercase tracking-[0.08em] text-fg-subtle",
                      index % 2 === 1 ? "md:text-right" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {item.kind} · {item.year}
                  </p>
                  <div className="mt-8">
                    <h3 className="max-w-md font-serif text-xl font-normal leading-[1.12] tracking-[-0.025em] text-fg">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[34rem] text-sm leading-[1.58] text-fg-muted">
                      {item.body}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
