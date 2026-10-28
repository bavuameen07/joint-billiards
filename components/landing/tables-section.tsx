import Link from "next/link";
import { SectionLabel } from "@/components/landing/section-label";
import { TiltCard } from "@/components/landing/tilt-card";
import { TABLES } from "@/lib/tables";

export function TablesSection() {
  return (
    <section
      id="tables"
      aria-label="Tables and rates"
      className="joint-grain relative border-b border-joint-ink/10 bg-joint-offwhite"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <SectionLabel>Tables & rates</SectionLabel>

        <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="joint-heading-minimal text-[clamp(1.5rem,5vw,2.75rem)] leading-none">
            Six tables. One rate card.
          </h2>
          <p className="joint-text-minimal-muted text-[10px] leading-relaxed max-w-sm sm:text-[11px]">
            Pay by the hour, up to four hours per booking. Chalk and cues included.
          </p>
        </div>

        <ul className="joint-reveal-group grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TABLES.map((table) => (
            <li key={table.id}>
              <TiltCard className="flex h-full flex-col joint-surface-card p-4 sm:p-5 overflow-hidden joint-oval-lg">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <p className="joint-label-minimal">
                      {table.id}
                    </p>
                    <p className="mt-1 joint-heading-minimal text-[12px] leading-tight sm:text-[13px]">
                      {table.game}
                    </p>
                  </div>
                  <span className="joint-pill joint-surface text-[8px] font-medium tracking-[0.15em] uppercase self-start sm:text-[9px]">
                    {table.size}
                  </span>
                </div>

                <p className="mt-2 joint-text-minimal-muted text-[9px] sm:text-[10px]">
                  {table.name}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-t border-joint-ink/10 pt-3">
                  <span className="joint-heading-minimal text-base sm:text-lg">
                    {table.rate}
                  </span>
                  <Link
                    href="/book"
                    className="joint-btn min-h-[44px] min-w-[100px] flex items-center justify-center joint-surface px-3 py-2 text-[9px] font-medium tracking-[0.18em] text-joint-ink uppercase transition hover:bg-joint-orange hover:text-joint-offwhite hover:border-joint-orange sm:px-4 sm:py-2.5 sm:text-[10px]"
                  >
                    Book →
                  </Link>
                </div>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}