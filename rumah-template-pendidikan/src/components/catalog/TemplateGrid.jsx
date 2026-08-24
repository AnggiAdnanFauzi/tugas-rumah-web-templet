import React from 'react';
import { generateWaLink } from '../../utils/whatsapp';
import { MessageCircle, MousePointer2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/* 
  TemplateGrid — Phase 7.8 Final
  Empty state: Assembly/Crafting process storytelling
*/

const EmptyState = () => (
  <div className="flex flex-col items-center py-8 px-6">
    {/* Visual Storytelling: Assembly Process */}
    <div className="relative w-full max-w-[340px] h-[200px] mb-6 flex justify-center perspective-[1200px]">
      
      {/* 1. Back Layer: Blueprint/Wireframe */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#0C1221] border-2 border-dashed border-slate-300/80 dark:border-slate-700/60 rounded-2xl opacity-60 dark:opacity-40"
        style={{ transform: 'rotateX(12deg) rotateY(-8deg) translateZ(-60px) translateY(15px)' }}
      >
        <div className="p-5 flex flex-col gap-4 h-full">
          <div className="h-8 w-full border border-dashed border-slate-300 dark:border-slate-600 rounded-lg" />
          <div className="flex-1 border border-dashed border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border border-dashed border-slate-300 dark:border-slate-600" />
          </div>
        </div>
      </div>

      {/* 2. Middle Layer: Core UI Framework */}
      <div className="absolute inset-0 w-[85%] mx-auto bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/50 rounded-2xl shadow-lg opacity-90 animate-[float_6s_ease-in-out_infinite]"
        style={{ transform: 'rotateX(5deg) rotateY(-3deg) translateZ(-10px) translateY(5px)', animationDelay: '0.5s' }}
      >
        <div className="p-5 flex flex-col h-full gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-800" />
            <div className="flex-1 h-3 bg-slate-100 dark:bg-slate-800 rounded-full" />
            <div className="w-16 h-3 bg-slate-100 dark:bg-slate-800 rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-3 flex-1">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700/50" />
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700/50" />
          </div>
        </div>
      </div>

      {/* 3. Front Layer: Polished Preview Assembling */}
      <div className="absolute inset-0 w-[75%] mx-auto bg-white dark:bg-[#172033] border border-slate-200 dark:border-slate-700/60 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.5)] overflow-hidden animate-[float_7s_ease-in-out_infinite]"
        style={{ transform: 'translateZ(40px) translateY(-5px)', animationDelay: '0s' }}
      >
        <div className="h-7 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700/40 flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-400 dark:bg-rose-500" />
          <div className="w-2 h-2 rounded-full bg-amber-400 dark:bg-amber-500" />
          <div className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-500" />
          <div className="ml-3 flex-1 h-2 max-w-[80px] rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600/30" />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex-shrink-0 shadow-inner" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-32 bg-slate-800 dark:bg-slate-200 rounded-full" />
              <div className="h-2 w-20 bg-slate-400 dark:bg-slate-500 rounded-full" />
            </div>
          </div>
          <div className="h-24 w-full rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 dark:via-white/10 to-transparent animate-[shimmer_2s_infinite] bg-[length:200%_100%]" />
            <div className="absolute top-4 left-4 h-2 w-24 bg-slate-200 dark:bg-slate-600 rounded-full" />
            <div className="absolute top-8 left-4 h-2 w-16 bg-slate-200 dark:bg-slate-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating Mini Panel - Status */}
      <div 
        className="absolute top-4 -right-4 bg-white dark:bg-[#1A233A] border border-slate-200/80 dark:border-slate-700/80 rounded-lg p-2.5 flex items-center gap-2 shadow-lg backdrop-blur-md animate-[float-sm_5s_ease-in-out_infinite]"
        style={{ transform: 'translateZ(60px)', zIndex: 10, animationDelay: '1s' }}
      >
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Assembling UI</span>
      </div>

      {/* Subtle Animated Cursor */}
      <div 
        className="absolute bottom-10 left-10 text-slate-800 dark:text-white drop-shadow-md z-20 animate-[float_4s_ease-in-out_infinite]"
        style={{ transform: 'translateZ(70px)', animationDelay: '0.5s' }}
      >
        <MousePointer2 size={24} className="fill-white dark:fill-[#1A233A] text-slate-900 dark:text-white" strokeWidth={1.5} />
      </div>

    </div>

    {/* Text */}
    <h3 className="text-[18px] font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight text-center">
      Katalog Sedang Dirakit
    </h3>
    <p className="text-[13px] text-slate-500 dark:text-slate-400 max-w-sm mx-auto text-center leading-relaxed mb-5">
      Sistem kami sedang memproses dan menyiapkan koleksi template berkualitas agar siap Anda eksplorasi.
    </p>

    {/* CTA */}
    <a
      href={generateWaLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-micro inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-sm transition-all"
    >
      <MessageCircle size={16} />
      Beritahu Saya Jika Sudah Siap
    </a>
  </div>
);

const TemplateGrid = ({ templates, selectedCategory }) => {
  if (!templates || templates.length === 0) {
    if (selectedCategory !== 'all') {
      return (
        <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700/50">
          <p className="text-[15px] text-slate-500 dark:text-slate-500">Belum ada template pada kategori ini.</p>
        </div>
      );
    }
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template, index) => (
        <div key={template.id || index} className="reveal-scale group flex flex-col bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300" style={{ transitionDelay: `${index * 80}ms` }}>
          {/* Card Image Area */}
          <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-800/50 overflow-hidden border-b border-slate-100 dark:border-slate-800">
            {template.thumbnail ? (
              <img src={template.thumbnail} alt={template.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 gap-3">
                <LayoutTemplate size={32} />
                <span className="text-xs font-semibold uppercase tracking-widest">Preview</span>
              </div>
            )}
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md rounded-full border border-white/10 shadow-sm">
                {template.categoryLabel || template.category}
              </span>
            </div>
            
            {/* Hover Actions */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
              {template.demoUrl && template.demoUrl !== '#' ? (
                <a href={template.demoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-full hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg">
                  Lihat Demo
                </a>
              ) : (
                <span className="px-4 py-2 bg-slate-800/80 text-slate-300 text-xs font-semibold rounded-full cursor-not-allowed border border-slate-700/50">
                  Preview Segera Tersedia
                </span>
              )}
            </div>
          </div>
          
          {/* Card Content Area */}
          <div className="p-4 lg:p-5 flex flex-col flex-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {template.title}
            </h3>
            <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
              {template.description}
            </p>
            
            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-auto flex items-center justify-between">
              <a href={generateWaLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <MessageCircle size={14} />
                Konsultasikan
              </a>
              <Link to={`/template/${template.slug}`} className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all">
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplateGrid;
