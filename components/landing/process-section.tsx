import { SectionLabel } from "@/components/landing/section-label";
import { TiltCard } from "@/components/landing/tilt-card";
import { STEPS } from "@/lib/site";

export function ProcessSection() {
  return (
    <section
      id="how-it-works"
      aria-label="How booking works"
      className="joint-grain relative border-b border-joint-ink/10 bg-joint-offwhite"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <SectionLabel>How it works</SectionLabel>

        <h2 className="mb-8 joint-heading-minimal text-[clamp(1.5rem,5vw,2.75rem)] leading-none">
          Three steps to the table.
        </h2>

        <ol className="joint-reveal-group grid gap-4 sm:grid-cols-1 md:grid-cols-3">
          {STEPS.map((item) => (
            <li key={item.step}>
              <TiltCard className="h-full joint-surface-card p-4 sm:p-5 overflow-hidden joint-oval-lg">
                <span className="joint-pill joint-surface-elevated flex h-10 w-10 items-center justify-center border border-joint-ink/10 text-base font-medium text-joint-orange shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] sm:h-12 sm:w-12 sm:text-lg">
                  {item.step}
                </span>
                <h3 className="mt-3 joint-heading-minimal text-[12px] sm:text-[13px]">
                  {item.title}
                </h3>
                <p className="mt-2 joint-text-minimal-muted text-[10px] leading-relaxed sm:text-[11px]">
                  {item.body}
                </p>
              </TiltCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}