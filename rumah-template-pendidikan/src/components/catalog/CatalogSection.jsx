import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import CategoryFilter from './CategoryFilter';
import TemplateGrid from './TemplateGrid';
import categoriesData from '../../data/categories.data';
import templatesData from '../../data/templates.data';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CatalogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const revealRef = useScrollReveal({}, [selectedCategory]);

  const sourceData = templatesData;

  // Limit templates for preview
  let previewTemplates = [];
  if (selectedCategory === 'all') {
    // 1 per category
    const seenCategories = new Set();
    for (const t of sourceData) {
      if (!seenCategories.has(t.category)) {
        previewTemplates.push(t);
        seenCategories.add(t.category);
      }
    }
  } else {
    previewTemplates = sourceData.filter(t => t.category === selectedCategory).slice(0, 1);
  }

  return (
    <section id="katalog" className="py-10 lg:py-12 bg-slate-50 dark:bg-[#0C1221]" ref={revealRef}>
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reveal-up">
          <SectionHeader
            eyebrow="Preview Katalog"
            title="Pilihan Template"
            description="Jelajahi pilihan template website profesional untuk sekolah, kursus, dan training."
            className="mb-6"
          />
        </div>

        <div className="reveal-up" style={{ transitionDelay: '150ms' }}>
          <CategoryFilter
            categories={categoriesData}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="reveal-up" style={{ transitionDelay: '300ms' }}>
          <TemplateGrid
            templates={previewTemplates}
            selectedCategory={selectedCategory}
          />
        </div>
        
        {/* View All CTA */}
        <div className="reveal-up mt-10 flex justify-center" style={{ transitionDelay: '400ms' }}>
          <Link
            to="/template"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Lihat Semua Template
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
