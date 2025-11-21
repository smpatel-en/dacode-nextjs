import Heading from "@/components/core/Heading";
import Image from "next/image";
import CtaBg from "@public/assets/images/cta-bg.png";
import Button from "@/components/core/Button";

export default function CtaSection() {
  return (
    <section className="relative">
      <Image src={CtaBg} alt="CTA Banner" className="absolute inset-0 -z-1" />
      <div className="container">
        {/* Wrapper */}
        <div className="flex flex-col">
          {/* Header */}
          <Heading
            title="Interested to work with us ?"
            description="Send a line here get and update daily"
          />

          {/* CTA Button */}
          <Button variant="dark" className="mx-auto">
            DaCode@example.com
          </Button>
        </div>
      </div>
    </section>
  );
}
