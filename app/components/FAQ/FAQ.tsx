"use client";
import React from "react";
import FAQblock from "./FaqBlock";
import { Helmet } from "react-helmet";

function FAQ() {
  const faqs = [
    {
      heading: "What is Palliative Care?",
      content:
        "Palliative care focuses on improving the quality of life for people living with chronic or life-limiting illnesses. It provides relief from pain and other symptoms, emotional support for patients and families, and respect for individual choices during challenging times.",
    },

    {
      heading: "Who can Benefit from Palliative Care?",
      content:
        "Anyone living with a serious illness, such as cancer, heart disease, lung disease, or neurological conditions, can benefit from palliative care. It can be started at any stage of the illness, regardless of prognosis.",
    },

    {
      heading: "Services Offered in Our Palliative Care Program",
      content:
        "Our comprehensive palliative care program includes:\n" +
        "- Home doctor visits for pain management and symptom control\n" +
        "- Expert consultations with palliative care specialists\n" +
        "- Online and WhatsApp consultations for ongoing support\n" +
        "- Discreet and compassionate care for mental health and well-being\n" +
        "- Coordination with home nursing and equipment rentals\n" +
        "- Bereavement support for families and caregivers",
    },

    {
      heading: "Medical Conditions Managed Through Home Doctor Visits",
      content:
        "Our home doctors can manage various conditions, including:\n" +
        "- Acute infections like fever, cold, or urinary tract infections\n" +
        "- Chronic illnesses like diabetes, hypertension, or arthritis\n" +
        "- Post-operative care and wound management\n" +
        "- Pain management and symptom control\n" +
        "- Medication reviews and adjustments",
    },

    {
      heading: "Scheduling Home Doctor Visits",
      content:
        "You can schedule visits as often as your condition requires, whether it's daily, weekly, or less frequently. We also offer same-day appointments for urgent needs.",
    },

    {
      heading: "Medical Concerns Addressed Through Online Consultations",
      content:
        "Online consultations are suitable for various concerns, including:\n" +
        "- Follow-up consultations for existing conditions\n" +
        "- Minor illnesses like allergies, skin rashes, or common colds\n" +
        "- Medication refills and prescription consultations\n" +
        "- Seeking general medical advice and guidance",
    },

    {
      heading: "Requirements for Online Consultations",
      content:
        "You only need a smartphone, tablet, or computer with a webcam and internet access. We ensure a secure and user-friendly platform for your consultation.",
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
