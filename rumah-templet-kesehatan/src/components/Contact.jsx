import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle2 } from 'lucide-react';
import { WA_LINK, SITE_CONFIG } from '../config/site';

const contactInfo = [
  {
    icon: <MessageCircle size={22} />,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    href: WA_LINK('Halo, saya ingin konsultasi pembuatan website kesehatan'),
    color: "text-electric-teal bg-teal-50",
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "halo@healthtemplatehub.id",
    href: "mailto:halo@healthtemplatehub.id",
    color: "text-ocean-blue bg-blue-50",
  },
  {
    icon: <Clock size={22} />,
    label: "Jam Operasional",
    value: "Senin–Sabtu, 08.00–17.00 WIB",
    href: null,
    color: "text-purple-500 bg-purple-50",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Halo, nama saya *${form.name}*. Saya tertarik dengan layanan *${form.service}*.\n\n${form.message}`;
    window.open(WA_LINK(msg), '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-28 mesh-bg relative overflow-hidden" id="kontak">
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-ocean-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-electric-teal/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/20">
            Hubungi Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Siap Memulai? <span className="text-electric-teal">Ayo Ngobrol.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ceritakan tentang fasilitas kesehatan Anda dan apa yang Anda butuhkan. Konsultasi awal gratis, tanpa komitmen.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <div key={i} className="dark-glass-panel rounded-2xl p-5 flex items-center gap-4 hover:bg-white/5 transition-colors">
                <div className={`p-3 rounded-xl flex-shrink-0 ${info.color}`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-neon-cyan transition-colors text-sm">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="dark-glass-panel rounded-2xl p-6 mt-4">
              <h4 className="text-white font-bold mb-3">Mengapa konsultasi dulu?</h4>
              <ul className="space-y-2">
                {["Kami pahami dulu kebutuhan spesifik Anda", "Saran template yang paling tepat tanpa paksaan", "Estimasi biaya & waktu yang transparan"].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <CheckCircle2 size={15} className="text-electric-teal flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 dark-glass-panel rounded-3xl p-8">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-electric-teal/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} className="text-electric-teal" />
                </div>
                <h3 className="text-white text-xl font-bold">Pesan Terkirim!</h3>
                <p className="text-slate-400 text-sm">WhatsApp Anda akan terbuka. Tim kami siap membalas segera.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Nama / Nama Klinik</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="cth: dr. Anisa / Klinik Sehat Bersama"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Layanan yang Diminati</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all text-sm appearance-none"
                  >
                    <option value="" className="bg-slate-800">-- Pilih Paket --</option>
                    <option value="Landing Page" className="bg-slate-800">Landing Page (Rp 499.000)</option>
                    <option value="Company Profile" className="bg-slate-800">Company Profile (Rp 1.199.000)</option>
                    <option value="Enterprise" className="bg-slate-800">Enterprise (Custom)</option>
                    <option value="Konsultasi Dulu" className="bg-slate-800">Saya ingin konsultasi dulu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Ceritakan Kebutuhan Anda</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="cth: Saya punya klinik gigi di Bandung, butuh website dengan fitur booking dan galeri..."
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-ocean-blue text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-electric-teal transition-all hover:shadow-xl hover:shadow-electric-teal/30 group"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  Kirim via WhatsApp
                </button>
                <p className="text-slate-500 text-xs text-center">Dengan mengirim, Anda setuju untuk dihubungi tim kami melalui WhatsApp.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
