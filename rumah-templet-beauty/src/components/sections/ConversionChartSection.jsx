import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Bulan 1", biasa: 10, premium: 20 },
  { name: "Bulan 2", biasa: 12, premium: 35 },
  { name: "Bulan 3", biasa: 15, premium: 55 },
  { name: "Bulan 4", biasa: 14, premium: 70 },
  { name: "Bulan 5", biasa: 18, premium: 95 },
  { name: "Bulan 6", biasa: 20, premium: 120 },
];

export function ConversionChartSection() {
  return (
    <section className="py-14 md:py-24 bg-beauty-background overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-beauty-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="beauty-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-beauty-primary mb-3">
              Data Driven Beauty
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-beauty-foreground mb-6 leading-tight">
              Desain Premium <br className="hidden md:block" />
              Bukan Sekadar Estetika, <br className="hidden lg:block" />
              <span className="font-serif italic text-beauty-primary">Tapi Konversi.</span>
            </h2>
            <p className="text-base text-beauty-muted mb-8 max-w-lg">
              Website dengan tata letak editorial, warna yang kohesif, dan struktur yang rapi terbukti meningkatkan rasa percaya klien, yang berujung pada lonjakan reservasi (*booking rate*) secara signifikan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="bg-white/50 backdrop-blur-sm border border-beauty-border p-4 rounded-2xl shadow-beauty-sm flex-1">
                <p className="text-3xl font-bold text-beauty-foreground mb-1">+600%</p>
                <p className="text-xs text-beauty-muted font-medium uppercase tracking-wider">Lonjakan Booking</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm border border-beauty-border p-4 rounded-2xl shadow-beauty-sm flex-1">
                <p className="text-3xl font-bold text-beauty-foreground mb-1">3x</p>
                <p className="text-xs text-beauty-muted font-medium uppercase tracking-wider">Retensi Pengunjung</p>
              </div>
            </div>
          </motion.div>

          {/* Chart Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 md:p-8 rounded-3xl shadow-beauty-lg border border-beauty-border w-full aspect-[4/3] flex flex-col relative"
          >
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-beauty-foreground">Simulasi Pertumbuhan Booking</h3>
                <p className="text-xs text-beauty-muted">6 Bulan Pertama Website Live</p>
              </div>
              <div className="flex gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                  <span className="text-gray-500">Web Biasa</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-beauty-primary shadow-sm shadow-beauty-primary/50"></div>
                  <span className="text-beauty-primary">Template Premium</span>
                </div>
              </div>
            </div>
            
            <div className="flex-grow w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPremium" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-primary, #b76e79)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--color-primary, #b76e79)" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorBiasa" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e5e7eb" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#e5e7eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)', fontWeight: 'bold' }}
                    itemStyle={{ fontSize: '14px' }}
                    labelStyle={{ color: '#6b7280', fontSize: '12px', marginBottom: '4px' }}
                  />
                  <Area type="monotone" dataKey="biasa" stroke="#d1d5db" strokeWidth={3} fillOpacity={1} fill="url(#colorBiasa)" />
                  <Area type="monotone" dataKey="premium" stroke="var(--color-primary, #b76e79)" strokeWidth={4} fillOpacity={1} fill="url(#colorPremium)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
