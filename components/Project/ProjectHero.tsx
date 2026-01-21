"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectHeroProps {
	title: string;
	category: string;
	image: string;
	fontClass: string;
}

const ProjectHero = ({
	title,
	category,
	image,
	fontClass,
}: ProjectHeroProps) => {
	return (
		<section className="h-[100svh] relative overflow-hidden bg-[#5b3644]">
			{/* 1. Background Image Animation */}
			<motion.div
				initial={{ scale: 1.1, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
				className="relative w-full h-full">
				<Image
					src={image}
					alt={title}
					fill
					priority
					className="object-cover"
					sizes="100vw"
				/>

				{/* Overlays for readability */}
				<div className="absolute inset-0 bg-black/40 z-10" />
				<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
			</motion.div>

			{/* 2. Centered Content */}
			<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
				<motion.span
					initial={{ opacity: 0, letterSpacing: "1.5em", y: 20 }}
					animate={{ opacity: 1, letterSpacing: "0.8em", y: 0 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className="text-[10px] md:text-[14px] uppercase text-[#bfa15f] font-bold mb-10 drop-shadow-lg">
					{category}
				</motion.span>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
					className={`${fontClass} text-7xl md:text-[9rem] lg:text-[12rem] text-[#fffaeb] leading-[0.85] tracking-tight drop-shadow-2xl max-w-7xl`}>
					{title}
				</motion.h1>
			</div>

			{/* 3. Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 2.2, duration: 1 }}
				className="absolute bottom-10 right-10 z-20 flex items-center gap-6">
				<span className="text-[9px] uppercase tracking-[0.4em] text-[#fffaeb]/60 font-medium">
					Scroll to Explore
				</span>
				<div className="w-12 h-[1px] bg-gradient-to-r from-[#bfa15f] to-transparent" />
			</motion.div>
		</section>
	);
};

export default ProjectHero;
