import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

const Hero = () => {
  const { t } = useAppContext();

  return (
    <section className="relative py-12 md:py-20 min-h-[auto] md:min-h-[819px] overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 bg-shape-1 z-0"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-full flex flex-col md:flex-row items-center justify-between gap-8 z-10">
      {/* Left Content */}
      <div className="w-full md:w-1/2 reveal active">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 mb-6 relative">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-semibold text-base text-on-surface-variant">{t('hero.kicker')}</span>
        </div>
        
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-on-surface mb-6 relative leading-tight">
          {t('hero.title1')} <span className="text-gradient">{t('hero.title_highlight')}</span> {t('hero.title2')}
        </h1>
        
        <p className="text-base text-on-surface-variant mb-10 max-w-lg">
          {t('hero.desc')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 relative">
          <Link to="/template" className="bg-primary text-on-primary font-semibold text-base py-4 px-8 rounded-eight text-center hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            {t('hero.cta_primary')}
          </Link>
          <a href="/#cara-kerja" className="glass-panel text-primary font-semibold text-base py-4 px-8 rounded-eight text-center flex items-center justify-center gap-2 hover:bg-surface-variant transition-all">
            <span className="material-symbols-outlined" data-icon="play_circle">play_circle</span>
            {t('hero.cta_secondary')}
          </a>
        </div>
      </div>
      
      {/* Right Content - 3D Visual Mockup */}
      <div className="w-full md:w-1/2 relative h-[300px] md:h-[550px] mt-10 md:mt-0 flex justify-center items-center reveal active z-0">
        <div className="relative w-full h-full max-w-xl mx-auto transform hover:scale-105 transition-transform duration-700 hover:rotate-1">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform rotate-3 scale-105 opacity-50 animate-pulse"></div>
          
          {/* Animated Floating Icons around Image */}
          <div className="absolute -top-6 -left-6 glass-panel p-3 rounded-full medical-asset-1 shadow-md border border-outline-variant/50 bg-surface/80 hidden md:block z-20">
            <span className="material-symbols-outlined text-primary text-2xl" data-icon="prescriptions">prescriptions</span>
          </div>
          <div className="absolute top-1/2 -right-6 glass-panel p-4 rounded-full medical-asset-2 shadow-md border border-outline-variant/50 bg-surface/80 hidden md:block z-20">
            <span className="material-symbols-outlined text-secondary text-3xl" data-icon="health_and_safety">health_and_safety</span>
          </div>
          <div className="absolute -bottom-6 left-1/4 glass-panel p-3 rounded-full medical-asset-3 shadow-md border border-outline-variant/50 bg-surface/80 hidden md:block z-20">
            <span className="material-symbols-outlined text-tertiary text-2xl" data-icon="stethoscope">stethoscope</span>
          </div>
          
          <img 
            alt="High-quality 3D render of a modern healthcare user interface mockup" 
            className="w-full h-full object-cover rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,88,190,0.3)] relative z-10 border-4 border-white/40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeB_0cU_IzbKsJ5mwI3fXT9_dGT1htATfjtl_p3J4pIBQgUxzSBuDAdPAiMN6M6zmFRysCUKEWhzZ5TZhQAz34gk4PyPoKbClxxJatctLA2W1sAmQ74MW_qJrjiKss6kc2j-Ad8JvZxUR5l1XQEPEmQnIW9dwd17B_w4KRgj55rUlgH1yX7Em9PB04PlBLAdr7ymJSX5u0ISna84AQtP08vP2qhi_l3r9WRn2msBUDUCWiUeDYlNjm" 
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;


