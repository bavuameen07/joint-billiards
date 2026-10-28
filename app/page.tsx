import type { Metadata } from "next";
import { Hero } from "@/components/landing/hero-mobile";
import { CtaSection } from "@/components/landing/cta-section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — Digital Experiences`,
  description: "Creative websites, distinctive branding, and digital experiences designed to make businesses more memorable.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CtaSection />
    </>
  );
}