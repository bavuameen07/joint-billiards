import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { PoolBall } from "@/components/landing/pool-ball";
import { SITE } from "@/lib/site";

export function CtaSection() {
  return (
    <section
      aria-label="Book a table"
      className="relative overflow-hidden bg-gradient-to-br from-[#FF5A00] to-[#E64500]"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-14 sm:px-6 sm:py-16 lg:py-20 text-center">
        <h2 className="max-w-3xl text-[clamp(1.8rem,6vw,3.5rem)] leading-tight tracking-tight text-[#FFF7ED]">
          Ready to rack &apos;em up?
        </h2>

        <p className="max-w-xl text-base text-[#FFF7ED]/90">
          Book a table in under a minute. No calls, no queues — just pick a table, pick a slot, and play.
        </p>

        <Link
          href="/book"
          className="inline-flex min-h-[48px] items-center rounded-sm bg-white px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#21140E] transition-colors hover:bg-[#FFF7ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E64500]"
        >
          BOOK A TABLE →
        </Link>
      </div>
    </section>
  );
}