import HeroSection from "@/components/generic/sections/HeroSection";
import ServicesSection from "@/components/generic/sections/ServicesSection";
import OurWorkSection from "@/components/generic/sections/OurWorkSection";
import StrategySection from "@/components/generic/sections/StrategySection";
import CtaSection from "@/components/generic/sections/CtaSection";
import TestimonialsSection from "@/components/generic/sections/TestimonialsSection";
import BlogSection from "@/components/generic/sections/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <OurWorkSection />
      <StrategySection />
      <CtaSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}
