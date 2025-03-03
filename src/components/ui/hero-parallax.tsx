"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradientDemo } from "../button-gradient";
import { div } from "framer-motion/client";
import {AnimatedTooltipPreview} from "../team";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden bg-black antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20 pointer-events-none">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`first-${index}-${product.title}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 pointer-events-none">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={`second-${index}-${product.title}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 pointer-events-none">
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`third-${index}-${product.title}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
<>
<div className="absolute flex flex-col items-center justify-center top-20 right-12">
  <AnimatedTooltipPreview/>
  <p className="text-white italic">Faces of Paradise Productions</p>
</div>
    <div className="max-w-7xl text-white relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-10">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        One Step Solution<br />for Your Video Needs
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We create high-quality videos at the most affordable rates, delivering excellence at any location across India. From lyrics and music to thumbnails and editing, we handle everything for you.
      </p>
      <HoverBorderGradientDemo />
    </div>
    </>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 pointer-events-auto"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl pointer-events-auto" target="_blank" rel="noopener noreferrer">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white z-10">
        {product.title}
      </h2>
    </motion.div>
  );
};