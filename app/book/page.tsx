import type { Metadata } from "next";
import Link from "next/link";
import { ReservationForm } from "@/components/reservation-form";
import { TABLES } from "@/lib/tables";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Reserve a Table — ${SITE.name}`,
  description: `Book a billiards or snooker table at ${SITE.name} ${SITE.tagline}. Open ${SITE.hours}.`,
};

export default function BookPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-10 pb-12 sm:px-6 sm:pt-14">
      <div className="mb-8 flex flex-col items-center text-center">
        <p className="mb-5 inline-block border-2 border-joint-black bg-joint-black px-3 py-1.5 text-[9px] font-bold tracking-[0.28em] text-joint-cream uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:text-[10px]">
          Open {SITE.hours} &nbsp;•&nbsp; 6 Tables &nbsp;•&nbsp; Chalk Included
        </p>

        <div className="joint-shift joint-depth-1">
          <h1 className="joint-logo text-[clamp(2.75rem,14vw,7rem)] leading-[0.82] font-black tracking-[-0.06em] uppercase select-none">
            Reserve
          </h1>
        </div>

        <div className="mt-6 w-full max-w-xl border-2 border-joint-black bg-joint-cream px-4 py-2.5 text-[11px] font-bold tracking-[0.18em] text-joint-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:text-sm sm:tracking-[0.25em]">
          Billiards &amp; Lounge Reservations
        </div>

        <Link
          href="/"
          className="mt-5 text-[10px] font-bold tracking-[0.2em] text-joint-cream uppercase underline underline-offset-4 transition hover:text-joint-black"
        >
          ← Back to {SITE.name}
        </Link>
      </div>

      <div className="flex flex-col gap-8">
        <section
          aria-label="Available tables"
          className="mx-auto w-full max-w-3xl"
        >
          <div className="mb-2 flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase">
              Tonight&apos;s tables
            </span>
            <span className="h-0.5 flex-1 bg-joint-black" />
          </div>

          <ul className="joint-reveal-group grid grid-cols-2 gap-3 sm:grid-cols-3">
            {TABLES.map((table) => (
              <li
                key={table.id}
                className="border-2 border-joint-black bg-joint-cream p-3 text-joint-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-[9px] font-bold tracking-[0.2em] text-joint-orange uppercase">
                  {table.id}
                </p>
                <p className="mt-1 text-[11px] leading-tight font-bold uppercase">
                  {table.name}
                </p>
                <p className="mt-2 text-[10px] font-bold tracking-[0.1em] text-black/50 uppercase">
                  {table.rate}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <ReservationForm />
      </div>
    </div>
  );
}
