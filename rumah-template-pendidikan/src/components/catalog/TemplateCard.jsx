import React from 'react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { generateWaLink } from '../../utils/whatsapp';
import { Link } from 'react-router-dom';

const TemplateCard = ({ template }) => {
  const {
    title,
    categoryLabel,
    thumbnail,
    description,
    features,
    demoUrl,
  } = template;

  const handleWaClick = () => {
    window.open(generateWaLink(title), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 transform hover:-translate-y-2 group">
      {/* Thumbnail */}
      <div className="aspect-[4/3] w-full bg-slate-50 overflow-hidden relative border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={`Thumbnail ${title}`} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
            <svg className="w-12 h-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium tracking-wide">Preview Unavailable</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <Badge>{categoryLabel || 'Kategori'}</Badge>
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-tight">{title}</h3>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">{description}</p>
        
        {features && features.length > 0 && (
          <div className="mb-6 flex-grow">
            <div className="flex flex-wrap gap-1.5">
              {features.slice(0, 3).map((feat, idx) => (
                <span key={idx} className="inline-flex items-center px-2 py-1 rounded-md bg-slate-50 text-[11px] font-medium text-slate-500 border border-slate-100">
                  {feat}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Actions */}
        <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-slate-100">
          <Link to={`/template/${template.slug}`} className="w-full">
            <Button variant="secondary" className="w-full">
              Lihat Detail
            </Button>
          </Link>
          <Button variant="primary" className="w-full" onClick={handleWaClick}>
            Konsultasikan Template Ini
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
