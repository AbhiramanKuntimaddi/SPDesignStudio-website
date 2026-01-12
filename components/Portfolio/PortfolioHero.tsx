"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { projects } from "@/lib/projects";
import { FilterBar } from "./FilterBar";
import { ProjectCard } from "./ProjectCard";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

export const PortfolioHero = () => {
	const [activeCategory, setActiveCategory] = useState("All Typologies");
	const [activeYear, setActiveYear] = useState("All Years");
	const [sortField, setSortField] = useState<"year" | "area">("year");
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

	const categories = useMemo(
		() => [
			"All Typologies",
			...Array.from(new Set(projects.map((p) => p.category))),
		],
		[]
	);
	const years = useMemo(
		() =>
			["All Years", ...Array.from(new Set(projects.map((p) => p.year)))].sort(
				(a, b) => b.localeCompare(a)
			),
		[]
	);

	const filteredAndSorted = useMemo(() => {
		return projects
			.filter(
				(p) =>
					(activeCategory === "All Typologies" ||
						p.category === activeCategory) &&
					(activeYear === "All Years" || p.year === activeYear)
			)
			.sort((a, b) => {
				const valA =
					sortField === "year" ? parseInt(a.year || "0") : Number(a.area || 0);
				const valB =
					sortField === "year" ? parseInt(b.year || "0") : Number(b.area || 0);
				return sortOrder === "desc" ? valB - valA : valA - valB;
			});
	}, [activeCategory, activeYear, sortField, sortOrder]);

	return (
		<section className="pt-48 pb-40 px-6 md:px-12 lg:px-24 bg-[#5b3644] min-h-screen relative overflow-hidden text-[#fffaeb]">
			{/* BACKGROUND "WORK" ELEMENT */}
			<div className="fixed inset-0 pointer-events-none flex items-center justify-center opacity-[0.02] z-0">
				<span className="text-[35vw] font-bold uppercase tracking-tighter leading-none select-none">
					Work
				</span>
			</div>

			<div className="max-w-[1400px] mx-auto relative z-10">
				<header className="mb-40">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
						<div className="lg:col-span-8">
							{/* --- PROJECT ARCHIVE ELEMENT */}
							<div className="flex items-center gap-4 mb-10">
								<div className="w-8 h-[1px] bg-[#bfa15f]" />
								<span className="text-[10px] uppercase tracking-[0.6em] text-[#bfa15f] font-bold">
									Project Archive
								</span>
							</div>

							<h1
								className={`${bdScript.className} text-7xl md:text-9xl leading-[0.85]`}>
								Designing <br />{" "}
								<span className="text-[#bfa15f]">The Experience.</span>
							</h1>
						</div>

						{/* Right Side: Description */}
						<div className="lg:col-span-4 lg:pb-4">
							<p className="text-[#fffaeb]/60 text-sm md:text-base leading-relaxed font-light max-w-sm border-l border-[#bfa15f]/30 pl-6 italic">
								From initial conceptualization to the final site execution, our
								portfolio represents a journey through diverse scales and
								typologies. Each project is an implementation of our core
								belief: that luxury is a feeling of seamless functionality and
								timeless aesthetic.
							</p>
						</div>
					</div>

					<FilterBar
						categories={categories}
						years={years}
						activeCategory={activeCategory}
						activeYear={activeYear}
						sortField={sortField}
						sortOrder={sortOrder}
						onCategoryChange={setActiveCategory}
						onYearChange={setActiveYear}
						onSortFieldChange={setSortField}
						onToggleOrder={() =>
							setSortOrder((s) => (s === "asc" ? "desc" : "asc"))
						}
					/>
				</header>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32 md:gap-y-64">
					<AnimatePresence mode="popLayout">
						{filteredAndSorted.map((project, index) => (
							<ProjectCard
								key={project.id}
								project={project}
								index={index}
								activeSort={sortField}
							/>
						))}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};
