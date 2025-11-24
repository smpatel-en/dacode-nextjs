import Heading from "@/components/core/Heading";
import Image from "next/image";
import WorkingRemotely from "@public/assets/images/working-remotely.png";
import { strategyItems } from "@/lib/data";

export default function Strategy() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={WorkingRemotely}
        alt="Working Remotely"
        className="absolute right-0 bottom-0 hidden max-h-[1000px] translate-x-1/3 translate-y-1/4 object-contain xl:block"
      />
      <div className="container">
        {/* Wrapper */}
        <div>
          {/* Header */}
          <Heading
            title="Your idea into reality"
            description="We start every web development project with a project manager from daCode interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget.s"
            lastWordHighlight={true}
            variant="left"
          />

          {/* Body | Timeline Wrapper */}
          <div>
            {strategyItems.map((item, index) => (
              <div key={index} className="relative flex gap-6 lg:gap-12.5">
                <div className="bg-light grid h-14 w-14 shrink-0 place-items-center rounded-full shadow-sm lg:h-20 lg:w-20">
                  <p className="text-secondary text-2xl font-black lg:text-[32px]">
                    {index + 1}
                  </p>
                  {index !== strategyItems.length - 1 && (
                    <div className="border-l-primary/60 absolute top-0 -z-1 h-full border-l-2 border-dashed" />
                  )}
                </div>
                <div className="my-3.5 lg:my-6">
                  <h3 className="text-primary mb-2.5 text-lg lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="max-w-5xl leading-[157%] xl:max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
