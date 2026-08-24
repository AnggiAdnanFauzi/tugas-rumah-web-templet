import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const buttonVariants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-primary/20",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm hover:shadow-secondary/20",
  ghost: "bg-transparent text-foreground hover:bg-muted/50",
  outline: "border-2 border-border bg-transparent text-foreground hover:bg-muted/30 hover:border-primary/50",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  icon: "p-2",
};

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  asChild = false,
  href,
  to,
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";
  const styles = cn(baseStyles, buttonVariants[variant], buttonSizes[size], className);

  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};
