"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { type Project } from "@/lib/projects";

interface ProjectCardProps {
	project: Project;
	index: number;
	activeSort: "year" | "area";
}

export const ProjectCard = ({
	project,
	index,
	activeSort,
}: ProjectCardProps) => {
	// Offset every second card to create the editorial staggered look
	const isEven = index % 2 !== 0;

	return (
		<motion.div
			layout
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
			className={`relative ${isEven ? "md:mt-48" : ""}`}>
			<Link href={`/portfolio/${project.slug}`} className="group block">
				<div className="relative overflow-hidden aspect-[3/4] mb-8">
					<motion.div
						whileHover={{ scale: 1.03 }}
						transition={{ duration: 1.5 }}
						className="w-full h-full relative">
						<Image
							src={project.mainImage}
							alt={project.title}
							fill
							className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
						/>
					</motion.div>
				</div>
				<div className="space-y-4">
					<div className="flex justify-between items-end">
						<h3 className="text-4xl lg:text-5xl font-light italic leading-none">
							{project.title}
						</h3>
						<div className="text-right flex flex-col items-end">
							<span
								className={`text-[10px] font-bold tracking-[0.3em] mb-1 ${activeSort === "year" ? "text-[#bfa15f]" : "text-[#fffaeb]/30"}`}>
								{project.year}
							</span>
							<span
								className={`text-[9px] font-medium tracking-[0.1em] uppercase ${activeSort === "area" ? "text-[#bfa15f]" : "text-[#fffaeb]/30"}`}>
								{project.area} sqm
							</span>
						</div>
					</div>
					<div className="h-[1px] w-full bg-[#fffaeb]/5 group-hover:bg-[#bfa15f]/40 transition-colors duration-700" />
					<p className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-medium">
						{project.location} • {project.category}
					</p>
				</div>
			</Link>
		</motion.div>
	);
};
