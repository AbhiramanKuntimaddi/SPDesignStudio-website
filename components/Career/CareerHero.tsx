"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const CareerHero = () => {
	return (
		<section className="min-h-[50vh] flex flex-col justify-center bg-[#5b3644] text-[#fffaeb] px-6 lg:px-20 relative overflow-hidden">
			<div className="max-w-screen-2xl mx-auto w-full">
				{/* Hero Content */}
				<div className="flex flex-col items-center text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className={`${bdScript.className} text-[clamp(4rem,12vw,9rem)] leading-none mb-6`}>
						Join the Studio
					</motion.h1>

					<motion.div
						initial={{ width: 0 }}
						animate={{ width: 80 }}
						transition={{ duration: 1, delay: 0.4 }}
						className="h-[1px] bg-[#bfa15f] mb-12"
					/>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.6 }}
						className="max-w-2xl text-[#fffaeb] font-light leading-relaxed text-lg italic">
						We are always looking for creative minds who understand that luxury
						is found in the details. Explore our open positions below.
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default CareerHero;
