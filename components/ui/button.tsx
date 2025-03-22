"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

    // Variant styles
    let variantStyles = "";
    switch (variant) {
      case "default":
        variantStyles = "bg-[#151561] text-white hover:bg-[#151561]/90";
        break;
      case "destructive":
        variantStyles =
          "bg-destructive text-destructive-foreground hover:bg-destructive/90";
        break;
      case "outline":
        variantStyles =
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
        break;
      case "secondary":
        variantStyles = "bg-[#fc8732] text-[#151561] hover:bg-[#fc8732]/80";
        break;
      case "ghost":
        variantStyles = "hover:bg-accent hover:text-accent-foreground";
        break;
      case "link":
        variantStyles = "text-primary underline-offset-4 hover:underline";
        break;
    }

    // Size styles
    let sizeStyles = "";
    switch (size) {
      case "default":
        sizeStyles = "h-10 px-4 py-2";
        break;
      case "sm":
        sizeStyles = "h-9 rounded-md px-3";
        break;
      case "lg":
        sizeStyles = "h-11 rounded-md px-8";
        break;
      case "icon":
        sizeStyles = "h-10 w-10";
        break;
    }

    return (
      <button
        className={cn(baseStyles, variantStyles, sizeStyles, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
