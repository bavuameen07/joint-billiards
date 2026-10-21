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
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <SectionLabel>Tables & rates</SectionLabel>

        <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-[clamp(1.5rem,5vw,2.75rem)] leading-none font-black tracking-[-0.04em] uppercase">
            Six tables. One rate card.
          </h2>
          <p className="max-w-sm text-[10px] leading-relaxed font-bold tracking-[0.1em] uppercase sm:text-[11px]">
            Pay by the hour, up to four hours per booking. Chalk and cues included.
          </p>
        </div>

        <ul className="joint-reveal-group grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TABLES.map((table) => (
            <li key={table.id}>
              <TiltCard className="flex h-full flex-col border-2 border-joint-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <p className="text-[8px] font-bold tracking-[0.15em] text-joint-orange uppercase sm:text-[9px]">
                      {table.id}
                    </p>
                    <p className="mt-1 text-[12px] leading-tight font-black tracking-[-0.01em] uppercase sm:text-[13px]">
                      {table.game}
                    </p>
                  </div>
                  <span className="border-2 border-joint-black bg-joint-cream px-2 py-1 text-[8px] font-bold tracking-[0.15em] uppercase sm:text-[9px] self-start">
                    {table.size}
                  </span>
                </div>

                <p className="mt-2 text-[9px] font-bold tracking-[0.1em] text-black/55 uppercase sm:text-[10px]">
                  {table.name}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-t-2 border-dashed border-black/20 pt-3">
                  <span className="text-base font-black tracking-[-0.03em] uppercase sm:text-lg">
                    {table.rate}
                  </span>
                  <Link
                    href="/book"
                    className="joint-btn min-h-[44px] min-w-[100px] flex items-center justify-center border-2 border-joint-black bg-joint-black px-3 py-2 text-[9px] font-bold tracking-[0.18em] text-joint-cream uppercase transition hover:bg-joint-orange hover:text-joint-black sm:px-4 sm:py-2.5 sm:text-[10px]"
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
