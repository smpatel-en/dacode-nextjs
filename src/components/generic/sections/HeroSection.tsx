import HeroImage from "@public/assets/images/hero-image.png";
import Button from "@/components/core/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="container h-full">
        {/* Wrapper */}
        <div className="flex flex-col">
          <div className="xs:items-start xs:text-left mx-auto flex max-w-200 flex-col items-center gap-7.5 py-10 text-center lg:py-30 xl:mx-0 xl:max-w-160">
            <div className="bg-secondary h-1 w-40"></div>
            <h1>
              We help you create your{" "}
              <span className="text-primary">website</span>
            </h1>
            <p className="title-description opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut
              turpis adipiscing tempus, magna elit nunc iaculis sit. Libero
              velit quis leo non. At donec egestas cras in libero pellentesque.
              Donec amet phasellus
            </p>
            {/* Hero CTA Button Wrapper */}
            <div className="xs:justify-start xs:flex-row flex flex-col items-center justify-center gap-5">
              <Button size="large">Get Started</Button>
              <Button variant="outline-primary">Contact Us</Button>
            </div>
          </div>
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="static top-1/2 mx-auto w-full max-w-none object-contain md:max-w-150 xl:absolute xl:right-0 xl:max-w-180 xl:-translate-y-1/2 2xl:max-w-250"
          />
        </div>
      </div>
    </section>
  );
}
