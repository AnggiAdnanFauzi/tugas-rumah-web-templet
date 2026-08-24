import React from 'react';
import { motion } from 'framer-motion';
import { SearchX, RefreshCw } from 'lucide-react';
import TemplateCard from './TemplateCard';
import { Button } from '../common/Button';

const TemplateGrid = ({ templates, onReset }) => {
  if (!templates || templates.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-20 px-4 text-center"
      >
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6 border border-border shadow-sm">
          <SearchX size={36} className="text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Tidak Ada Template</h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
          Pencarian atau filter Anda tidak membuahkan hasil. Silakan periksa kembali kata kunci yang Anda masukkan atau hapus filter untuk melihat semua koleksi kami.
        </p>
        <Button 
          onClick={onReset} 
          variant="outline"
          className="flex items-center gap-2 px-6"
        >
          <RefreshCw size={16} />
          Reset Filter & Pencarian
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {templates.map((template, idx) => (
        <motion.div
          key={template.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="h-full"
        >
          <TemplateCard template={template} />
        </motion.div>
      ))}
    </div>
  );
};

export default TemplateGrid;
