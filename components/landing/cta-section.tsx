import Link from "next/link";

export function CtaSection() {
  return (
    <section
      aria-label="Book a table"
      className="relative overflow-hidden bg-[#F5F0E7]"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-14 sm:px-6 sm:py-16 lg:py-20 text-center">
        <h2 className="max-w-3xl text-[clamp(1.8rem,6vw,3.5rem)] leading-tight tracking-tight text-[#211F1B]">
          Ready to rack &apos;em up?
        </h2>

        <p className="max-w-xl text-base text-[#A9A49B]">
          Book a table in under a minute. No calls, no queues — just pick a table, pick a slot, and play.
        </p>

        <Link
          href="/book"
          className="inline-flex min-h-[48px] items-center rounded-sm bg-[#2563EB] px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#3B82F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
        >
          BOOK A TABLE →
        </Link>
      </div>
    </section>
  );
}