"use client";
import React, { useState } from "react";
import Image from "next/image";

interface FAQblockInterface {
  heading: string;
  content: string | React.ReactNode;
}

const FAQblock: React.FC<FAQblockInterface> = ({ heading, content }) => {
  const [isOpen, setIsOpen] = useState(true);

  const renderContent = () => {
    if (typeof content === "string") {
      const contentList = content.split("\n").map((item, index) => (
        <li key={index} className="list-disc ml-5">
          {item.replace("• ", "").replace("- ", "")}
        </li>
      ));
      return <ul>{contentList}</ul>;
    }
    return content;
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="items-start rounded-[8px] flex-col bg-white p-5 w-full gap-5 text-sm h-auto"
      onClick={toggleAccordion}
    >
      <div className="flex justify-between items-center w-full">
        <p className="font-bold">{heading}</p>
        <Image
          src="/arrow.svg"
          alt="Arrow"
          width={15}
          height={15}
          className={`transform transition-transform ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </div>
      {isOpen && <div className="mt-4">{renderContent()}</div>}
    </div>
  );
};

export default FAQblock;
