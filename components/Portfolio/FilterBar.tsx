"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FilterBarProps {
	categories: string[];
	years: string[];
	activeCategory: string;
	activeYear: string;
	sortField: "year" | "area";
	sortOrder: "asc" | "desc";
	onCategoryChange: (val: string) => void;
	onYearChange: (val: string) => void;
	onSortFieldChange: (val: "year" | "area") => void;
	onToggleOrder: () => void;
}

export const FilterBar = (props: FilterBarProps) => {
	return (
		<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-8 border-t border-[#fffaeb]/10 gap-12">
			<div className="flex flex-col sm:flex-row gap-12 md:gap-16">
				<Dropdown
					label="Filter Typology"
					options={props.categories}
					selected={props.activeCategory}
					onSelect={props.onCategoryChange}
				/>
				<Dropdown
					label="Filter Timeline"
					options={props.years}
					selected={props.activeYear}
					onSelect={props.onYearChange}
				/>
			</div>

			<div className="flex flex-col items-start lg:items-end gap-4">
				<span className="text-[9px] uppercase tracking-[0.4em] text-[#bfa15f] font-bold opacity-70">
					Archive Order
				</span>
				<div className="flex items-center gap-8">
					<div className="flex gap-6">
						{(["year", "area"] as const).map((field) => (
							<button
								key={field}
								onClick={() => props.onSortFieldChange(field)}
								className={`text-[11px] uppercase tracking-[0.2em] transition-all relative py-1 ${
									props.sortField === field
										? "text-[#fffaeb]"
										: "text-[#fffaeb]/30 hover:text-[#fffaeb]/60"
								}`}>
								{field === "year" ? "By Date" : "By Scale"}
								{props.sortField === field && (
									<motion.div
										layoutId="sortUnderline"
										className="absolute bottom-0 left-0 w-full h-[1px] bg-[#bfa15f]"
									/>
								)}
							</button>
						))}
					</div>
					<button
						onClick={props.onToggleOrder}
						className="flex items-center gap-3 px-4 py-2 border border-[#fffaeb]/10 hover:border-[#bfa15f]/40 transition-colors bg-[#fffaeb]/5 group">
						<span className="text-[9px] uppercase tracking-widest text-[#fffaeb]/40 group-hover:text-[#fffaeb]">
							{props.sortOrder === "desc" ? "High-Low" : "Low-High"}
						</span>
						<motion.div
							animate={{ rotate: props.sortOrder === "desc" ? 0 : 180 }}
							className="text-[#bfa15f]">
							↓
						</motion.div>
					</button>
				</div>
			</div>
		</div>
	);
};

const Dropdown = ({
	label,
	options,
	selected,
	onSelect,
}: {
	label: string;
	options: string[];
	selected: string;
	onSelect: (v: string) => void;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const out = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node))
				setIsOpen(false);
		};
		document.addEventListener("mousedown", out);
		return () => document.removeEventListener("mousedown", out);
	}, []);

	return (
		<div className="relative group" ref={ref}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex flex-col items-start text-left">
				<span className="text-[9px] uppercase tracking-[0.4em] text-[#bfa15f] mb-2 font-bold opacity-70">
					{label}
				</span>
				<div className="flex items-center gap-3">
					<span className="text-xl md:text-2xl font-light tracking-tight hover:text-[#bfa15f] transition-colors">
						{selected}
					</span>
					<motion.span
						animate={{ rotate: isOpen ? 180 : 0 }}
						className="text-[10px] opacity-30 text-[#bfa15f]">
						↓
					</motion.span>
				</div>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						className="absolute top-full left-0 mt-6 min-w-[240px] z-50 py-4 bg-[#5b3644]/95 backdrop-blur-xl border border-[#fffaeb]/10 shadow-2xl">
						{options.map((opt) => (
							<button
								key={opt}
								onClick={() => {
									onSelect(opt);
									setIsOpen(false);
								}}
								className="w-full text-left px-8 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-[#fffaeb]/5 transition-all flex items-center justify-between">
								<span
									className={
										selected === opt ? "text-[#bfa15f]" : "text-[#fffaeb]/60"
									}>
									{opt}
								</span>
								{selected === opt && (
									<div className="w-1.5 h-1.5 rounded-full bg-[#bfa15f]" />
								)}
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FilterBar;