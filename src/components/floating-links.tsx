import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconBrandFacebook,
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
  IconBrandInstagram

} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
      href: "https://www.instagram.com/paradiseproduction23?igsh=MWRjYW5xdXBidmFzaA==",
    },
    {
      title: "Location",
      icon: (
        <IconMapPin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://maps.app.goo.gl/HDf7n7YZVXYn94NB8?g_st=com.google.maps.preview.copy",
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />

      ),
      href: "https://wa.me/6394546819",
    },
    
    {
      title: "workwithparadiseproduction23@gmail.com",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    }
  ];
  return (
    <div className="flex items-center justify-center h-[10rem] w-full">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
