import React from 'react';
import { CheckCircle2, Stethoscope, Smile, HeartPulse, Pill, Microscope, Building2 } from 'lucide-react';

const specialties = [
  { icon: <Stethoscope size={28} />, label: "Klinik Umum", color: "text-ocean-blue bg-blue-50" },
  { icon: <Smile size={28} />, label: "Dokter Gigi", color: "text-purple-500 bg-purple-50" },
  { icon: <Building2 size={28} />, label: "Rumah Sakit", color: "text-electric-teal bg-teal-50" },
  { icon: <Pill size={28} />, label: "Apotek", color: "text-orange-500 bg-orange-50" },
  { icon: <Microscope size={28} />, label: "Lab & Estetika", color: "text-pink-500 bg-pink-50" },
  { icon: <HeartPulse size={28} />, label: "Wellness Center", color: "text-red-500 bg-red-50" },
];

const reasons = [
  "Spesialis eksklusif untuk industri layanan kesehatan, bukan generalis.",
  "Desain yang membangun kepercayaan pasien sejak detik pertama.",
  "Tidak perlu ahli teknis—kami tangani semua dari awal hingga tayang.",
  "Struktur konten yang dioptimasi untuk meningkatkan booking online.",
  "Update dan perbaikan cepat karena kami paham konteks medis Anda.",
];

const WhyUs = () => {
  return (
    <section className="py-28 bg-white" id="mengapa-kami">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <span className="inline-block bg-ocean-blue/10 text-ocean-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Mengapa Memilih Kami?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-dark leading-tight mb-6">
              Kami Bukan Jasa Web Biasa. <br/>
              <span className="text-gradient">Kami Spesialis Kesehatan.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Kami hanya fokus di satu industri: <strong className="text-slate-700">kesehatan</strong>. Artinya, setiap template, setiap kata, dan setiap desain yang kami buat sudah disesuaikan dengan kebutuhan, regulasi, dan bahasa yang dimengerti pasien Anda.
            </p>
            <ul className="space-y-3">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-electric-teal flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Specialty Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {specialties.map((sp, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 bg-white group cursor-default">
                <div className={`p-3 rounded-xl ${sp.color} group-hover:scale-110 transition-transform`}>
                  {sp.icon}
                </div>
                <span className="font-semibold text-slate-700 text-sm text-center">{sp.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
