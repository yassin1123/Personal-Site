import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
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
    "I build agentic AI for the engineers who design the physical world. Building Substrate — the agentic platform for deep-tech engineering.",
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
      className={`${newsreader.variable} ${hanken.variable} ${jetbrainsMono.variable}`}
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
