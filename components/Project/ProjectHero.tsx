"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectHeroProps {
    title: string;
    category: string;
    image: string;
    fontClass: string;
}

export default function ProjectHero({ title, category, image, fontClass }: ProjectHeroProps) {
    return (
        <section className="h-screen relative overflow-hidden bg-[#5b3644]">
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
                className="relative w-full h-full"
            >
                <Image src={image} alt={title} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#5b3644]/70 via-[#5b3644]/20 to-[#5b3644]/90 z-10" />
            </motion.div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[10px] md:text-[12px] uppercase tracking-[0.8em] text-[#bfa15f] font-bold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                >
                    {category}
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`${fontClass} text-6xl md:text-8xl lg:text-9xl text-[#fffaeb] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]`}
                >
                    {title}
                </motion.h1>
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "120px", opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.2 }}
                    className="h-[1px] bg-[#bfa15f] mt-12"
                />
            </div>
        </section>
    );
}