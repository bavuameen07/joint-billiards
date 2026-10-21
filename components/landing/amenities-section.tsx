import { SectionLabel } from "@/components/landing/section-label";
import { TiltCard } from "@/components/landing/tilt-card";
import { AMENITIES } from "@/lib/site";

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-label="What the lounge offers"
      className="joint-grain relative overflow-hidden border-b-2 border-joint-black"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="joint-drift absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,183,3,0.28),transparent_65%)] blur-2xl" />
        <div className="joint-drift absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.35),transparent_65%)] blur-2xl [animation-delay:-6s]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionLabel>What you get</SectionLabel>

        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(1.75rem,6vw,3rem)] leading-none font-black tracking-[-0.04em] text-joint-cream uppercase">
            More than a table.
          </h2>
          <p className="max-w-sm text-[11px] leading-relaxed font-bold tracking-[0.1em] text-joint-cream/80 uppercase">
            Everything is ready before you arrive — cue, chalk, and a seat to
            collapse into.
          </p>
        </div>

        <ul className="joint-reveal-group grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((amenity) => (
            <li key={amenity.tag}>
              <TiltCard className="h-full border-2 border-joint-black bg-joint-cream p-5 text-joint-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="inline-block border-2 border-joint-black bg-joint-orange px-2 py-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                  {amenity.tag}
                </span>
                <h3 className="mt-4 text-[13px] leading-tight font-black tracking-[-0.01em] uppercase">
                  {amenity.title}
                </h3>
                <p className="mt-2 text-[11px] leading-relaxed font-bold tracking-[0.06em] text-black/60 uppercase">
                  {amenity.body}
                </p>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
