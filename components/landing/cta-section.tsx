import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { PoolBall } from "@/components/landing/pool-ball";
import { SITE } from "@/lib/site";

export function CtaSection() {
  return (
    <section
      aria-label="Book a table"
      className="joint-grain relative overflow-hidden bg-joint-offwhite"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="joint-drift absolute -top-20 left-1/2 h-96 w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,69,26,0.12),transparent_65%)] blur-3xl" />
        <div className="joint-shift joint-depth-4 absolute top-[18%] left-[6%] hidden lg:block">
          <PoolBall number={4} dark />
        </div>
        <div className="joint-shift joint-depth-3 absolute right-[7%] bottom-[16%] hidden lg:block">
          <PoolBall number={6} />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:py-20 text-center">
        <p className="joint-label-minimal inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-joint-orange/30 bg-joint-orange/10">
          <span className="w-1.5 h-1.5 rounded-full bg-joint-orange" />
          {SITE.hours} • 6 Tables • Chalk Included
        </p>

        <BrandLogo
          variant="orange"
          sizes="(max-width: 640px) 85vw, 400px"
          className="joint-extrude-soft h-auto w-[min(85vw,400px)] select-none"
        />

        <h2 className="joint-heading-minimal max-w-3xl text-[clamp(1.75rem,8vw,4.5rem)] leading-[0.9]">
          Ready to rack &apos;em up?
        </h2>

        <p className="joint-text-minimal-muted max-w-xl text-[10px] leading-relaxed sm:text-xs sm:tracking-[0.12em]">
          Book a table in under a minute. No calls, no queues — just pick a
          table, pick a slot, and play.
        </p>

        <Link
          href="/book"
          className="joint-btn min-h-[48px] min-w-[280px] w-full joint-surface-elevated px-6 py-3 text-[11px] font-medium tracking-[0.18em] text-joint-ink uppercase transition hover:bg-joint-orange hover:text-joint-offwhite hover:border-joint-orange active:scale-[0.98] sm:w-auto sm:text-sm sm:px-8 sm:py-4"
        >
          Book a table →
        </Link>
      </div>
    </section>
  );
}