"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";
import BlurText from "./animations/BlurText";

const IntroductionSection = () => {
	return (
		<section className="flex min-h-screen w-full flex-col md:flex-row">
			{/* Left Side - Full Height Image (Hidden on small screens) */}
			<motion.div
				className="relative hidden md:block w-1/2 h-screen bg-cover bg-center"
				style={{ backgroundImage: `url('./images/intro-left.jpg')` }}
				initial={{ x: "-100%", opacity: 0 }}
				whileInView={{ x: "0%", opacity: 1 }}
				transition={{ duration: 1, ease: "easeOut" }}>
				{/* Overlay for opacity */}
				<div className="absolute inset-0 bg-zinc-900 bg-opacity-45" />
			</motion.div>

			{/* Right Side - Full Height Background (Full width on small screens) */}
			<div className="w-full md:w-1/2 h-screen flex flex-col items-start justify-center p-10 md:p-24 bg-[#5b3644] gap-6">
				{/* Animated Header Text */}
				<BlurText
					className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#fffaeb] text-left"
					text="Transform Your Space. Reflect Your Story."
					delay={150}
					animateBy="words"
					direction="top"
				/>

				{/* Animated Paragraph Text */}
				<ScrollReveal
					containerClassName="max-w-3xl mx-auto"
					textClassName="text-xl sm:text-2xl md:text-3xl font-light text-[#fffaeb] leading-relaxed"
					enableBlur={true}
					baseOpacity={0}
					baseRotation={5}
					blurStrength={5}>
					{`At SP Design Studio, we turn ordinary interiors into unforgettable experiences. 
Our team of passionate designers blends artistic vision with practical expertise. 
We’re here to design environments that reflect who you are and how you live.`}
				</ScrollReveal>
			</div>
		</section>
	);
};

export default IntroductionSection;
