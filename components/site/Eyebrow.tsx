import type { ReactNode } from "react";

export function Eyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-3 font-mono uppercase"
      style={{
        fontSize: 11.5,
        letterSpacing: "0.18em",
        color: onDark ? "#8d8678" : "var(--ink-3)",
      }}
    >
      <span
        aria-hidden="true"
        className="block flex-none rounded-full"
        style={{ width: 5, height: 5, background: "var(--accent)" }}
      />
      {children}
      <span
        aria-hidden="true"
        className="block h-px flex-1"
        style={{
          minWidth: 24,
          background: onDark ? "#3a352d" : "var(--line-2)",
        }}
      />
    </div>
  );
}
