"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-[#FF5A00] via-[#E64500] to-[#B93800]">
      <div className="absolute inset-0">
        <Image
          src="/photos/poster-01.webp"
          alt="Premium billiards lounge with snooker and pool tables"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_55%] sm:object-[center_45%] md:object-[center_40%] lg:object-[center_35%] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#B93800]/90 via-[#E64500]/80 to-[#FF5A00]/60 lg:from-[#B93800]/95 lg:via-[#E64500]/85 lg:to-[#FF5A00]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,176,0,0.15),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 md:justify-center md:pb-0">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs tracking-[0.25em] uppercase text-[#FFB000]">
            {SITE.name} — {SITE.tagline}
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-[#FFF7ED] sm:text-4xl md:text-5xl lg:text-6xl">
            WHERE EVERY GAME BECOMES AN EXPERIENCE
          </h1>

          <p className="mb-6 max-w-xl text-base leading-relaxed text-[#FFF7ED]/90 sm:text-lg">
            Great games. Good company. Unforgettable moments. Step in, take your shot, and make it yours.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-sm bg-[#FF5A00] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#E64500] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#B93800]"
            >
              BOOK A TABLE
            </Link>
            <Link
              href="#tables"
              className="inline-flex items-center justify-center rounded-sm border-2 border-[#FFB000] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED] transition-colors hover:bg-[#FFF7ED]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#B93800]"
            >
              EXPLORE CAFE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}