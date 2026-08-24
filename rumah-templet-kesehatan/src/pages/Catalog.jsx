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
    <div className="pt-28 pb-24 min-h-screen bg-clean-light">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-dark mb-4">Katalog Template</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Temukan desain yang sempurna untuk fasilitas kesehatan Anda. Semua template siap untuk dikustomisasi sesuai brand Anda.
          </p>
        </div>

        {/* Control Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-24 z-40">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-ocean-blue text-white shadow-md shadow-ocean-blue/20' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Cari fitur atau nama..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ocean-blue/50 focus:border-ocean-blue transition-all"
            />
          </div>

        </div>

        {/* Grid Templates */}
        {filteredTemplates.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence>
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">Tidak ditemukan</h3>
            <p className="text-slate-500">Coba ubah kata kunci pencarian atau kategori filter.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('Semua'); }}
              className="mt-6 text-ocean-blue font-medium hover:underline"
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
