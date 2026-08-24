import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { WA_LINK, SITE_CONFIG } from '../config/site';
import { Button } from './common/Button';

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
    { name: 'Katalog', path: '/template' },
    { name: 'Mengapa Kami', path: '/#mengapa-kami' },
    { name: 'Harga', path: '/#harga' },
    { name: 'Fitur', path: '/#fitur' },
    { name: 'FAQ', path: '/#faq' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass-panel py-2' : 'bg-transparent py-3'
    )}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg text-primary-foreground group-hover:bg-secondary transition-colors">
            <Stethoscope size={20} />
          </div>
          <span className="font-bold text-lg tracking-tight text-foreground">
            {SITE_CONFIG.name.split(' ')[0]}
            <span className="text-primary">{SITE_CONFIG.name.substring(SITE_CONFIG.name.indexOf(' '))}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex gap-5 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "hover:text-primary transition-colors",
                  location.pathname === link.path ? "text-primary font-semibold" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button 
            href={WA_LINK('Halo, saya ingin konsultasi gratis pembuatan website kesehatan')}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
          >
            Konsultasi Gratis
          </Button>
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
              className="text-muted-foreground font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            href={WA_LINK('Halo, saya ingin konsultasi gratis pembuatan website kesehatan')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2"
            size="sm"
          >
            Konsultasi Gratis
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
