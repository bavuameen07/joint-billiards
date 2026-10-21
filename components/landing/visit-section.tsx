import Link from "next/link";
import { SectionLabel } from "@/components/landing/section-label";
import { TiltCard } from "@/components/landing/tilt-card";
import { HOUSE_RULES, SITE } from "@/lib/site";

export function VisitSection() {
  return (
    <section
      id="visit"
      aria-label="Hours and location"
      className="joint-grain relative border-b-2 border-joint-black"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <SectionLabel>Hours & location</SectionLabel>

        <div className="joint-reveal-group grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <TiltCard className="h-full border-2 border-joint-black bg-joint-cream p-4 sm:p-5 text-joint-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-[9px] font-bold tracking-[0.2em] text-joint-orange uppercase sm:text-[10px]">
                Opening hours
              </p>
              <p className="mt-2 text-2xl font-black tracking-[-0.03em] uppercase sm:text-3xl">
                {SITE.hours}
              </p>
              <p className="mt-1 text-[10px] leading-relaxed font-bold tracking-[0.08em] text-black/60 uppercase sm:text-[11px]">
                {SITE.hoursNote}
              </p>

              <dl className="mt-4 space-y-1.5 border-t-2 border-dashed border-black/20 pt-3 text-[10px] font-bold tracking-[0.1em] uppercase sm:text-[11px]">
                {[
                  ["Mon — Thu", "12PM — 2AM"],
                  ["Fri — Sat", "12PM — 3AM"],
                  ["Sunday", "12PM — 2AM"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between gap-3">
                    <dt className="text-black/55">{day}</dt>
                    <dd>{hours}</dd>
                  </div>
                ))}
              </dl>
            </TiltCard>
          </div>

          <div>
            <TiltCard className="h-full border-2 border-joint-black bg-joint-cream p-4 sm:p-5 text-joint-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-[9px] font-bold tracking-[0.2em] text-joint-orange uppercase sm:text-[10px]">
                Find us
              </p>
              <address className="mt-2 space-y-1 text-[11px] font-bold tracking-[0.08em] not-italic uppercase sm:text-[12px]">
                {SITE.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>

              <div className="mt-4 space-y-2 border-t-2 border-dashed border-black/20 pt-3">
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="block min-h-[44px] flex items-center text-[11px] font-bold tracking-[0.08em] uppercase transition hover:text-joint-orange sm:text-[12px]"
                >
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="block min-h-[44px] flex items-center text-[11px] font-bold tracking-[0.08em] uppercase transition hover:text-joint-orange sm:text-[12px]"
                >
                  {SITE.email}
                </a>
                <Link
                  href="/book"
                  className="joint-btn min-h-[44px] w-full flex items-center justify-center border-2 border-joint-black bg-joint-black px-3 py-2 text-[9px] font-bold tracking-[0.18em] text-joint-cream uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition hover:bg-joint-orange hover:text-joint-black sm:px-4 sm:py-2.5 sm:text-[10px]"
                >
                  Reserve now →
                </Link>
              </div>
            </TiltCard>
          </div>

          <div>
            <TiltCard className="h-full border-2 border-joint-black bg-joint-cream p-4 sm:p-5 text-joint-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-[9px] font-bold tracking-[0.2em] text-joint-orange uppercase sm:text-[10px]">
                House rules
              </p>
              <ul className="mt-3 space-y-2.5">
                {HOUSE_RULES.map((rule) => (
                  <li
                    key={rule}
                    className="flex gap-3 text-[10px] leading-relaxed font-bold tracking-[0.06em] text-black/65 uppercase sm:text-[11px]"
                  >
                    <span aria-hidden="true" className="text-joint-orange flex-shrink-0 mt-0.5">
                      ▲
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
