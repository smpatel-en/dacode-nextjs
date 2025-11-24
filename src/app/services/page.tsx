import ServicesSection from "@/components/generic/sections/ServicesSection";
import CtaSection from "@/components/generic/sections/CtaSection";
import InfoSection from "@/components/generic/sections/InfoSection";
import Heading from "@/components/core/Heading";

export default function Services() {
  return (
    <>
      <Heading
        title="What we can offer your SaaS Business"
        description="We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to our clients. Our team has worked with Nordic, European and American tech unicorns."
        type="page"
      />
      <ServicesSection explicitContainer={true} />
      <CtaSection />
      <InfoSection />
    </>
  );
}
