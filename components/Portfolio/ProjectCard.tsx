"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import { type SanityProject } from "@/lib/queries";

interface ProjectCardProps {
	project: SanityProject;
	index: number;
	activeSort: "year" | "area";
}

export const ProjectCard = ({
	project,
	index,
	activeSort,
}: ProjectCardProps) => {
	const isEven = index % 2 !== 0;

	return (
		<motion.div
			layout
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.98 }}
			transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
			className={`relative ${isEven ? "md:mt-24" : ""}`}>
			<Link href={`/portfolio/${project.slug}`} className="group block">
				{/* Image Container */}
				<div className="relative overflow-hidden aspect-[3/4] mb-6">
					<div className="absolute top-5 left-5 z-20 overflow-hidden">
						<motion.div
							initial={{ x: "-100%" }}
							whileInView={{ x: 0 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							className="bg-[#bfa15f] text-[#5b3644] text-[8px] font-bold uppercase tracking-[0.2em] px-2.5 py-1">
							{project.category}
						</motion.div>
					</div>

					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 1.2 }}
						className="w-full h-full relative">
						<Image
							src={urlFor(project.mainImage).width(800).height(1067).url()}
							alt={project.title}
							fill
							className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.2s]"
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-40" />
					</motion.div>
				</div>

				<div className="space-y-4">
					<div className="flex justify-between items-baseline">
						<h3 className="text-3xl lg:text-4xl font-light italic leading-none">
							{project.title}
						</h3>

						<div className="flex items-center gap-3 text-[10px] font-medium tracking-widest uppercase">
							<span
								className={
									activeSort === "year" ? "text-[#bfa15f]" : "text-[#fffaeb]/40"
								}>
								{project.year}
							</span>
							<span className="text-[#bfa15f]/20">|</span>
							<span
								className={
									activeSort === "area" ? "text-[#bfa15f]" : "text-[#fffaeb]/40"
								}>
								{project.area}{" "}
								<span className="text-[8px] lowercase opacity-60">sqm</span>
							</span>
						</div>
					</div>

					{/* Interactive Animated Separator */}
					<div className="h-[1px] w-full bg-[#fffaeb]/10 relative">
						<motion.div className="absolute top-0 left-0 h-full bg-[#bfa15f] w-0 group-hover:w-full transition-all duration-700" />
					</div>

					<div className="flex items-center justify-between text-[9px] uppercase tracking-[0.3em] font-medium">
						<p className="text-[#fffaeb]/30">{project.location}</p>

						<div className="flex items-center gap-4">
							{/* NEW: Project Status Indicator */}
							{project.status && (
								<div className="flex items-center gap-1.5 border border-[#bfa15f]/30 px-2 py-0.5 rounded-full">
									<span
										className={`w-1 h-1 rounded-full ${project.status === "completed" ? "bg-[#bfa15f]" : "bg-[#fffaeb]/40 animate-pulse"}`}
									/>
									<span className="text-[#fffaeb]/50 text-[7px] tracking-widest">
										{project.status}
									</span>
								</div>
							)}

							<div className="flex items-center gap-3">
								<div className="w-1 h-1 rounded-full bg-[#bfa15f]/50" />
								<span className="text-[#bfa15f] font-bold opacity-90">
									{project.category}
								</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectCard;
