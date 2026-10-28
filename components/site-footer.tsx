import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { NAV_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="joint-grain relative overflow-hidden border-t border-joint-ink/10 bg-joint-offwhite">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 sm:gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-3">
        <div className="text-center lg:text-left">
          <BrandLogo
            variant="cream"
            sizes="(max-width: 640px) 70vw, 180px"
            className="joint-extrude-soft h-auto w-[min(70vw,180px)] mx-auto lg:mx-0 select-none"
          />
          <p className="mt-2 joint-text-minimal-muted text-[10px] tracking-[0.15em] sm:text-[11px]">
            {SITE.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="joint-label-minimal mb-3">
            Explore
          </p>
          <ul className="space-y-2 sm:space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="joint-text-minimal inline-flex min-h-[44px] items-center text-[11px] font-medium tracking-[0.1em] text-joint-ink/70 uppercase transition hover:text-joint-orange sm:text-[12px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:ml-auto">
          <p className="joint-label-minimal mb-3">
            Visit
          </p>
          <address className="space-y-1.5 joint-text-minimal text-[11px] text-joint-ink/70 not-italic sm:text-[12px]">
            {SITE.address.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
            <span className="block">Open {SITE.hours}</span>
            <a
              href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
              className="block min-h-[44px] flex items-center joint-text-minimal transition hover:text-joint-orange"
            >
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="block min-h-[44px] flex items-center joint-text-minimal transition hover:text-joint-orange"
            >
              {SITE.email}
            </a>
          </address>
        </div>
      </div>

      <div className="relative z-10 border-t border-joint-ink/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between gap-3 px-4 py-4 joint-text-minimal-muted text-[9px] tracking-[0.15em] uppercase sm:px-6">
          <span className="text-center sm:text-left">
            © {SITE.name} — {SITE.tagline}
          </span>
          <span className="text-center">Break • Pot • Chalk • Repeat</span>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 text-[22vw] leading-none font-light tracking-[-0.08em] text-joint-ink/5 uppercase select-none"
      >
        JOINT
      </p>
    </footer>
  );
}