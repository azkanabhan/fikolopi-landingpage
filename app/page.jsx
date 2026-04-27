import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RevealProvider from "@/components/RevealProvider";
import AboutSection from "@/sections/AboutSection";
import CTASection from "@/sections/CTASection";
import HeroSection from "@/sections/HeroSection";
import OperationsAndMarketSection from "@/sections/OperationsAndMarketSection";
import ProductAndGoalsSection from "@/sections/ProductAndGoalsSection";
import VisionMissionSection from "@/sections/VisionMissionSection";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <RevealProvider />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <ProductAndGoalsSection />
        <OperationsAndMarketSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
