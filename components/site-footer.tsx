import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { NAV_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[rgba(212,175,55,0.2)] bg-[var(--color-joint-bg)]">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <BrandLogo
            variant="cream"
            sizes="(max-width: 640px) 70vw, 200px"
            className="h-auto w-[min(70vw,200px)] select-none"
          />
          <p className="mt-3 max-w-xs text-sm text-[rgba(234,231,223,0.7)]">
            {SITE.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 text-xs tracking-[0.2em] uppercase text-[var(--color-joint-gold)]">
            Explore
          </p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center text-sm text-[rgba(234,231,223,0.75)] transition hover:text-[var(--color-joint-gold)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-xs tracking-[0.2em] uppercase text-[var(--color-joint-gold)]">
            Visit
          </p>
          <address className="space-y-2 text-sm not-italic text-[rgba(234,231,223,0.7)]">
            {SITE.address.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
            <span className="block">Open {SITE.hours}</span>
            <a
              href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
              className="block min-h-[44px] flex items-center transition hover:text-[var(--color-joint-gold)]"
            >
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="block min-h-[44px] flex items-center transition hover:text-[var(--color-joint-gold)]"
            >
              {SITE.email}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-[rgba(212,175,55,0.2)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-[rgba(234,231,223,0.5)] sm:flex-row sm:px-6">
          <span>
            © {SITE.name} — {SITE.tagline}
          </span>
          <span>Break • Pot • Chalk • Repeat</span>
        </div>
      </div>
    </footer>
  );
}