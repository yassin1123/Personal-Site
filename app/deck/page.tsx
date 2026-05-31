import type { Metadata } from "next";
import { DeckClient } from "@/components/deck/DeckClient";

export const metadata: Metadata = {
  title: "Substrate — Pitch",
  description:
    "AI agents for the physical world — the pitch deck. Built by Yassin Al-Yassin.",
  openGraph: {
    title: "Substrate — Pitch",
    description: "AI agents for the physical world.",
    url: "https://yassinalyassin.com/deck",
    images: [{ url: "/deck/opengraph-image", width: 1200, height: 630 }],
    type: "article",
  },
};

export default function DeckPage() {
  return <DeckClient />;
}
