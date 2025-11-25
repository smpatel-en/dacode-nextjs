import { cn } from "@/lib/utils";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import Button from "../Button";

const defaultClass =
  "flex flex-col items-center bg-light rounded-xl p-4 lg:p-10 text-center shadow-md max-w-xs xs:max-w-none w-full mx-auto";

interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  avatar: StaticImageData;
  linkedInUrl: string;
  email: string;
}

export default function ProfileCard({
  name,
  role,
  avatar,
  linkedInUrl,
  email,
  className,
  ...props
}: ProfileCardProps) {
  return (
    <div className={cn(defaultClass, className)} {...props}>
      {/* Image */}
      <div className="bg-primary-light-15 mb-4 h-25 w-25 overflow-hidden rounded-full lg:mb-9 lg:h-36 lg:w-36">
        <Image src={avatar} alt={`${name}'s avatar`} />
      </div>
      <h3 className="mb-1.5 text-lg lg:text-[22px]">{name}</h3>
      <p className="text-primary mb-2">{role}</p>
      <Link
        href={linkedInUrl}
        className="bg-primary/30 hover:bg-primary/50 mt-auto mb-3 grid h-9 w-9 place-items-center rounded-full shadow-sm transition-colors lg:mb-5.5"
      >
        <FaLinkedinIn className="text-xl" />
      </Link>
      <Button
        href={`mailto:${email}`}
        className="bg-primary text-light rounded-full px-4 py-2.5 text-sm lg:text-base"
        size="none"
      >
        {email}
      </Button>
    </div>
  );
}
