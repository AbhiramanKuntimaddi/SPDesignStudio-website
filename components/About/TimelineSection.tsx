"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import { timelineData } from "@/lib/timeline";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const TimelineSection = () => {
	return (
		<section
			id="timeline"
			className="relative w-full bg-[#5b3644] text-[#fffaeb] overflow-hidden">
			<div className="max-w-7xl mx-auto grid md:grid-cols-12 items-start">
				<motion.div
					className="md:col-span-12 flex flex-col px-6 md:px-12 py-24 md:py-32"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}>
					{/* Section Label in BDScript */}
					<span
						className={`${bdScript.className} text-6xl md:text-8xl text-[#bfa15f] leading-none mb-8 sm:mb-6`}>
						Our Story
					</span>

					{/* Section Header with Serif Title */}
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-[-10px] md:mt-[-25px] border-b border-[#fffaeb]/10 pb-12">
						<h2 className="text-4xl md:text-6xl leading-tight italic">
							Studio Evolution
						</h2>
						<p className="max-w-xs text-[#fffaeb]/60 font-light text-sm md:text-base leading-relaxed">
							A decade of transforming visions into atmospheric realities and
							architectural legacies.
						</p>
					</div>

					{/* The Milestone Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-16 mt-24">
						{timelineData.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="relative group">
								{/* Large Year Watermark */}
								<span className="absolute -top-16 -left-4 text-8xl md:text-9xl font-serif italic text-[#fffaeb]/5 pointer-events-none group-hover:text-[#bfa15f]/10 transition-colors duration-700">
									{item.year.slice(-2)}
								</span>

								<div className="relative z-10 space-y-4">
									<div className="flex items-center gap-4">
										<span className="text-[#bfa15f] font-serif italic text-2xl">
											{item.year}
										</span>
										<div className="h-[1px] w-8 bg-[#bfa15f]/40" />
									</div>

									<h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-[#bfa15f] transition-colors duration-500">
										{item.title}
									</h3>

									<p className="text-[#fffaeb]/60 font-light leading-relaxed text-sm md:text-base">
										{item.description}
									</p>
								</div>

								{/* Decorative Corner Accent */}
								<div className="absolute -bottom-8 left-0 w-0 h-[1px] bg-[#bfa15f]/30 group-hover:w-full transition-all duration-1000 ease-in-out" />
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TimelineSection;
