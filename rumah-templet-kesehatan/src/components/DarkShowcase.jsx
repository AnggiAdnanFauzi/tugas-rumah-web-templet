import React from 'react';
import { Smartphone, Zap, ShieldCheck } from 'lucide-react';

const DarkShowcase = () => {
  return (
    <section className="py-24 mesh-bg relative overflow-hidden" id="keunggulan">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-teal/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ocean-blue/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="animate-fade-up text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Infrastruktur <span className="text-electric-teal">Kelas Produksi</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Jangan kompromi pada kualitas. Setiap template kami dibangun dengan standar industri terkini, tanpa bloatware, tanpa builder lambat.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl dark-glass-panel hover:bg-white/5 transition-colors">
                <div className="bg-electric-teal/20 p-3 rounded-lg text-electric-teal">
                  <Smartphone size={24} />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg">100% Responsif Sejati</h4>
                  <p className="text-slate-400 text-sm mt-1">Tampil sempurna di semua ukuran layar, dari ponsel hingga monitor 4K.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-2xl dark-glass-panel hover:bg-white/5 transition-colors">
                <div className="bg-neon-cyan/20 p-3 rounded-lg text-neon-cyan">
                  <Zap size={24} />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg">Performa Kilat (Lighthouse 90+)</h4>
                  <p className="text-slate-400 text-sm mt-1">Kode bersih, aset teroptimasi, memastikan loading seketika.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl dark-glass-panel hover:bg-white/5 transition-colors">
                <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg">SEO & Accessibility Ready</h4>
                  <p className="text-slate-400 text-sm mt-1">Struktur semantik yang ramah mesin pencari dan pengguna disabilitas.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="dark-glass-panel p-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-teal/10 to-ocean-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {/* Dummy Code Snippet Visual */}
              <div className="bg-[#1E293B] rounded-2xl p-6 font-mono text-sm shadow-inner relative z-10">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-slate-300">
                  <span className="text-pink-400">import</span> React <span className="text-pink-400">from</span> 'react';<br/><br/>
                  <span className="text-pink-400">const</span> <span className="text-yellow-200">DoctorDirectory</span> = () =&gt; {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-slate-500">// Zero backend overhead</span><br/>
                  &nbsp;&nbsp;<span className="text-pink-400">return</span> (<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-neon-cyan">div</span> className=<span className="text-green-300">"grid grid-cols-3 gap-6"</span>&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-neon-cyan">DoctorCard</span> performance=<span className="text-green-300">"100"</span> /&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-neon-cyan">div</span>&gt;<br/>
                  &nbsp;&nbsp;);<br/>
                  {'}'};<br/><br/>
                  <span className="text-pink-400">export default</span> DoctorDirectory;
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DarkShowcase;
