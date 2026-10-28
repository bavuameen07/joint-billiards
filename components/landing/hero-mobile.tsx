"use client";

import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-joint-bg)]">
      <div className="absolute inset-0">
        <Image
          src="/photos/poster-01.webp"
          alt="JOINT premium billiards lounge interior with tables"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%] sm:object-[center_40%] lg:object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-joint-bg)] via-[rgba(5,5,16,0.7)] to-[rgba(5,5,16,0.4)] lg:bg-gradient-to-r lg:from-[var(--color-joint-bg)] lg:via-[rgba(5,5,16,0.8)] lg:to-[rgba(5,5,16,0.3)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 md:justify-center md:pb-0">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-[var(--color-joint-cream)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            WE BUILD DIGITAL EXPERIENCES THAT STAND OUT
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-[rgba(234,231,223,0.85)] sm:text-lg">
            Creative websites, distinctive branding, and digital experiences designed to make businesses more memorable.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-sm bg-[var(--color-joint-gold)] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-joint-black)] transition-colors hover:bg-[#e5c45a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-joint-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-joint-bg)]"
            >
              Explore Our Services
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm border border-[rgba(212,175,55,0.6)] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-joint-cream)] transition-colors hover:bg-[rgba(212,175,55,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-joint-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-joint-bg)]"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}