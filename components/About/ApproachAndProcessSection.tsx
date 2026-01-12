"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import { approachSteps } from "@/lib/approach";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ApproachAndProcessSection = () => {
	return (
		<section
			id="process"
			className="relative w-full bg-[#fcfbf7] text-[#1a1a1a] overflow-hidden">
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
						The Studio&apos;s Workflow
					</span>

					{/* Section Header */}
					<h2 className="text-4xl md:text-6xl text-[#5b3644] leading-[1.1] mt-[10px] md:mt-[5px] mb-8">
						Our Approach & Process: <br />
						<span className="italic opacity-60 text-black font-light text-3xl md:text-4xl block mt-2">
							From Vision to Reality
						</span>
					</h2>

					{/* The Grid of Cards */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12"
						variants={containerVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}>
						{approachSteps.map((step, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								className="group p-8 border border-neutral-200 bg-white hover:border-[#bfa15f]/40 transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-[#5b3644]/5">
								<span className="block text-4xl font-serif italic text-[#bfa15f] group-hover:opacity-40 transition-opacity duration-500 mb-6">
									{step.number}
								</span>

								<h4 className="text-xl font-medium tracking-tight text-[#5b3644] mb-4">
									{step.title}
								</h4>

								<p className="text-neutral-500 font-light text-sm leading-relaxed">
									{step.description}
								</p>

								<div className="mt-8 w-12 h-[1px] bg-[#bfa15f]/30 group-hover:w-full transition-all duration-700" />
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ApproachAndProcessSection;
