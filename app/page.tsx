import type { Metadata } from "next";
import { Hero } from "@/components/landing/hero-mobile";
import { CtaSection } from "@/components/landing/cta-section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: `${SITE.claim} Reserve a billiards or snooker table online at ${SITE.name}.`,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CtaSection />
    </>
  );
}