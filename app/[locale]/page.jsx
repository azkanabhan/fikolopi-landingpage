import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RevealProvider from "@/components/RevealProvider";
import AboutSection from "@/sections/AboutSection";
import CTASection from "@/sections/CTASection";
import HeroSection from "@/sections/HeroSection";
import OperationsAndMarketSection from "@/sections/OperationsAndMarketSection";
import ProductAndGoalsSection from "@/sections/ProductAndGoalsSection";
import VisionMissionSection from "@/sections/VisionMissionSection";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function LocalizedHome({ params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <RevealProvider />
      <Navbar locale={locale} dictionary={dictionary} />
      <main>
        <HeroSection locale={locale} dictionary={dictionary} />
        <AboutSection dictionary={dictionary} />
        <VisionMissionSection dictionary={dictionary} />
        <ProductAndGoalsSection locale={locale} dictionary={dictionary} />
        <OperationsAndMarketSection dictionary={dictionary} />
        <CTASection locale={locale} dictionary={dictionary} />
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </div>
  );
}
