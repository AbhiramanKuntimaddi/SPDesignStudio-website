"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import ScrollReveal from "@/components/animations/ScrollReveal";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const IntroductionSection = () => {
	return (
		<section className="relative w-full bg-[#fcfbf7] overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
				{/* 1. Centered Signature Label */}
				<div className="w-full flex justify-center mb-8 md:mb-12">
					<motion.span
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className={`${bdScript.className} text-[#bfa15f] text-6xl md:text-8xl leading-none text-center relative z-10`}>
						The Philosophy
					</motion.span>
				</div>

				{/* 2. Content Grid - Perfectly aligned top baseline */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
					{/* Left Column - Heading */}
					<div className="lg:col-span-6">
						<div className="text-4xl md:text-6xl text-[#5b3644] leading-[1.1] tracking-tight">
							Design is the silent language <br />
							of{" "}
							<span className="font-light opacity-60">
								intentional living.
							</span>
						</div>
					</div>

					{/* Right Column - Pure Narrative Alignment */}
					<div className="lg:col-span-6">
						<ScrollReveal
							containerClassName="w-full"
							textClassName="text-xl md:text-2xl font-light text-[#5b3644]/90 leading-relaxed"
							enableBlur={true}>
							At SP Design Studio, we look beyond the surface. We craft
							environments that act as a mirror to your narrative, merging
							technical rigor with an intuitive understanding of how space
							influences the soul.
						</ScrollReveal>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IntroductionSection;
