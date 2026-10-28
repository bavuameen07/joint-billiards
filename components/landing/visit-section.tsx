import Link from "next/link";
import { SectionLabel } from "@/components/landing/section-label";
import { TiltCard } from "@/components/landing/tilt-card";
import { HOUSE_RULES, SITE } from "@/lib/site";

export function VisitSection() {
  return (
    <section
      id="visit"
      aria-label="Hours and location"
      className="joint-grain relative border-b border-joint-ink/10 bg-joint-offwhite"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <SectionLabel>Hours & location</SectionLabel>

        <div className="joint-reveal-group grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <TiltCard className="h-full joint-surface-card p-4 sm:p-5 overflow-hidden joint-oval-lg">
              <p className="joint-label-minimal">
                Opening hours
              </p>
              <p className="mt-2 joint-heading-minimal text-2xl sm:text-3xl">
                {SITE.hours}
              </p>
              <p className="mt-1 joint-text-minimal-muted text-[10px] leading-relaxed sm:text-[11px]">
                {SITE.hoursNote}
              </p>

              <dl className="mt-4 space-y-1.5 border-t border-joint-ink/10 pt-3 joint-text-minimal-muted text-[10px] sm:text-[11px]">
                {[
                  ["Mon — Thu", "12PM — 2AM"],
                  ["Fri — Sat", "12PM — 3AM"],
                  ["Sunday", "12PM — 2AM"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between gap-3">
                    <dt className="joint-text-minimal-muted">{day}</dt>
                    <dd className="joint-heading-minimal">{hours}</dd>
                  </div>
                ))}
              </dl>
            </TiltCard>
          </div>

          <div>
            <TiltCard className="h-full joint-surface-card p-4 sm:p-5 overflow-hidden joint-oval-lg">
              <p className="joint-label-minimal">
                Find us
              </p>
              <address className="mt-2 joint-text-minimal text-[11px] leading-relaxed not-italic sm:text-[12px]">
                {SITE.address.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>

              <div className="mt-4 space-y-2 border-t border-joint-ink/10 pt-3">
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="joint-text-minimal block min-h-[44px] flex items-center transition hover:text-joint-orange sm:text-[12px]"
                >
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="joint-text-minimal block min-h-[44px] flex items-center transition hover:text-joint-orange sm:text-[12px]"
                >
                  {SITE.email}
                </a>
                <Link
                  href="/book"
                  className="joint-btn min-h-[44px] w-full flex items-center justify-center joint-surface px-3 py-2 joint-heading-minimal text-[9px] tracking-[0.18em] text-joint-ink uppercase transition hover:bg-joint-orange hover:text-joint-offwhite hover:border-joint-orange sm:px-4 sm:py-2.5 sm:text-[10px]"
                >
                  Reserve now →
                </Link>
              </div>
            </TiltCard>
          </div>

          <div>
            <TiltCard className="h-full joint-surface-card p-4 sm:p-5 overflow-hidden joint-oval-lg">
              <p className="joint-label-minimal">
                House rules
              </p>
              <ul className="mt-3 space-y-2.5">
                {HOUSE_RULES.map((rule) => (
                  <li
                    key={rule}
                    className="flex gap-3 joint-text-minimal-muted text-[10px] leading-relaxed sm:text-[11px]"
                  >
                    <span aria-hidden="true" className="text-joint-orange flex-shrink-0 mt-0.5">
                      ▲
                    </span>
                    <span className="joint-text-minimal-muted">{rule}</span>
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