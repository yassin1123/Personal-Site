"use client";

import { useEffect, useState } from "react";
import { SiteNav } from "@/components/site/SiteNav";

const SECTIONS = ["now", "substrate", "work", "notes"] as const;

export function HomeScrollSpy() {
  const [active, setActive] = useState<string>("now");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.target.id) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return <SiteNav homeHash={active} />;
}
