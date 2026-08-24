import React from 'react';
import { SearchX, RefreshCw } from 'lucide-react';

const EmptyState = ({ searchQuery, onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20">
      <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-slate-400 dark:text-slate-500">
        <SearchX size={32} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
        Pencarian Tidak Ditemukan
      </h3>
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
        Template tidak ditemukan untuk pencarian "{searchQuery}". Coba gunakan kata kunci lain atau reset filter untuk melihat semua template kami.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
      >
        <RefreshCw size={16} />
        Reset Filter & Pencarian
      </button>
    </div>
  );
};

export default EmptyState;
