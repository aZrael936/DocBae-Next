"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  // Base styles
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  // Variant styles
  let variantStyles = "";
  switch (variant) {
    case "default":
      variantStyles = "bg-[#151561]/10 text-[#151561] hover:bg-[#151561]/20";
      break;
    case "secondary":
      variantStyles = "bg-[#fc8732]/10 text-[#fc8732] hover:bg-[#fc8732]/20";
      break;
    case "destructive":
      variantStyles =
        "bg-destructive text-destructive-foreground hover:bg-destructive/80";
      break;
    case "outline":
      variantStyles = "border border-input text-foreground";
      break;
  }

  return (
    <div className={cn(baseStyles, variantStyles, className)} {...props} />
  );
}

export { Badge };
