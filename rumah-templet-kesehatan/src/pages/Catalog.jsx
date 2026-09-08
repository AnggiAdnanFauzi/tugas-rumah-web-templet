import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TemplateCard from '../components/TemplateCard';
import { templatesData, categories } from '../data/templates';

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = useMemo(() => {
    return templatesData.filter((template) => {
      const matchCategory = activeCategory === 'Semua' || template.kategori === activeCategory;
      const matchSearch = template.namaTemplate.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          template.keyFeatures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface mb-4">Template Website</h1>
          <p className="text-lg md:text-xl text-on-surface-variant">Temukan Desain untuk Fasilitas Kesehatan Anda</p>
        </header>

        {/* Filter & Search Section */}
        <section className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6 glass-panel border border-outline-variant/30 rounded-2xl p-4 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex overflow-x-auto w-full md:w-auto space-x-2 pb-2 md:pb-0" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat 
                    ? 'bg-primary text-on-primary' 
                    : 'bg-transparent border border-outline-variant text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
            <input
              type="text"
              placeholder="Cari template..."
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
            <h3 className="text-xl font-bold text-on-surface mb-2">Tidak ditemukan</h3>
            <p className="text-on-surface-variant">Coba ubah kata kunci pencarian atau kategori filter.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('Semua'); }}
              className="mt-6 text-primary font-semibold hover:underline"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Catalog;
