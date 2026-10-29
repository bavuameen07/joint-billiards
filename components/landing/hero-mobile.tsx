"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0B241C]">
      <div className="absolute inset-0">
        <Image
          src="/photos/poster-01.webp"
          alt="Pool table with billiard balls in a lounge setting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_55%] sm:object-[center_45%] md:object-[center_40%] lg:object-[center_35%]"
        />
        <div className="absolute inset-0 bg-[#0B241C]/70" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 md:justify-center md:pb-0">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs tracking-[0.25em] uppercase text-[#2563EB]">
            {SITE.name} — {SITE.tagline}
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-[#F5F0E7] sm:text-4xl md:text-5xl lg:text-6xl">
            WHERE EVERY GAME BECOMES AN EXPERIENCE
          </h1>

          <p className="mb-6 max-w-xl text-base leading-relaxed text-[#F5F0E7] sm:text-lg">
            Great games. Good company. Unforgettable moments. Step in, take your shot, and make it yours.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-sm bg-[#2563EB] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#3B82F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
            >
              BOOK YOUR SESSION
            </Link>
            <Link
              href="#tables"
              className="inline-flex items-center justify-center rounded-sm border-2 border-[#2563EB] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F5F0E7] transition-colors hover:bg-[#F5F0E7]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
            >
              EXPLORE CAFE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}