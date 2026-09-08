import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { templateCategories } from '../data/categories.data';
import { templatesData } from '../data/templates.data';
import { SITE_CONFIG } from '../config/site';
import TemplateCard from '../components/catalog/TemplateCard';
import { useAppContext } from '../contexts/AppContext';

const TemplateCatalog = () => {
  const { t } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  // Validate category param
  const validCategoryIds = templateCategories.map(c => c.id);
  const initialCategory = validCategoryIds.includes(categoryParam) ? categoryParam : 'all';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Setup Document Title
  useEffect(() => {
    document.title = `Template Website Kesehatan | ${SITE_CONFIG.name}`;
  }, []);

  // Sync state with URL
  useEffect(() => {
    if (categoryParam && validCategoryIds.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    } else if (categoryParam) {
      // Invalid category in URL, clear it and set to 'all'
      setSearchParams({});
      setActiveCategory('all');
    }
  }, [categoryParam, setSearchParams, validCategoryIds]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filteredTemplates = useMemo(() => {
    return templatesData.filter(t => {
      // 1. Category Match
      const matchCategory = activeCategory === 'all' || t.category === activeCategory;
      
      // 2. Search Match
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = 
        query === '' ||
        t.title.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.features.some(f => f.toLowerCase().includes(query));
      
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative pt-32 pb-24 min-h-screen overflow-x-hidden antialiased bg-surface text-on-surface">
      {/* Ambient Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[80px] -z-10 pointer-events-none opacity-40"></div>
      <div className="absolute top-[40%] right-[-20%] w-[60vw] h-[60vw] bg-secondary/20 rounded-full blur-[80px] -z-10 pointer-events-none opacity-40"></div>
      
      <div className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto relative z-10">
        
        {/* Catalog Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface mb-4">{t('catalog.title')}</h1>
          <p className="text-lg md:text-xl text-on-surface-variant">{t('catalog.desc')}</p>
        </header>

        {/* Filter & Search Section */}
        <section className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6 glass-panel border border-outline-variant/30 rounded-2xl p-4 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex overflow-x-auto w-full md:w-auto space-x-2 pb-2 md:pb-0" style={{ scrollbarWidth: 'none' }}>
            <button
              onClick={() => handleCategoryChange('all')}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-primary text-on-primary' 
                  : 'bg-transparent border border-outline-variant text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {t('top_templates.all_categories')}
            </button>
            {templateCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat.id 
                    ? 'bg-primary text-on-primary' 
                    : 'bg-transparent border border-outline-variant text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
            <input
              type="text"
              placeholder={t('catalog.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-outline-variant bg-surface/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm text-on-surface outline-none transition-all placeholder:text-outline-variant"
            />
          </div>
        </section>

        {/* Grid Templates */}
        {filteredTemplates.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-surface-container rounded-2xl border border-outline-variant/20">
            <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 border border-outline-variant/20">
              <span className="material-symbols-outlined text-outline text-3xl" data-icon="search_off">search_off</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">{t('catalog.no_results')}</h3>
            <p className="text-on-surface-variant">{t('catalog.no_results_desc')}</p>
            <button 
              onClick={() => { setSearchQuery(''); handleCategoryChange('all'); }}
              className="mt-6 text-primary font-semibold hover:underline"
            >
              {t('catalog.reset_filter')}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default TemplateCatalog;
