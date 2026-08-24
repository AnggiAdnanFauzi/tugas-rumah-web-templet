import React, { useState, useEffect } from 'react';
import CategoryFilter from '../components/catalog/CategoryFilter';
import CatalogSearch from '../components/catalog/CatalogSearch';
import TemplateGrid from '../components/catalog/TemplateGrid';
import EmptyState from '../components/catalog/EmptyState';
import TEMPLATES from '../data/templates.data';
import categories from '../data/categories.data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TemplatesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const revealRef = useScrollReveal({ threshold: 0.1 }, [activeCategory, searchQuery]);

  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sourceData = TEMPLATES;

  // Filter templates
  const filteredTemplates = sourceData.filter((template) => {
    // 1. Kategori
    const matchCategory = activeCategory === 'all' || template.category === activeCategory;
    if (!matchCategory) return false;
    
    // 2. Pencarian
    if (searchQuery.trim() === '') return true;
    
    const query = searchQuery.toLowerCase();
    const matchTitle = template.title.toLowerCase().includes(query);
    const matchDesc = template.description.toLowerCase().includes(query);
    const matchFeatures = template.features && template.features.some(f => f.toLowerCase().includes(query));
    
    return matchTitle || matchDesc || matchFeatures;
  });

  const handleReset = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-white dark:bg-[#080D1C] min-h-screen text-slate-900 dark:text-white relative overflow-hidden" ref={revealRef}>
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="reveal-up text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
            Katalog Template Website Pendidikan
          </h1>
          <p className="reveal-up text-base lg:text-lg text-slate-500 dark:text-slate-400" style={{ transitionDelay: '100ms' }}>
            Temukan desain website yang sesuai dengan kebutuhan institusi Anda. Kami menyediakan pilihan terbaik untuk sekolah, kursus, dan training.
          </p>
        </div>

        {/* Filter & Search Section */}
        <div className="reveal-up mb-12 flex flex-col md:flex-row items-center justify-between gap-6" style={{ transitionDelay: '200ms' }}>
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <CategoryFilter
              categories={categories}
              selectedCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>
          <div className="w-full md:w-auto">
            <CatalogSearch 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </div>

        {/* Grid Section */}
        <div className="reveal-up" style={{ transitionDelay: '300ms' }}>
          {filteredTemplates.length > 0 ? (
            <TemplateGrid templates={filteredTemplates} />
          ) : (
            <EmptyState searchQuery={searchQuery} onReset={handleReset} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
