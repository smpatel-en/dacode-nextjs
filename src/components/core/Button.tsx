import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline-primary"
  | "outline-secondary";
type ButtonSize = "small" | "large";
const defaultClass =
  "cursor-pointer rounded-full border-2 border-transparent text-base lg:text-xl/[120%] font-bold tracking-[0.5%] transition-colors duration-200";
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-dark",
  secondary: "bg-secondary text-white hover:bg-dark",
  "outline-primary":
    "border-primary text-primary hover:bg-primary hover:text-white",
  "outline-secondary":
    "border-secondary text-secondary hover:bg-secondary hover:text-white",
};
const sizeClasses: Record<ButtonSize, string> = {
  small: "lg:px-10.5 lg:py-3.5 md:px-7.5 md:py-2.5 px-4 py-2",
  large: "lg:px-[39px] lg:py-5.5 md:px-9 md:py-4 px-6 py-3",
};

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export default function Button({
  children,
  variant = "primary",
  size = "large",
  className,
  href,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(
    defaultClass,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
}
