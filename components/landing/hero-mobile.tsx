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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 sm:px-6 sm:py-16">
        <div className="text-center">
          <p className="mb-4 inline-block px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-joint-gold uppercase">
            Premium Billiards Lounge
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-joint-cream">
            {SITE.name}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-joint-offwhite-muted max-w-2xl mx-auto leading-relaxed">
            {SITE.tagline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="joint-btn py-3 px-8 text-[11px] font-medium tracking-[0.15em] text-joint-ink uppercase transition-colors bg-joint-amber text-joint-black hover:bg-joint-gold hover:text-joint-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-joint-amber focus-visible:ring-offset-2"
            >
              Book a table →
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-[var(--color-joint-surface)]" />
    </section>
  );
}