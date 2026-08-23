import React, { useState, useRef, useEffect } from 'react';

const CATEGORIES = [
  { id: 'all', label: 'Semua' },
  { id: 'sekolah', label: 'Sekolah' },
  { id: 'perguruan-tinggi', label: 'Perguruan Tinggi' },
  { id: 'pesantren', label: 'Pesantren' },
  { id: 'kursus', label: 'Kursus & Bimbel' },
];

const CategoryFilter = ({ selectedCategory, onSelectCategory, categories }) => {
  // Use categories prop if provided, else default
  const cats = (categories && categories.length > 0) ? categories : CATEGORIES;

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    const idx = cats.findIndex(c => c.id === selectedCategory);
    const btn = buttonRefs.current[idx];
    const container = containerRef.current;
    if (btn && container) {
      const btnRect = btn.getBoundingClientRect();
      const conRect = container.getBoundingClientRect();
      setIndicatorStyle({
        left: btnRect.left - conRect.left,
        width: btnRect.width,
      });
    }
  }, [selectedCategory, cats]);

  return (
    <div className="flex justify-center mb-10">
      <div
        ref={containerRef}
        className="relative flex items-center gap-0.5 p-1 bg-slate-100 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/40 overflow-x-auto no-scrollbar"
        role="tablist"
        aria-label="Filter kategori template"
      >
        {/* Sliding indicator */}
        <div
          className="absolute top-1 bottom-1 bg-white dark:bg-slate-700 rounded-lg shadow-sm transition-all duration-250 ease-out pointer-events-none"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />

        {cats.map((cat, i) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              ref={el => buttonRefs.current[i] = el}
              onClick={() => onSelectCategory(cat.id)}
              role="tab"
              aria-selected={isActive}
              className={`
                relative z-10 whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1
                ${isActive
                  ? 'text-slate-900 dark:text-slate-100'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                }
              `}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
