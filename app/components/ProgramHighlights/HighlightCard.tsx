"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { themeColors } from "./programHighlightsData";

interface HighlightCardProps {
  title: string;
  Icon: LucideIcon;
  services: string[];
  index: number;
  color: string;
  onClick: () => void;
  isActive: boolean;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  Icon,
  services,
  index,
  color,
  onClick,
  isActive,
}) => {
  // Helper function to get dynamic color classes based on the color value
  const getColorClasses = (colorValue: string) => {
    return {
      bg: colorValue === themeColors.primary ? "bg-[#151561]" : "bg-[#fc8732]",
      bgLight:
        colorValue === themeColors.primary
          ? "bg-[#151561]/10"
          : "bg-[#fc8732]/10",
      text:
        colorValue === themeColors.primary
          ? "text-[#151561]"
          : "text-[#fc8732]",
      hover:
        colorValue === themeColors.primary
          ? "hover:bg-[#151561]/10"
          : "hover:bg-[#fc8732]/10",
    };
  };

  const colorClasses = getColorClasses(color);

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl transition-all duration-300 h-full",
        isActive ? "shadow-lg" : "shadow-md hover:shadow-lg"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div
        className={cn("absolute top-0 left-0 w-full h-1", colorClasses.bg)}
      />
      <Card className="border-none h-full flex flex-col justify-between">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  colorClasses.bgLight,
                  colorClasses.text
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              <CardTitle className="text-xl font-poppins text-[#151561]">
                {title}
              </CardTitle>
            </div>
            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isActive ? (
                <ChevronUp className="text-[#151561] w-5 h-5" />
              ) : (
                <ChevronDown className="text-[#151561] w-5 h-5" />
              )}
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="pb-4">
          <AnimatePresence>
            {isActive ? (
              <div className="h-full">
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 mt-3">
                    {services.map((service, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 text-sm font-poppins text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <CheckCircle2
                          className={cn("w-4 h-4 mt-0.5", colorClasses.text)}
                        />
                        <span>{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-2"
              >
                <CardDescription className="text-sm font-poppins text-gray-600">
                  {services[0]}
                  {services.length > 1 && "..."}
                </CardDescription>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
        <CardFooter className="pt-0 mt-auto">
          {!isActive && (
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start p-0",
                colorClasses.text,
                colorClasses.hover
              )}
              onClick={onClick}
            >
              Learn more
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default HighlightCard;
