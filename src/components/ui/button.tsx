import clsx from "clsx";
import { type VariantProps, cva } from "class-variance-authority";
import type { ButtonHTMLAttributes, LinkHTMLAttributes } from "react";

const buttonVariants = cva(
  "w-fit rounded-md font-inter h-fit font-semibold transition-colors ease-in-out shadow-lg shadow-black-A1",
  {
    variants: {
      variant: {
        primary: "bg-plum-10 text-sage-1 hover:bg-plum-11",
        bronze: "bg-bronze10 text-sage-1 hover:bg-bronze-11",
        teal: "bg-teal-10 text-sage-1 hover:bg-teal-11",
        ghost: "bg-plum4 text-plum-11",
        secondary: "bg-sage-6 text-olive-9",
        outline: "border-2 border-plum-8 text-plum-10 hover:bg-plum-5",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2",
        lg: "px-4 py-3 text-xl",
        xl: "px-4 py-3 text-2xl w-full",
      },
      shadow: {
        sm: "shadow-lg",
        lg: "shadow-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  className?: string;
}

export function Button({
  children,
  className,
  variant,
  size,
  shadow,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(buttonVariants({ className, variant, size, shadow }))}
      {...props}
    >
      {children}
    </button>
  );
}

interface LinkProps
  extends LinkHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

export function Link({
  href,
  children,
  className,
  variant,
  size,
  shadow,
  ...props
}: LinkProps) {
  return (
    <a
      href={href}
      className={clsx(buttonVariants({ className, variant, size, shadow }))}
      {...props}
    >
      {children}
    </a>
  );
}
