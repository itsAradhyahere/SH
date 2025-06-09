

import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const whatsappNumber = "919619596561"; // full with country code
const emailAddress = "info@shuhari.co.in";
const francisMobile = "8879916936";

const WhatsAppEmailCTA = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-green-600 hover:bg-green-700 shadow-lg transition"
      >
        <FaWhatsapp size={24} />
        <span className="hidden md:inline font-semibold">Chat on WhatsApp</span>
      </a>

      <a
        href={`mailto:${emailAddress}`}
        aria-label="Send Email"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition"
      >
        <FaEnvelope size={24} />
        <span className="hidden md:inline font-semibold">Send Email</span>
      </a>

      <a
        href={`tel:+91${francisMobile}`}
        aria-label="Call Francis Dcunha"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-gray-800 hover:bg-gray-900 shadow-lg transition"
      >
        <FaPhone size={24} />
        <span className="hidden md:inline font-semibold">
          Call Francis Dcunha: {francisMobile}
        </span>
      </a>
    </div>
  );
};

export default WhatsAppEmailCTA;