import { ArrowLink } from "@/components/ui/ArrowLink";
import { footerLinks, profile } from "@/lib/content";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-border px-6 py-12 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl tracking-[-0.02em] text-fg">
            {profile.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-[1.55] text-fg-muted">
            Hardware-AI bilingual founder building Substrate.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-fg-subtle">
            Contact
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 inline-flex break-all font-serif text-2xl leading-[1.12] tracking-[-0.025em] text-fg transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
          >
            {profile.email}
          </a>
        </div>

        <div className="flex flex-wrap content-start gap-x-6 gap-y-3 md:justify-end">
          {footerLinks.map((link) => (
            <ArrowLink
              key={link.href}
              href={link.href}
              external={link.external}
            >
              {link.label}
            </ArrowLink>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-border-soft pt-6">
        <p className="font-mono text-xs text-fg-subtle">
          Built in Southampton. Last updated May 2026.
        </p>
      </div>
    </footer>
  );
}
