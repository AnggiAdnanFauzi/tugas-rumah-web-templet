import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { generateWaLink } from '../../utils/whatsapp';

const ContactSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="kontak" className="py-8 lg:py-10 bg-white dark:bg-[#080D1C] relative border-t border-slate-100 dark:border-slate-800/50" ref={revealRef}>
      
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-slate-50 to-transparent dark:from-[#0C1221] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900 dark:bg-[#0C1221] rounded-3xl p-6 lg:p-10 border border-slate-800 dark:border-slate-700/50 shadow-2xl overflow-hidden relative">
          
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] pointer-events-none rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center relative z-10">
            
            {/* LEFT: Copy */}
            <div className="reveal-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                Diskusikan Kebutuhan Website Pendidikan Anda
              </h2>
              <p className="text-slate-400 text-sm mb-6 max-w-md leading-relaxed">
                Tim kami siap membantu menganalisa dan merancang arsitektur website yang tepat untuk sekolah, kursus, atau pusat training Anda.
              </p>
              
              <div className="flex items-center gap-4 text-slate-300 text-sm">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs">CS</div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-slate-900 flex items-center justify-center text-xs">TS</div>
                </div>
                <span>Konsultasi tanpa komitmen & gratis</span>
              </div>
            </div>

            {/* RIGHT: Action Panel */}
            <div className="reveal-right">
              <div className="bg-white/5 dark:bg-slate-800/30 backdrop-blur-md rounded-2xl p-5 lg:p-8 border border-white/10 dark:border-slate-700/30">
                <h3 className="text-lg font-bold text-white mb-5">Hubungi Kami via</h3>
                
                <div className="space-y-4">
                  <a 
                    href={generateWaLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0">
                        <MessageCircle size={24} />
                      </div>
                      <div>
                        <div className="text-slate-900 dark:text-white font-bold">WhatsApp</div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm">Respon cepat di jam kerja</div>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-slate-400 group-hover:text-green-500 transition-colors" />
                  </a>
                  
                  <a 
                    href="mailto:halo@rumahtemplate.com"
                    className="group flex items-center justify-between p-4 rounded-xl bg-white/5 dark:bg-slate-800/20 hover:bg-white/10 dark:hover:bg-slate-800/40 border border-white/5 dark:border-slate-700/30 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-800/50 dark:bg-slate-900/50 text-slate-300 dark:text-slate-400 flex items-center justify-center flex-shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <div className="text-white font-bold">Email</div>
                        <div className="text-slate-400 text-sm">halo@rumahtemplate.com</div>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
