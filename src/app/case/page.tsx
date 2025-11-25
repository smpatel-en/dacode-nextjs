import ServicesSection from "@/components/generic/sections/ServicesSection";
import CtaSection from "@/components/generic/sections/CtaSection";
import InfoSection from "@/components/generic/sections/InfoSection";
import Heading from "@/components/core/Heading";

export default function CasePage() {
  return (
    <>
      <Heading
        title="Case Studies"
        description="Explore our diverse portfolio of successful projects, showcasing our expertise in delivering innovative web development solutions across various industries."
        type="page"
      />
      <ServicesSection explicitContainer={true} />
      <CtaSection />
      <InfoSection />
    </>
  );
}
