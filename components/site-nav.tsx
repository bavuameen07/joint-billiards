"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { NAV_LINKS, SITE } from "@/lib/site";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Main"
        className="sticky top-0 z-50 border-b border-[#FF6D00] bg-white/98 backdrop-blur-md"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-x-4 gap-y-3 px-4 py-3 sm:px-6">
          <Link
            href="/"
            aria-label="JOINT home"
            className="flex-shrink-0 transition hover:opacity-90"
          >
            <BrandLogo
              variant="black"
              sizes="120px"
              className="h-auto w-[110px] select-none sm:w-[120px]"
            />
          </Link>

          <div className="hidden md:flex md:flex-wrap md:items-center md:gap-x-6 md:gap-y-2">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-[0.15em] text-[#21140E] uppercase transition-colors hover:text-[#FF5A00] min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden sm:block">
            <Link
              href="/book"
              className="inline-flex min-h-[44px] items-center rounded-sm bg-[#FF5A00] px-5 py-2 text-[10px] font-medium tracking-[0.18em] text-white uppercase transition-colors hover:bg-[#E64500] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2 sm:text-[11px]"
            >
              Book a table
            </Link>
          </div>

          <button
            type="button"
            className="sm:hidden flex h-12 w-12 items-center justify-center rounded-full border border-joint-ink/10 bg-joint-offwhite text-joint-ink transition hover:bg-joint-orange/10 active:scale-95"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>

        <p className="sr-only">
          {SITE.name} {SITE.tagline} — {SITE.hours}
        </p>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-[rgba(5,5,16,0.98)] backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex h-full w-full max-w-sm flex-col items-start justify-start gap-8 px-6 py-10">
            <button
              type="button"
              className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-sm border border-[rgba(212,175,55,0.3)] text-[var(--color-joint-cream)] transition hover:bg-[rgba(212,175,55,0.12)] active:scale-95"
              onClick={(e) => { e.stopPropagation(); setOpen(false); }}
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col gap-4 w-full mt-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="w-full text-left text-sm font-medium tracking-[0.15em] text-[var(--color-joint-cream)] uppercase py-3 border-b border-[rgba(212,175,55,0.2)] transition hover:text-[var(--color-joint-gold)]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="mt-4 w-full text-center rounded-sm border border-[rgba(212,175,55,0.5)] px-4 py-3 text-[11px] font-medium tracking-[0.18em] text-[var(--color-joint-cream)] uppercase transition hover:bg-[rgba(212,175,55,0.12)]"
              >
                Book a table
              </Link>
            </nav>

            <div className="mt-auto w-full border-t border-[rgba(212,175,55,0.2)] pt-6">
              <p className="mb-3 text-[10px] tracking-[0.2em] uppercase text-[var(--color-joint-gold)]">
                {SITE.name}
              </p>
              <address className="space-y-2 text-xs text-[rgba(234,231,223,0.7)] not-italic">
                {SITE.address.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
                <span className="block">Open {SITE.hours}</span>
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="block transition hover:text-[var(--color-joint-gold)]"
                >
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="block transition hover:text-[var(--color-joint-gold)]"
                >
                  {SITE.email}
                </a>
              </address>
            </div>
          </div>
        </div>
      )}
    </>
  );
}