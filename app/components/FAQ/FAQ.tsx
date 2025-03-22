"use client";
import React from "react";
import FAQblock from "./FaqBlock";
import { Helmet } from "react-helmet";

interface FAQ {
  heading: string;
  content: string | React.ReactNode;
}

function FAQ() {
  const faqs: FAQ[] = [
    {
      heading:
        "How frequently will health checkups be conducted at our school?",
      content:
        "Doctor BAE provides comprehensive health checkups once per semester, with additional specialized screenings scheduled throughout the year according to our program timeline. We can customize the frequency based on your school's specific needs.",
    },
    {
      heading: "Is parental consent required for all health services?",
      content:
        "Yes, we require signed parental consent forms before providing any health services to students. For specialized services like drug testing (which is optional), we require separate consent forms and ensure confidential handling of all results.",
    },
    {
      heading:
        "How does Doctor BAE ensure student privacy during sensitive health discussions?",
      content:
        "We maintain strict confidentiality protocols for all student interactions. Mental health sessions and sensitive discussions take place in private settings, and all health records are securely stored in compliance with medical privacy regulations.",
    },
    {
      heading: "What qualifications do your healthcare professionals have?",
      content:
        "All Doctor BAE professionals are licensed and certified in their respective fields with specific experience working with children and adolescents. Our team includes pediatricians, dentists, optometrists, psychologists, and registered nurses with a minimum of 5 years of professional experience.",
    },
    {
      heading:
        "Can the program be customized to address specific health concerns at our school?",
      content:
        "Absolutely! While we offer a comprehensive standard program, we recognize each school community has unique needs. We'll work with your administration to customize our services, focusing on specific health concerns prevalent in your student population.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.heading,
      acceptedAnswer: {
        "@type": "Answer",
        text:
          typeof faq.content === "string"
            ? faq.content.replace(/[•-]\s/g, "")
            : "",
      },
    })),
  };

  return (
    <div
      id="FAQ"
      className="items-center bg-gradient-to-b from-[#FFF6E9] to-[#ffb277] flex flex-col gap-16 justify-center relative w-full px-[20px] md:px-[80px] py-[60px]"
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
