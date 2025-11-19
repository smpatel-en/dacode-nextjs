import { cn } from "@/lib/utils";

type HeadingType = "section" | "page";
type HeadingVariant = "centered" | "left";

const defaultClass = "flex flex-col gap-6.5";

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  subtitle?: string;
  type?: HeadingType;
  variant?: HeadingVariant;
}

const typeClasses: Record<HeadingType, string> = {
  section: "mb-12.5",
  page: "",
};

const variantClasses: Record<HeadingVariant, string> = {
  centered: "items-center text-center",
  left: "items-start text-left",
};

export default function Heading({
  title,
  description,
  subtitle,
  className,
  type = "section",
  variant = "centered",
  ...props
}: HeadingProps) {
  return (
    <div
      className={cn(
        defaultClass,
        type && typeClasses[type],
        variant && variantClasses[variant],
        className,
      )}
      {...props}
    >
      {subtitle && <h3 className="text-secondary text-2xl">{subtitle}</h3>}
      <h2>{title}</h2>
      {description && (
        <p className="title-description max-w-200">{description}</p>
      )}
    </div>
  );
}
