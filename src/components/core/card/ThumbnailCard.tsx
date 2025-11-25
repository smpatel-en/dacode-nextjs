import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Button from "../Button";

const defaultClass = "bg-light shadow-lg rounded-xl flex flex-col";

interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  href: string;
  imageSrc: StaticImageData;
  date: string;
}

export default function ProfileCard({
  className,
  title,
  description,
  href,
  imageSrc,
  date,
  ...props
}: ProfileCardProps) {
  return (
    <div className={cn(defaultClass, className)} {...props}>
      <div className="relative shrink-0 overflow-hidden rounded-xl">
        <Image src={imageSrc} alt={title} className="aspect-13/8" />
        <span className="bg-primary text-light absolute top-2 left-2 rounded-full px-2 py-1">
          {date}
        </span>
      </div>
      <div className="flex h-full flex-col items-center p-6.5 text-center">
        <h3 className="mb-2 text-lg font-bold tracking-[-0.5px]">{title}</h3>
        <p className="mb-4.5 leading-[163%] opacity-60">{description}</p>
        <Button
          size="none"
          href={href}
          className="mt-auto px-4 py-2.5 text-sm shadow-none! lg:text-base"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
