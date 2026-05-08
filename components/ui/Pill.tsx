import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PillProps = {
  children: ReactNode;
  tone?: "amber" | "teal";
  className?: string;
};

export function Pill({ children, tone = "amber", className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-fg-subtle",
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "teal" ? "bg-teal" : "bg-accent",
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
