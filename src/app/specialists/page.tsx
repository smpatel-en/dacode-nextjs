import Heading from "@/components/core/Heading";
import TeamSection from "@/components/generic/sections/TeamSection";

export default function SpecialistsPage() {
  return (
    <>
      <Heading
        title="The Team"
        description="Our team members have over 15 years of experience within web development, SEO, content and design. We have an extensive portfolio of working with different companies and projects from various parts of the world."
        type="page"
      />
      <TeamSection />
    </>
  );
}
