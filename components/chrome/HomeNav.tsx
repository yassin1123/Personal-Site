"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/content";

const NAV_LINKS = [
  { href: "#building", label: "Building" },
  { href: "#work", label: "Work" },
  { href: "#notes", label: "Notes" },
] as const;

export function HomeNav() {
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
      <a
        href="#top"
        className="font-serif text-base font-medium tracking-[-0.01em] text-fg transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
      >
        {profile.name}
      </a>
      <div className="flex items-center gap-7">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group relative hidden font-mono text-[0.68rem] uppercase tracking-[0.12em] text-fg-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:inline-block"
          >
            {link.label}
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-full"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            />
          </a>
        ))}
        <a
          href="#footer"
          className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent transition-colors hover:text-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          Get in touch →
        </a>
      </div>
    </nav>
  );
}
