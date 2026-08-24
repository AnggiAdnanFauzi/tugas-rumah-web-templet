import React from 'react';
import { ExternalLink, MessageCircle, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { WA_LINK } from '../config/site';

const TemplateCard = ({ template }) => {
  const whatsappUrl = WA_LINK(`Halo, saya tertarik dengan Template ${template.namaTemplate}`);
  const demoUrl = template.demoUrl || null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* Browser Frame Mockup */}
      <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-red-400 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-yellow-400 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-green-400 transition-colors"></div>
        </div>
        <div className="mx-auto flex items-center gap-2 text-xs text-slate-400 bg-white px-3 py-1 rounded-md shadow-inner w-2/3 truncate">
          <Monitor size={12} /> {template.kategori.toLowerCase().replace(/ /g, '-')}.demo.com
        </div>
      </div>

      {/* Image Preview with 3D Tilt illusion on hover */}
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img 
          src={template.image} 
          alt={template.namaTemplate} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-ocean-blue/90 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {template.kategori}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl text-slate-800 mb-3">{template.namaTemplate}</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {template.keyFeatures.map((feature, idx) => (
            <span key={idx} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium">
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3">
          {demoUrl ? (
            <a 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-ocean-blue hover:text-ocean-blue transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-slate-100 text-slate-400 font-semibold cursor-not-allowed text-sm">
              <ExternalLink size={16} />
              Demo Soon
            </span>
          )}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-electric-teal text-white font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/20"
          >
            <MessageCircle size={16} />
            Pesan
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
