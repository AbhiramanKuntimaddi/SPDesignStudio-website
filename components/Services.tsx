"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import { services } from "@/lib/services";

const Service: React.FC = () => {
	return (
		<section className="min-h-screen bg-[#c0afa7] py-20 px-4 flex flex-col items-center">
			<div className="w-full max-w-screen-xl">
				{/* Title */}
				<div className="mb-10">
					<h2 className="text-4xl font-semibold text-[#fffaeb] text-left">
						Tailored Design Expertise
					</h2>
					<p className="mt-4 text-sm lg:text-2xl text-[#fffaeb] font-light tracking-wide max-w-3xl">
						From elegant home interiors to modern commercial environments, our
						work blends artistry with function, crafted with precision and
						heart.
					</p>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-12 gap-6 md:h-[75vh] lg:h-[90vh]">
					{/* Top-Left */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
						viewport={{ once: true }}
						className="col-span-12 md:col-span-7 relative rounded-md overflow-hidden flex flex-col justify-center">
						<Image
							src={services[0].backgroundImage}
							alt={services[0].title}
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-zinc-900/70 backdrop-blur-sm" />
						<div className="relative z-10 p-6 text-[#fffaeb]">
							<h3 className="text-3xl font-semibold">{services[0].title}</h3>
							<p className="mt-2 text-lg font-light tracking-wide">
								{services[0].description}
							</p>
							<div className="mt-4 text-4xl font-extrabold">
								<CountUp start={0} end={services[0].projects} duration={2} />+
							</div>
						</div>
					</motion.div>

					{/* Swatch Column */}
					<div className="col-span-12 md:col-span-1 hidden md:flex flex-col gap-4 justify-center items-center">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="bg-[#fffaeb] h-full w-full rounded-md shadow-lg shadow-[#5b3644]/20 relative flex items-center justify-center">
							<span className="absolute transform -rotate-90 text-[#5b3644] font-semibold text-base md:text-lg lg:text-xl">
								Elegance
							</span>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="bg-[#5b3644] h-full w-full rounded-md shadow-lg shadow-[#000]/20 relative flex items-center justify-center">
							<span className="absolute transform -rotate-90 text-[#fffaeb] font-semibold text-base md:text-lg lg:text-xl">
								Sophistication
							</span>
						</motion.div>
					</div>

					{/* Top-Right */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
						viewport={{ once: true }}
						className="col-span-12 md:col-span-4 relative rounded-md overflow-hidden flex flex-col justify-center">
						<Image
							src={services[1].backgroundImage}
							alt={services[1].title}
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-zinc-900/70 backdrop-blur-sm" />
						<div className="relative z-10 p-6 text-[#fffaeb]">
							<h3 className="text-3xl font-semibold">{services[1].title}</h3>
							<p className="mt-2 text-lg font-light tracking-wide">
								{services[1].description}
							</p>
							<div className="mt-4 text-4xl font-extrabold">
								<CountUp start={0} end={services[1].projects} duration={2} />+
							</div>
						</div>
					</motion.div>

					{/* Bottom-Left */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
						viewport={{ once: true }}
						className="col-span-12 md:col-span-5 relative rounded-md overflow-hidden flex flex-col justify-center">
						<Image
							src={services[2].backgroundImage}
							alt={services[2].title}
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-zinc-900/70 backdrop-blur-sm" />
						<div className="relative z-10 p-6 text-[#fffaeb]">
							<h3 className="text-3xl font-semibold">{services[2].title}</h3>
							<p className="mt-2 text-lg font-light tracking-wide">
								{services[2].description}
							</p>
							<div className="mt-4 text-4xl font-extrabold">
								<CountUp start={0} end={services[2].projects} duration={2} />+
							</div>
						</div>
					</motion.div>

					{/* Bottom-Right */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
						viewport={{ once: true }}
						className="col-span-12 md:col-span-7 relative rounded-md overflow-hidden flex flex-col justify-center">
						<Image
							src={services[3].backgroundImage}
							alt={services[3].title}
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-zinc-900/70 backdrop-blur-sm" />
						<div className="relative z-10 p-6 text-[#fffaeb]">
							<h3 className="text-3xl font-semibold">{services[3].title}</h3>
							<p className="mt-2 text-lg font-light tracking-wide">
								{services[3].description}
							</p>
							<div className="mt-4 text-4xl font-extrabold">
								<CountUp start={0} end={services[3].projects} duration={2} />+
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Service;
