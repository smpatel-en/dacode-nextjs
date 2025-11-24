import { cn } from "@/lib/utils";
import PageTitleBanner from "@public/assets/images/cta-bg.png";
import Image from "next/image";

type HeadingType = "section" | "page";
type HeadingVariant = "centered" | "left";
type HeadingLastWordHighlight = boolean;

// Deafult Classes
const typeClasses: Record<HeadingType, string> = {
  section: "flex flex-col gap-6.5 mb-12.5",
  page: "relative -mb-30 flex flex-col gap-6.5 pt-20 pb-30 lg:-mb-40 lg:pt-30 lg:pb-50",
};
interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  subtitle?: string;
  type?: HeadingType;
  variant?: HeadingVariant;
  lastWordHighlight?: HeadingLastWordHighlight;
}

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
  children,
  ...props
}: HeadingProps) {
  return type === "section" ? (
    <div
      className={cn(
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
      {children}
    </div>
  ) : (
    <section
      className={cn(
        type && typeClasses[type],
        variant && variantClasses[variant],
        lastWordHighlight && "last-word-highlight",
        className,
      )}
      {...props}
    >
      <Image
        src={PageTitleBanner}
        alt="Page Title Banner"
        className="absolute inset-0 -z-1"
      />
      <div className="container">
        {/* Wrapper */}
        <div className="flex flex-col gap-6.5">
          <h1>{title}</h1>
          <p className="title-description mx-auto max-w-200 opacity-70">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
