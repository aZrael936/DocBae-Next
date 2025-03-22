"use client";
import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroCarousel from "./HeroCarousel";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-6 sm:mt-8 lg:mt-10 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8">
      <motion.div
        className="flex-1 lg:flex-[0.45] flex gap-4 sm:gap-5 md:gap-6 flex-col items-center md:items-start w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[#151561] text-center md:text-left font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-wide max-w-2xl">
          Expert Healthcare Just a Click Away
        </h1>
        <p className="text-[#7c4933] font-poppins text-center md:text-left font-medium text-base sm:text-lg leading-relaxed max-w-xl mb-2 sm:mb-4">
          Access comprehensive student health services with our team of
          dedicated professionals. We deliver personalized care, preventive
          support, and immediate medical assistance to ensure your wellbeing
          throughout your academic journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
          <a
            href="https://wa.me/919539313130?text=Hi%21%20I%20would%20like%20to%20enquire%20about%20your%20Services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="flex items-center text-[#151561] justify-center bg-[#fc8732] hover:bg-[#FF6B00] px-6 py-3 w-full sm:w-auto text-base font-semibold rounded-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#fc8732] focus:ring-opacity-50">
              Book a Consultation
            </button>
          </a>
          <a
            href="tel:919539313130"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="flex items-center text-[#FAFAFA] justify-center bg-[#151561] hover:bg-[#20208B] px-6 py-3 w-full sm:w-auto text-base font-semibold rounded-md transition-all duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#151561] focus:ring-opacity-50">
              Call Now
            </button>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 lg:flex-[0.55] shadow-[0px_0px_15px_0px_rgba(229,72,4,0.30)] rounded-lg overflow-hidden mb-8 sm:mb-10 lg:mb-0 w-full max-w-2xl lg:max-w-none mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="https://wa.me/9539313130?text=Hi%21%20I%20would%20like%20to%20enquire%20about%20your%20Services."
          target="_blank"
          rel="noopener noreferrer"
        >
          <HeroCarousel />
        </a>
      </motion.div>
    </div>
  );
}

export default HeroSection;
