"use client";

import type { ReactNode } from "react";
import * as m from "motion/react-m";

const revealEase = [0.21, 0.47, 0.32, 0.98] as const;

export function ScrollReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: revealEase,
      }}
    >
      {children}
    </m.div>
  );
}
