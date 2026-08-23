import { SITE_CONFIG } from "../config/site";

export const generateWaLink = (templateName = null) => {
  const number = SITE_CONFIG.whatsappNumber;
  let text = SITE_CONFIG.defaultConsultationMessage;

  if (templateName) {
    text = `Halo, saya tertarik dengan template *${templateName}*. Saya ingin mengetahui lebih lanjut mengenai template tersebut.`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};
