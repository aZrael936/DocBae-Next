import React from 'react';
// import WhatsApp from '../assets/whatsapp.avif';
import Image from 'next/image';

function WhatsAppButton() {
  return (
    <div className="">
      <a
        href="https://wa.me/9539313130?text=Hi%21%20I%20would%20like%20to%20enquire%20about%20your%20Services."
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="animate-pulse fixed bottom-16 right-10 w-16 h-16 bg-green-500 rounded-full text-white p-2 shadow-lg flex items-center justify-center">
          <Image
            src="/whatsapp.avif"
            alt="WhatsApp"
            className="w-8 h-8"
            height={56}
            width={56}
          />
        </button>
      </a>
    </div>
  );
}

export default WhatsAppButton;
