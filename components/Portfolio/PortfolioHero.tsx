"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";

const bdScript = localFont({
    src: "../../public/fonts/BDSans/BDScript-Regular.woff",
    style: "italic",
});

const PortfolioHero = () => {
	return (
		<section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative overflow-hidden bg-[#5b3644]">
			{/* Background Ghost Text */}
			<div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
				<motion.span
					initial={{ scale: 1.2, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 2, ease: "easeOut" }}
					className="text-[25vw] font-bold text-[#fffaeb] select-none uppercase tracking-tighter">
					Portfolio
				</motion.span>
			</div>

			<div className="relative z-10 text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="flex flex-col items-center">

					<h1
						className={`${bdScript.className} text-6xl md:text-9xl text-[#fffaeb] leading-none mb-8`}>
						Coming Soon
					</h1>

					<motion.div
						initial={{ width: 0 }}
						animate={{ width: 100 }}
						transition={{ duration: 1.2, delay: 0.5 }}
						className="h-[1px] bg-[#bfa15f] mb-10"
					/>

					<p className="max-w-md text-[#fffaeb]/60 font-light leading-relaxed text-sm md:text-base italic px-4">
						We are currently assembling our archive of curated spaces. A digital
						window into our studio&apos;s narrative is arriving shortly.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default PortfolioHero;
