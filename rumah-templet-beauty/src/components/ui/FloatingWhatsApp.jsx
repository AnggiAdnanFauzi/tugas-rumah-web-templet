import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const WA_NUMBER = "6287772577020";
  const WA_TEXT = encodeURIComponent("Halo! Saya tertarik untuk melakukan konsultasi mengenai layanan yang tersedia di Optibis");
  const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-black/80 text-white text-xs font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Hubungi Kami di WA
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-black/80"></div>
      </div>
    </a>
  );
}
