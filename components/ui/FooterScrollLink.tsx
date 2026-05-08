"use client";

type FooterScrollLinkProps = {
  children: React.ReactNode;
  className?: string;
};

export function FooterScrollLink({
  children,
  className,
}: FooterScrollLinkProps) {
  return (
    <a
      href="#footer"
      onClick={(event) => {
        event.preventDefault();
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        document.getElementById("footer")?.scrollIntoView({
          behavior: prefersReducedMotion ? "instant" : "smooth",
          block: "start",
        });
      }}
      className={[
        "group/link relative inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-bg",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="relative">
        <span>{children}</span>
        <span
          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-200 ease-out group-hover/link:scale-x-100"
          aria-hidden="true"
        />
      </span>
      <span
        className="translate-y-px transition-transform duration-200 group-hover/link:translate-x-0.5"
        aria-hidden="true"
      >
        →
      </span>
    </a>
  );
}
