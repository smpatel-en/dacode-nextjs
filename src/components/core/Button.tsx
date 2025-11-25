import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline-primary"
  | "outline-secondary"
  | "dark"
  | "ghost";
type ButtonSize = "small" | "large" | "none";
const defaultClass =
  "cursor-pointer rounded-full border-2 border-transparent font-bold tracking-[0.5%] transition-all duration-200 disabled:pointer-events-none disabled:opacity-20 active:scale-98";
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-dark lg:shadow-primary active:shadow-sm",
  secondary: "bg-secondary text-white hover:bg-dark",
  "outline-primary":
    "border-primary text-primary hover:bg-primary hover:text-white",
  "outline-secondary":
    "border-secondary text-secondary hover:bg-secondary hover:text-white",
  dark: "bg-dark text-white hover:bg-dark/80 hover:text-white lg:shadow-primary-dark active:shadow-sm",
  ghost: "backdrop-blur-lg text-dark hover:bg-dark/5",
};
const sizeClasses: Record<ButtonSize, string> = {
  small: "lg:px-8 lg:py-2.5 md:px-6 md:py-2 px-4 py-2 text-base lg:text-lg",
  large: "lg:px-8.5 lg:py-3 md:px-6 md:py-3 px-4 py-2 text-lg lg:text-xl",
  none: "text-base lg:text-lg",
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
  size = "small",
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
