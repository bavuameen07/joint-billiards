import { BrandLogo } from "@/components/brand-logo";

export function Header() {
  return (
    <header className="relative z-10 mb-8 flex flex-col items-center text-center">
      <p className="joint-chip joint-float mb-5 inline-block border-2 border-joint-black bg-joint-black px-3 py-1.5 text-[9px] font-bold tracking-[0.28em] text-joint-cream uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:text-[10px]">
        Open 12PM — 2AM &nbsp;•&nbsp; 6 Tables &nbsp;•&nbsp; Chalk Included
      </p>

      <div className="joint-shift joint-depth-1">
        <div className="joint-logo-scroll">
          <h1 className="sr-only">JOINT — Billiards &amp; Lounge</h1>
          <BrandLogo
            variant="cream"
            priority
            sizes="(max-width: 768px) 92vw, 900px"
            className="joint-extrude h-auto w-[min(92vw,900px)] select-none"
          />
        </div>
      </div>

      <div className="joint-shift joint-depth-2 mt-6 w-full max-w-xl border-2 border-joint-black bg-joint-cream px-4 py-2.5 text-[11px] font-bold tracking-[0.18em] text-joint-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:text-sm sm:tracking-[0.25em]">
        Billiards &amp; Lounge Reservations
      </div>
    </header>
  );
}
