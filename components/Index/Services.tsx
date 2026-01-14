"use client";

import { motion, Variants } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import localFont from "next/font/local";
import { services } from "@/lib/services";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const cardVariant: Variants = {
	hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			delay: i * 0.12,
			duration: 1.2,
			ease: [0.19, 1, 0.22, 1],
		},
	}),
};

const Service = () => {
	// Reverting to the Plum/Burgundy palette
	const standardCardClass =
		"group relative overflow-hidden rounded-sm bg-[#4a2b37] h-[213px] lg:h-[450px]";

	return (
		<section className="w-full bg-[#5b3644] py-20 md:py-32 lg:py-40 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center">
			<div className="w-full max-w-screen-2xl">
				{/* Header */}
				<header className="flex flex-col items-center text-center mb-24 lg:mb-32">
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.5 }}
						viewport={{ once: true }}
						className="text-sm md:text-lg tracking-[0.8em] uppercase text-[#fffaeb] mb-6">
						Disciplines
					</motion.span>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className={`${bdScript.className} text-[clamp(3.5rem,8vw,7.5rem)] text-[#fffaeb] leading-[0.8]`}>
						Tailored Design
					</motion.h2>
				</header>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-12">
					{/* I. Residential */}
					<motion.div
						variants={cardVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={0}
						className={`lg:col-span-2 ${standardCardClass}`}>
						<Image
							src={services[0].backgroundImage}
							alt="Residential"
							fill
							className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-[3s]"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#3a1d28] via-transparent to-transparent" />
						<div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
							<span className="text-[#bfa15f] text-[10px] tracking-[0.5em] uppercase font-bold mb-3 italic">
								I. Residential
							</span>

							<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
								<p className="text-[#fffaeb]/60 text-[10px] md:text-sm max-w-sm italic leading-relaxed line-clamp-2 md:line-clamp-none">
									{services[0].description}
								</p>

								<div className="text-[#fffaeb] text-right">
									<span className="text-5xl md:text-7xl font-extralight italic leading-none block">
										<CountUp end={services[0].projects} enableScrollSpy />
									</span>
								</div>
							</div>
						</div>
					</motion.div>

					{/* II. Scale */}
					<motion.div
						variants={cardVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={1}
						className="group relative overflow-hidden rounded-sm border border-[#bfa15f]/20 bg-[#fffaeb]/5 backdrop-blur-sm flex flex-col justify-between p-10 h-[213px] lg:h-[450px]">
						<span className="text-[#bfa15f] text-[10px] tracking-[0.5em] uppercase font-bold text-center">
							II. Scale
						</span>

						<div className="text-[#fffaeb] text-center">
							<div className="text-5xl md:text-8xl font-extralight italic mb-2 leading-none">
								<CountUp end={450} suffix="k" enableScrollSpy />
							</div>
							<p className="text-[#fffaeb]/40 text-[8px] md:text-[10px] uppercase tracking-[0.4em]">
								Sq. Ft. Transformed
							</p>
						</div>

						<div className="h-[1px] w-12 bg-[#bfa15f] mx-auto opacity-30" />
					</motion.div>

					{/* III & IV. Stacked Column */}
					<div className="flex flex-col gap-6 lg:gap-10 lg:h-[450px]">
						<motion.div
							variants={cardVariant}
							custom={2}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="h-[213px] lg:flex-1 group relative overflow-hidden rounded-sm bg-[#4a2b37]">
							<Image
								src={services[1].backgroundImage}
								alt="Commercial"
								fill
								className="object-cover opacity-40"
							/>
							<div className="absolute inset-0 p-8 flex flex-col justify-between border border-[#fffaeb]/5 m-2">
								<span className="text-[#bfa15f] text-[10px] tracking-[0.5em] uppercase font-bold">
									III. Commercial
								</span>
								<div className="text-[#fffaeb]">
									<span className="text-3xl lg:text-4xl font-extralight italic block">
										20,000+
									</span>
									<h3 className="text-[10px] uppercase tracking-widest opacity-60">
										Commercial Sft
									</h3>
								</div>
							</div>
						</motion.div>

						<motion.div
							variants={cardVariant}
							custom={3}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="h-[213px] lg:flex-1 group relative overflow-hidden rounded-sm bg-[#3a1d28] border border-[#fffaeb]/5">
							<div className="absolute inset-0 p-8 flex flex-col justify-between">
								<span className="text-[#bfa15f] text-[10px] tracking-[0.5em] uppercase font-bold">
									IV. Interior
								</span>
								<div className="text-[#fffaeb]">
									<span className="text-3xl lg:text-4xl font-extralight italic block">
										Styling
									</span>
									<h3 className="text-[10px] uppercase tracking-widest opacity-60">
										Curated Spaces
									</h3>
								</div>
							</div>
						</motion.div>
					</div>

					{/* V. TurnKey */}
					<motion.div
						variants={cardVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={4}
						className={standardCardClass}>
						<Image
							src={services[2].backgroundImage}
							alt="TurnKey"
							fill
							className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
						/>
						<div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between bg-black/10">
							<span className="text-[#bfa15f] text-[10px] tracking-[0.5em] uppercase font-bold">
								V. Execution
							</span>
							<div className="text-[#fffaeb]">
								<span className="text-5xl lg:text-6xl font-extralight italic block mb-2">
									<CountUp end={services[2].projects} enableScrollSpy />
								</span>
								<h3 className="text-xs md:text-lg font-light tracking-wide">
									TurnKey Solutions
								</h3>
							</div>
						</div>
					</motion.div>

					{/* VI. Design Consultation */}
					<motion.div
						variants={cardVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={5}
						className={standardCardClass}>
						<Image
							src={services[3].backgroundImage}
							alt="Consultation"
							fill
							className="object-cover opacity-50"
						/>
						<div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between bg-[#3a1d28]/60">
							<span className="text-[#bfa15f] text-[10px] tracking-[0.5em] uppercase font-bold">
								VI. Strategy
							</span>
							<div className="text-[#fffaeb]">
								<span className="text-5xl lg:text-6xl font-extralight italic block mb-2">
									<CountUp end={services[3].projects} enableScrollSpy />+
								</span>
								<h3 className="text-xs md:text-lg font-light tracking-wide">
									Design Consultation
								</h3>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Service;
