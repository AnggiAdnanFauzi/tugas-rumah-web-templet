import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutGrid, Search, X } from 'lucide-react';
import { templateCategories } from '../data/categories.data';
import { templatesData } from '../data/templates.data';
import { SITE_CONFIG } from '../config/site';
import TemplateGrid from '../components/catalog/TemplateGrid';
import { cn } from '../utils/cn';

const TemplateCatalog = () => {
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

  const handleReset = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSearchParams({});
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
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-5"
          >
            TEMPLATE WEBSITE
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-5"
          >
            Temukan Desain untuk <span className="text-gradient">Fasilitas Kesehatan Anda</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Pilih dari berbagai kategori template yang dirancang khusus untuk klinik, dokter, dental, dan layanan wellness modern.
          </motion.p>
        </div>

        {/* Search & Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 flex flex-col md:flex-row items-center justify-between gap-5"
        >
          {/* Search Input */}
          <div className="relative w-full md:w-96 flex-shrink-0">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Cari nama, fitur, deskripsi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Cari template"
              className="w-full bg-white border border-border text-foreground rounded-full py-3 pl-11 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Hapus pencarian"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 w-full">
            <button
              onClick={() => handleCategoryChange('all')}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2",
                activeCategory === 'all' 
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/30" 
                  : "bg-white text-muted-foreground border border-border hover:border-primary hover:text-primary"
              )}
            >
              <LayoutGrid size={16} />
              Semua
            </button>
            
            {templateCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                  activeCategory === cat.id 
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30" 
                    : "bg-white text-muted-foreground border border-border hover:border-primary hover:text-primary"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Template Grid */}
        <TemplateGrid templates={filteredTemplates} onReset={handleReset} />

      </div>
    </div>
  );
};

export default TemplateCatalog;
