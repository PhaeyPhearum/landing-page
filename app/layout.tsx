import type { Metadata } from "next";
import { Kantumruy_Pro, IBM_Plex_Mono } from "next/font/google";
import { BRAND, SEO } from "@/lib/config";
import "./globals.css";

// Kantumruy Pro covers both Khmer and Latin glyphs, so headings/body text
// render correctly for the Khmer-first copy in lib/config.ts. It replaces
// Space Grotesk + Inter, neither of which has Khmer glyphs.
const kantumruyPro = Kantumruy_Pro({
  variable: "--font-kantumruy-pro",
  subsets: ["khmer", "latin"],
  weight: ["400", "500", "600", "700"],
});

// Kept for the short English/loanword tags (QR, ESP32, ONLINE, etc.) that
// stay in Latin script by design — see lib/config.ts header comment.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.domain),
  title: SEO.title,
  description: SEO.description,
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: BRAND.domain,
    siteName: BRAND.name,
    images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
    locale: "km_KH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="km">
      {/*
        TODO: add analytics snippets here (Google Analytics / Plausible / Meta
        Pixel). Once window.gtag / window.plausible / window.fbq exist,
        lib/analytics.ts will pick them up automatically — no other code
        needs to change.
      */}
      <body
        className={`${kantumruyPro.variable} ${plexMono.variable} antialiased bg-paper text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
