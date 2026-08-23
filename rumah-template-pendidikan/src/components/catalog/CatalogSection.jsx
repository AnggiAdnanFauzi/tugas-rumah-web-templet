import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import CategoryFilter from './CategoryFilter';
import TemplateGrid from './TemplateGrid';
import categoriesData from '../../data/categories.data';
import templatesData from '../../data/templates.data';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CatalogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const revealRef = useScrollReveal();

  const filteredTemplates = templatesData.filter(template => {
    if (selectedCategory === 'all') return true;
    return template.category === selectedCategory;
  });

  return (
    <section id="katalog" className="py-16 lg:py-24 bg-slate-50 dark:bg-[#0C1221]" ref={revealRef}>
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reveal-up">
          <SectionHeader
            eyebrow="Katalog Kami"
            title="Pilih Template Sesuai Kebutuhan"
            description="Eksplorasi koleksi template website pendidikan profesional. Lihat live demo sebelum memilih."
            className="mb-10"
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
            templates={filteredTemplates}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
