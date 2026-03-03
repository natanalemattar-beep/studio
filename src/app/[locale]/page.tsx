
'use client';

import {
  HeroSection,
  ServicesSection,
  FeaturesSection,
  AboutUsSection,
  FaqSection,
  CtaSection,
  Footer
} from "@/components/landing";
import { LandingHeader } from "@/components/landing/landing-header";

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <AboutUsSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
}

    