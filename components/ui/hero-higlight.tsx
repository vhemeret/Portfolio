"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Highlight = ({
  children,
  className,
  highlightWidth = "100%",
}: {
  children: React.ReactNode;
  className?: string;
  highlightWidth?: string | number;
}) => {
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <motion.span
        initial={{ width: "0%" }}
        animate={{ width: highlightWidth }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.5,
        }}
        className="absolute bottom-0 left-0 h-[60px] bg-gradient-to-r from-indigo-400 to-purple-500"
      />
    </span>
  );
};

export default Highlight;