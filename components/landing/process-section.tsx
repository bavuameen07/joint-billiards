import { SectionLabel } from "@/components/landing/section-label";
import { TiltCard } from "@/components/landing/tilt-card";
import { STEPS } from "@/lib/site";

export function ProcessSection() {
  return (
    <section
      id="how-it-works"
      aria-label="How booking works"
      className="joint-grain relative border-b-2 border-joint-black bg-joint-cream text-joint-black"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <SectionLabel>How it works</SectionLabel>

        <h2 className="mb-8 text-[clamp(1.5rem,5vw,2.75rem)] leading-none font-black tracking-[-0.04em] uppercase">
          Three steps to the table.
        </h2>

        <ol className="joint-reveal-group grid gap-4 sm:grid-cols-1 md:grid-cols-3">
          {STEPS.map((item) => (
            <li key={item.step}>
              <TiltCard className="h-full border-2 border-joint-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="joint-float flex h-10 w-10 items-center justify-center border-2 border-joint-black bg-joint-black text-base font-black text-joint-orange shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:h-12 sm:w-12 sm:text-lg">
                  {item.step}
                </span>
                <h3 className="mt-3 text-[12px] font-black tracking-[-0.01em] uppercase sm:text-[13px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[10px] leading-relaxed font-bold tracking-[0.06em] text-black/60 uppercase sm:text-[11px]">
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
