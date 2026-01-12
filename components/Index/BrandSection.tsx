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
	return (
		<section className="w-full bg-[#5b3644] py-32 px-6">
			<div className="max-w-6xl mx-auto flex flex-col items-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className={`${bdScript.className} text-[clamp(3.5rem,7vw,6rem)] text-[#fffaeb] leading-none mb-24 text-center`}>
					Partnered Brands
				</motion.h2>

				<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16 md:gap-x-24 md:gap-y-20">
					{brandLogos.map((brand: Brand, index: number) => (
						<motion.div
							key={brand.name}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: index * 0.05, duration: 1 }}
							viewport={{ once: true }}
							className="relative w-28 h-10 md:w-36 md:h-14 flex items-center justify-center group">
							<Image
								src={brand.logo}
								alt={brand.name}
								fill
								className="object-contain 
                  grayscale 
                  contrast-[2] 
                  brightness-[1.5] 
                  sepia-[0.3] 
                  opacity-40 
                  transition-all duration-700 ease-in-out"
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BrandSection;
