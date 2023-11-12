import { React, useState } from 'react';
import FAQblock from './FaqBlock';

function FAQ() {
  return (
    <div
      id="FAQ"
      className="items-center bg-[#ffb277] flex flex-col gap-16 justify-center relative w-full px-[20px] md:px-[80px] py-[60px]"
    >
      <div className="text-white font-poppins font-bold text-4xl md:text-6xl leading-[40px] md:leading-[80px] relative text-center width-[fit-content]">
        Frequently Asked
        <br />
        Questions
      </div>
      <div className="flex flex-col justify-center items-center gap-5 w-[80%]">
        <FAQblock
          heading="When should I use Home doctor Service?"
          content="Other than emergency cases, you can use home doctor service."
        />
        <FAQblock
          heading="Does DOCTOR BAE only benefits for geriatric patients?"
          content="No, DOCTOR BAE provide service to all age group including both children and old-age"
        />
        <FAQblock
          heading="Will I get Injections, IV Drip & Medicines when I call home doctor service ?"
          content="Yes, We will provide you with complete prescription and guided refferals"
        />
        <FAQblock
          heading="Does Doctor come for follow up?"
          content="Yes, Just a call away."
        />
      </div>
    </div>
  );
}

export default FAQ;
