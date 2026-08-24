import React from 'react';

const SectionHeader = ({ eyebrow, title, description, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50 dark:bg-blue-950/40 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
