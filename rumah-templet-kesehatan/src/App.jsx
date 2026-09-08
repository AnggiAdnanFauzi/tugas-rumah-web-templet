import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import TemplateCatalog from './pages/TemplateCatalog';
import TemplateDetail from './pages/TemplateDetail';
import { SITE_CONFIG, WA_LINK } from './config/site';
import { useAppContext } from './contexts/AppContext';

// Scroll to top on route change or hash change
const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  const { t } = useAppContext();

  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <div className="min-h-screen flex flex-col font-sans bg-surface-container-lowest text-on-surface">
        <Navbar />
        
        {/* SideNavBar (Floating Action) */}
        <a 
          className="bg-secondary-container text-on-secondary-container fixed bottom-8 right-8 rounded-full p-4 shadow-lg shadow-[0_20px_40px_rgba(0,108,73,0.2)] z-50 flex items-center gap-2 hover:scale-110 hover:rotate-3 transition-transform animate-bounce" 
          href={WA_LINK('Halo, saya ingin konsultasi gratis pembuatan website kesehatan')} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined" data-icon="chat">chat</span>
          <div className="hidden md:block">
            <span className="font-semibold text-base font-semibold block font-bold">WhatsApp Konsultasi</span>
          </div>
        </a>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Catalog lama dari setup sebelumnya, bisa dihapus bertahap */}
            <Route path="/katalog-lama" element={<Catalog />} /> 
            
            {/* Phase 1 Routing Foundation */}
            <Route path="/template" element={<TemplateCatalog />} />
            <Route path="/template/:slug" element={<TemplateDetail />} />
          </Routes>
        </main>
        
        {/* Footer Component */}
        <footer className="bg-surface-container-lowest w-full py-20 px-6 md:px-12 lg:px-16 border-t border-outline-variant/20 relative z-10 mt-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto fade-in duration-300">
            <div className="col-span-1 md:col-span-2">
              <div className="font-bold text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined" data-icon="health_and_safety">health_and_safety</span>
                {SITE_CONFIG?.name || 'HealthTemplate Hub'}
              </div>
              <p className="text-on-surface-variant  text-base mb-6 max-w-sm">
                {t('footer.desc')}
              </p>
              <div className="text-on-surface-variant  text-base">
                © {new Date().getFullYear()} {SITE_CONFIG?.name || 'HealthTemplate Hub'}. {t('footer.rights')}
              </div>
            </div>
            <div className="col-span-1">
              <h4 className="font-semibold text-base font-semibold text-on-surface font-bold mb-4">{t('footer.links')}</h4>
              <ul className="space-y-3">
                <li><Link className="text-on-surface-variant hover:text-primary transition-all hover:underline" to="#">Kebijakan Privasi</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-all hover:underline" to="#">Syarat & Ketentuan</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-all hover:underline" to="/#faq">Bantuan</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-all hover:underline" to="#">Karir</Link></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="font-semibold text-base font-semibold text-on-surface font-bold mb-4">{t('contact.title')}</h4>
              <ul className="space-y-3 text-on-surface-variant  text-base">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" data-icon="mail">mail</span>
                  {SITE_CONFIG?.email || 'hello@healthtemplate.com'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" data-icon="phone">phone</span>
                  +{SITE_CONFIG?.waNumber || '62 811 2233 4455'}
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;


