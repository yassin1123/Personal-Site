"use client";

type SmoothScrollLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "button" | "link";
  className?: string;
};

export function SmoothScrollLink({
  href,
  children,
  variant = "link",
  className,
}: SmoothScrollLinkProps) {
  const targetId = href.startsWith("#") ? href.slice(1) : href;
  const baseClass =
    variant === "button"
      ? "inline-flex items-center justify-center border border-accent bg-accent px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-soft hover:border-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
      : "group/link relative inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-bg";

  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        document.getElementById(targetId)?.scrollIntoView({
          behavior: prefersReducedMotion ? "instant" : "smooth",
          block: "start",
        });
      }}
      className={[baseClass, className].filter(Boolean).join(" ")}
    >
      {children}
    </a>
  );
}
