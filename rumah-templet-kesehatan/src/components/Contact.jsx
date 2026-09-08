import React from 'react';
import { useAppContext } from '../contexts/AppContext';

const Contact = () => {
  const { t } = useAppContext();

  return (
    <section className="py-20 bg-surface-container px-6 md:px-12 lg:px-16 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-shape-2 opacity-50"></div>
      
      <div className="max-w-3xl mx-auto glass-panel p-8 md:p-12 rounded-eight reveal relative z-10 border-t border-l border-white/60 active">
        <div className="text-center mb-10">
          <h2 className="font-bold text-2xl md:text-3xl text-gradient font-bold mb-4">{t('contact.title')}</h2>
          <p className=" text-base text-on-surface-variant">{t('contact.desc')}</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block font-semibold text-base font-semibold text-on-surface mb-2" htmlFor="name">Nama Lengkap / Nama Klinik</label>
            <input 
              id="name" 
              type="text" 
              className="w-full px-4 py-3 rounded-eight border-outline-variant/50 bg-white/50 backdrop-blur-sm focus:ring-primary focus:border-primary transition-colors shadow-inner focus:border-primary/50 outline-none" 
              placeholder="Masukkan nama Anda" 
            />
          </div>
          <div>
            <label className="block font-semibold text-base font-semibold text-on-surface mb-2" htmlFor="service">Layanan yang Diminati</label>
            <select 
              id="service" 
              className="w-full px-4 py-3 rounded-eight border-outline-variant/50 bg-white/50 backdrop-blur-sm focus:ring-primary focus:border-primary transition-colors shadow-inner focus:border-primary/50 outline-none"
            >
              <option>Landing Page</option>
              <option>Company Profile</option>
              <option>Enterprise Custom</option>
              <option>Konsultasi Umum</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-base font-semibold text-on-surface mb-2" htmlFor="message">Pesan / Pertanyaan</label>
            <textarea 
              id="message" 
              rows="4" 
              className="w-full px-4 py-3 rounded-eight border-outline-variant/50 bg-white/50 backdrop-blur-sm focus:ring-primary focus:border-primary transition-colors shadow-inner focus:border-primary/50 outline-none" 
              placeholder="Jelaskan kebutuhan website Anda..."
            ></textarea>
          </div>
          <button 
            type="button" 
            className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-eight hover:shadow-md hover:-translate-y-1 transition-all flex justify-center items-center gap-2 shadow-sm shadow-[0_10px_20px_rgba(0,88,190,0.2)]"
          >
            <span className="material-symbols-outlined" data-icon="send">send</span> {t('contact.btn')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;



