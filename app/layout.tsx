import type { Metadata } from "next";
import { Fraunces, Newsreader, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  display: "swap",
  axes: ["opsz"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-body",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yassin Al-Yassin — Building Substrate",
  description:
    "Hardware engineer building agentic AI for the engineers who design the physical world. Currently building Substrate — the agentic platform for deep-tech engineering.",
  metadataBase: new URL("https://yassinalyassin.com"),
  openGraph: {
    title: "Yassin Al-Yassin",
    description: "Building Substrate — agentic AI for deep-tech engineering.",
    url: "https://yassinalyassin.com",
    siteName: "Yassin Al-Yassin",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yassin Al-Yassin",
    description: "Building Substrate — agentic AI for deep-tech engineering.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
