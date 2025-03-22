"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Activity, Shield } from "lucide-react";

interface TimelineItemProps {
  title: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  isLeft: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  period,
  description,
  icon,
  isLeft,
  index,
}) => {
  return (
    <div className="relative mb-16 last:mb-0 sm:mb-0 sm:pb-16 last:sm:pb-0">
      {/* Vertical line for desktop */}
      <div className="hidden sm:block absolute top-0 bottom-0 w-0.5 bg-[#fc8732] left-1/2 -ml-px"></div>

      <motion.div
        className={`flex flex-col sm:flex-row items-center ${
          isLeft ? "sm:flex-row-reverse" : ""
        } sm:gap-8`}
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Timeline content */}
        <div
          className={`sm:w-1/2 flex flex-col ${
            isLeft ? "sm:items-end" : "sm:items-start"
          } items-center mb-6 sm:mb-0 px-4`}
        >
          <div
            className={`flex items-center ${
              isLeft ? "sm:flex-row-reverse" : ""
            } mb-3`}
          >
            <div className="bg-[#151561] rounded-full p-2 flex-shrink-0 text-white mr-2">
              {icon}
            </div>
            <div
              className={`${
                isLeft ? "sm:mr-4 sm:text-right" : "sm:ml-4 sm:text-left"
              }`}
            >
              <h3 className={`text-xl font-bold text-[#151561]`}>{title}</h3>
              <p className={`text-sm font-medium text-[#7c4933]`}>{period}</p>
            </div>
          </div>
          <p className={`text-sm text-left font-medium text-gray-700 max-w-md`}>
            {description}
          </p>
        </div>

        {/* Timeline dot for mobile */}
        <div className="sm:hidden flex items-center justify-center w-8 h-8 mb-4">
          <div className="bg-[#fc8732] rounded-full w-3 h-3"></div>
        </div>

        {/* Timeline dot for desktop */}
        <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-10 h-10 bg-white rounded-full border-4 border-[#fc8732] z-10">
          <div className="bg-[#151561] rounded-full w-3 h-3"></div>
        </div>

        {/* Empty div to maintain layout without image */}
        <div className="sm:w-1/2"></div>
      </motion.div>
    </div>
  );
};

export default function TimelineSection() {
  const timelineItems = [
    {
      title: "Wellness Check-Ins",
      period: "August-September",
      description:
        "Comprehensive health screenings and initial mental wellness assessments for all students to establish baselines and identify areas needing attention.",
      icon: <Activity size={20} />,
    },
    {
      title: "Mind Matters",
      period: "October-November",
      description:
        "Focus on mental health awareness with workshops on stress management, emotional regulation, and coping strategies for academic pressure.",
      icon: <Award size={20} />,
    },
    {
      title: "Lifesaving Skills",
      period: "December-January",
      description:
        "Training in basic first aid, CPR, and emergency response procedures, empowering students with critical skills for health emergencies.",
      icon: <BookOpen size={20} />,
    },
    {
      title: "Nutrition & Fitness",
      period: "February-March",
      description:
        "Promoting healthy eating habits and physical activity through interactive workshops, cooking demonstrations, and fitness challenges.",
      icon: <Activity size={20} />,
    },
    {
      title: "Prevention & Awareness",
      period: "April-May",
      description:
        "Education on substance abuse prevention, personal hygiene, and comprehensive health awareness to prepare students for the summer break.",
      icon: <Shield size={20} />,
    },
  ];

  return (
    <div className="w-full px-4 py-16 md:py-24 bg-gradient-to-b from-[#FFF6E9] to-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#151561] mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Program Timeline
        </motion.h2>

        <div className="relative py-8">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              period={item.period}
              description={item.description}
              icon={item.icon}
              isLeft={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
