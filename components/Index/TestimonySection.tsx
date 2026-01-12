"use client";

import { motion } from "motion/react";
import localFont from "next/font/local";
import { testimonials } from "@/lib/testimonals";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const TestimonySection = () => {
	return (
		<section className="w-full bg-[#5b3644] text-[#fffaeb] py-24 px-6 flex flex-col items-center overflow-hidden">
			<div className="max-w-6xl w-full">
				{/* Compressed Header */}
				<header className="text-center mb-16">
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.4 }}
						className="text-[9px] tracking-[1em] uppercase mb-3 block">
						Kind Words
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
						className={`${bdScript.className} text-[clamp(3rem,7vw,5.5rem)] leading-none text-[#bfa15f] text-5xl md:text-8xl`}>
						Testimonials
					</motion.h2>
				</header>

				{/* Typographic Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
					{testimonials.slice(0, 3).map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.8 }}
							viewport={{ once: true }}
							className="group flex flex-col items-center text-center h-full">
							{/* Top Section: Quote Mark and Text */}
							<div className="flex flex-col items-center flex-grow">
								<span
									className={`${bdScript.className} text-3xl text-[#bfa15f]/20 mb-3 block`}>
									&ldquo;
								</span>

								{/* Quote Text with a min-height or flex-grow to push the line down */}
								<p className="text-[14px] md:text-[15px] font-light leading-[1.8] tracking-wide opacity-70 group-hover:opacity-100 transition-opacity duration-500 italic mb-10 px-2">
									{item.testimonial}
								</p>
							</div>

							{/* The Aligned Credit - This will now always line up */}
							<div className="w-full pt-6 border-t border-[#fffaeb]/10">
								<h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#bfa15f] mb-1 transition-all group-hover:tracking-[0.5em]">
									{item.name}
								</h4>
								<p className="text-[8px] uppercase tracking-[0.2em] opacity-30 font-light">
									{item.title}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonySection;
