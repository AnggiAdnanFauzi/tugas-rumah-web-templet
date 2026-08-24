import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TEMPLATES from '../data/templates.data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowLeft, CheckCircle2, Smartphone, LayoutTemplate, MessageCircle } from 'lucide-react';
import { generateWaLink } from '../utils/whatsapp';

const TemplateDetailPage = () => {
  const { slug } = useParams();
  const revealRef = useScrollReveal({ threshold: 0.05 }, [slug]);

  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const template = TEMPLATES.find((t) => t.slug === slug);

  // Set document title and meta description
  useEffect(() => {
    if (template) {
      const originalTitle = document.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      const originalDescription = metaDescription ? metaDescription.getAttribute('content') : '';

      document.title = `${template.title} - Rumah Template Pendidikan`;
      if (metaDescription) {
        metaDescription.setAttribute('content', template.description);
      }

      return () => {
        document.title = originalTitle;
        if (metaDescription) {
          metaDescription.setAttribute('content', originalDescription);
        }
      };
    }
  }, [template]);

  // NOT FOUND STATE
  if (!template) {
    return (
      <div className="pt-32 pb-24 min-h-[70vh] bg-white dark:bg-[#080D1C] flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-slate-400 dark:text-slate-500">
          <LayoutTemplate size={32} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-3">Template Tidak Ditemukan</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">
          Template yang Anda cari belum tersedia atau sudah tidak tersedia. Silakan telusuri katalog kami untuk melihat opsi lainnya.
        </p>
        <Link 
          to="/template"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all"
        >
          <ArrowLeft size={16} />
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  // HAS DEMO?
  const hasDemo = template.demoUrl && template.demoUrl !== '#';

  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-white dark:bg-[#080D1C] min-h-screen text-slate-900 dark:text-white relative overflow-hidden" ref={revealRef}>
      {/* Background ambient */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="reveal-up mb-8">
          <Link 
            to="/template" 
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali ke Katalog
          </Link>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* LEFT COLUMN: PREVIEW AREA */}
          <div className="lg:col-span-7 reveal-up" style={{ transitionDelay: '100ms' }}>
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 shadow-sm relative aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center">
              {template.thumbnail ? (
                <img 
                  src={template.thumbnail} 
                  alt={`Preview ${template.title}`} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600">
                  <LayoutTemplate size={48} className="mb-4 opacity-50" />
                  <span className="text-sm font-semibold uppercase tracking-widest">Visual Segera Hadir</span>
                </div>
              )}
            </div>
            
            {/* Action Bar Under Image (Desktop Only, mirrored in mobile below) */}
            <div className="hidden lg:flex items-center justify-between mt-6 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Tertarik menggunakan desain ini?
              </div>
              <div className="flex gap-3">
                {hasDemo ? (
                  <a 
                    href={template.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                  >
                    Lihat Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 cursor-not-allowed border border-slate-200 dark:border-slate-700">
                    Preview segera tersedia
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INFO AREA */}
          <div className="lg:col-span-5 flex flex-col reveal-up" style={{ transitionDelay: '200ms' }}>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100 dark:border-blue-800/50">
                {template.categoryLabel || template.category}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight mb-4">
                {template.title}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                {template.description}
              </p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827]">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold text-sm mb-1">
                  <Smartphone size={16} className="text-blue-500" />
                  Responsif
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500">100% Mobile Friendly</div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827]">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold text-sm mb-1">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  Status
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500 capitalize">{template.status === 'active' ? 'Tersedia' : 'Dalam Pengembangan'}</div>
              </div>
            </div>

            {/* Features */}
            {template.features && template.features.length > 0 && (
              <div className="mb-8 flex-grow">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">Fitur Utama</h3>
                <ul className="space-y-3">
                  {template.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                      <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Section */}
            <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
              {/* Mobile Only Demo Button */}
              <div className="flex lg:hidden mb-2">
                {hasDemo ? (
                  <a 
                    href={template.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                  >
                    Lihat Live Demo
                  </a>
                ) : (
                  <button disabled className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 cursor-not-allowed">
                    Preview segera tersedia
                  </button>
                )}
              </div>

              <a 
                href={generateWaLink(template.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle size={18} />
                Konsultasi Template Ini
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TemplateDetailPage;
