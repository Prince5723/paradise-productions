
import { HeroParallaxDemo } from "@/components/hero-parallax";
import { div } from "framer-motion/client";
import Image from "next/image";
import { FeaturesSectionDemo } from "@/components/services";
import { AnimatedTestimonialsDemo } from "@/components/testimonials";
import {TextHoverEffectDemo} from "@/components/text-hover"
import {FloatingDockDemo} from "@/components/floating-links"
import {InfiniteMovingCardsDemo} from "@/components/moving-cards"

export default function Home() {
  return (
    <div className="w-full h-screen">
    <HeroParallaxDemo />
    <FeaturesSectionDemo/>
    <TextHoverEffectDemo/>
    <AnimatedTestimonialsDemo/>
    <InfiniteMovingCardsDemo/>
    <FloatingDockDemo/>

    </div>
  )
}
