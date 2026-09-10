import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { TrustStrip } from "../components/sections/TrustStrip";
import { CategoryStrip } from "../components/sections/CategoryStrip";
import { FeaturedTemplates } from "../components/sections/FeaturedTemplates";
import { WhyTheseTemplates } from "../components/sections/WhyTheseTemplates";
import { EditorialShowcase } from "../components/sections/EditorialShowcase";
import { WhatYouGet } from "../components/sections/WhatYouGet";
import { BeforeAfter } from "../components/sections/BeforeAfter";
import { CustomizationSection } from "../components/sections/CustomizationSection";
import { UseCaseVisual } from "../components/sections/UseCaseVisual";
import { PurchaseConfidence } from "../components/sections/PurchaseConfidence";
import { MiniSocialProof } from "../components/sections/MiniSocialProof";
import { FaqConversion } from "../components/sections/FaqConversion";
import { FinalCta } from "../components/sections/FinalCta";
import { ValueCta } from "../components/sections/ValueCta";

export function Home() {
  return (
    <div className="min-h-screen bg-beauty-background font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[72px]">
        {/* Phase 5 Core - Foundation & Showcase */}
        <Hero />
        <TrustStrip />
        <CategoryStrip />
        <FeaturedTemplates />
        <WhyTheseTemplates />
        <EditorialShowcase />

        {/* Phase 6 Core - Conversion & Trust Funnel */}
        <WhatYouGet />
        <BeforeAfter />
        <CustomizationSection />
        <UseCaseVisual />
        <PurchaseConfidence />
        <MiniSocialProof />
        <FaqConversion />
        <FinalCta />
        <ValueCta />
      </main>
      <Footer />
    </div>
  );
}
