import { type VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import type { HTMLAttributes } from "react";

const headerVariants = cva("font-yrsa font-bold", {
  variants: {
    header: {
      one: "text-6xl",
      two: "text-4xl",
      three: "text-3xl",
    },
    decoration: {
      underline: "underline decoration-plum-10 decoration-3",
    },
  },
  defaultVariants: {
    header: "one",
  },
});

interface HeaderProps
  extends VariantProps<typeof headerVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

export function Header({
  children,
  className,
  header,
  decoration,
  ...props
}: HeaderProps) {
  return (
    <h1
      className={clsx(headerVariants({ className, header, decoration }))}
      {...props}
    >
      {children}
    </h1>
  );
}
