import type { Metadata } from 'next';
import { Poppins, Manrope, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Doctor Bae | Complete Home Doctor Services',
  description:
    'DoctorBae Health Services is a leading provider of comprehensive healthcare solutions in Thrissur, Kerala. We offer a wide range of services, including home doctor services, online doctor consultations, onsite medical camps, school health programs, and customized health centers at institutions. Our team of experienced and qualified doctors and healthcare professionals is dedicated to providing you with the highest quality care possible',
  keywords: ['Home Doctor', 'Home Doctor Thrissur', 'Medical Camp'],
  robots: {
    index: true,
  },
  // openGraph: {
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
