"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className="mt-8">
      <HoverBorderGradient
      onClick={() => {window.location.href = "https://wa.me/6394546819"}}
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black relative z-50 pointer-events-auto bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Bring Your Ideas to Life</span>
      </HoverBorderGradient>
    </div>
  );
}
