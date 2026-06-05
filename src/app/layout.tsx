import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { campsite } from "@/content/campsite.config";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: campsite.see
    ? `${campsite.name} — Camping am ${campsite.see} | ${campsite.region}`
    : `${campsite.name} — Camping in ${campsite.ort} | ${campsite.region}`,
  description: campsite.intro,
  // Demo/Akquise-Seite: nicht von Suchmaschinen indexieren.
  robots: { index: false, follow: false },
  openGraph: {
    title: `${campsite.name} — ${campsite.region}`,
    description: campsite.intro,
    images: [{ url: campsite.hero.aerial.src }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
