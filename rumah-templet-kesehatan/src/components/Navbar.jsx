import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WA_LINK } from '../config/site';
import { useAppContext } from '../contexts/AppContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { t, lang, toggleLang, isDark, toggleTheme } = useAppContext();

  const navLinks = [
    { name: t('navbar.why_us'), path: '/#mengapa-kami' },
    { name: t('navbar.template'), path: '/template' },
    { name: t('navbar.pricing'), path: '/#harga' },
    { name: t('navbar.features'), path: '/#fitur' },
    { name: t('navbar.faq'), path: '/#faq' },
  ];

  return (
    <nav className="bg-surface-container-lowest border-b border-outline-variant/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img alt="HealthTemplate Hub Logo" className="w-auto object-contain h-16 md:h-20 transform scale-[1.35] md:scale-150 origin-left transition-all" src="/logos.png" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
             const isActive = location.pathname === link.path || location.hash === link.path.replace('/', '');
             return (
               <Link 
                 key={link.name} 
                 to={link.path}
                 className={`text-sm font-semibold transition-colors ${isActive ? 'text-primary border-b-2 border-primary pb-1 pt-1 block' : 'text-on-surface-variant hover:text-primary block'}`}
               >
                 {link.name}
               </Link>
             )
          })}
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors flex items-center justify-center"
            title="Toggle Theme"
          >
            <span className="material-symbols-outlined text-[20px]">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>
          
          <button 
            onClick={toggleLang}
            className="flex items-center gap-1 font-bold text-sm px-3 py-1.5 rounded-full border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">language</span>
            {lang.toUpperCase()}
          </button>

          <a className="bg-primary text-on-primary text-sm font-semibold py-2 px-5 rounded-full hover:bg-primary/90 transition-colors ml-2" href={WA_LINK('Halo, saya ingin konsultasi gratis pembuatan website kesehatan')} target="_blank" rel="noopener noreferrer">
            {t('navbar.contact')}
          </a>
        </div>
        
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-on-surface-variant"
          >
            <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button 
            onClick={toggleLang}
            className="font-bold text-sm text-on-surface-variant px-2"
          >
            {lang.toUpperCase()}
          </button>
          <button 
            className="text-on-surface p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface-container-lowest py-4 px-6 md:px-12 lg:px-16 flex flex-col gap-4 border-b border-outline-variant/20 shadow-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-on-surface-variant text-sm font-semibold hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a className="bg-primary text-on-primary text-sm font-semibold text-center py-2 rounded-full hover:bg-primary/90 transition-colors mt-2" href={WA_LINK('Halo, saya ingin konsultasi gratis pembuatan website kesehatan')} target="_blank" rel="noopener noreferrer">
            {t('navbar.contact')}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


