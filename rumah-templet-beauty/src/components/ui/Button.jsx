import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Button = forwardRef(({ className, variant = "primary", size = "default", children, ...props }, ref) => {
  
  const variants = {
    primary: "bg-beauty-primary text-white hover:bg-beauty-primary-hover shadow-beauty-sm",
    secondary: "bg-beauty-secondary text-beauty-foreground hover:bg-beauty-secondary-hover shadow-beauty-sm",
    outline: "border border-beauty-border bg-transparent text-beauty-foreground hover:border-beauty-primary hover:text-beauty-primary",
    ghost: "bg-transparent text-beauty-foreground hover:bg-beauty-surface-hover hover:text-beauty-primary",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    default: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const Component = props.as || "button";
  
  // if it's an anchor, we don't pass the 'as' prop to the DOM
  const { as, ...rest } = props;

  return (
    <Component
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-beauty-primary/50 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
});

Button.displayName = "Button";

export { Button };
