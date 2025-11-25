import InfoCard from "@/components/core/card/InfoCard";
import Heading from "@/components/core/Heading";
import { cn } from "@/lib/utils";
import { services } from "@/lib/data";

interface ServicesSectionProps extends React.HTMLAttributes<HTMLElement> {
  explicitContainer?: boolean;
}

export default function ServicesSection({
  className,
  explicitContainer = false,
  ...props
}: ServicesSectionProps) {
  const content = (
    <>
      <Heading
        title="Our Services"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et."
      />
      <div className="grid-col-1 xs:grid-cols-2 grid gap-5 lg:grid-cols-3 lg:gap-7.5">
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
    </>
  );

  return (
    <section
      className={cn(!explicitContainer && "bg-primary-light-15", className)}
      {...props}
    >
      {explicitContainer ? (
        <div className="bg-primary-light-15 rounded-3xl py-8 sm:mx-4 lg:mx-21 lg:rounded-[40px] lg:py-20">
          <div className="container max-w-6xl">{content}</div>
        </div>
      ) : (
        <div className="container max-w-6xl">{content}</div>
      )}
    </section>
  );
}
