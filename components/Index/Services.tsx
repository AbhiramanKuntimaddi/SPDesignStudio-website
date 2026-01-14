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
	return (
		<section className="min-h-screen bg-[#5b3644] py-24 px-6 lg:px-12 flex flex-col items-center">
			<div className="w-full max-w-screen-2xl">
				{/* Header */}
				<header className="flex flex-col items-center text-center mb-24">
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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr mb-32">
					{/* I. Residential */}
					<motion.div
						variants={cardVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={0}
						className="lg:col-span-2 group relative overflow-hidden rounded-sm bg-[#4a2b37] min-h-[450px]">
						<Image
							src={services[0].backgroundImage}
							alt={services[0].title}
							fill
							className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-[3s]"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#3a1d28] via-transparent to-transparent" />

						<div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
							<span className="text-[#bfa15f] text-[10px] tracking-[0.5em] uppercase font-bold mb-4 italic">
								I. Residential
							</span>

							<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
								<p className="text-[#fffaeb]/60 text-sm max-w-sm font-light leading-relaxed italic">
									{services[0].description}
								</p>

								<div className="text-[#fffaeb] text-right">
									<span className="text-6xl font-extralight italic leading-none block">
										<CountUp end={services[0].projects} enableScrollSpy />
									</span>
									<span className="text-[10px] uppercase tracking-widest opacity-40">
										Projects
									</span>
								</div>
							</div>
						</div>
					</motion.div>

					{/* II. Overall Sft Transformed */}
					<motion.div
						variants={cardVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={1}
						className="group relative overflow-hidden rounded-sm border border-[#bfa15f]/20 bg-[#fffaeb]/5 backdrop-blur-sm flex flex-col justify-between p-10 min-h-[350px]">
						<span className="text-[#bfa15f] text-[10px] tracking-[0.5em] uppercase font-bold text-center">
							II. Scale
						</span>

						<div className="text-[#fffaeb] text-center">
							<div className="text-7xl font-extralight italic mb-2 tracking-tighter leading-none">
								<CountUp end={450} suffix="k" enableScrollSpy />
							</div>
							<p className="text-[#fffaeb]/40 text-[9px] uppercase tracking-[0.4em] leading-loose">
								Sq. Ft. Transformed
							</p>
						</div>

						<div className="h-[1px] w-12 bg-[#bfa15f] mx-auto opacity-30" />
					</motion.div>

					{/* III. Commercial Spaces */}
					<motion.div
						variants={cardVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={2}
						className="group relative overflow-hidden rounded-sm bg-[#4a2b37] min-h-[450px]">
						<Image
							src={services[1].backgroundImage}
							alt={services[1].title}
							fill
							className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-[3s]"
						/>

						<div className="absolute inset-0 p-10 flex flex-col justify-between border border-[#fffaeb]/5 m-4">
							<span className="text-[#bfa15f] text-[10px] tracking-[0.5em] uppercase font-bold">
								III. Commercial
							</span>

							<div className="text-[#fffaeb]">
								<span className="text-5xl font-extralight italic block leading-none mb-2">
									20,000
								</span>
								<h3 className="text-xl font-light tracking-tight">
									Commercial Spaces (Sq. Ft.)
								</h3>
							</div>
						</div>
					</motion.div>

					{/* IV. TurnKey Solutions */}
					<motion.div
						variants={cardVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={3}
						className="group relative overflow-hidden rounded-sm bg-[#4a2b37] min-h-[350px]">
						<Image
							src={services[2].backgroundImage}
							alt={services[2].title}
							fill
							className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
						/>

						<div className="absolute inset-0 p-10 flex flex-col justify-between bg-black/10">
							<span className="text-[#bfa15f] text-[10px] tracking-[0.5em] uppercase font-bold">
								IV. TurnKey
							</span>

							<div className="text-[#fffaeb]">
								<span className="text-5xl font-extralight italic block mb-2">
									<CountUp end={services[2].projects} enableScrollSpy />
								</span>
								<h3 className="text-lg font-light tracking-wide">
									TurnKey Solutions
								</h3>
							</div>
						</div>
					</motion.div>

					{/* V. Design Consultation */}
					<motion.div
						variants={cardVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={4}
						className="group relative overflow-hidden rounded-sm bg-[#4a2b37] min-h-[350px]">
						<Image
							src={services[3].backgroundImage}
							alt={services[3].title}
							fill
							className="object-cover opacity-50"
						/>

						<div className="absolute inset-0 p-10 flex flex-col justify-between bg-[#3a1d28]/60">
							<span className="text-[#bfa15f] text-[10px] tracking-[0.5em] uppercase font-bold">
								V. Consultation
							</span>

							<div className="text-[#fffaeb]">
								<span className="text-5xl font-extralight italic block mb-2">
									<CountUp end={services[3].projects} enableScrollSpy />+
								</span>
								<h3 className="text-lg font-light tracking-wide">
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
