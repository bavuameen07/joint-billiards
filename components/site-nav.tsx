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
        className="sticky top-0 z-50 border-b border-joint-ink/10 bg-joint-offwhite/90 backdrop-blur-md"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-x-4 gap-y-3 px-4 py-3 sm:px-6">
          <Link
            href="/"
            aria-label="JOINT home"
            className="flex-shrink-0 transition hover:-translate-y-0.5"
          >
            <BrandLogo
              variant="cream"
              sizes="120px"
              className="joint-extrude-soft h-auto w-[104px] select-none"
            />
          </Link>

          <div className="hidden sm:flex sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="joint-text-minimal text-[10px] font-medium tracking-[0.15em] text-joint-ink uppercase transition hover:text-joint-orange sm:text-[11px] min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden sm:block">
            <Link
              href="/book"
              className="joint-btn min-h-[44px] joint-glass px-4 py-2 text-[10px] font-medium tracking-[0.18em] text-joint-ink uppercase shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] transition hover:bg-joint-orange hover:text-joint-offwhite hover:border-joint-orange sm:px-5 sm:py-2.5 sm:text-[11px]"
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
          className="fixed inset-0 z-[60] bg-joint-offwhite/98 backdrop-blur-sm sm:hidden"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex h-full w-full max-w-sm flex-col items-start justify-start gap-8 px-6 py-10">
            <button
              type="button"
              className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-joint-ink/10 bg-joint-offwhite text-joint-ink transition hover:bg-joint-orange/10 active:scale-95"
              onClick={(e) => { e.stopPropagation(); setOpen(false); }}
              aria-label="Close menu"
            >
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col gap-4 w-full">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="joint-text-minimal w-full text-left text-[14px] font-medium tracking-[0.1em] text-joint-ink uppercase py-3 border-b border-joint-ink/5 transition hover:text-joint-orange"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="joint-btn w-full text-center joint-surface-elevated border border-joint-ink/10 px-4 py-3 text-[12px] font-medium tracking-[0.15em] text-joint-ink uppercase transition hover:bg-joint-orange hover:text-joint-offwhite"
              >
                Book a table
              </Link>
            </nav>

            <div className="mt-auto w-full border-t border-joint-ink/10 pt-6">
              <p className="joint-label-minimal mb-3">
                {SITE.name} {SITE.tagline}
              </p>
              <address className="space-y-2 joint-text-minimal text-[11px] text-joint-ink/70 not-italic">
                {SITE.address.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
                <span className="block">Open {SITE.hours}</span>
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="block min-h-[44px] flex items-center transition hover:text-joint-orange"
                >
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="block min-h-[44px] flex items-center transition hover:text-joint-orange"
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