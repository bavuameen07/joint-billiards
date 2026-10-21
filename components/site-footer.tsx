import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { NAV_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="joint-grain relative overflow-hidden border-t-2 border-joint-black bg-joint-orange">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <BrandLogo
            variant="cream"
            sizes="220px"
            className="joint-extrude-soft h-auto w-[190px] select-none"
          />
          <p className="mt-2 text-[10px] font-bold tracking-[0.2em] text-joint-cream/80 uppercase">
            {SITE.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-[10px] font-bold tracking-[0.25em] text-joint-black uppercase">
            Explore
          </p>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="joint-link inline-block text-[11px] font-bold tracking-[0.15em] text-joint-cream uppercase transition hover:text-joint-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[10px] font-bold tracking-[0.25em] text-joint-black uppercase">
            Visit
          </p>
          <address className="mt-3 space-y-1 text-[11px] font-bold tracking-[0.1em] text-joint-cream not-italic uppercase">
            {SITE.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block">Open {SITE.hours}</span>
            <a
              href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
              className="block transition hover:text-joint-black"
            >
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="block transition hover:text-joint-black"
            >
              {SITE.email}
            </a>
          </address>
        </div>
      </div>

      <div className="relative z-10 border-t-2 border-joint-black">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-[9px] font-bold tracking-[0.2em] text-joint-cream/80 uppercase sm:px-6">
          <span>
            © {SITE.name} — {SITE.tagline}
          </span>
          <span>Break • Pot • Chalk • Repeat</span>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 text-[22vw] leading-none font-black tracking-[-0.08em] text-joint-black/10 uppercase select-none"
      >
        JOINT
      </p>
    </footer>
  );
}
