import React from 'react';
import { cn } from '../../utils/cn';

const badgeVariants = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  outline: "text-foreground border border-border",
  muted: "bg-muted text-muted-foreground",
  accent: "bg-accent text-accent-foreground",
};

export const Badge = ({ className, variant = "default", children, ...props }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
