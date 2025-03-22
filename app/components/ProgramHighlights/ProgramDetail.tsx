"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { themeColors } from "./programHighlightsData";

interface ProgramDetailProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({
  title,
  description,
  Icon,
  index,
}) => {
  return (
    <motion.div
      className="flex gap-4 p-4 rounded-lg bg-white shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <div className="bg-[#151561]/10 text-[#151561] p-3 rounded-full h-fit">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-poppins font-semibold text-[#151561] mb-1">
          {title}
        </h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProgramDetail;
