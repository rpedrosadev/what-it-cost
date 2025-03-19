import * as React from "react";
import { cn } from "../lib/utils";

interface InputProps
  extends Omit<React.ComponentProps<"input">, "prefix" | "suffix"> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startAdornment, endAdornment, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {startAdornment && (
          <div className="absolute left-3 flex items-center pointer-events-none">
            {startAdornment}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            startAdornment ? "pl-10" : "",
            endAdornment ? "pr-10" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {endAdornment && (
          <div className="absolute right-3 flex items-center pointer-events-none">
            {endAdornment}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
