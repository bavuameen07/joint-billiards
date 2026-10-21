"use client";

import Link from "next/link";
import { useRef } from "react";
import { Header } from "@/components/header";
import { PoolBall } from "@/components/landing/pool-ball";
import { PremiumPhotoHighlight } from "@/components/landing/premium-photo";
import { SITE, STATS } from "@/lib/site";

export function Hero() {
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

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Header />

        <PremiumPhotoHighlight variant="hero" className="my-8" />

        <p className="mx-auto mt-8 max-w-2xl text-center text-[12px] leading-relaxed font-bold tracking-[0.1em] text-joint-cream uppercase sm:text-sm sm:tracking-[0.14em]">
          {SITE.claim}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/book"
            className="joint-btn w-full border-2 border-joint-black bg-joint-cream px-7 py-4 text-center text-xs font-bold tracking-[0.2em] text-joint-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:w-auto sm:text-sm"
          >
            Book a table →
          </Link>
          <Link
            href="#tables"
            className="joint-btn w-full border-2 border-joint-black bg-transparent px-7 py-4 text-center text-xs font-bold tracking-[0.2em] text-joint-cream uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-joint-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:w-auto sm:text-sm"
          >
            View tables &amp; rates
          </Link>
        </div>
      </div>

      <div className="relative z-10 border-t-2 border-joint-black bg-joint-black">
        <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px bg-joint-orange lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="joint-float-slow bg-joint-black px-4 py-5 text-center"
            >
              <dt className="text-[9px] font-bold tracking-[0.25em] text-joint-orange uppercase">
                {stat.label}
              </dt>
              <dd className="mt-1.5 text-xl font-black tracking-[-0.03em] text-joint-cream uppercase transition-colors duration-300 hover:text-joint-amber sm:text-2xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
