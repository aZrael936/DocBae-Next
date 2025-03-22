import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import SecondSection from "./components/Section2/Section2";
import ServiceSection from "./components/ServicesSection/ServicesSection";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import ProgramHighlights from "./components/ProgramHighlights/ProgramHighlights";
import TimelineSection from "./components/TimelineSection/TimelineSection";
import TestimonialsContainer from "./components/TestimonialCard/Testimonial";
import WhatsAppButton from "./components/WhatsappButton";
import { Poppins, Manrope, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500"],
});

export default function Home() {
  return (
    <main
      className={`${inter.variable} ${manrope.variable} ${poppins.variable} overflow-hidden`}
    >
      {/* Hero Section - Orange to transparent gradient */}
      <div className="flex flex-col p-4 items-center bg-gradient-to-b from-[rgb(255,174.25,113.69)] to-[rgba(255,255,255,1)] h-auto lg:px-20 md:px-8 sm:px-3 w-full relative sm:py-8 md:py-12">
        <Navbar />
        <HeroSection />
      </div>

      {/* School Health Program Section (Second Section) */}
      <SecondSection />

      {/* Program Highlights */}
      <ProgramHighlights />

      {/* Services Section */}
      <ServiceSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Full Services Image Section with gradient */}
      <div className="flex justify-center items-center w-full h-full bg-gradient-to-b from-white to-[#FFF6E9]">
        <Image
          className="relative w-11/12"
          alt="First page"
          src="/FullServices.avif"
          height={1040}
          width={653}
        />
      </div>

      {/* Testimonials Section */}
      <TestimonialsContainer />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
