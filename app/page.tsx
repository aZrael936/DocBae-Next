import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import SecondSection from './components/Section2/Section2';
import ServiceSection from './components/ServicesSection/ServicesSection';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import TestimonialsContainer from './components/TestimonialCard/Testimonial';
import WhatsAppButton from './components/WhatsappButton';
import { Poppins, Manrope, Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['500'],
});

export default function Home() {
  return (
    <main
      className={`${inter.variable} ${manrope.variable} ${poppins.variable}`}
    >
      <div className="flex flex-col p-4 items-center bg-gradient-to-b from-[rgb(255,174.25,113.69)] to-[rgba(255,115.27,0,0)] h-auto lg:px-20 md:px-8 sm:px-3 w-full relative sm:py-8 md:py-12">
        <Navbar />
        <HeroSection />
      </div>
      <SecondSection />
      <ServiceSection />
      <TestimonialsContainer />
      <div className="flex justify-center items-center w-full h-full bg-gradient-to-b from-[rgba(255,115.27,0,0)] to-[#FFB277]">
        <Image
          className="relative w-11/12"
          alt="First page"
          src="/FullServices.avif"
          height={1040}
          width={653}
        />
      </div>
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
