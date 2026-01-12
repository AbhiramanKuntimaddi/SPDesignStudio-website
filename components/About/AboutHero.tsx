"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
import HeroSectionImage from "@/public/images/about-hero.jpg";

const bdScript = localFont({
  src: "../../public/fonts/BDSans/BDScript-Regular.woff",
  style: "italic",
});

const AboutHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroSectionImage}
          alt="Luxury Interior Design"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/55 z-10" />
      </div>

      <motion.div 
        className="relative z-20 max-w-4xl mx-auto px-6 text-center text-[#fff7ec]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Applied the BDScript font here */}
        <motion.span 
          className={`${bdScript.className} mb-8 text-6xl sm:text-9xl opacity-100`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About The Studio
        </motion.span>

        <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-medium leading-[1.1] tracking-tight mb-8 mt-10 text-shadow-lg/30">
          Crafting Spaces with Soul and Story.
        </h1>

        <motion.p 
          className="max-w-2xl mx-auto text-lg sm:text-xl text-[#fff7ec] mt-10 text-shadow-lg/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We believe the most exceptional interiors are born from a thoughtful dialogue. 
          Our mission is to go beyond trends, designing environments that are deeply functional 
          reflections of the people who inhabit them.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutHero;