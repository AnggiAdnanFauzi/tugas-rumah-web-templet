import React from 'react';
import { WA_LINK } from '../config/site';

const TemplateCard = ({ template }) => {
  const whatsappUrl = WA_LINK(`Halo, saya tertarik dengan Template ${template.namaTemplate}`);
  
  // Create a description from key features
  const description = template.description || `Template profesional dengan fitur unggulan: ${template.keyFeatures.join(', ')}.`;

  return (
    <article className="glass-panel rounded-xl overflow-hidden group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex flex-col bg-surface border border-outline-variant/30">
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-surface-container border-b border-outline-variant/20">
        <img 
          src={template.image} 
          alt={template.namaTemplate}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-md shadow-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> Active
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-on-surface mb-2">{template.namaTemplate}</h3>
        <p className="text-base text-on-surface-variant mb-6 flex-grow">{description}</p>
        
        {/* Footer Actions */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
          <span className="text-sm font-semibold text-primary">{template.kategori}</span>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:text-primary-fixed-dim transition-colors flex items-center gap-1 group-hover:gap-2"
          >
            Lihat Detail <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default TemplateCard;
