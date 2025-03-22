"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../../../components/ui/badge";
import HighlightCard from "./HighlightCard";
import ProgramDetail from "./ProgramDetail";
import { highlights, programDetails } from "./programHighlightsData";

function ProgramHighlights() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="w-full px-4 py-16 md:py-24 bg-gradient-to-b from-[#FFF6E9] to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4">Comprehensive Care</Badge>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-poppins font-bold text-[#151561] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            All in One
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our comprehensive school health program is designed to support
            students&apos; physical and mental wellbeing through regular assessments,
            education, and preventive care.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 auto-rows-fr"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {highlights.map((highlight, index) => (
            <div key={index} className="h-full">
              <HighlightCard
                title={highlight.title}
                Icon={highlight.icon}
                services={highlight.services}
                index={index}
                color={highlight.color}
                onClick={() => handleCardClick(index)}
                isActive={activeCard === index}
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <Badge className="mb-4">Program Benefits</Badge>
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-[#151561]">
              What&apos;s Included?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programDetails.map((detail, index) => (
              <ProgramDetail
                key={index}
                title={detail.title}
                description={detail.description}
                Icon={detail.icon}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProgramHighlights;
