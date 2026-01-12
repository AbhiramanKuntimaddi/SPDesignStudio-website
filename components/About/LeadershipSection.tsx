"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
import FounderImage from "@/public/images/spandana.jpg";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const LeadershipSection = () => {
	return (
		<section
			id="founder"
			className="relative w-full bg-[#fcfbf7] text-[#1a1a1a] overflow-hidden">
			<div className="max-w-7xl mx-auto grid md:grid-cols-12 items-center">
				{/* 1. Image Section */}
				<motion.div
					className="relative h-[550px] md:h-[750px] md:col-span-5 w-full order-1 md:order-2"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}>
					<Image
						src={FounderImage}
						alt="Spandana Puppala - Principal Designer"
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, 40vw"
						priority
					/>
				</motion.div>

				{/* 2. Text Content Section */}
				<motion.div
					className="md:col-span-7 flex flex-col order-2 md:order-1 px-6 md:px-12 py-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}>
					{/* Meet the Visionary - Large scale, no extra margins */}
					<span
						className={`${bdScript.className} text-6xl md:text-8xl text-[#bfa15f] mb-8 sm:mb-6`}>
						Meet the Visionary
					</span>

					<h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-[#5b3644]">
						Led by Spandana Puppala<br />
						<span className="text-[#5b3644]/60 italic font-light text-3xl mb:text-4xl">
							A Foundation of Passion
						</span>
					</h2>

					<div className="text-lg md:text-xl font-light text-neutral-600 leading-relaxed max-w-2xl mt-8">
						<p className="mb-6">
							SP Design Studio represents the intersection of intentional
							architecture and the quiet art of well-being. Guided by Spandana
							Puppala’s belief that our surroundings profoundly shape our
							internal state, the studio was born to bridge the gap between
							artistic soul and technical rigor.
						</p>
						<p>
							Each project is treated as a unique, personal narrative,
							meticulously crafted to ensure that beauty never exists at the
							expense of function.
						</p>
					</div>

					<div className="border-l-[1px] border-[#bfa15f] pl-8 py-2 mt-8">
						<blockquote className="text-2xl md:text-4xl font-serif italic text-[#5b3644] leading-tight">
							&ldquo;I design for how people{" "}
							<span className="text-[#bfa15f]">feel</span> in a space, not just
							how it looks.&rdquo;
						</blockquote>
						<cite
							className={`${bdScript.className} block mt-6 text-4xl md:text-6xl text-[#bfa15f] not-italic`}>
							— Spandana Puppala
						</cite>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default LeadershipSection;
