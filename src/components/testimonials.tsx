import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Working with Paradise Productions was an absolute pleasure! Their professionalism, dedication, and passion for quality cinema made the experience truly outstanding. Highly recommended!",
      name: "Pawan Singh",
      designation: "Power Star Pawan Singh",
      src: "/paradise_testimonial1.jpeg",
    },
    {
      quote:
        "Had an incredible experience working with Paradise Productions! Their commitment to excellence and smooth execution made the journey unforgettable. Truly top-notch!",
      name: "Kallu",
      designation: "Arvind Akela - Kallu",
      src: "/paradise_testimonial2.jpeg",
    },
    {
      quote:
        "Paradise Productions is a true gem in the world of cinema. Their dedication to creating unforgettable cinematic experiences is evident in every project they undertake. I highly recommend them for anyone looking to elevate their film production to new heights.",
      name: "Astha Singh",
      designation: "Astha Singh",
      src: "/paradise_testimonial3.jpeg",
    },
    {
      quote:
        "A team that understands cinema and values artists—Paradise Productions is simply the best! Looking forward to working together again!",
      name: "Khesari",
      designation: "Khesari Lal Yadav",
      src: "/paradise_testimonial4.jpeg",
    },
    {
      quote:
        "A production house that stands for quality and professionalism! Paradise Productions made the entire process smooth and enjoyable. Would love to collaborate again!",
      name: "Ankush",
      designation: "Ankush Raja",
      src: "/paradise_testimonial5.jpeg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
