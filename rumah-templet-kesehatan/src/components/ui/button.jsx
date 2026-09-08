import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "../../utils/cn"
import { Link } from 'react-router-dom'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-eight text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary hover:bg-primary/90 shadow-sm hover:shadow-primary/20",
        primary: "bg-primary text-on-primary hover:bg-primary/90 shadow-sm hover:shadow-primary/20",
        destructive: "bg-error text-on-error hover:bg-error/90",
        outline: "border-2 border-outline-variant bg-transparent text-on-surface hover:bg-surface-container hover:border-primary/50",
        secondary: "bg-secondary text-on-secondary hover:bg-secondary/90 shadow-sm hover:shadow-secondary/20",
        ghost: "bg-transparent text-on-surface hover:bg-surface-container",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        md: "px-6 py-3 text-sm",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "px-8 py-4 text-base",
        icon: "h-10 w-10 p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, to, href, children, ...props }, ref) => {
  if (to) {
    return (
      <Link to={to} className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </a>
    )
  }
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} >
      {children}
    </Comp>)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
