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
				<div className="absolute inset-0 bg-zinc-900 bg-opacity-45" />
			</motion.div>

			{/* Right Side - Vertically Centered, Left Justified Text */}
			<div className="w-full md:w-1/2 h-screen flex items-center bg-[#5b3644]">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="flex flex-col items-start text-left gap-8 w-full max-w-5xl mx-auto px-6 md:px-20">
					{/* Animated Header Text */}
					<BlurText
						className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#fffaeb] text-left"
						text="Transform Your Space. Reflect Your Story!!!"
						delay={150}
						animateBy="words"
						direction="top"
					/>

					{/* Animated Paragraph Text */}
					<ScrollReveal
						containerClassName="w-full"
						textClassName="text-sm sm:text-base md:text-xl lg:text-2xl font-light text-[#fffaeb] text-left"
						enableBlur={true}
						baseOpacity={0}
						baseRotation={5}
						blurStrength={10}>
						{`At SP Design Studio, we believe interior design is more than aesthetics, it's about crafting meaningful spaces that elevate the way you live, work, and feel.
Our team of dedicated, experienced designers combines creative insight with technical precision to transform everyday environments into timeless, functional works of art.
Whether you're envisioning a serene home retreat or a refined commercial space, we collaborate closely to ensure every detail mirrors your identity, values, and lifestyle.`}
					</ScrollReveal>
				</motion.div>
			</div>
		</section>
	);
};

export default IntroductionSection;
