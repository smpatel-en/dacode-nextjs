import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const defaultClass =
  "bg-light relative flex flex-col overflow-hidden rounded-xl p-5 pt-15 md:p-8 md:pt-20";

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: StaticImageData;
  title: string;
  description?: string;
  href: string;
}

export default function InfoCard({
  icon,
  title,
  description,
  href,
  className,
  ...props
}: InfoCardProps) {
  return (
    <div
      className={cn(defaultClass, icon ? "shadow-lg" : "shadow-slg", className)}
      {...props}
    >
      {icon && (
        <>
          <div className="bg-primary absolute inset-0 h-[7px] w-full" />
          <div className="relative mb-6 w-fit lg:mb-8.5">
            <Image src={icon} alt={title} />
            <div className="bg-primary/15 absolute inset-0 h-full w-full -translate-3 rounded-full"></div>
          </div>
        </>
      )}
      <h3 className="mb-2 lg:mb-4">{title}</h3>
      <p className="mb-6 lg:mb-8">{description}</p>
      <Link
        href={href}
        className="text-secondary group mt-auto flex w-fit items-center gap-2 hover:underline"
      >
        Learn More
        <HiOutlineArrowLongRight className="inline-block text-2xl transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
