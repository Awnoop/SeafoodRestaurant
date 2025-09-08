// Example: separator.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("separator-class", className)} {...props}>
      {children}
    </div>
  )
);
Separator.displayName = "Separator";

export { Separator };