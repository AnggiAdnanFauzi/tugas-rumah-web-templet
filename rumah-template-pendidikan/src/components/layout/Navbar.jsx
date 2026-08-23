import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { generateWaLink } from '../../utils/whatsapp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Intersection Observer for active sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3, rootMargin: '-10% 0px -40% 0px' });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(s => observer.observe(s));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(s => observer.unobserve(s));
    };
  }, []);

  const navLinks = [
    { name: 'Solusi', href: '#solusi' },
    { name: 'Template', href: '#katalog' },
    { name: 'Cara Kerja', href: '#cara-kerja' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrolledClasses = isScrolled
    ? isDark
      ? 'bg-[#080D1C]/90 backdrop-blur-md border-b border-white/[0.06] shadow-[0_1px_20px_rgba(0,0,0,0.3)]'
      : 'bg-white/85 backdrop-blur-md border-b border-slate-200/60 shadow-[0_1px_16px_rgba(0,0,0,0.06)]'
    : 'bg-transparent border-transparent';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledClasses}`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0" aria-label="Rumah Template Pendidikan">
            {/* Isometric stack logo */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">
                <path d="M5 21 L18 27.5 L31 21 L18 14.5 Z" fill="#BFDBFE" />
                <path d="M5 15 L18 21.5 L31 15 L18 8.5 Z" fill="#60A5FA" />
                <path d="M5 9 L18 15.5 L31 9 L18 2.5 Z" fill="#2563EB" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Rumah Template
              </span>
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase">
                Pendidikan
              </span>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-200 relative group py-1 ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 rounded-t-sm ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              );
            })}
          </div>

          {/* ── Actions ── */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              aria-label={isDark ? 'Aktifkan Light Mode' : 'Aktifkan Dark Mode'}
              className={`
                w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                ${isDark
                  ? 'bg-slate-800/80 text-amber-400 hover:bg-slate-700 hover:scale-105 shadow-sm'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 hover:scale-105 shadow-sm'
                }
              `}
            >
              {isDark
                ? <Sun size={18} strokeWidth={2} />
                : <Moon size={18} strokeWidth={2} />
              }
            </button>

            {/* CTA */}
            <a
              href={generateWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                btn-micro inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold
                ${isDark
                  ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-sm'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                }
              `}
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* ── Mobile controls ── */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={isDark ? 'Light mode' : 'Dark mode'}
              className={`
                w-9 h-9 rounded-lg flex items-center justify-center transition-colors
                ${isDark
                  ? 'bg-slate-800 text-amber-400 border border-slate-700'
                  : 'bg-slate-100 text-slate-500 border border-slate-200'
                }
              `}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${
          isDark
            ? 'bg-[#111827]/95 backdrop-blur-md border-t border-white/[0.06]'
            : 'bg-white/95 backdrop-blur-md border-t border-slate-200/60'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 mt-2">
            <a
              href={generateWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
