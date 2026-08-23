import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Katalog Template', path: '/katalog' },
    { name: 'Cara Kerja', path: '/#cara-kerja' },
    { name: 'FAQ', path: '/#faq' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-ocean-blue p-2 rounded-lg text-white group-hover:bg-electric-teal transition-colors">
            <Stethoscope size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-dark">
            Health<span className="text-ocean-blue">Template</span> Hub
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "hover:text-ocean-blue transition-colors",
                  location.pathname === link.path ? "text-ocean-blue font-semibold" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a 
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20gratis%20pembuatan%20website%20kesehatan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-ocean-blue transition-all hover:shadow-lg hover:shadow-ocean-blue/30"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel py-4 px-6 flex flex-col gap-4 border-t border-white/20">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-slate-600 font-medium hover:text-ocean-blue"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20gratis%20pembuatan%20website%20kesehatan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-ocean-blue text-white text-center py-3 rounded-xl font-semibold mt-2"
          >
            Konsultasi Gratis
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
