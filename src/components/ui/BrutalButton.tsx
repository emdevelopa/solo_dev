import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brutalButtonVariants = cva(
  "inline-flex items-center justify-center font-heading font-bold uppercase tracking-wide border-[3px] border-foreground transition-none cursor-pointer select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground brutal-shadow brutal-hover",
        secondary: "bg-secondary text-secondary-foreground brutal-shadow brutal-hover",
        accent: "bg-accent text-accent-foreground brutal-shadow brutal-hover",
        outline: "bg-background text-foreground brutal-shadow brutal-hover",
        ghost: "bg-transparent border-transparent shadow-none hover:bg-muted",
      },
      size: {
        default: "h-12 px-6 text-sm",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BrutalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brutalButtonVariants> {
  asChild?: boolean;
}

const BrutalButton = React.forwardRef<HTMLButtonElement, BrutalButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(brutalButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
BrutalButton.displayName = "BrutalButton";

export { BrutalButton, brutalButtonVariants };
