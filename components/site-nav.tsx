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
        className="sticky top-0 z-50 border-b-2 border-joint-black bg-joint-orange/90 backdrop-blur-md"
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
                className="joint-link text-[10px] font-bold tracking-[0.2em] text-joint-cream uppercase transition hover:text-joint-black sm:text-[11px]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden sm:block">
            <Link
              href="/book"
              className="joint-btn border-2 border-joint-black bg-joint-cream px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-joint-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:px-5 sm:py-2.5 sm:text-[11px]"
            >
              Book a table
            </Link>
          </div>

          <button
            type="button"
            className="sm:hidden flex h-12 w-12 items-center justify-center rounded border-2 border-joint-black bg-joint-cream text-joint-black transition hover:bg-joint-orange active:scale-95"
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
          className="fixed inset-0 z-[60] bg-joint-black/95 backdrop-blur-sm sm:hidden"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex h-full w-full max-w-sm flex-col items-start justify-start gap-8 px-6 py-10">
            <button
              type="button"
              className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded border-2 border-joint-cream/30 bg-transparent text-joint-cream transition hover:bg-joint-cream/10 active:scale-95"
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
                  className="joint-link w-full text-left text-[14px] font-bold tracking-[0.15em] text-joint-cream uppercase py-3 border-b border-joint-cream/10 transition hover:text-joint-orange"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="joint-btn w-full text-center border-2 border-joint-cream bg-transparent px-4 py-3 text-[12px] font-bold tracking-[0.2em] text-joint-cream uppercase shadow-[4px_4px_0px_0px_rgba(255,253,240,0.3)] transition hover:bg-joint-orange hover:text-joint-black"
              >
                Book a table
              </Link>
            </nav>

            <div className="mt-auto w-full border-t border-joint-cream/10 pt-6">
              <p className="text-[10px] font-bold tracking-[0.2em] text-joint-cream/60 uppercase mb-3">
                {SITE.name} {SITE.tagline}
              </p>
              <address className="space-y-2 text-[11px] font-bold tracking-[0.1em] text-joint-cream/80 not-italic uppercase">
                {SITE.address.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
                <span className="block">Open {SITE.hours}</span>
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="block transition hover:text-joint-orange"
                >
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="block transition hover:text-joint-orange"
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
