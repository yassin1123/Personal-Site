import { ScrollReveal } from "@/components/ScrollReveal";
import { footerLinks, profile } from "@/lib/content";

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-fg pb-14 pt-24 text-[color:var(--ink-on-dark)] sm:pt-32"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 block h-px"
        style={{
          background:
            "linear-gradient(90deg, var(--accent), var(--gold), transparent)",
        }}
      />

      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-16">
        <div className="grid items-start gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <ScrollReveal>
            <p
              className="font-serif font-normal leading-[1.02] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 340 }}
            >
              Hardware-AI bilingual
              <br />
              founder building{" "}
              <em
                className="not-italic font-serif italic"
                style={{ color: "var(--accent-soft)", fontWeight: 340 }}
              >
                Substrate.
              </em>
            </p>
            <p className="mt-5 max-w-[420px] text-[1.08rem] text-[color:rgba(244,239,230,0.72)]">
              Available for founder conversations.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p
              className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.14em]"
              style={{ color: "rgba(244,239,230,0.55)" }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-3 text-[1rem]">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex w-fit items-center gap-2 text-[color:rgba(244,239,230,0.85)] transition-colors hover:text-[color:var(--ink-on-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                {profile.email}
              </a>
              {footerLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-2 text-[color:rgba(244,239,230,0.85)] transition-colors hover:text-[color:var(--ink-on-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                  >
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
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    download={link.label.toLowerCase().includes("pdf")}
                    className="group inline-flex w-fit items-center gap-2 text-[color:rgba(244,239,230,0.85)] transition-colors hover:text-[color:var(--ink-on-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                  >
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
                  </a>
                ),
              )}
            </div>
          </ScrollReveal>
        </div>

        <div
          className="mt-20 flex flex-wrap justify-between gap-2 border-t pt-6 font-mono text-[0.66rem] uppercase tracking-[0.08em]"
          style={{
            color: "rgba(244,239,230,0.48)",
            borderColor: "rgba(244,239,230,0.12)",
          }}
        >
          <span>Built in Southampton</span>
          <span>Last updated May 2026</span>
        </div>
      </div>
    </footer>
  );
}
