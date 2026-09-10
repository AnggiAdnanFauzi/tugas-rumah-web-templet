import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { TrustStrip } from "../components/sections/TrustStrip";
import { BeforeAfter } from "../components/sections/BeforeAfter";
import { ConversionChartSection } from "../components/sections/ConversionChartSection";
import { WhyTheseTemplates } from "../components/sections/WhyTheseTemplates";
import { FeaturedTemplates } from "../components/sections/FeaturedTemplates";
import { CategoryStrip } from "../components/sections/CategoryStrip";
import { EditorialShowcase } from "../components/sections/EditorialShowcase";
import { WhatYouGet } from "../components/sections/WhatYouGet";
import { CustomizationSection } from "../components/sections/CustomizationSection";
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
        {/* Phase 1: First Impression & Problem Awareness */}
        <Hero />
        <TrustStrip />
        <BeforeAfter />
        <ConversionChartSection />

        {/* Phase 2: Solution & Showcasing */}
        <WhyTheseTemplates />
        <FeaturedTemplates />
        <CategoryStrip />
        <EditorialShowcase />

        {/* Phase 3: Features & Objections */}
        <WhatYouGet />
        <CustomizationSection />
        <PurchaseConfidence />
        <MiniSocialProof />
        <FaqConversion />
        
        {/* Phase 4: Final Call to Action */}
        <FinalCta />
        <ValueCta />
      </main>
      <Footer />
    </div>
  );
}
