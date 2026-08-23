import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, HeartPulse, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 bg-clean-light -z-20"></div>
      
      {/* Decorative blurred shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 -z-10"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-teal/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000 -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-ocean-blue/20 text-ocean-blue font-medium text-sm mb-6 shadow-sm">
              <HeartPulse size={16} />
              <span className="tracking-wide">Modern Healthcare Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-dark leading-tight mb-6 tracking-tight">
              Website Medis <br/>
              <span className="text-gradient">Profesional & Instan</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Katalog eksklusif template website untuk Klinik, Rumah Sakit, dan Dokter Gigi. Tingkatkan kredibilitas digital fasilitas kesehatan Anda hari ini.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link 
                to="/katalog" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-dark text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-ocean-blue transition-all hover:shadow-xl hover:shadow-ocean-blue/20 group"
              >
                Jelajahi Katalog
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="#demo-populer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-dark border border-slate-200 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-ocean-blue hover:text-ocean-blue transition-all group"
              >
                <PlayCircle size={20} className="text-electric-teal group-hover:scale-110 transition-transform" />
                Lihat Demo Populer
              </a>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                100% Pure Code
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <Activity size={12} className="text-ocean-blue" />
                </div>
                Zero Backend Overhead
              </div>
            </div>
          </div>
          
          {/* Right Visuals (Floating UI Cards) */}
          <div className="relative hidden lg:block h-[600px] animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Main Mockup Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="h-48 rounded-xl bg-slate-100 mb-4 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800" alt="Hospital UI" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                 <div className="absolute bottom-3 left-3 text-white">
                   <h3 className="font-bold">MediCare Pro</h3>
                   <p className="text-xs opacity-90">Klinik Umum</p>
                 </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                <div className="flex gap-2 mt-4">
                  <div className="h-8 bg-ocean-blue/10 rounded-lg w-full"></div>
                  <div className="h-8 bg-slate-100 rounded-lg w-full"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Element 1 */}
            <div className="absolute top-20 right-0 glass-panel rounded-xl p-4 flex items-center gap-4 animate-[bounce_5s_infinite] shadow-xl">
              <div className="bg-electric-teal/10 p-3 rounded-full text-electric-teal">
                <Activity size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Fast Loading</p>
                <p className="text-xs text-slate-500">&lt; 1s Render Time</p>
              </div>
            </div>
            
            {/* Floating Element 2 */}
            <div className="absolute bottom-32 left-0 glass-panel rounded-xl p-4 flex flex-col gap-3 animate-[bounce_6s_infinite_reverse] shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="h-16 w-32 bg-slate-100 rounded-lg flex items-center justify-center text-xs font-medium text-slate-400">
                Responsive Design
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
