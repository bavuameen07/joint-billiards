"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 640px)" srcSet="/photos/poster-01.webp" />
          <Image
            src="/photos/poster-01.webp"
            alt="Premium billiards lounge with snooker and pool tables"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_55%] sm:object-[center_45%] md:object-[center_40%] lg:object-[center_35%]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-[rgba(255,247,237,0.85)] to-[rgba(255,255,255,0.6)] lg:bg-gradient-to-r lg:from-white lg:via-[rgba(255,247,237,0.9)] lg:to-[rgba(255,255,255,0.4)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 md:justify-center md:pb-0">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs tracking-[0.25em] uppercase text-[#EA580C]">
            {SITE.name} — {SITE.tagline}
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-[#1C1917] sm:text-4xl md:text-5xl lg:text-6xl">
            WHERE EVERY GAME BECOMES AN EXPERIENCE
          </h1>

          <p className="mb-6 max-w-xl text-base leading-relaxed text-[#78716C] sm:text-lg">
            Great games. Good company. Unforgettable moments. Step in, take your shot, and make it yours.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-sm bg-[#F97316] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#EA580C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
            >
              Book Your Session
            </Link>
            <Link
              href="#tables"
              className="inline-flex items-center justify-center rounded-sm border border-[#FDBA74] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#1C1917] transition-colors hover:bg-[#FFF7ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
            >
              Explore the Lounge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}