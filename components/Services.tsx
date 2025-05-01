"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import { services } from "@/lib/services";

// Animation variant
const fadeInUpVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.3,
			duration: 0.8,
			type: "spring",
			stiffness: 200,
		},
	}),
};

const Service = () => {
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
					{/* Card 1: Left large */}
					<motion.div
						variants={fadeInUpVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={0}
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

					{/* Swatch Column with Animation */}
					<div className="col-span-12 md:col-span-1 hidden md:flex flex-col gap-4 justify-center items-center">
						{[1, 0].map((i) => {
							const swatch = [
								{ label: "Elegance", bg: "#fffaeb", text: "#5b3644" },
								{ label: "Sophistication", bg: "#5b3644", text: "#fffaeb" },
							][i];

							return (
								<motion.div
									key={i}
									variants={fadeInUpVariant}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									custom={i === 1 ? 1 : 2} // bottom swatch animates first
									className="h-full w-full rounded-md relative flex items-center justify-center"
									style={{ backgroundColor: swatch.bg }}>
									<span
										className="absolute transform -rotate-90 font-semibold text-base md:text-lg lg:text-xl"
										style={{ color: swatch.text }}>
										{swatch.label}
									</span>
								</motion.div>
							);
						})}
					</div>

					{/* Card 2: Top-right */}
					<motion.div
						variants={fadeInUpVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={3}
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

					{/* Card 3: Bottom-left */}
					<motion.div
						variants={fadeInUpVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={4}
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

					{/* Card 4: Bottom-right */}
					<motion.div
						variants={fadeInUpVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={5}
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
