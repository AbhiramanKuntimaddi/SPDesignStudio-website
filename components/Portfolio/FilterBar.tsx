"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FilterBarProps {
	categories: string[];
	years: string[];
	statuses: string[];
	activeCategory: string;
	activeYear: string;
	activeStatus: string;
	sortField: "year" | "area";
	sortOrder: "asc" | "desc";
	onCategoryChangeAction: (val: string) => void;
	onYearChangeAction: (val: string) => void;
	onStatusChangeAction: (val: string) => void;
	onSortFieldChangeAction: (val: "year" | "area") => void;
	onToggleOrderAction: () => void;
}

export const FilterBar = ({
	categories,
	years,
	statuses,
	activeCategory,
	activeYear,
	activeStatus,
	sortField,
	sortOrder,
	onCategoryChangeAction: onCategoryChange,
	onYearChangeAction: onYearChange,
	onStatusChangeAction: onStatusChange,
	onSortFieldChangeAction: onSortFieldChange,
	onToggleOrderAction: onToggleOrder,
}: FilterBarProps) => {
	return (
		<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-12 border-t border-[#fffaeb]/10 gap-12">
			{/* PRIMARY DROPDOWNS */}
			<div className="flex flex-col sm:flex-row gap-12 md:gap-20">
				<Dropdown
					label="Filter Typology"
					options={categories}
					selected={activeCategory}
					onSelect={onCategoryChange}
				/>
				<Dropdown
					label="Filter Timeline"
					options={years}
					selected={activeYear}
					onSelect={onYearChange}
				/>
				<Dropdown
					label="Project Status"
					options={statuses}
					selected={activeStatus}
					onSelect={onStatusChange}
				/>
			</div>

			{/* ARCHIVE ORDERING */}
			<div className="flex flex-col items-start lg:items-end gap-5">
				<span className="text-[9px] uppercase tracking-[0.4em] text-[#bfa15f] font-bold opacity-70">
					Archive Order
				</span>
				<div className="flex items-center gap-8">
					<div className="flex gap-8">
						{(["year", "area"] as const).map((field) => (
							<button
								key={field}
								onClick={() => onSortFieldChange(field)}
								className={`text-[11px] uppercase tracking-[0.2em] transition-all relative py-1 ${
									sortField === field
										? "text-[#fffaeb]"
										: "text-[#fffaeb]/30 hover:text-[#fffaeb]/60"
								}`}>
								{field === "year" ? "By Date" : "By Scale"}
								{sortField === field && (
									<motion.div
										layoutId="sortUnderline"
										className="absolute bottom-0 left-0 w-full h-[1px] bg-[#bfa15f]"
									/>
								)}
							</button>
						))}
					</div>

					<button
						onClick={onToggleOrder}
						className="flex items-center gap-4 px-5 py-2.5 border border-[#fffaeb]/10 hover:border-[#bfa15f]/40 transition-all bg-[#fffaeb]/5 group">
						<span className="text-[9px] uppercase tracking-widest text-[#fffaeb]/40 group-hover:text-[#fffaeb]">
							{sortOrder === "desc" ? "High-Low" : "Low-High"}
						</span>
						<motion.div
							animate={{ rotate: sortOrder === "desc" ? 0 : 180 }}
							className="text-[#bfa15f] text-sm">
							↓
						</motion.div>
					</button>
				</div>
			</div>
		</div>
	);
};

/* --- DROPDOWN SUB-COMPONENT --- */

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

	// Close on click outside
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="relative group" ref={ref}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex flex-col items-start text-left focus:outline-none">
				<span className="text-[9px] uppercase tracking-[0.4em] text-[#bfa15f] mb-3 font-bold opacity-70">
					{label}
				</span>
				<div className="flex items-center gap-4 group">
					<span className="text-2xl md:text-3xl font-light tracking-tight group-hover:text-[#bfa15f] transition-colors duration-500">
						{selected}
					</span>
					<motion.span
						animate={{ rotate: isOpen ? 180 : 0 }}
						className="text-xs opacity-40 text-[#bfa15f]">
						↓
					</motion.span>
				</div>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 15 }}
						transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
						className="absolute top-full left-0 mt-6 min-w-[280px] z-[100] py-6 bg-[#5b3644]/95 backdrop-blur-2xl border border-[#fffaeb]/10 shadow-2xl">
						<div className="max-h-[40vh] overflow-y-auto custom-scrollbar">
							{options.map((opt, index) => (
								<button
									// FIX: Composite key using label, option name, and index
									// ensures uniqueness even if the data contains duplicates.
									key={`${label.replace(/\s+/g, "-")}-${opt}-${index}`}
									onClick={() => {
										onSelect(opt);
										setIsOpen(false);
									}}
									className="w-full text-left px-8 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-[#fffaeb]/5 transition-all flex items-center justify-between group/item">
									<span
										className={`transition-colors duration-300 ${
											selected === opt
												? "text-[#bfa15f]"
												: "text-[#fffaeb]/60 group-hover/item:text-[#fffaeb]"
										}`}>
										{opt}
									</span>
									{selected === opt && (
										<motion.div
											layoutId={`active-${label}`}
											className="w-1.5 h-1.5 rounded-full bg-[#bfa15f]"
										/>
									)}
								</button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FilterBar;
