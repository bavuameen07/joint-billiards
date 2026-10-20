import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JOINT - Billiards & Lounge",
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
        className="min-h-full flex flex-col font-mono"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
