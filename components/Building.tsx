import { ScrollReveal } from "@/components/ScrollReveal";
import { FooterScrollLink } from "@/components/ui/FooterScrollLink";
import { ventures } from "@/lib/content";

export function Building() {
  const substrate = ventures[0];
  const badges = substrate.status.split("·").map((b) => b.trim());

  return (
    <section
      id="building"
      className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1180px]">
        <ScrollReveal>
          <div className="mb-12 flex items-baseline gap-[18px]">
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent">
              02
            </span>
            <h2
              className="font-serif font-normal leading-[1.04] tracking-[-0.028em] text-fg"
              style={{ fontSize: "clamp(2rem, 4.6vw, 3.4rem)", fontWeight: 380 }}
            >
              What I&apos;m working on
              <br />
              right now.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <article
            className="relative overflow-hidden rounded-[4px] border border-border bg-gradient-to-b from-bg-elevated to-bg"
            style={{ padding: "clamp(28px, 5vw, 64px)" }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent), var(--gold), transparent)",
              }}
            />
            <div className="mb-6 flex flex-wrap items-center gap-[10px]">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-[2px] border border-accent px-[11px] py-[5px] font-mono text-[0.62rem] uppercase tracking-[0.13em] text-accent"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h3
              className="mb-2 font-serif leading-none tracking-[-0.03em] text-fg"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                fontWeight: 360,
              }}
            >
              {substrate.name}.
            </h3>
            <p className="mb-9 font-serif text-[1.3rem] italic leading-[1.2] text-accent">
              {substrate.subtitle}
            </p>

            <p className="mb-[18px] max-w-[680px] text-[1.1rem] leading-[1.6] text-fg-muted">
              {substrate.lede}
            </p>
            {substrate.paragraphs.map((p) => (
              <p
                key={p}
                className="mb-[18px] max-w-[680px] text-[1.1rem] leading-[1.6] text-fg-muted"
              >
                {p}
              </p>
            ))}

            <div className="mt-10 flex flex-wrap gap-[14px]">
              {substrate.links.map((link, idx) => {
                const isPrimary = idx === 0;
                const baseClass =
                  "group inline-flex items-center gap-2 rounded-[3px] px-[22px] py-[13px] font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50";
                const primaryClass =
                  "bg-fg text-bg hover:bg-accent";
                const ghostClass =
                  "border border-border text-fg hover:border-fg hover:bg-bg-elevated";
                const className = `${baseClass} ${isPrimary ? primaryClass : ghostClass}`;
                const content = (
                  <>
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                      style={{
                        transitionTimingFunction:
                          "cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      ↗
                    </span>
                  </>
                );
                if (link.href === "#footer") {
                  return (
                    <FooterScrollLink key={link.href} className={className}>
                      {content}
                    </FooterScrollLink>
                  );
                }
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    download={"download" in link ? link.download : undefined}
                    className={className}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            <dl
              className="mt-[54px] grid gap-px overflow-hidden rounded-[4px] border border-border bg-border"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}
            >
              {substrate.metadata.map(([label, value]) => (
                <div
                  key={label}
                  className="bg-bg p-[22px] transition-colors duration-300 hover:bg-bg-elevated"
                >
                  <dt className="mb-[9px] font-mono text-[0.6rem] uppercase tracking-[0.14em] text-fg-subtle">
                    {label}
                  </dt>
                  <dd className="font-serif text-[0.98rem] leading-[1.38] text-fg">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
