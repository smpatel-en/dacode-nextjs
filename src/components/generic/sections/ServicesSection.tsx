import InfoCard from "@/components/core/card/InfoCard";
import Heading from "@/components/core/Heading";
import Website from "@public/assets/svg/web-site.svg";

const services = [
  {
    icon: Website,
    title: "WordPress Site",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    href: "/",
  },
  {
    icon: Website,
    title: "WordPress Site",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    href: "/",
  },
  {
    icon: Website,
    title: "WordPress Site",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    href: "/",
  },
  {
    icon: Website,
    title: "WordPress Site",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    href: "/",
  },
  {
    icon: Website,
    title: "WordPress Site",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    href: "/",
  },
  {
    icon: Website,
    title: "WordPress Site",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    href: "/",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-primary/14">
      <div className="container max-w-6xl">
        {/* Wrapper */}
        <div>
          {/* Header */}
          <Heading
            title="Our Services"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et."
          />

          {/* Body | Grid Wrapper */}
          <div className="grid-col-1 xs:grid-cols-2 grid gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-7.5">
            {services.map((service, index) => (
              <InfoCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
