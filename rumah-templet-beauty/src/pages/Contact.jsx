import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, MessageSquare, Mail, Phone, ChevronDown, Sparkles } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";

// Basic config mockup
const SITE_CONFIG = {
  name: "Rumah Web Template",
  whatsappNumber: "6287772577020",
  email: "optibis.id@gmail.com"
};

const faqs = [
  {
    question: "Bagaimana cara membeli template?",
    answer: "Anda dapat menekan tombol konsultasi via WhatsApp. Tim kami akan merespons pesanan Anda dan memandu proses instalasi template ke domain Anda."
  },
  {
    question: "Apakah template dapat disesuaikan?",
    answer: "Tentu! Warna utama, teks, dan gambar dapat disesuaikan dengan identitas brand Anda (khusus untuk paket tertentu yang mencakup setup)."
  },
  {
    question: "Apakah tersedia live demo?",
    answer: "Ya, sebagian besar template memiliki fitur Live Demo yang dapat diakses langsung dari halaman katalog atau detail produk."
  },
  {
    question: "Bagaimana cara memilih template yang sesuai?",
    answer: "Pilih berdasarkan kategori bisnis Anda (Klinik, Salon, Spa). Jika ragu, silakan isi form di atas dan kami akan merekomendasikan yang terbaik."
  }
];

export function Contact() {
  const [searchParams] = useSearchParams();
  const prefilledTemplate = searchParams.get("template") || "";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    kebutuhan: "Beauty Clinic",
    template: prefilledTemplate,
    pesan: ""
  });

  const [openFaq, setOpenFaq] = useState(null);

  // SEO
  if (typeof document !== 'undefined') {
    document.title = `Konsultasi Website Beauty | ${SITE_CONFIG.name}`;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo, saya tertarik dengan template website Beauty.

Nama: ${formData.name}
Email: ${formData.email}
Kebutuhan: ${formData.kebutuhan}
Template: ${formData.template || "-"}

Pesan:
${formData.pesan}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-beauty-background font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        
        {/* Breadcrumb */}
        <div className="border-b border-beauty-border bg-beauty-surface">
          <div className="beauty-container py-3">
            <nav className="flex items-center text-xs md:text-sm font-medium text-beauty-muted">
              <Link to="/" className="hover:text-beauty-primary transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 mx-1 md:mx-2" />
              <span className="text-beauty-foreground">Contact</span>
            </nav>
          </div>
        </div>

        {/* Hero & Form Section */}
        <section className="pt-12 md:pt-16 pb-12 md:pb-16 relative overflow-hidden">
          {/* Subtle gradient bg */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-beauty-primary/5 to-transparent pointer-events-none" />
          
          <div className="beauty-container max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              
              {/* Left: Text & Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-beauty-foreground mb-4 leading-tight">
                  Let's Build Something Beautiful.
                </h1>
                <p className="text-sm md:text-base text-beauty-muted mb-8 leading-relaxed max-w-md">
                  Konsultasikan kebutuhan website kecantikan Anda. Kami siap membantu Anda memilih dan menyesuaikan template terbaik.
                </p>

                {/* The Form */}
                <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 md:p-8 rounded-2xl border border-beauty-border shadow-beauty-sm">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-beauty-foreground mb-1.5">Nama Lengkap</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-beauty-surface border border-beauty-border text-beauty-foreground text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-beauty-primary/20 transition-shadow"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-beauty-foreground mb-1.5">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-beauty-surface border border-beauty-border text-beauty-foreground text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-beauty-primary/20 transition-shadow"
                        placeholder="alamat@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="kebutuhan" className="block text-sm font-semibold text-beauty-foreground mb-1.5">Kebutuhan Bisnis</label>
                      <select 
                        id="kebutuhan" 
                        name="kebutuhan" 
                        value={formData.kebutuhan}
                        onChange={handleChange}
                        className="w-full bg-beauty-surface border border-beauty-border text-beauty-foreground text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-beauty-primary/20 transition-shadow"
                      >
                        <option value="Beauty Clinic">Beauty Clinic</option>
                        <option value="Salon">Salon</option>
                        <option value="Skincare">Skincare</option>
                        <option value="Dokter Kecantikan">Dokter Kecantikan</option>
                        <option value="Personal Beauty">Personal Beauty</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="template" className="block text-sm font-semibold text-beauty-foreground mb-1.5">Template yang Diminati <span className="text-beauty-muted font-normal">(Opsional)</span></label>
                      <input 
                        type="text" 
                        id="template" 
                        name="template" 
                        value={formData.template}
                        onChange={handleChange}
                        className="w-full bg-beauty-surface border border-beauty-border text-beauty-foreground text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-beauty-primary/20 transition-shadow"
                        placeholder="Misal: Aura Spa"
                      />
                    </div>
                    <div>
                      <label htmlFor="pesan" className="block text-sm font-semibold text-beauty-foreground mb-1.5">Pesan Tambahan</label>
                      <textarea 
                        id="pesan" 
                        name="pesan" 
                        rows="3"
                        required
                        value={formData.pesan}
                        onChange={handleChange}
                        className="w-full bg-beauty-surface border border-beauty-border text-beauty-foreground text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-beauty-primary/20 transition-shadow resize-none"
                        placeholder="Ceritakan sedikit tentang kebutuhan Anda..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="lg" className="w-full rounded-xl shadow-beauty-md flex items-center justify-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Konsultasi via WhatsApp
                    </Button>
                  </div>
                </form>
              </motion.div>

              {/* Right: Info & Visual */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col gap-6"
              >
                {/* Visual */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-beauty-border shadow-beauty-sm hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000" 
                    alt="Elegant beauty workspace"
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-beauty-primary" />
                    <span className="text-xs font-bold text-beauty-foreground">Premium Support</span>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="p-5 bg-white rounded-xl border border-beauty-border shadow-beauty-sm hover:border-beauty-primary/30 transition-colors flex flex-col group">
                    <div className="w-10 h-10 rounded-full bg-beauty-surface flex items-center justify-center mb-4 group-hover:bg-beauty-primary/5 transition-colors">
                      <Phone className="w-5 h-5 text-beauty-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-beauty-foreground mb-1">WhatsApp</h3>
                    <p className="text-xs text-beauty-muted">+{SITE_CONFIG.whatsappNumber}</p>
                  </a>
                  
                  <a href={`mailto:${SITE_CONFIG.email}`} className="p-5 bg-white rounded-xl border border-beauty-border shadow-beauty-sm hover:border-beauty-primary/30 transition-colors flex flex-col group">
                    <div className="w-10 h-10 rounded-full bg-beauty-surface flex items-center justify-center mb-4 group-hover:bg-beauty-primary/5 transition-colors">
                      <Mail className="w-5 h-5 text-beauty-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-beauty-foreground mb-1">Email</h3>
                    <p className="text-xs text-beauty-muted">{SITE_CONFIG.email}</p>
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Template Discovery Steps */}
        <section className="py-12 md:py-16 bg-beauty-surface border-y border-beauty-border">
          <div className="beauty-container max-w-5xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-10">
              Belum yakin memilih template?
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { num: "01", title: "Pilih kategori", desc: "Tentukan jenis bisnis kecantikan Anda." },
                { num: "02", title: "Lihat preview", desc: "Eksplorasi live demo yang tersedia." },
                { num: "03", title: "Konsultasikan", desc: "Hubungi kami jika ada modifikasi khusus." }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-5 rounded-xl border border-beauty-border shadow-beauty-sm text-center"
                >
                  <span className="text-3xl font-bold text-beauty-primary/20 block mb-2">{step.num}</span>
                  <h3 className="text-base font-bold text-beauty-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-beauty-muted">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mini FAQ */}
        <section className="py-12 md:py-16 bg-beauty-background">
          <div className="beauty-container max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-4">
                Pertanyaan Seputar Pemesanan
              </h2>
            </div>
            
            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="border border-beauty-border bg-white rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-beauty-primary/50"
                    >
                      <span className="font-semibold text-sm md:text-base text-beauty-foreground pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-beauty-muted shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-beauty-primary' : ''}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-5 pt-0 text-sm text-beauty-muted leading-relaxed border-t border-beauty-bg-tertiary">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final Conversion Section */}
        <section className="py-10 md:py-12 bg-beauty-surface border-t border-beauty-border">
          <div className="beauty-container text-center max-w-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-4"
            >
              Ready to Build Your Beauty Website?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base text-beauty-muted mb-8"
            >
              Temukan etalase digital yang sempurna untuk merepresentasikan keanggunan brand kecantikan Anda.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button as={Link} to="/templates" variant="outline" size="lg" className="rounded-full shadow-sm">
                Lihat Template
              </Button>
              <Button as="a" href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" className="rounded-full shadow-beauty-md flex items-center gap-2">
                WhatsApp Kami <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
