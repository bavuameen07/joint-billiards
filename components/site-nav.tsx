import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { NAV_LINKS, SITE } from "@/lib/site";

export function SiteNav() {
  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-50 border-b-2 border-joint-black bg-joint-orange/90 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          aria-label="JOINT home"
          className="transition hover:-translate-y-0.5"
        >
          <BrandLogo
            variant="cream"
            sizes="120px"
            className="joint-extrude-soft h-auto w-[104px] select-none"
          />
        </Link>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="joint-link text-[10px] font-bold tracking-[0.2em] text-joint-cream uppercase transition hover:text-joint-black sm:text-[11px]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/book"
          className="joint-btn border-2 border-joint-black bg-joint-cream px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-joint-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:text-[11px]"
        >
          Book a table
        </Link>
      </div>

      <p className="sr-only">
        {SITE.name} {SITE.tagline} — {SITE.hours}
      </p>
    </nav>
  );
}
