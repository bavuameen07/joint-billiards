"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { SITE } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateBackground = () => {
      const isMobile = window.innerWidth < 768;
      element.style.backgroundSize = isMobile ? "cover" : "auto";
      element.style.backgroundPosition = isMobile ? "center" : "center";
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-b from-[var(--color-joint-bg)] via-[var(--color-joint-surface)] to-[var(--color-joint-black)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_55%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-12 sm:px-6 sm:py-16">
        <div className="text-center">

          <h1 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-joint-cream">
            {SITE.name}
          </h1>

          <p className="mb-8 text-lg sm:text-xl text-joint-offwhite-muted leading-relaxed">
            {SITE.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="joint-btn py-3 px-8 text-[11px] font-medium tracking-[0.15em] text-joint-ink uppercase transition-colors bg-joint-amber text-joint-black hover:bg-joint-gold hover:text-joint-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-joint-amber focus-visible:ring-offset-2"
            >
              Book a table →
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <Image
          src="/photos/poster-01.webp"
          alt="JOINT premium billiards lounge"
          fill
          className="object-cover joint-premium-photo-hero"
          priority
        />
        <Image
          src="/photos/poster-02.webp"
          alt="JOINT night billiards session"
          fill
          className="object-cover joint-premium-photo-hero"
          loading="eager"
        />
        <Image
          src="/photos/poster-03.webp"
          alt="JOINT cinematic vibes"
          fill
          className="object-cover joint-premium-photo-hero"
          loading="eager"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-[var(--color-joint-surface)]" />
    </section>
  );
}