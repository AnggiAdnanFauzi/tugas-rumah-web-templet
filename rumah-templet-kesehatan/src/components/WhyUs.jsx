import React from 'react';
import { useAppContext } from '../contexts/AppContext';

const WhyUs = () => {
  const { t } = useAppContext();

  return (
    <section className="py-20 relative overflow-hidden" id="mengapa-kami">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
      <div className="text-center mb-16 reveal active">
        <h2 className="font-bold text-2xl md:text-3xl text-gradient font-bold mb-4">{t('why_us.title')}</h2>
        <p className=" text-base text-on-surface-variant max-w-2xl mx-auto">{t('why_us.desc')}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="glass-panel p-8 rounded-eight hover:-translate-y-2 transition-transform duration-300 reveal border-t-2 border-l-2 border-outline-variant/40 relative overflow-hidden active shadow-sm">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-container/30 rounded-full blur-xl"></div>
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-surface-container/50 shadow-sm border border-outline-variant/40 relative z-10">
            <img alt="3D icon profesional" className="w-16 h-16 object-contain drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6Ko-dA321MBzVArgy4n2GUxGEX88UpQtxGXeKRRGF00LZM0PRh-GJISvenKdxY_DKJ-Z0_oWKA9rXVbS4MHjguyfRVEPKIFqcQHOrMdrQ9uNlU9S14a-omlGcS-7A6HgjktyrvxIkJbcynW8MhsIM33nfDr_w9emoiQ8WKtndeOdqSgBri9SmQHRpBpoQ2ynfdxlsJxeIp2X1mSunFN6Oqqfk6xwnWE9sa9u6A86cdkAxf89_9Cu" />
          </div>
          <h3 className="font-bold text-xl font-bold text-on-surface mb-3 relative z-10">{t('why_us.card1_title')}</h3>
          <p className="text-on-surface-variant relative z-10">{t('why_us.card1_desc')}</p>
        </div>

        {/* Card 2 */}
        <div className="glass-panel p-8 rounded-eight hover:-translate-y-2 transition-transform duration-300 reveal border-t-2 border-l-2 border-outline-variant/40 relative overflow-hidden active shadow-sm">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary-container/30 rounded-full blur-xl"></div>
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-surface-container/50 shadow-sm border border-outline-variant/40 relative z-10">
            <img alt="3D icon responsif" className="w-16 h-16 object-contain drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrZ79frBx_8LmcRRxJWO_5KKdIXSFWGhnjZhH9uxOEUeovn8EFrLON9avf06jYEcRogaJ6AdhauSKWEwW_7SZYl6LdHJXBdhFtA3V0RnuPSgGSNVj3tJQdQ5NP14MM-LaKPm7fRfNKjDC8rDGwAVn90QKGZrNwNJ0zVlmOxq-NUb7xxgVN6-TgTT2FDvQQJbLHpTOd5HR6YO8_5eSqw8aC_2yKuHyUoEfPyOFxiXnvQ8lD62NLCtPA" style={{ objectPosition: 'top right' }} />
          </div>
          <h3 className="font-bold text-xl font-bold text-on-surface mb-3 relative z-10">{t('why_us.card2_title')}</h3>
          <p className="text-on-surface-variant relative z-10">{t('why_us.card2_desc')}</p>
        </div>

        {/* Card 3 */}
        <div className="glass-panel p-8 rounded-eight hover:-translate-y-2 transition-transform duration-300 reveal border-t-2 border-l-2 border-outline-variant/40 relative overflow-hidden active shadow-sm">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-tertiary-container/30 rounded-full blur-xl"></div>
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-surface-container/50 shadow-sm border border-outline-variant/40 relative z-10">
            <img alt="3D icon fokus pengguna" className="w-16 h-16 object-contain drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCveIiJVaLnsKrXDs7NDmlpJHYnEtQIlI6rEEv6Fq5GlCSn4QmPgnwILbLhOYSGbzoeLGh8dAgH5YOva6BSZm2zviFHpQREQJH1G5eYYjUhW6x6mgYZsOcr7T17mR3LzUTRdajZErU4tumRCnf3oo3JPptJDgI918RHsDi0QiKmmR21wjgUpCW5sb-NWkjMC70CUaOIqz_kBbzR3Hx0NjGPHS_BpJe9E431gyqjoA6nxkKYabBHsrev" style={{ objectPosition: 'bottom left' }} />
          </div>
          <h3 className="font-bold text-xl font-bold text-on-surface mb-3 relative z-10">{t('why_us.card3_title')}</h3>
          <p className="text-on-surface-variant relative z-10">{t('why_us.card3_desc')}</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WhyUs;




