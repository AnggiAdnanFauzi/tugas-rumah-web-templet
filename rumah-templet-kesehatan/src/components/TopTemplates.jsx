import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { templatesData } from '../data/templates.data';
import { templateCategories } from '../data/categories.data';
import TemplateCard from './catalog/TemplateCard';
import { useAppContext } from '../contexts/AppContext';

const TopTemplates = () => {
  const { t } = useAppContext();
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter templates based on active category
  const displayTemplates = useMemo(() => {
    if (activeCategory === 'all') {
      // Find the top 1 template for each category (up to 4)
      const selected = [];
      templateCategories.forEach(category => {
        const template = templatesData.find(t => t.category === category.id);
        if (template) selected.push(template);
      });
      return selected.slice(0, 4);
    } else {
      // Find up to 4 templates for the selected category
      return templatesData.filter(t => t.category === activeCategory).slice(0, 4);
    }
  }, [activeCategory]);

  if (displayTemplates.length === 0) return null;

  return (
    <section className="py-20 relative overflow-hidden bg-surface-container-low" id="top-templates">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl reveal active">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="material-symbols-outlined text-primary text-sm">star</span>
              <span className="font-semibold text-xs text-primary">{t('top_templates.kicker')}</span>
            </div>
            <h2 className="font-bold text-2xl md:text-3xl text-on-surface mb-4">
              {t('top_templates.title')}
            </h2>
            <p className="text-base text-on-surface-variant">
              {t('top_templates.desc')}
            </p>
          </div>
          <Link 
            to="/template" 
            className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:bg-surface-variant px-4 py-2 rounded-full transition-colors"
          >
            {t('top_templates.link')}
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>

        {/* Minimalist Filter Bar */}
        <div className="flex overflow-x-auto w-full space-x-2 pb-4 mb-8 reveal active" style={{ scrollbarWidth: 'none' }}>
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                activeCategory === 'all' 
                  ? 'bg-primary text-on-primary' 
                  : 'bg-surface-container hover:bg-surface-variant text-on-surface-variant'
              }`}
            >
              {t('top_templates.all_categories')}
            </button>
          {templateCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-on-primary shadow-md'
                  : 'bg-transparent border border-outline-variant/50 text-on-surface-variant hover:bg-surface hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Template Grid (4 items = 4 columns on lg, 2 on sm) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 reveal active"
        >
          <AnimatePresence mode="popLayout">
            {displayTemplates.map((template, idx) => (
              <motion.div
                key={template.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <TemplateCard template={template} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile View All Button */}
        <div className="mt-10 md:hidden flex justify-center reveal active">
          <Link 
            to="/template" 
            className="md:hidden mt-8 flex items-center justify-center w-full gap-2 bg-primary/10 text-primary font-semibold py-3 px-6 rounded-full hover:bg-primary/20 transition-colors"
          >
            {t('top_templates.link')}
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TopTemplates;
