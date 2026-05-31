"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BackNavLink = {
  href: string;
  label: string;
  cta?: boolean;
  external?: boolean;
  download?: boolean;
};

export function BackNav({
  links = [],
  children,
}: {
  links?: BackNavLink[];
  children?: ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[900] flex items-center justify-between border-b transition-[padding,background-color,border-color] duration-500",
        scrolled
          ? "border-border-soft bg-bg/85 px-6 py-3 backdrop-blur-md sm:px-10 lg:px-12"
          : "border-transparent bg-transparent px-6 py-5 sm:px-10 lg:px-12",
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <Link
        href="/"
        className="group inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-fg-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
      >
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-300 group-hover:-translate-x-1"
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          ←
        </span>
        Back to home
      </Link>
      <div className="flex items-center gap-7">
        {children}
        {links.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              download={link.download}
              className={cn(
                "group relative font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
                link.cta
                  ? "text-accent hover:text-accent-deep"
                  : "hidden text-fg-muted hover:text-fg sm:inline-block",
              )}
            >
              {link.label}
              {!link.cta ? (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-full"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                />
              ) : null}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
                link.cta
                  ? "text-accent hover:text-accent-deep"
                  : "hidden text-fg-muted hover:text-fg sm:inline-block",
              )}
            >
              {link.label}
              {!link.cta ? (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-full"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                />
              ) : null}
            </Link>
          ),
        )}
      </div>
    </nav>
  );
}
