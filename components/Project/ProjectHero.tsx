"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectHeroProps {
	title: string;
	category: string;
	image: string;
	fontClass: string;
}

// Fixed the arrow function syntax: const Name = () =>
const ProjectHero = ({
	title,
	category,
	image,
	fontClass,
}: ProjectHeroProps) => {
	return (
		<section className="h-[100svh] relative overflow-hidden bg-[#5b3644]">
			{/* Background Image with Parallax-ready scale */}
			<motion.div
				initial={{ scale: 1.15, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
				className="relative w-full h-full">
				<Image src={image} alt={title} fill priority className="object-cover" />
				{/* Luxury Gradient: Increased the darkness at the bottom 
                   to ensure the scroll-down hint or title is readable.
                */}
				<div className="absolute inset-0 bg-gradient-to-b from-[#5b3644]/40 via-transparent to-[#5b3644]/90 z-10" />
			</motion.div>

			{/* Content Overlay */}
			<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
				<motion.span
					initial={{ opacity: 0, letterSpacing: "1.5em", y: 20 }}
					animate={{ opacity: 1, letterSpacing: "0.8em", y: 0 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className="text-[10px] md:text-[12px] uppercase text-[#bfa15f] font-bold mb-8 drop-shadow-lg">
					{category}
				</motion.span>

				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
					className={`${fontClass} text-6xl md:text-8xl lg:text-9xl text-[#fffaeb] drop-shadow-2xl max-w-5xl`}>
					{title}
				</motion.h1>

				{/* Animated Accent Line */}
				<motion.div
					initial={{ width: 0, opacity: 0 }}
					animate={{ width: "100px", opacity: 1 }}
					transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
					className="h-[1px] bg-[#bfa15f] mt-12"
				/>
			</div>

			{/* Subtle Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2, duration: 1 }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
				<span className="text-[8px] uppercase tracking-[0.4em] text-[#fffaeb]/40">
					Discover
				</span>
				<div className="w-[1px] h-12 bg-gradient-to-b from-[#bfa15f] to-transparent" />
			</motion.div>
		</section>
	);
};

export default ProjectHero;
