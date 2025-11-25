import Heading from "@/components/core/Heading";
import InfoImage from "@public/assets/images/web-dev-saas-blog-with-calendar.png";
import Image from "next/image";

export default function InfoSection() {
  return (
    <section>
      <div className="container">
        {/* Wrapper */}
        <div className="grid-col-1 grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            {/* Heading */}
            <Heading
              title="Establishing online presence"
              variant="left"
              className="mb-7.5"
            />
            {/* Description Paragraphs */}
            <p className="mb-4 text-justify text-base font-normal opacity-70 lg:text-xl/[152%]">
              Every SaaS website, regardless of niche, must do one thing
              brilliantly, which is converting visitors into users. At first
              glance, the site should encourage and guide visitors in a smooth
              way towards call-to-actions.
            </p>
            <p className="mb-4 text-justify text-base font-normal opacity-70 lg:text-xl/[152%]">
              This goes hand in hand with a responsive design, meaning it needs
              to be apt for different devices. We use a data-driven approach to
              measure user response when developing the site. This method
              usually makes the site quicker to launch, is more cost-effective
              and more successful in the long run.
            </p>
            <p className="mb-4 text-justify text-base font-normal opacity-70 lg:text-xl/[152%]">
              The pages need to be search engine optimized (SEO) because it lays
              the foundation for the technical quality, which in turn determines
              how high it will rank among search results. We also make sure that
              your website is indexed properly.
            </p>
            <p className="mb-4 text-justify text-base font-normal opacity-70 lg:text-xl/[152%]">
              We audit your audience and get to know your target market to be
              able to speak to them through the website in the best possible
              way. By finding out their consumer behavior we can refine the
              website approach.
            </p>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-primary mb-5.5 text-2xl sm:text-3xl lg:text-4xl">
              Schedule a free session
            </h3>
            {/* Image */}
            <div>
              <Image src={InfoImage} alt="Info Section Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
