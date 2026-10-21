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
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionLabel>Hours &amp; location</SectionLabel>

        <div className="joint-reveal-group grid gap-4 lg:grid-cols-3">
          <div>
            <TiltCard className="h-full border-2 border-joint-black bg-joint-cream p-5 text-joint-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-[10px] font-bold tracking-[0.25em] text-joint-orange uppercase">
                Opening hours
              </p>
              <p className="mt-3 text-3xl font-black tracking-[-0.04em] uppercase">
                {SITE.hours}
              </p>
              <p className="mt-2 text-[11px] leading-relaxed font-bold tracking-[0.08em] text-black/60 uppercase">
                {SITE.hoursNote}
              </p>

              <dl className="mt-6 space-y-2 border-t-2 border-dashed border-black/20 pt-4 text-[11px] font-bold tracking-[0.1em] uppercase">
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
            <TiltCard className="h-full border-2 border-joint-black bg-joint-cream p-5 text-joint-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-[10px] font-bold tracking-[0.25em] text-joint-orange uppercase">
                Find us
              </p>
              <address className="mt-3 space-y-1 text-[12px] font-bold tracking-[0.08em] not-italic uppercase">
                {SITE.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>

              <div className="mt-6 space-y-2 border-t-2 border-dashed border-black/20 pt-4">
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="block text-[12px] font-bold tracking-[0.08em] uppercase transition hover:text-joint-orange"
                >
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="block text-[12px] font-bold tracking-[0.08em] uppercase transition hover:text-joint-orange"
                >
                  {SITE.email}
                </a>
                <Link
                  href="/book"
                  className="joint-btn inline-block border-2 border-joint-black bg-joint-black px-4 py-2.5 text-[10px] font-bold tracking-[0.2em] text-joint-cream uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition hover:bg-joint-orange hover:text-joint-black"
                >
                  Reserve now →
                </Link>
              </div>
            </TiltCard>
          </div>

          <div>
            <TiltCard className="h-full border-2 border-joint-black bg-joint-cream p-5 text-joint-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-[10px] font-bold tracking-[0.25em] text-joint-orange uppercase">
                House rules
              </p>
              <ul className="mt-4 space-y-3">
                {HOUSE_RULES.map((rule) => (
                  <li
                    key={rule}
                    className="flex gap-3 text-[11px] leading-relaxed font-bold tracking-[0.06em] text-black/65 uppercase"
                  >
                    <span aria-hidden="true" className="text-joint-orange">
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
