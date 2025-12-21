"use client";

import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hello, I’d like to know more about Website Development",
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Text Bubble */}
      <span
        className="
          hidden sm:inline-block
          bg-white text-gray-900 text-sm font-medium
          px-4 py-2 rounded-full shadow-xl
          transform transition-all duration-500 ease-out
          translate-x-4 opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
        "
      >
        Message me now
      </span>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          group relative
          bg-green-500 text-white rounded-full p-4 shadow-2xl
          transition-all duration-300 ease-out
          hover:bg-green-600 hover:scale-105
          animate-whatsapp-float
        "
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
