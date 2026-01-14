"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
import { brandLogos, Brand } from "@/lib/brands";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const BrandSection = () => {
	const tripleLogos: Brand[] = [...brandLogos, ...brandLogos, ...brandLogos];

	return (
		<section className="w-full bg-[#5b3644] py-24 md:py-32 lg:py-40 px-6">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<header className="flex flex-col items-center mb-20 md:mb-28">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className={`${bdScript.className} text-[clamp(2.5rem,6vw,5rem)] text-[#fffaeb] leading-none text-center`}>
						Partnered Brands
					</motion.h2>
					<div className="h-[1px] w-24 bg-[#bfa15f]/30 mt-8 rounded-full" />
				</header>

				{/* Marquee */}
				<div className="relative w-full overflow-hidden">
					{/* Fade overlay on edges */}
					<div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#5b3644] via-transparent to-[#5b3644] z-10" />

					<motion.div
						className="flex items-center gap-16 md:gap-32 w-max px-12"
						animate={{ x: [0, "-33.33%"] }}
						transition={{
							duration: 40,
							ease: "linear",
							repeat: Infinity,
						}}>
						{tripleLogos.map((brand: Brand, index: number) => (
							<div
								key={`${brand.name}-${index}`}
								className="relative w-28 h-10 md:w-36 md:h-12 shrink-0 flex items-center justify-center group cursor-default">
								<Image
									src={brand.logo}
									alt={brand.name}
									fill
									className="
										object-contain
										grayscale
										contrast-[2]
										brightness-[1.5]
										sepia-[0.3]
										opacity-40
										transition-all
										duration-700 ease-in-out
									"
								/>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default BrandSection;
