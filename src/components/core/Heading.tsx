import { cn } from "@/lib/utils";

type HeadingType = "section" | "page";
type HeadingVariant = "centered" | "left";
type HeadingLastWordHighlight = boolean;

const defaultClass = "flex flex-col gap-6.5";

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  subtitle?: string;
  type?: HeadingType;
  variant?: HeadingVariant;
  lastWordHighlight?: HeadingLastWordHighlight;
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
  lastWordHighlight = false,
  ...props
}: HeadingProps) {
  return (
    <div
      className={cn(
        defaultClass,
        type && typeClasses[type],
        variant && variantClasses[variant],
        lastWordHighlight && "last-word-highlight",
        className,
      )}
      {...props}
    >
      {subtitle && <h3 className="text-secondary text-2xl">{subtitle}</h3>}
      <h2>
        {lastWordHighlight
          ? title.split(" ").map((word, index) =>
              index === title.split(" ").length - 1 ? (
                <span className="text-primary" key={index}>
                  {word}
                </span>
              ) : (
                word + " "
              ),
            )
          : title}
      </h2>
      {description && (
        <p className="title-description max-w-200">{description}</p>
      )}
    </div>
  );
}
