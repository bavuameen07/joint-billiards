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
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionLabel>How it works</SectionLabel>

        <h2 className="mb-10 text-[clamp(1.75rem,6vw,3rem)] leading-none font-black tracking-[-0.04em] uppercase">
          Three steps to the table.
        </h2>

        <ol className="joint-reveal-group grid gap-4 md:grid-cols-3">
          {STEPS.map((item) => (
            <li key={item.step}>
              <TiltCard className="h-full border-2 border-joint-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="joint-float flex h-12 w-12 items-center justify-center border-2 border-joint-black bg-joint-black text-lg font-black text-joint-orange shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  {item.step}
                </span>
                <h3 className="mt-4 text-[13px] font-black tracking-[-0.01em] uppercase">
                  {item.title}
                </h3>
                <p className="mt-2 text-[11px] leading-relaxed font-bold tracking-[0.06em] text-black/60 uppercase">
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
