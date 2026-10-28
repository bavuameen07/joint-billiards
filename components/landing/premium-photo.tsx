"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { POSTERS } from "@/lib/site";

export function PremiumPhotoHighlight({
  variant = "hero",
  className = "",
}: { variant?: "hero" | "section" | "inline"; className?: string }) {
  if (variant === "hero") {
    return <HeroCarousel className={className} />;
  }

  if (variant === "section") {
    return <SectionGallery className={className} />;
  }

  return (
    <div className={`joint-premium-photo-inline ${className}`}>
      <div className="joint-surface-card overflow-hidden joint-oval-lg">
        <Image
          src={POSTERS[0].src}
          alt={POSTERS[0].alt}
          width={160}
          height={200}
          placeholder="blur"
          blurDataURL={POSTERS[0].blurDataURL}
          className="object-cover"
        />
      </div>
    </div>
  );
}

function HeroCarousel({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % POSTERS.length);
    }, 5000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || touchStart === null) return;
    const delta = e.touches[0].clientX - touchStart;
    if (Math.abs(delta) > 50) {
      setIndex((i) => (i + (delta < 0 ? 1 : -1) + POSTERS.length) % POSTERS.length);
      setTouchStart(null);
      setIsDragging(false);
    }
  }, [isDragging, touchStart]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setTouchStart(null);
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % POSTERS.length);
    }, 5000);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`joint-hero-carousel ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={(e) => {
        setTouchStart(e.clientX);
        setIsDragging(true);
        if (autoplayRef.current) clearInterval(autoplayRef.current);
      }}
      onMouseMove={(e) => {
        if (!isDragging || touchStart === null) return;
        const delta = e.clientX - touchStart;
        if (Math.abs(delta) > 80) {
          setIndex((i) => (i + (delta < 0 ? 1 : -1) + POSTERS.length) % POSTERS.length);
          setTouchStart(null);
          setIsDragging(false);
        }
      }}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      role="region"
      aria-label="Featured posters carousel"
    >
      <div
        className="joint-carousel-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {POSTERS.map((poster, i) => (
          <article
            key={poster.src}
            className="joint-carousel-slide relative h-full w-full flex items-center justify-center"
            style={{ width: "100%" }}
          >
            <div className="relative w-full max-w-[540px] mx-auto aspect-[4/5] overflow-hidden joint-oval-lg joint-glass-elevated">
              <Image
                src={poster.src}
                alt={poster.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 480px) 94vw, (max-width: 768px) 88vw, 540px"
                placeholder="blur"
                blurDataURL={poster.blurDataURL}
                className="object-cover joint-carousel-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-joint-ink/30 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(26,10,4,0.3)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
                <div>
                  <span className="joint-label-minimal inline-flex items-center gap-2 px-3 py-1.5">
                    <span className="w-2 h-2 rounded-full bg-joint-orange animate-pulse" />
                    Joint House Series
                  </span>
                  <p className="mt-2 joint-heading-minimal text-[13px] sm:text-[15px] leading-tight">
                    {poster.title}
                  </p>
                </div>
                <span className="joint-label-minimal self-end mb-1 hidden sm:block">
                  {poster.label}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="joint-carousel-indicators flex items-center justify-center gap-2 mt-5 sm:mt-6">
        {POSTERS.map((_, i) => (
          <button
            key={POSTERS[i].src}
            type="button"
            onClick={() => setIndex(i)}
            className={`joint-carousel-dot ${i === index ? "active" : ""}`}
            aria-label={`View ${POSTERS[i].label}`}
            aria-current={i === index ? "true" : "false"}
          />
        ))}
      </div>

      <div className="joint-carousel-hint mt-4 text-center joint-text-minimal-muted text-[9px] hidden sm:block">
        Swipe or drag to explore
      </div>
    </div>
  );
}

function SectionGallery({ className = "" }: { className?: string }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className={`joint-section-gallery ${className}`} aria-label="Poster gallery">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 sm:mb-12">
          <p className="joint-label-minimal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-joint-orange/30 bg-joint-orange/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-joint-orange" />
            Gallery
          </p>
          <h2 className="joint-heading-minimal text-[clamp(1.75rem,6vw,3rem)] leading-[1.1]">
            The Joint House Series
          </h2>
          <p className="joint-text-minimal-muted text-[11px] leading-relaxed max-w-sm sm:max-w-md mt-3">
            Three limited posters. Shot on the floor, pinned on the wall, lived in the room.
          </p>
        </header>

        <div className="joint-masonry-grid" role="list">
          {POSTERS.map((poster) => (
            <article
              key={poster.src}
              className={`joint-masonry-card group relative overflow-hidden joint-oval-lg joint-glass-card ${expanded === poster.src ? "expanded" : ""}`}
              role="listitem"
              onClick={() => setExpanded(expanded === poster.src ? null : poster.src)}
            >
              <div className="relative aspect-[4/5] overflow-hidden joint-oval-lg">
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={poster.blurDataURL}
                  className="object-cover joint-masonry-img transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-joint-ink/30 via-joint-ink/5 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(26,10,4,0.3)_100%)]" />

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col gap-2 transform transition-all duration-500 group-hover:translate-y-0">
                  <span className="joint-label-minimal inline-flex items-center gap-2 px-3 py-1.5 self-start">
                    <span className="w-2 h-2 rounded-full bg-joint-orange" />
                    Joint House Series
                  </span>
                  <div>
                    <p className="joint-heading-minimal text-[12px] sm:text-[14px] leading-tight">
                      {poster.title}
                    </p>
                    <p className="joint-label-minimal">
                      {poster.label}
                    </p>
                  </div>
                </div>

                {expanded === poster.src && (
                  <div className="absolute inset-0 flex items-center justify-center bg-joint-ink/95 backdrop-blur-md z-10 animate-fade-in joint-oval-lg">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setExpanded(null); }}
                      className="absolute top-4 right-4 p-2 rounded-full bg-joint-offwhite/80 border border-joint-ink/10 text-joint-ink transition hover:bg-joint-orange hover:border-joint-orange hover:text-joint-offwhite"
                      aria-label="Close"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="text-center p-4">
                      <p className="joint-heading-minimal text-[14px] mb-2">
                        {poster.title}
                      </p>
                      <p className="joint-text-minimal-muted text-[11px] uppercase mb-6">
                        {poster.label} — Tap to close
                      </p>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setExpanded(null); }}
                        className="joint-surface-card px-6 py-3 joint-text-minimal tracking-[0.1em] uppercase transition hover:border-joint-orange"
                      >
                        Back to gallery
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center joint-text-minimal-muted text-[9px] hidden sm:block">
          Tap any poster to expand • Swipe on mobile
        </p>
      </div>
    </section>
  );
}