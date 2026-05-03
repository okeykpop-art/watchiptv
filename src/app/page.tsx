import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FootballSection from "@/components/FootballSection";
import FeaturesHighlight from "@/components/FeaturesHighlight";
import Pricing from "@/components/Pricing";
import FeatureCards from "@/components/FeatureCards";
import PrivacySecurity from "@/components/PrivacySecurity";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import KnowledgeBase from "@/components/KnowledgeBase";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FootballSection />
        <FeaturesHighlight />
        <Pricing />
        <FeatureCards />
        <PrivacySecurity />
        <HowItWorks />
        <Testimonials />
        <KnowledgeBase />
        <FAQ />
        <FooterCTA />
      </main>
      <MobileCTA />
    </>
  );
}
