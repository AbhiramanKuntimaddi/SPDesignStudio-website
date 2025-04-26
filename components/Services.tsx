"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";

const services = [
	{
		title: "Residential Spaces",
		description: "Curated living environments that evoke comfort and style.",
		projects: 120,
		backgroundImage: "/images/grid-top-left.jpg",
	},
	{
		title: "Commercial Spaces",
		description: "Workspaces where functionality meets refined aesthetics.",
		projects: 90,
		backgroundImage: "/images/grid-top-right.jpg",
	},
	{
		title: "End-to-End Solutions",
		description: "Seamless design journeys from concept to completion.",
		projects: 30,
		backgroundImage: "/images/grid-bottom-left.jpg",
	},
	{
		title: "Renovation Works",
		description: "Transforming spaces with expert craftsmanship and modern touches.",
		projects: 75,
		backgroundImage: "/images/grid-bottom-right.jpg",
	},
];

const Service: React.FC = () => {
	return (
		<section className="min-h-screen bg-[#c0afa7] p-6 flex flex-col justify-center items-center">
			{/* Left-Aligned Section Title */}
			<div className="w-full max-w-7xl mb-8">
				<h2 className="text-4xl font-bold text-[#5b3644] text-left">Our Services</h2>
			</div>

			{/* Grid Layout */}
			<div className="grid grid-cols-12 grid-rows-2 gap-6 w-full max-w-7xl h-[90vh]">
				{/* Top-Left Cell */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="col-span-7 row-span-1 relative rounded-md overflow-hidden flex flex-col justify-center"
				>
					{/* Background Image */}
					<Image
						src={services[0].backgroundImage}
						alt={services[0].title}
						fill
						className="object-cover"
					/>
					{/* Overlay */}
					<div className="absolute inset-0 bg-zinc-900 opacity-80"></div>
					{/* Content */}
					<div className="relative z-10 p-6 text-[#fffaeb]">
						<h3 className="text-3xl font-bold">{services[0].title}</h3>
						<p className="mt-2 text-lg">{services[0].description}</p>
						<div className="mt-4 text-4xl font-extrabold">
							<CountUp start={0} end={services[0].projects} duration={2} />+
						</div>
					</div>
				</motion.div>

				{/* Swatch Separator */}
				<div className="col-span-1 row-span-1 hidden md:flex flex-col gap-2 justify-center items-center">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="bg-[#fffaeb] h-full w-full rounded-md relative flex items-center justify-center"
					>
						<span className="absolute transform -rotate-90 text-[#5b3644] font-semibold text-sm">
							Elegance
						</span>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="bg-[#5b3644] h-full w-full rounded-md relative flex items-center justify-center"
					>
						<span className="absolute transform -rotate-90 text-[#fffaeb] font-semibold text-sm">
							Sophistication
						</span>
					</motion.div>
				</div>

				{/* Top-Right Cell */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="col-span-4 row-span-1 relative rounded-md overflow-hidden flex flex-col justify-center"
				>
					<Image
						src={services[1].backgroundImage}
						alt={services[1].title}
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-zinc-900 opacity-80"></div>
					<div className="relative z-10 p-6 text-[#fffaeb]">
						<h3 className="text-3xl font-bold">{services[1].title}</h3>
						<p className="mt-2 text-lg">{services[1].description}</p>
						<div className="mt-4 text-4xl font-extrabold">
							<CountUp start={0} end={services[1].projects} duration={2} />+
						</div>
					</div>
				</motion.div>

				{/* Bottom-Left Cell */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="col-span-5 row-span-1 relative rounded-md overflow-hidden flex flex-col justify-center"
				>
					<Image
						src={services[2].backgroundImage}
						alt={services[2].title}
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-zinc-900 opacity-80"></div>
					<div className="relative z-10 p-6 text-[#fffaeb]">
						<h3 className="text-3xl font-bold">{services[2].title}</h3>
						<p className="mt-2 text-lg">{services[2].description}</p>
						<div className="mt-4 text-4xl font-extrabold">
							<CountUp start={0} end={services[2].projects} duration={2} />+
						</div>
					</div>
				</motion.div>

				{/* Bottom-Right Cell */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="col-span-7 row-span-1 relative rounded-md overflow-hidden flex flex-col justify-center"
				>
					<Image
						src={services[3].backgroundImage}
						alt={services[3].title}
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-zinc-900 opacity-80"></div>
					<div className="relative z-10 p-6 text-[#fffaeb]">
						<h3 className="text-3xl font-bold">{services[3].title}</h3>
						<p className="mt-2 text-lg">{services[3].description}</p>
						<div className="mt-4 text-4xl font-extrabold">
							<CountUp start={0} end={services[3].projects} duration={2} />+
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Service;