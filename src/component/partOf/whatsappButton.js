import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./styleWa.css";

const WhatsAppButton = () => {
  const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp tujuan
  const message = "Halo, saya tertarik dengan produk Anda!"; // Pesan default
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppButton;
