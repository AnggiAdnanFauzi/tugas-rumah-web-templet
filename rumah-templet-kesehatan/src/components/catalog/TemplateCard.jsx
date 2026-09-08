import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';

const TemplateCard = ({ template }) => {
  const { lang } = useAppContext();
  const { slug, title, categoryLabel, description, description_en, thumbnail, demoUrl, status } = template;
  const isComingSoon = status === 'coming-soon';

  return (
    <article className="glass-panel rounded-xl overflow-hidden group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex flex-col bg-surface border border-outline-variant/30 h-full">
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-surface-container border-b border-outline-variant/20">
        {demoUrl && !isComingSoon ? (
          <div className="w-full h-full bg-surface-container pointer-events-none relative overflow-hidden transition-transform duration-700 group-hover:scale-105">
            <iframe 
              src={demoUrl} 
              title={`Live Preview of ${title}`} 
              className="w-[400%] h-[400%] border-none absolute top-0 left-0 origin-top-left scale-[0.25] pointer-events-none"
              loading="lazy"
              scrolling="no"
              tabIndex="-1"
            />
          </div>
        ) : thumbnail ? (
          <img 
            src={thumbnail} 
            alt={`Thumbnail untuk ${title}`} 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-on-surface-variant font-medium text-sm">
            No Image
          </div>
        )}
        
        <div className="absolute top-4 left-4">
          {isComingSoon ? (
            <span className="px-3 py-1 bg-surface/80 text-on-surface-variant rounded-full text-[9px] md:text-[10px] font-bold tracking-wider flex items-center gap-1 backdrop-blur-md shadow-sm border border-outline-variant/50 uppercase">
              Coming Soon
            </span>
          ) : (
            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[9px] md:text-[10px] font-bold tracking-wider flex items-center gap-1 backdrop-blur-md shadow-sm border border-white/20 uppercase">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary animate-pulse"></span> Active
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-bold text-on-surface mb-2 leading-tight">{title}</h3>
        <p className="text-sm md:text-xs text-on-surface-variant mb-5 flex-grow leading-relaxed">
          {lang === 'en' ? description_en : description}
        </p>
        
        {/* Footer Actions */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
          <span className="text-[10px] md:text-[11px] font-bold text-primary uppercase tracking-widest">{categoryLabel}</span>
          <Link 
            to={`/template/${slug}`} 
            className={`text-xs md:text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all ${
              isComingSoon ? 'text-outline pointer-events-none' : 'text-primary hover:text-primary-fixed-dim'
            }`}
          >
            {lang === 'en' ? 'View Details' : 'Lihat Detail'} <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default TemplateCard;
