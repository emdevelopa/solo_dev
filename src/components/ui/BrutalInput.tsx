import * as React from "react";
import { cn } from "@/lib/utils";

export interface BrutalInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const BrutalInput = React.forwardRef<HTMLInputElement, BrutalInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full border-[3px] border-foreground bg-card px-4 py-2 font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:shadow-brutal disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
BrutalInput.displayName = "BrutalInput";

export { BrutalInput };
