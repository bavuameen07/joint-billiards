import Link from "next/link";
import { SectionLabel } from "@/components/landing/section-label";
import { TiltCard } from "@/components/landing/tilt-card";
import { TABLES } from "@/lib/tables";

export function TablesSection() {
  return (
    <section
      id="tables"
      aria-label="Tables and rates"
      className="joint-grain relative border-b-2 border-joint-black bg-joint-cream text-joint-black"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionLabel>Tables &amp; rates</SectionLabel>

        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(1.75rem,6vw,3rem)] leading-none font-black tracking-[-0.04em] uppercase">
            Six tables. One rate card.
          </h2>
          <p className="max-w-sm text-[11px] leading-relaxed font-bold tracking-[0.1em] uppercase">
            Pay by the hour, up to four hours per booking. Chalk and cues included.
          </p>
        </div>

        <ul className="joint-reveal-group grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TABLES.map((table) => (
            <li key={table.id}>
              <TiltCard className="flex h-full flex-col border-2 border-joint-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.2em] text-joint-orange uppercase">
                      {table.id}
                    </p>
                    <p className="mt-1 text-[13px] leading-tight font-black tracking-[-0.02em] uppercase">
                      {table.game}
                    </p>
                  </div>
                  <span className="border-2 border-joint-black bg-joint-cream px-2 py-1 text-[9px] font-bold tracking-[0.15em] uppercase">
                    {table.size}
                  </span>
                </div>

                <p className="mt-3 text-[10px] font-bold tracking-[0.12em] text-black/55 uppercase">
                  {table.name}
                </p>

                <div className="mt-5 flex items-end justify-between gap-3 border-t-2 border-dashed border-black/20 pt-3">
                  <span className="text-lg font-black tracking-[-0.03em] uppercase">
                    {table.rate}
                  </span>
                  <Link
                    href="/book"
                    className="border-2 border-joint-black bg-joint-black px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] text-joint-cream uppercase transition hover:bg-joint-orange hover:text-joint-black"
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
