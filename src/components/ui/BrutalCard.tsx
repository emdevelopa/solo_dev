import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brutalCardVariants = cva(
  "border-[3px] border-foreground bg-card",
  {
    variants: {
      shadow: {
        none: "",
        default: "brutal-shadow",
        lg: "brutal-shadow-lg",
        xl: "brutal-shadow-xl",
      },
      hover: {
        none: "",
        lift: "brutal-hover",
      },
    },
    defaultVariants: {
      shadow: "default",
      hover: "none",
    },
  }
);

export interface BrutalCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof brutalCardVariants> {}

const BrutalCard = React.forwardRef<HTMLDivElement, BrutalCardProps>(
  ({ className, shadow, hover, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(brutalCardVariants({ shadow, hover, className }))}
        {...props}
      />
    );
  }
);
BrutalCard.displayName = "BrutalCard";

export { BrutalCard, brutalCardVariants };
