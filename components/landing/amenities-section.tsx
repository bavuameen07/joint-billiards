import { SectionLabel } from "@/components/landing/section-label";
import { TiltCard } from "@/components/landing/tilt-card";
import { AMENITIES } from "@/lib/site";

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-label="What the lounge offers"
      className="joint-grain relative overflow-hidden border-b border-joint-ink/10 bg-joint-offwhite"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="joint-drift absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,69,26,0.1),transparent_65%)] blur-2xl" />
        <div className="joint-drift absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(26,10,4,0.1),transparent_65%)] blur-2xl [animation-delay:-6s]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <SectionLabel>What you get</SectionLabel>

        <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="joint-heading-minimal text-[clamp(1.5rem,5vw,2.75rem)] leading-none">
            More than a table.
          </h2>
          <p className="joint-text-minimal-muted text-[10px] leading-relaxed max-w-sm sm:text-[11px]">
            Everything is ready before you arrive — cue, chalk, and a seat to collapse into.
          </p>
        </div>

        <ul className="joint-reveal-group grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((amenity) => (
            <li key={amenity.tag}>
              <TiltCard className="h-full joint-surface-card p-4 sm:p-5 overflow-hidden joint-oval-lg">
                <span className="joint-label-minimal inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full joint-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-joint-orange" />
                  {amenity.tag}
                </span>
                <h3 className="mt-3 joint-heading-minimal text-[12px] leading-tight sm:text-[13px]">
                  {amenity.title}
                </h3>
                <p className="mt-2 joint-text-minimal-muted text-[10px] leading-relaxed sm:text-[11px]">
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