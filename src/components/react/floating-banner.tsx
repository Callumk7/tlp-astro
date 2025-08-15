import { type VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

const bannerVariants = cva(
  "z-30 flex flex-col gap-y-1 rounded p-3 shadow-xl shadow-blackA5",
  {
    variants: {
      variant: {
        primary: "border-2 border-sage-12 bg-sage-1",
        warning: "bg-tertiery text-background",
        bold: "bg-primary text-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface FloatingBannerProps extends VariantProps<typeof bannerVariants> {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export function FloatingBanner({
  title,
  children,
  className,
  variant,
}: FloatingBannerProps) {
  return (
    <div className={clsx(bannerVariants({ className, variant }))}>
      {title && <h3 className="font-yrsa text-2xl font-bold">{title}</h3>}
      <p className="flex items-center gap-x-2 align-middle">{children}</p>
    </div>
  );
}
