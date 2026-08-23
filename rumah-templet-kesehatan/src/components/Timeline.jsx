import React, { useState } from 'react';
import { Search, MessageCircle, Code2 } from 'lucide-react';

const steps = [
  {
    icon: <Search size={24} />,
    title: "Pilih Template",
    desc: "Eksplorasi katalog kami dan pilih desain yang paling sesuai dengan identitas fasilitas kesehatan Anda."
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Konsultasi & Pemesanan",
    desc: "Hubungi kami via WhatsApp. Tim kami akan memandu Anda untuk detail kustomisasi dan konten."
  },
  {
    icon: <Code2 size={24} />,
    title: "Setup & Live",
    desc: "Kami menyiapkan semuanya (hosting, domain, setup). Website Anda siap online dalam hitungan hari."
  }
];

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-clean-light" id="cara-kerja">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">Cara Kerja Sederhana</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Dari pemilihan desain hingga website tayang, prosesnya dirancang untuk tidak membebani waktu sibuk Anda.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 hidden md:block z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-ocean-blue -translate-y-1/2 hidden md:block z-0 transition-all duration-500 ease-in-out"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="relative cursor-pointer group"
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-lg
                  ${activeStep >= idx ? 'bg-ocean-blue text-white scale-110 shadow-ocean-blue/30' : 'bg-white text-slate-400 border border-slate-200 group-hover:border-ocean-blue group-hover:text-ocean-blue'}
                `}>
                  {step.icon}
                </div>
                <div className={`text-center transition-all duration-300 ${activeStep === idx ? 'scale-105' : 'opacity-70'}`}>
                  <h3 className={`font-bold text-lg mb-2 ${activeStep >= idx ? 'text-ocean-blue' : 'text-slate-700'}`}>
                    Langkah {idx + 1}: {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
