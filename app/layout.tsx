import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SITE } from "@/lib/site";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: "Book billiards and snooker tables online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body
        className="flex min-h-full flex-col font-mono"
        suppressHydrationWarning
      >
        <div
          aria-hidden="true"
          className="joint-progress fixed top-0 left-0 z-[60] h-1 w-full bg-joint-amber"
        />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
