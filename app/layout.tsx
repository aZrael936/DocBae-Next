import type { Metadata } from 'next';
import { Poppins, Manrope, Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title:
    'Doctor Bae | Comprehensive Home Healthcare Services: Home Doctor Visits, Online Consultation, and Medical Equipment Rental',
  description:
    'Expert and compassionate home healthcare solutions at your doorstep. Offering doctor house calls, online medical consultations, palliative care, post-op and post-pregnancy care, medical equipment rentals, medicine delivery, and more. Specialized elderly care and accessible health support through WhatsApp consultations. Serving your health needs with convenience and quality care',
  keywords: ['Home Doctor', 'Home Doctor Thrissur', 'Medical Camp'],
  robots: {
    index: true,
  },
  //   type: 'website',
  //   url: 'https://www.doctor-bae.com',
  //   title: 'Doctor Bae | Complete Home Doctor Services',
  //   description: 'Complete Medical Care, at your Doorstep',
  //   siteName: 'Doctor Bae',
  //   images: [
  //     {
  //       url: 'https://example.com/og.png',
  //     },
  //   ],
  // },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
