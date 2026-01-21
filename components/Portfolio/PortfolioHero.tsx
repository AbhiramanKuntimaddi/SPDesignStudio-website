"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { FilterBar } from "./FilterBar";
import { ProjectCard } from "./ProjectCard";
import { type StrapiProject } from "@/lib/projects";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

interface PortfolioHeroProps {
	initialProjects: StrapiProject[];
}

export const PortfolioHero = ({ initialProjects }: PortfolioHeroProps) => {
	const [activeCategory, setActiveCategory] = useState("All Typologies");
	const [activeYear, setActiveYear] = useState("All Years");
	const [activeStatus, setActiveStatus] = useState("All Stages");

	const [sortField, setSortField] = useState<"year" | "area">("year");
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

	// 1. Derive Categories - Strapi 5 specific
	const categories = useMemo(
		() => [
			"All Typologies",
			...Array.from(new Set(initialProjects.map((p) => p.category))),
		],
		[initialProjects]
	);

	// 2. Derive Years
	const years = useMemo(
		() =>
			[
				"All Years",
				...Array.from(new Set(initialProjects.map((p) => p.year))),
			].sort((a, b) => b.localeCompare(a)),
		[initialProjects]
	);

	// 3. Derive Statuses
	const statuses = useMemo(
		() => [
			"All Stages",
			...Array.from(new Set(initialProjects.map((p) => p.status))),
		],
		[initialProjects]
	);

	// 4. Filter and Sort logic
	const filteredAndSorted = useMemo(() => {
		return initialProjects
			.filter(
				(p) =>
					(activeCategory === "All Typologies" ||
						p.category === activeCategory) &&
					(activeYear === "All Years" || p.year === activeYear) &&
					(activeStatus === "All Stages" || p.status === activeStatus)
			)
			.sort((a, b) => {
				const valA =
					sortField === "year" ? parseInt(a.year || "0") : Number(a.area || 0);
				const valB =
					sortField === "year" ? parseInt(b.year || "0") : Number(b.area || 0);
				return sortOrder === "desc" ? valB - valA : valA - valB;
			});
	}, [
		initialProjects,
		activeCategory,
		activeYear,
		activeStatus,
		sortField,
		sortOrder,
	]);

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
						<div className="lg:col-span-4 lg:pb-4">
							<p className="text-[#fffaeb]/60 text-sm md:text-base leading-relaxed font-light max-w-sm border-l border-[#bfa15f]/30 pl-6 italic">
								From initial conceptualization to the final site execution, our
								portfolio represents a journey through diverse scales and
								typologies.
							</p>
						</div>
					</div>

					<FilterBar
						categories={categories}
						years={years}
						statuses={statuses}
						activeStatus={activeStatus}
						onStatusChangeAction={setActiveStatus}
						activeCategory={activeCategory}
						activeYear={activeYear}
						sortField={sortField}
						sortOrder={sortOrder}
						onCategoryChangeAction={setActiveCategory}
						onYearChangeAction={setActiveYear}
						onSortFieldChangeAction={setSortField}
						onToggleOrderAction={() =>
							setSortOrder((s) => (s === "asc" ? "desc" : "asc"))
						}
					/>
				</header>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32 md:gap-y-64">
					<AnimatePresence mode="popLayout">
						{filteredAndSorted.map((project, index) => (
							<ProjectCard
								// FIX: Changed from project._id to project.documentId
								key={project.documentId}
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
