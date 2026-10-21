"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/landing/section-label";
import { POSTERS } from "@/lib/site";

export function PosterWall() {
  const [active, setActive] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setActive(null), []);

  const step = useCallback((direction: number) => {
    setActive((current) => {
      if (current === null) return 0;
      return (current + direction + POSTERS.length) % POSTERS.length;
    });
  }, []);

  

  useEffect(() => {
    if (active === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, close, step]);

  const current = active === null ? null : POSTERS[active];

  return (
    <section
      id="posters"
      aria-label="JOINT poster series"
      className="joint-grain relative overflow-hidden border-y-2 border-joint-black bg-joint-black text-joint-cream"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-30%] left-1/2 h-[70vh] w-[110vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,69,26,0.35),transparent_62%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <SectionLabel className="text-joint-orange">The poster series</SectionLabel>

        <div className="joint-reveal-group mb-8 max-w-2xl">
          <h2 className="text-2xl font-black tracking-[-0.04em] uppercase sm:text-4xl lg:text-5xl">
            Printed, pinned, and loud
          </h2>
          <p className="mt-3 text-[10px] leading-relaxed font-bold tracking-[0.1em] text-joint-cream/70 uppercase sm:text-xs">
            The JOINT house series — three posters from the room, shot on the
            floor and on the street. Tap any frame to blow it up.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="joint-poster-scroll snap-x overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
          role="list"
          aria-label="Poster gallery"
        >
          {POSTERS.map((poster, index) => (
            <button
              key={poster.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Open ${poster.label}`}
              className="joint-poster-card group relative flex-shrink-0 snap-center w-[86vw] max-w-[280px] sm:w-[42vw] max-w-[320px] lg:w-[30%] cursor-pointer"
              role="listitem"
            >
              <span className="relative block aspect-[4/5] w-full overflow-hidden border-2 border-joint-cream/25 bg-joint-ink shadow-[10px_12px_0px_0px_rgba(255,69,26,0.85)] transition-all duration-500 group-hover:shadow-[14px_18px_0px_0px_rgba(255,69,26,0.95)] lg:group-hover:scale-[1.02]">
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  fill
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 42vw, 30%"
                  placeholder="blur"
                  blurDataURL={poster.blurDataURL}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-joint-black/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-joint-black/85 px-3 py-2 text-[9px] font-bold tracking-[0.25em] uppercase backdrop-blur-sm pointer-events-none">
                  <span>{poster.label}</span>
                  <span className="text-joint-orange">Open ↗</span>
                </span>
              </span>
            </button>
          ))}
        </div>

        <div aria-hidden="true" className="mt-8 h-12 w-[70%] mx-auto rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,69,26,0.4),transparent_70%)] blur-xl" />
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label="Close poster"
            onClick={close}
            className="absolute inset-0 cursor-zoom-out bg-joint-black/92 backdrop-blur-md transition-opacity duration-200"
          />

          <div className="joint-pop relative w-full max-w-[420px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden border-2 border-joint-cream/30 shadow-[14px_16px_0px_0px_rgba(255,69,26,0.9)]">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(max-width: 640px) 92vw, 420px"
                priority
                className="object-cover"
              />
            </div>

            <p className="mt-5 text-center text-[10px] font-bold tracking-[0.3em] uppercase">
              {current.label} — {current.title}
            </p>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                className="joint-btn min-h-[44px] min-w-[44px] border-2 border-joint-cream/40 px-4 py-2.5 text-[10px] font-bold tracking-[0.25em] uppercase transition hover:border-joint-orange hover:bg-joint-orange hover:text-joint-black"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={close}
                className="joint-btn min-h-[44px] min-w-[44px] border-2 border-joint-black bg-joint-orange px-5 py-2.5 text-[10px] font-bold tracking-[0.25em] text-joint-black uppercase shadow-[4px_4px_0px_0px_rgba(255,253,240,1)] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(255,253,240,1)]"
              >
                Close ✕
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="joint-btn min-h-[44px] min-w-[44px] border-2 border-joint-cream/40 px-4 py-2.5 text-[10px] font-bold tracking-[0.25em] uppercase transition hover:border-joint-orange hover:bg-joint-orange hover:text-joint-black"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}