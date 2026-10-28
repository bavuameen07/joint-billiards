"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-joint-bg)]">
      <div className="absolute inset-0">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/photos/poster-01.webp"
          />
          <Image
            src="/photos/poster-01.webp"
            alt="Premium billiards lounge interior with tables"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:object-[center_40%]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-joint-bg)] via-[rgba(10,10,10,0.6)] to-[rgba(10,10,10,0.4)] md:bg-gradient-to-r md:from-[var(--color-joint-bg)] md:via-[rgba(10,10,10,0.7)] md:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-10 pt-20 sm:px-6 sm:pb-12 md:justify-center md:pb-0">
        <div className="max-w-xl">
          <h1 className="mb-3 text-3xl font-bold leading-tight text-[var(--color-joint-cream)] sm:text-4xl md:text-5xl lg:text-6xl">
            WHERE EVERY GAME BECOMES AN EXPERIENCE
          </h1>

          <p className="mb-6 text-base leading-relaxed text-[rgba(255,224,178,0.9)] sm:text-lg md:text-xl">
            Great games. Good company. Unforgettable moments. Step in, take your shot, and make it yours.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-sm px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-joint-black)] transition-colors bg-[var(--color-joint-gold)] hover:bg-[#f0d98c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-joint-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-joint-bg)]"
            >
              Book Your Session
            </Link>
            <Link
              href="#games"
              className="inline-flex items-center justify-center rounded-sm border border-[rgba(255,224,178,0.4)] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-joint-cream)] transition-colors hover:bg-[rgba(255,224,178,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-joint-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-joint-bg)]"
            >
              Explore the Lounge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}