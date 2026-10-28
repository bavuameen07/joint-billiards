import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { PoolBall } from "@/components/landing/pool-ball";
import { SITE } from "@/lib/site";

export function CtaSection() {
  return (
    <section
      aria-label="Start a project"
      className="relative overflow-hidden bg-[var(--color-joint-surface)]"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-14 sm:px-6 sm:py-16 lg:py-24 text-center">
        <h2 className="max-w-3xl text-[clamp(1.8rem,6vw,3.5rem)] leading-tight tracking-tight text-[var(--color-joint-cream)]">
          Ready to start your project?
        </h2>

        <p className="max-w-xl text-base text-[rgba(234,231,223,0.75)]">
          Let&apos;s build something memorable together.
        </p>

        <Link
          href="#contact"
          className="inline-flex min-h-[48px] items-center rounded-sm bg-[var(--color-joint-gold)] px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-joint-black)] transition-colors hover:bg-[#e5c45a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-joint-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-joint-surface)]"
        >
          Start a Project →
        </Link>
      </div>
    </section>
  );
}