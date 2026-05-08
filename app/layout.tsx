import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fraunces = localFont({
  src: [
    {
      path: "../public/fonts/fraunces-latin-standard-normal.woff2",
      weight: "400 900",
      style: "normal",
    },
    {
      path: "../public/fonts/fraunces-latin-standard-italic.woff2",
      weight: "400 900",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const geist = localFont({
  src: [
    {
      path: "../public/fonts/geist-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/geist-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const geistMono = localFont({
  src: [
    {
      path: "../public/fonts/geist-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yassin Al-Yassin — Building Substrate",
  description:
    "I build AI agents for the engineers who design the physical world. Currently building Substrate — the agentic platform for deep-tech engineering.",
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
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
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
