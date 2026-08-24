import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';

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
            <Route path="/katalog" element={<Catalog />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-slate-dark text-slate-400 py-14 border-t border-white/10 mt-auto">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              {/* Brand */}
              <div>
                <span className="font-bold text-xl tracking-tight text-white block mb-3">
                  Health<span className="text-ocean-blue">Template</span> Hub
                </span>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Spesialis pembuatan website untuk fasilitas layanan kesehatan Indonesia. Profesional, cepat, dan terpercaya.
                </p>
              </div>
              {/* Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Navigasi</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/#mengapa-kami" className="hover:text-white transition-colors">Mengapa Kami</a></li>
                  <li><a href="/katalog" className="hover:text-white transition-colors">Katalog Template</a></li>
                  <li><a href="/#harga" className="hover:text-white transition-colors">Harga</a></li>
                  <li><a href="/#fitur" className="hover:text-white transition-colors">Fitur</a></li>
                  <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold mb-4">Kontak</h4>
                <ul className="space-y-2 text-sm">
                  <li className="hover:text-white transition-colors">📱 +62 812-3456-7890</li>
                  <li className="hover:text-white transition-colors">✉️ halo@healthtemplatehub.id</li>
                  <li className="hover:text-white transition-colors">🕐 Senin–Sabtu, 08.00–17.00 WIB</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 text-center text-xs text-slate-500">
              &copy; {new Date().getFullYear()} HealthTemplate Hub. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
