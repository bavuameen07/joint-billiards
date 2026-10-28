"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Header } from "@/components/header";
import { PoolBall } from "@/components/landing/pool-ball";
import { SITE, STATS } from "@/lib/site";

export function HeroSplit() {
  const heroRef = useRef<HTMLElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const element = heroRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    element.style.setProperty("--px", px.toFixed(3));
    element.style.setProperty("--py", py.toFixed(3));
  }

  function handlePointerLeave() {
    const element = heroRef.current;
    if (!element) return;
    element.style.setProperty("--px", "0");
    element.style.setProperty("--py", "0");
  }

  return (
    <section
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="joint-3d relative overflow-hidden border-b-2 border-joint-black"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="joint-shift joint-depth-5 absolute inset-0">
          <div className="absolute top-[-25%] left-1/2 h-[75vh] w-[95vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,183,3,0.32),transparent_62%)] blur-3xl" />
        </div>

        <div className="joint-ring left-[4%] top-[18%] h-40 w-40" />
        <div className="joint-ring right-[6%] top-[52%] h-56 w-56 [animation-delay:1.2s]" />
        <div className="joint-ring left-[26%] bottom-[8%] h-24 w-24 [animation-delay:2.1s]" />

        <div className="joint-shift joint-depth-4 absolute top-[16%] left-[5%] hidden lg:block">
          <PoolBall number={8} />
        </div>
        <div className="joint-shift joint-depth-3 absolute top-[10%] right-[6%] hidden lg:block">
          <PoolBall number={3} dark />
        </div>
        <div className="joint-shift joint-depth-2 absolute bottom-[14%] left-[12%] hidden md:block">
          <PoolBall number={11} dark />
        </div>
        <div className="joint-shift joint-depth-3 absolute right-[16%] bottom-[8%] hidden xl:block">
          <PoolBall number={5} />
        </div>
      </div>

      <div aria-hidden="true" className="joint-grain pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <Header />

        <div className="joint-reveal-group lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
          <div className="lg:order-2 text-center lg:text-left">
            <p className="mx-auto mt-6 max-w-2xl text-[11px] leading-relaxed font-bold tracking-[0.1em] text-joint-cream uppercase sm:text-[12px] sm:tracking-[0.12em] lg:mx-0">
              {SITE.claim}
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/book"
                className="joint-btn w-full min-h-[48px] border-2 border-joint-black bg-joint-cream px-6 py-3 text-center text-[11px] font-bold tracking-[0.18em] text-joint-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:w-auto sm:text-sm sm:px-8 sm:py-4"
              >
                Book a table →
              </Link>
              <Link
                href="#tables"
                className="joint-btn w-full min-h-[48px] border-2 border-joint-black bg-transparent px-6 py-3 text-center text-[11px] font-bold tracking-[0.18em] text-joint-cream uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-joint-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:w-auto sm:text-sm sm:px-8 sm:py-4"
              >
                View tables & rates
              </Link>
            </div>
          </div>

          <div className="lg:order-1 mt-10 lg:mt-0 relative">
            <HeroPhotoFrame />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-joint-ink/10 bg-joint-black">
        <dl className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="joint-float-slow bg-joint-black px-3 py-4 text-center min-h-[100px] flex flex-col items-center justify-center border-r border-joint-orange/10 last:border-r-0"
            >
              <dt className="text-[8px] font-medium tracking-[0.15em] text-joint-orange uppercase sm:text-[9px]">
                {stat.label}
              </dt>
              <dd className="mt-1 text-xl font-medium tracking-[-0.02em] text-joint-cream transition-colors duration-300 hover:text-joint-orange sm:text-2xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function HeroPhotoFrame() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-[4/5]">
      <div className="joint-hero-photo-inner relative aspect-[4/5] w-full overflow-hidden joint-oval-lg joint-glass-elevated">
        <Image
          src="/photos/poster-01.webp"
          alt="JOINT house series poster 01"
          fill
          priority
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 560px"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAACwBACdASoUABkAPtVUoU2oJKMiN+gBABqJbACdMuzIABa7Os0YWfmkWr5m8/4AAPjNRQcKawBD5TYv/mKoy9258kv/sHf+lY/1LP8hHk4yoZEQe4w/RumfxIzqpmCVbySQONNg97BUIbfqkWVofQR+zMDO/MJiSwB73lrwCt8RxMAA"
          className="object-cover joint-hero-photo-img"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-joint-ink/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(26,10,4,0.3)_100%)]" />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
          <div>
            <span className="joint-label-minimal inline-flex items-center gap-2 px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-joint-orange animate-pulse" />
              Joint House Series
            </span>
            <p className="mt-2 text-[13px] sm:text-[15px] joint-heading-minimal leading-tight">
              Series One
            </p>
          </div>
          <span className="joint-label-minimal self-end mb-1 hidden sm:block">
            Poster 01
          </span>
        </div>

        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="joint-photo-nav-dot active" aria-hidden="true" />
          <span className="joint-photo-nav-dot" aria-hidden="true" />
          <span className="joint-photo-nav-dot" aria-hidden="true" />
        </div>
      </div>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
        <span className="joint-photo-nav-dot active" aria-label="Poster 1" />
        <span className="joint-photo-nav-dot" aria-label="Poster 2" />
        <span className="joint-photo-nav-dot" aria-label="Poster 3" />
      </div>

      <div className="joint-hero-photo-glow absolute bottom-[-20%] left-1/2 -translate-x-1/2 h-32 w-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,69,26,0.25),transparent_70%)] blur-xl pointer-events-none" />
    </div>
  );
}