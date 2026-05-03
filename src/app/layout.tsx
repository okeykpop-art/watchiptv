import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WatchIPTV | Premium IPTV Subscription 2026",
  description:
    "Premium IPTV subscription — 24,000+ live channels, 125,000+ VODs, EPG & Replay. Stream in 4K quality on all your devices.",
  keywords: ["IPTV", "IPTV subscription", "buy IPTV", "4K IPTV", "live TV streaming", "WatchIPTV"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
