"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <>
        <h4 className="text-3xl lg:text-5xl mt-8 lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white dark:text-white">
            Men At Work
        </h4>

        <div className="h-[35rem] flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
            />
        </div>
        </>
    );
}

const testimonials = [
    {
        photo:
            "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741027475/paradise_work1_kv05ih.jpg",
    },
    {
        photo:
            "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741027546/paradise_works2_knzqep.jpg",
    },
    {
        photo:
            "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741027687/paradise_works3_az3zx0.jpg",
    },
    {
        photo:
            "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741027871/paradise_works4_mmnisn.jpg",
    },
    {
        photo:
            "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741027934/paradise_works5_qfj5db.jpg",
    },
    {
        photo:
            "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741027998/paradise_works6_bd7jjk.jpg",
    },
    {
        photo:
            "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741028057/paradise_works8_am3t5p.jpg",
    },
    {
        photo:
            "https://res.cloudinary.com/dyg1rahpk/image/upload/v1741028132/paradise_works7_pzjsms.jpg",
    },
];
