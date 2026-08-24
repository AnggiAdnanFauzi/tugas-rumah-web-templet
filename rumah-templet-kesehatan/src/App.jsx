import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import TemplateCatalog from './pages/TemplateCatalog';
import TemplateDetail from './pages/TemplateDetail';
import { SITE_CONFIG } from './config/site';

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
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
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
        
        {/* Footer */}
        <footer className="bg-foreground text-muted-foreground py-10 md:py-12 border-t border-white/10 mt-auto">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Brand */}
              <div>
                <span className="font-bold text-xl tracking-tight text-white block mb-3">
                  {SITE_CONFIG?.name?.split(' ')[0]}
                  <span className="text-primary">{SITE_CONFIG?.name?.substring(SITE_CONFIG.name.indexOf(' '))}</span>
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Spesialis pembuatan website untuk fasilitas layanan kesehatan Indonesia. Profesional, cepat, dan terpercaya.
                </p>
              </div>
              {/* Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Navigasi</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/#mengapa-kami" className="hover:text-white transition-colors">Mengapa Kami</Link></li>
                  <li><Link to="/template" className="hover:text-white transition-colors">Katalog Template</Link></li>
                  <li><Link to="/#harga" className="hover:text-white transition-colors">Harga</Link></li>
                  <li><Link to="/#fitur" className="hover:text-white transition-colors">Fitur</Link></li>
                  <li><Link to="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>
              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold mb-4">Kontak</h4>
                <ul className="space-y-2 text-sm">
                  <li className="hover:text-white transition-colors">📱 +{SITE_CONFIG?.waNumber}</li>
                  <li className="hover:text-white transition-colors">✉️ {SITE_CONFIG?.email}</li>
                  <li className="hover:text-white transition-colors">🕐 {SITE_CONFIG?.operationalHours}</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 text-center text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {SITE_CONFIG?.name || 'HealthTemplate Hub'}. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
