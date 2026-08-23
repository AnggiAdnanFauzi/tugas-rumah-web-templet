import React from 'react';

const variants = {
  primary: "bg-blue-600 text-white shadow-sm hover:shadow-md hover:shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-[1px]",
  secondary: "bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 hover:border-slate-300 hover:-translate-y-[1px]",
  ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:-translate-y-[1px]"
};

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-[200ms] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group";
  const variantStyle = variants[variant] || variants.primary;
  
  return (
    <button 
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {/* We apply a subtle transform to any child SVG icon on hover */}
      <span className="inline-flex items-center justify-center gap-2 [&>svg]:transition-transform [&>svg]:duration-200 group-hover:[&>svg]:translate-x-0.5">
        {children}
      </span>
    </button>
  );
};

export default Button;
