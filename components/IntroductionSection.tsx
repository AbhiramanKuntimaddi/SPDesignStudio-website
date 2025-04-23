"use client";

import { motion } from "framer-motion";

const IntroductionSection = () => {
	return (
		<section className="flex min-h-screen w-full flex-col md:flex-row">
			{/* Left Side - Full Height Image (Hidden on small screens) */}
			<motion.div
				className="hidden md:block w-1/2 h-screen bg-cover bg-center"
				style={{ backgroundImage: `url('./images/top-right.jpg')` }}
				initial={{ x: "-100%", opacity: 0 }}
				whileInView={{ x: "0%", opacity: 1 }}
				transition={{ duration: 1, ease: "easeOut" }}
			/>

			{/* Right Side - Full Height Background (Full width on small screens) */}
			<div className="w-full md:w-1/2 h-screen flex items-center justify-center p-10 bg-[#fffaeb]">
				{/* Animated Text */}
				<motion.p
					className="text-3xl font-light text-gray-900 leading-relaxed max-w-lg"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}>
					Discover the art of transforming ordinary spaces into extraordinary
					masterpieces with SP Design Studio. Our team of talented interior
					designers are dedicated to bringing your vision to life, creating
					functional and stylish interiors that reflect your unique personality
					and lifestyle. Let us redefine the way you experience your home or
					office.
				</motion.p>
			</div>
		</section>
	);
};

export default IntroductionSection;
