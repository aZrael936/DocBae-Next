import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroCarousel from "./HeroCarousel";

function HeroSection() {
  return (
    <div className="flex flex-col-reverse lg:flex-row  items-center justify-between mt-10 gap-12">
      <div className="flex-1 lg:flex-[0.4] flex gap-5 md:gap-6 flex-col items-center md:items-start">
        <p className="text-[#151561] text-center md:text-left font-poppins font-[700] text-[32px] leading-[41.6px] tracking-wider">
          Experience compassionate palliative care at home with Doctor Bae,
          Thrissur&apos;s leading pain and palliative care service
        </p>
        <p className="text-[#7c4933] font-poppins text-center md:text-left font-medium text-[12px] md:text-base leading-[22.5px]">
          Book convenient home doctor visits, online consultations, and discreet
          care for chronic illness and end-of-life support.
        </p>
        <a
          href="https://wa.me/9539313130?text=Hi%21%20I%20would%20like%20to%20enquire%20about%20your%20Services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-[80%] md:w-[40%]"
        >
          <button className="flex items-center text-[#151561] justify-center bg-[#fc8732] hover:bg-[#FF6B00] h-[45px] w-full text-[15px] font-[600] rounded-md">
            <b>Book Now</b>
          </button>
        </a>
      </div>

      <div className="flex-1 lg:flex-[0.6] shadow-[0px_0px_15.08513px_0px_rgba(229,72,4,0.30)] rounded-lg overflow-hidden">
        <a
          href="https://wa.me/9539313130?text=Hi%21%20I%20would%20like%20to%20enquire%20about%20your%20Services."
          target="_blank"
          rel="noopener noreferrer"
        >
          <HeroCarousel />
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
