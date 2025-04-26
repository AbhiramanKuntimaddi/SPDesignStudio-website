"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const services = [
	{
		title: "Residential Spaces",
		description: "Curated living environments that evoke comfort and style.",
		projects: 120,
	},
	{
		title: "Commercial Spaces",
		description: "Workspaces where functionality meets refined aesthetics.",
		projects: 90,
	},
	{
		title: "End-to-End Solutions",
		description: "Seamless design journeys from concept to completion.",
		projects: 30,
	},
	{
		title: "Renovation Works",
		description:
			"Transforming spaces with expert craftsmanship and modern touches.",
		projects: 75,
	},
];

const Service: React.FC = () => {
	return (
		<section className="min-h-screen bg-[#c0afa7] p-6 flex justify-center items-center">
			<div className="grid grid-cols-12 grid-rows-2 gap-6 w-full max-w-7xl h-[90vh]">
				{/* Top-Left Cell (60% Width) */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="col-span-7 row-span-1 p-6 bg-[#5b3644] text-[#fffaeb] rounded-md flex flex-col justify-center">
					<h3 className="text-3xl font-bold">{services[0].title}</h3>
					<p className="mt-2 text-lg">{services[0].description}</p>
					<div className="mt-4 text-4xl font-extrabold">
						<CountUp start={0} end={services[0].projects} duration={2} />+
					</div>
				</motion.div>

				{/* Color Swatches (5% Width) */}
				<div className="col-span-1 row-span-1 flex flex-col gap-2">
					{/* Top Swatch */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="bg-[#fffaeb] h-full rounded-md"></motion.div>
					{/* Bottom Swatch */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="bg-[#5b3644] h-full rounded-md"></motion.div>
				</div>

				{/* Top-Right Cell (35% Width) */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="col-span-4 row-span-1 p-6 bg-[#5b3644] text-[#fffaeb] rounded-md flex flex-col justify-center">
					<h3 className="text-3xl font-bold">{services[1].title}</h3>
					<p className="mt-2 text-lg">{services[1].description}</p>
					<div className="mt-4 text-4xl font-extrabold">
						<CountUp start={0} end={services[1].projects} duration={2} />+
					</div>
				</motion.div>

				{/* Bottom-Left Cell (40% Width) */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="col-span-5 row-span-1 p-6 bg-[#5b3644] text-[#fffaeb] rounded-md flex flex-col justify-center">
					<h3 className="text-3xl font-bold">{services[2].title}</h3>
					<p className="mt-2 text-lg">{services[2].description}</p>
					<div className="mt-4 text-4xl font-extrabold">
						<CountUp start={0} end={services[2].projects} duration={2} />+
					</div>
				</motion.div>

				{/* Bottom-Right Cell (60% Width) */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="col-span-7 row-span-1 p-6 bg-[#5b3644] text-[#fffaeb] rounded-md flex flex-col justify-center">
					<h3 className="text-3xl font-bold">{services[3].title}</h3>
					<p className="mt-2 text-lg">{services[3].description}</p>
					<div className="mt-4 text-4xl font-extrabold">
						<CountUp start={0} end={services[3].projects} duration={2} />+
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Service;
