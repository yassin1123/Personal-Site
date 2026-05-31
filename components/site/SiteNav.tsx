"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavLink = {
  href: string;
  label: string;
  key: string;
};

const LINKS: NavLink[] = [
  { key: "substrate", href: "/substrate", label: "Substrate" },
  { key: "work", href: "/#work", label: "Work" },
  { key: "notes", href: "/notes", label: "Notes" },
];

export function SiteNav({
  active,
  homeHash,
}: {
  /** which key in LINKS is active, or "home" for the home page hero state */
  active?: string;
  /** when on home, pass scroll-spy active id ("now" | "substrate" | "work" | "notes") */
  homeHash?: string;
}) {
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const isActive = (key: string) => {
    if (active === key) return true;
    if (homeHash && key === homeHash) return true;
    return false;
  };

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b transition-[background-color,border-color,padding] duration-400",
        solid || menu
          ? "border-line bg-[color-mix(in_srgb,var(--paper)_82%,transparent)] py-[13px] backdrop-blur-[14px] backdrop-saturate-[1.3]"
          : "border-transparent bg-transparent py-[18px]",
      )}
      style={{ paddingLeft: "var(--gutter)", paddingRight: "var(--gutter)" }}
    >
      <Link
        href="/"
        className="font-serif text-[18px] font-medium tracking-[-0.01em] text-ink whitespace-nowrap"
      >
        Yassin <b className="font-medium text-accent">Al-Yassin</b>
      </Link>

      {/* Desktop nav */}
      <div className="hidden items-center gap-[30px] sm:flex">
        {LINKS.map((l) => (
          <Link
            key={l.key}
            href={l.href}
            className={cn(
              "group relative font-mono uppercase transition-colors",
              isActive(l.key) ? "text-ink" : "text-ink-2 hover:text-ink",
            )}
            style={{
              fontSize: 11.5,
              letterSpacing: "0.1em",
              padding: "4px 0",
            }}
          >
            {l.label}
            <span
              aria-hidden="true"
              className={cn(
                "absolute -bottom-0 left-0 h-[1.5px] bg-accent transition-[width] duration-300",
                isActive(l.key) ? "w-full" : "w-0 group-hover:w-full",
              )}
            />
          </Link>
        ))}
        <Link
          href="/#contact"
          className="rounded-full border border-ink px-[15px] py-[8px] font-mono uppercase text-ink transition-all duration-200 hover:bg-ink hover:text-paper"
          style={{ fontSize: 11.5, letterSpacing: "0.08em" }}
        >
          Get in touch
        </Link>
      </div>

      {/* Mobile burger */}
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={menu}
        onClick={() => setMenu(!menu)}
        className={cn(
          "relative z-[102] flex h-[42px] w-[42px] flex-col items-center justify-center gap-[5px] rounded-full border border-line-2 sm:hidden",
        )}
        style={{ background: "var(--paper-card)" }}
      >
        <span
          className={cn(
            "block h-[1.6px] w-[17px] bg-ink transition-transform duration-300",
            menu && "translate-y-[3.3px] rotate-45",
          )}
        />
        <span
          className={cn(
            "block h-[1.6px] w-[17px] bg-ink transition-transform duration-300",
            menu && "-translate-y-[3.3px] -rotate-45",
          )}
        />
      </button>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-[101] flex flex-col border-b border-line shadow-[0_24px_50px_-28px_rgba(26,24,21,0.4)] sm:hidden",
          "transition-transform duration-[420ms]",
          menu ? "translate-y-0" : "-translate-y-full",
        )}
        style={{
          background: "color-mix(in srgb, var(--paper) 97%, transparent)",
          backdropFilter: "blur(20px) saturate(1.3)",
          WebkitBackdropFilter: "blur(20px) saturate(1.3)",
          padding: "88px var(--gutter) 32px",
        }}
      >
        {LINKS.map((l, i) => (
          <Link
            key={l.key}
            href={l.href}
            onClick={() => setMenu(false)}
            className={cn(
              "flex items-baseline gap-4 border-t border-line py-[17px] font-serif transition-colors first:border-t-0",
              isActive(l.key) ? "text-accent" : "text-ink",
            )}
            style={{ fontSize: 30, letterSpacing: "-0.02em" }}
          >
            <span
              className="font-mono uppercase text-ink-3"
              style={{
                width: 22,
                fontSize: 12,
                letterSpacing: "0.1em",
                flex: "none",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {l.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => setMenu(false)}
          className="flex items-baseline gap-4 border-t border-line py-[17px] font-serif text-accent"
          style={{ fontSize: 30, letterSpacing: "-0.02em" }}
        >
          <span
            className="font-mono uppercase text-accent"
            style={{
              width: 22,
              fontSize: 12,
              letterSpacing: "0.1em",
              flex: "none",
            }}
          >
            →
          </span>
          Get in touch
        </Link>
      </div>
    </nav>
  );
}
