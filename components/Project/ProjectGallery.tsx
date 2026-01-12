"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface GallerySectionProps {
    number: string;
    title: string;
    images: string[];
    isGrayscale?: boolean;
}

export default function ProjectGallery({ number, title, images, isGrayscale }: GallerySectionProps) {
    return (
        <div className="space-y-12">
            <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#bfa15f]">
                    {number} / {title}
                </span>
                <div className="h-[1px] flex-1 bg-[#5b3644]/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#5b3644]/5"
                    >
                        <Image
                            src={img}
                            alt={`${title} ${i}`}
                            fill
                            className={`object-cover transition-all duration-1000 ${isGrayscale ? "grayscale hover:grayscale-0" : ""}`}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}