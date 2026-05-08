import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { FooterScrollLink } from "@/components/ui/FooterScrollLink";
import { Pill } from "@/components/ui/Pill";
import { ventures } from "@/lib/content";

export function Building() {
  const substrate = ventures[0];

  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12">
        <ScrollReveal className="lg:col-span-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
              02 / BUILDING
            </p>
          </div>
        </ScrollReveal>

        <div className="min-w-0 lg:col-span-10">
          <ScrollReveal delay={0.05}>
            <h2 className="max-w-3xl font-serif text-2xl font-normal leading-[1.08] tracking-[-0.03em] text-fg">
              What I&apos;m working on right now.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <article className="mt-16 border-y border-border bg-[linear-gradient(135deg,rgba(93,197,183,0.055),transparent_38%)] py-10 sm:py-12 lg:px-0">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem]">
                <div>
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-serif text-3xl font-medium leading-[1.02] tracking-[-0.035em] text-fg">
                        {substrate.name}.
                      </h3>
                      <p className="mt-3 max-w-2xl font-serif text-xl italic leading-[1.18] tracking-[-0.02em] text-fg-muted">
                        {substrate.subtitle}
                      </p>
                    </div>
                    <Pill tone="teal" className="shrink-0 pt-1">
                      {substrate.status}
                    </Pill>
                  </div>

                  <p className="mt-10 max-w-[65ch] text-lg leading-[1.5] text-fg">
                    {substrate.lede}
                  </p>

                  <div className="mt-8 space-y-6">
                    {substrate.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="max-w-[65ch] text-base leading-[1.62] text-fg-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
                    {substrate.links.map((link) => (
                      link.href === "#footer" ? (
                        <FooterScrollLink key={link.href}>
                          {link.label}
                        </FooterScrollLink>
                      ) : (
                        <ArrowLink
                          key={link.href}
                          href={link.href}
                          download={"download" in link ? link.download : false}
                        >
                          {link.label}
                        </ArrowLink>
                      )
                    ))}
                  </div>
                </div>

                <dl className="grid content-start gap-5 border-t border-border-soft pt-8 font-mono text-xs leading-[1.45] text-fg-subtle lg:border-l lg:border-t-0 lg:pl-8 lg:pt-2">
                  {substrate.metadata.map(([label, value]) => (
                    <div key={label}>
                      <dt className="uppercase tracking-[0.08em] text-teal">
                        {label}
                      </dt>
                      <dd className="mt-1">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
