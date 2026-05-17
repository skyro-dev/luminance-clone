import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HeroSection } from "./sections/HeroSection";
import { ProcessSection } from "./sections/ProcessSection";
import { ServicesSection } from "./sections/ServicesSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { AboutSection } from "./sections/AboutSection";
import { FAQSection } from "./sections/FAQSection";
import { CTASection } from "./sections/CTASection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ProcessSection />
        <ServicesSection />
        <BenefitsSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
