import type { Metadata } from "next";
import { AmenitiesSection } from "@/components/landing/amenities-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Filmstrip } from "@/components/landing/filmstrip";
import { Hero } from "@/components/landing/hero";
import { PosterWall } from "@/components/landing/poster-wall";
import { ProcessSection } from "@/components/landing/process-section";
import { TablesSection } from "@/components/landing/tables-section";
import { Ticker } from "@/components/landing/ticker";
import { VisitSection } from "@/components/landing/visit-section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: `${SITE.claim} Reserve a billiards or snooker table online at ${SITE.name}.`,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TablesSection />
      <Ticker />
      <AmenitiesSection />
      <Filmstrip />
      <PosterWall />
      <ProcessSection />
      <VisitSection />
      <CtaSection />
    </>
  );
}
