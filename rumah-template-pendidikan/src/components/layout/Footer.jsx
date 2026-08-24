import React from 'react';
import { generateWaLink } from '../../utils/whatsapp';
import { SITE_CONFIG } from '../../config/site';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const YEAR = new Date().getFullYear();

const NAV_LINKS = [
  { name: 'Solusi', href: '/#solusi' },
  { name: 'Template', href: '/template' },
  { name: 'Cara Kerja', href: '/#cara-kerja' },
  { name: 'Harga', href: '/#harga' },
  { name: 'Fitur', href: '/#fitur' },
  { name: 'FAQ', href: '/#faq' },
];

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 relative overflow-hidden">
    {/* Subtle top border */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Brand column */}
        <div className="md:col-span-5">
          <a href="#" className="flex items-center gap-2.5 mb-4 w-fit group">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 group-hover:scale-105 transition-transform">
              <path d="M5 21 L18 27.5 L31 21 L18 14.5 Z" fill="#BFDBFE" opacity="0.7" />
              <path d="M5 15 L18 21.5 L31 15 L18 8.5 Z" fill="#60A5FA" />
              <path d="M5 9 L18 15.5 L31 9 L18 2.5 Z" fill="#2563EB" />
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-[14px] font-bold text-slate-200 tracking-tight">Rumah Template</span>
              <span className="text-[9px] font-bold text-blue-400 tracking-[0.18em] uppercase mt-[1px]">Pendidikan</span>
            </div>
          </a>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
            Pusat katalog template website pendidikan profesional. Membantu institusi membangun kehadiran digital yang kredibel.
          </p>
        </div>

        {/* Navigation column */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-5">Navigasi</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200 hover:translate-x-0.5 inline-block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA column */}
        <div className="md:col-span-4">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-5">Mulai Konsultasi</h4>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            Punya kebutuhan spesifik? Diskusikan langsung dengan kami.
          </p>
          <a
            href={generateWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="
              btn-micro inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
              text-sm font-semibold text-white
              bg-blue-600 hover:bg-blue-500
              shadow-[0_2px_12px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)]
            "
          >
            <MessageCircle size={15} />
            Konsultasi Gratis
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 pt-5 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-slate-600">
          © {YEAR} {SITE_CONFIG.brandName}. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-xs text-slate-600">
          <a href="#solusi" className="hover:text-slate-400 transition-colors">Privasi</a>
          <a href="#faq" className="hover:text-slate-400 transition-colors">Ketentuan</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
