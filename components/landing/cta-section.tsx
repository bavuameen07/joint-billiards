import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { PoolBall } from "@/components/landing/pool-ball";
import { SITE } from "@/lib/site";

export function CtaSection() {
  return (
    <section
      aria-label="Book a table"
      className="relative overflow-hidden bg-[#FFF0DB]"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-14 sm:px-6 sm:py-16 lg:py-20 text-center">
        <h2 className="max-w-3xl text-[clamp(1.8rem,6vw,3.5rem)] leading-tight tracking-tight text-[#21140E]">
          Ready to rack &apos;em up?
        </h2>

        <p className="max-w-xl text-base text-[#5C4033]">
          Book a table in under a minute. No calls, no queues — just pick a table, pick a slot, and play.
        </p>

        <Link
          href="/book"
          className="inline-flex min-h-[48px] items-center rounded-sm bg-[#FF6B00] px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#F45100] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2"
        >
          Book a table →
        </Link>
      </div>
    </section>
  );
}