import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, ShieldCheck } from 'lucide-react';

const DarkShowcase = () => {
  return (
    <section className="py-12 md:py-14 lg:py-16 mesh-bg relative overflow-hidden" id="keunggulan">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Infrastruktur <span className="text-secondary">Kelas Produksi</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Jangan kompromi pada kualitas. Setiap website kami dibangun dengan standar industri terkini, memastikan platform kesehatan Anda kokoh di dunia digital.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl dark-glass-panel hover:bg-white/5 transition-colors">
                <div className="bg-secondary/20 p-3 rounded-xl text-secondary">
                  <Smartphone size={24} />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg">100% Responsif Sejati</h4>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">Tampil sempurna di semua ukuran layar, dari ponsel hingga monitor 4K.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-5 rounded-2xl dark-glass-panel hover:bg-white/5 transition-colors">
                <div className="bg-accent/20 p-3 rounded-xl text-accent">
                  <Zap size={24} />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg">Performa Kilat (Lighthouse 90+)</h4>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">Kode bersih, aset teroptimasi, memastikan loading seketika.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl dark-glass-panel hover:bg-white/5 transition-colors">
                <div className="bg-primary/20 p-3 rounded-xl text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg">SEO & Accessibility Ready</h4>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">Struktur semantik yang ramah mesin pencari dan pengguna disabilitas.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="dark-glass-panel p-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {/* Dummy Code Snippet Visual */}
              <div className="bg-[#1E293B] rounded-2xl p-6 font-mono text-sm shadow-inner relative z-10 overflow-x-auto text-left">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-slate-300 min-w-max">
                  <span className="text-pink-400">import</span> React <span className="text-pink-400">from</span> 'react';<br/><br/>
                  <span className="text-pink-400">const</span> <span className="text-yellow-200">DoctorDirectory</span> = () =&gt; {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-slate-500">// Zero backend overhead</span><br/>
                  &nbsp;&nbsp;<span className="text-pink-400">return</span> (<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-accent">div</span> className=<span className="text-green-300">"grid grid-cols-3 gap-5"</span>&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-accent">DoctorCard</span> performance=<span className="text-green-300">"100"</span> /&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-accent">div</span>&gt;<br/>
                  &nbsp;&nbsp;);<br/>
                  {'}'};<br/><br/>
                  <span className="text-pink-400">export default</span> DoctorDirectory;
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default DarkShowcase;
