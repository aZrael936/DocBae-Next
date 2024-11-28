import type { Metadata } from "next";
import { Poppins, Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Doctor Bae | Comprehensive Home Healthcare Services: Home Doctor Visits, Online Consultation, and Medical Equipment Rental",
  description:
    "Expert and compassionate home healthcare solutions at your doorstep. Offering doctor house calls, online medical consultations, palliative care, post-op and post-pregnancy care, medical equipment rentals, medicine delivery, and more. Specialized elderly care and accessible health support through WhatsApp consultations. Serving your health needs with convenience and quality care",
  keywords: [
    "Online doctor consultation",
    "Home Doctor Thrissur",
    "Medical Camp",
    "pain and palliative care thrissur",
    "Best online doctor",
    "Prescription delivery",
    "home nursing services thrissur",
    "home care services in thrissur",
  ],
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
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TFKP7GPV');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFKP7GPV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
