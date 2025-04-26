"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/testimonals";

const TestimonySection = () => {
	// Parallax effect for background image
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section
			className="relative min-h-screen w-full bg-cover bg-center px-6 py-24 flex items-center justify-center"
			style={{
				backgroundImage: "url('./images/top-right.jpg')",
				backgroundPositionY: `${scrollY * 0.5}px`,
			}}>
			{/* Background overlay */}
			<div className="absolute inset-0 bg-zinc-900 opacity-80 z-0"></div>

			<div className="relative max-w-7xl w-full flex flex-col gap-16 p-10 z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="text-center">
					<h2 className="text-4xl md:text-7xl text-[#fffaeb] leading-tight mb-4">
						What Our Clients Say
					</h2>
					<p className="text-lg md:text-2xl text-[#e6ded2] font-light max-w-xl mx-auto">
						A glimpse of our collaborative journeys and shared vision.
					</p>
				</motion.div>

				{/* Testimonials Grid */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.7 }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{testimonials.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								delay: 0.5 + index * 0.2,
								duration: 0.5,
							}}
							viewport={{ once: true }}
							className="flex flex-col items-center text-center h-full">
							{/* Fully Round Image */}
							<div className="w-20 h-20 rounded-full overflow-hidden">
								<Image
									src={item.imageUrl}
									alt={item.name}
									width={80}
									height={80}
									className="rounded-full object-cover w-full h-full"
								/>
							</div>

							{/* Text and Footer Aligned to Bottom */}
							<div className="flex flex-col justify-between flex-grow mt-10">
								<p className="text-base md:text-xl italic text-[#fffaeb] leading-relaxed mb-6">
									“{item.testimonial}”
								</p>
								<div>
									<p className="font-semibold text-[#fffaeb] text-lg">
										{item.name}
									</p>
									<p className="text-sm text-[#e6ded2]">{item.title}</p>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default TestimonySection;
