"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Prince Priyadarshi",
    designation: "Founder - Paradise Productions",
    image:
      "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741021039/profile1_hn5gyd.jpg",
  },
  {
    id: 2,
    name: "Kallu",
    designation: "Singer",
    image:
      "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741021256/paradise_profile2_zt9v8x.jpg",
  },
  {
    id: 3,
    name: "PowerStar - Pawan Singh",
    designation: "Actor",
    image:
      "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741021359/paradise_profile3_yadkvj.jpg",
  },
  {
    id: 4,
    name: "Priyanshu Singh",
    designation: "Music Director",
    image:
      "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741021468/paradise_profile4_fzffqm.jpg",
  },
  {
    id: 5,
    name: "Khesari Lal Yadav",
    designation: "Actor",
    image:
      "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741021626/paradise_profile5_jqgrkj.jpg",
  },
  {
    id: 6,
    name: "Ankush Raja",
    designation: "Actor",
    image:
      "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741021695/paradise_profile6_mbtk2k.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-4 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
