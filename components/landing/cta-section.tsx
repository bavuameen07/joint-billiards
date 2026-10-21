import Link from "next/link";
import { PoolBall } from "@/components/landing/pool-ball";
import { SITE } from "@/lib/site";

export function CtaSection() {
  return (
    <section
      aria-label="Book a table"
      className="joint-grain relative overflow-hidden border-b-2 border-joint-black bg-joint-black"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="joint-drift absolute -top-20 left-1/2 h-96 w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,69,26,0.4),transparent_65%)] blur-3xl" />
        <div className="joint-shift joint-depth-4 absolute top-[18%] left-[6%] hidden lg:block">
          <PoolBall number={4} dark />
        </div>
        <div className="joint-shift joint-depth-3 absolute right-[7%] bottom-[16%] hidden lg:block">
          <PoolBall number={6} />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 sm:py-20">
        <p className="joint-chip inline-block border-2 border-joint-orange bg-joint-black px-3 py-1.5 text-[10px] font-bold tracking-[0.3em] text-joint-orange uppercase">
          {SITE.hours} • 6 Tables • Chalk Included
        </p>

        <h2 className="max-w-3xl text-[clamp(2rem,9vw,5rem)] leading-[0.9] font-black tracking-[-0.05em] text-joint-cream uppercase">
          Ready to rack &apos;em up?
        </h2>

        <p className="max-w-xl text-[11px] leading-relaxed font-bold tracking-[0.12em] text-joint-cream/75 uppercase sm:text-xs">
          Book a table in under a minute. No calls, no queues — just pick a
          table, pick a slot, and play.
        </p>

        <Link
          href="/book"
          className="joint-btn border-2 border-joint-black bg-joint-orange px-8 py-4 text-xs font-bold tracking-[0.22em] text-joint-black uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,0.9)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:text-sm"
        >
          Book a table →
        </Link>
      </div>
    </section>
  );
}
