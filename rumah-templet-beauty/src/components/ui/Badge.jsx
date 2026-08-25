import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Badge = forwardRef(({ className, variant = "default", children, ...props }, ref) => {
  const variants = {
    default: "bg-beauty-surface border border-beauty-border text-beauty-foreground",
    premium: "bg-gradient-to-r from-beauty-accent to-beauty-primary text-white border-transparent",
    new: "bg-beauty-primary text-white border-transparent",
    outline: "bg-transparent border border-beauty-primary text-beauty-primary",
  };

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase transition-colors shadow-sm",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge";

export { Badge };
