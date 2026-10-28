import { BrandLogo } from "@/components/brand-logo";

export function Header() {
  return (
    <header className="relative z-10 mb-8 flex flex-col items-center text-center">
      <p className="joint-pill joint-glass px-3 py-1.5 text-[8px] font-medium tracking-[0.2em] text-joint-ink uppercase shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] sm:text-[9px]">
        Open 12PM — 2AM &nbsp;•&nbsp; 6 Tables &nbsp;•&nbsp; Chalk Included
      </p>

      <div className="joint-shift joint-depth-1">
        <div className="joint-logo-scroll">
          <h1 className="sr-only">JOINT — Billiards & Lounge</h1>
          <BrandLogo
            variant="cream"
            priority
            sizes="(max-width: 768px) 92vw, 900px"
            className="joint-extrude h-auto w-[min(92vw,900px)] select-none"
          />
        </div>
      </div>

      <div className="joint-shift joint-depth-2 mt-6 w-full max-w-xl joint-pill joint-glass px-4 py-2.5 text-[10px] font-medium tracking-[0.15em] text-joint-ink uppercase shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] sm:text-sm sm:tracking-[0.2em]">
        Billiards & Lounge Reservations
      </div>
    </header>
  );
}