import { ScrollReveal } from "@/components/ScrollReveal";
import { work } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <ScrollReveal>
          <div className="mb-12 flex items-baseline gap-[18px]">
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent">
              03
            </span>
            <h2
              className="font-serif font-normal leading-[1.04] tracking-[-0.028em] text-fg"
              style={{ fontSize: "clamp(2rem, 4.6vw, 3.4rem)", fontWeight: 380 }}
            >
              Selected work.
            </h2>
          </div>
        </ScrollReveal>

        <div className="border-b border-border">
          {work.map((item, index) => (
            <ScrollReveal key={item.title} delay={Math.min(index * 0.04, 0.16)}>
              <article
                className="group/work relative grid items-baseline gap-[30px] border-t border-border px-[14px] py-[30px] transition-[background-color,padding] duration-500 hover:bg-bg-elevated hover:px-6 md:grid-cols-[130px_1fr_auto]"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover/work:scale-y-100"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
                <p className="font-mono text-[0.62rem] uppercase leading-[1.7] tracking-[0.1em] text-fg-subtle">
                  {item.kind}
                  <br className="hidden md:block" />
                  <span className="md:hidden"> · </span>
                  {item.year}
                </p>
                <div>
                  <h3
                    className="mb-2 font-serif text-[1.7rem] tracking-[-0.02em] text-fg transition-colors duration-300 group-hover/work:text-accent"
                    style={{ fontWeight: 420 }}
                  >
                    {item.title}
                  </h3>
                  <p className="max-w-[600px] text-[1.01rem] leading-[1.6] text-fg-muted">
                    {item.body}
                  </p>
                </div>
                <span className="hidden font-mono text-[0.7rem] text-border transition-colors duration-300 group-hover/work:text-accent md:inline">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
