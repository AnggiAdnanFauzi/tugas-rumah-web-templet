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
        
        {/* Simple Footer */}
        <footer className="bg-slate-dark text-slate-400 py-12 border-t border-white/10 mt-auto">
          <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-white">
                Health<span className="text-ocean-blue">Template</span> Hub
              </span>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} HealthTemplate Hub. Prototipe Frontend.
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
