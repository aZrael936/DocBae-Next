'use client';
import React from 'react';
import FAQblock from './FaqBlock';
import { Helmet } from 'react-helmet';

function FAQ() {
  const faqs = [
    {
      heading: 'What Services Do Home Doctors from DOCTOR BAE Offer?',
      content:
        '• In-home medical consultations\n' +
        '• Routine health check-ups\n' +
        '• Injections, IV drips, and medicine delivery\n' +
        '• Post-operative care and follow-up\n' +
        '• Palliative care services',
    },
    {
      heading:
        'Can I Get Immediate Medical Care at Home in Non-Emergency Situations?',
      content:
        '• Yes, for urgent but non-emergency care\n' +
        '• Yes, for elderly care and assistance\n' +
        '• Yes, for blood investigations at home\n' +
        '• Yes, for post-pregnancy care and support\n' +
        '• Yes, for administering prescribed injections and treatments',
    },
    {
      heading:
        'How Does DOCTOR BAE Ensure Continuity of Care Through Its Home Doctor Services?',
      content:
        '• Through scheduled follow-up visits\n' +
        '• By providing post-op and post-pregnancy care\n' +
        '• With accessible online and WhatsApp consultations\n' +
        '• By organizing medical camps for ongoing community support\n' +
        '• Through rental of medical equipment for home care',
    },
    {
      heading: 'What Are the Benefits of Choosing DOCTOR BAE for Elderly Care?',
      content:
        '• Personalized home care plans\n' +
        '• Specialized geriatric medical consultations\n' +
        '• Assistance with daily medical routines\n' +
        '• Coordination of medicine deliveries\n' +
        '• Support with mobility and rehabilitation equipment',
    },
    {
      heading: 'How Does DOCTOR BAE Integrate Technology with Home Healthcare?',
      content:
        '• By offering telemedicine and online doctor consultations\n' +
        '• Through a user-friendly telemedicine app for easy access\n' +
        '• Via WhatsApp for instant medical advice and prescription refills\n' +
        '• Through electronic medical records for seamless care coordination\n' +
        '• By providing the latest medical equipment for rent',
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.heading,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.content,
      },
    })),
  };

  return (
    <div
      id="FAQ"
      className="items-center bg-[#ffb277] flex flex-col gap-16 justify-center relative w-full px-[20px] md:px-[80px] py-[60px]"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="text-white font-poppins font-bold text-4xl md:text-6xl leading-[40px] md:leading-[80px] relative text-center width-[fit-content]">
        Frequently Asked
        <br />
        Questions
      </div>
      <div className="flex flex-col justify-center items-center gap-5 w-[80%]">
        {faqs.map((faq, index) => (
          <FAQblock key={index} heading={faq.heading} content={faq.content} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
