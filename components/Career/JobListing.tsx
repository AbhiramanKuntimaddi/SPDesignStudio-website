"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getJobs, type StrapiJob } from "@/lib/jobs";

const JobListing = ({ onApply }: { onApply: (title: string) => void }) => {
	const [expandedJob, setExpandedJob] = useState<string | null>(null);
	const [activeJobs, setActiveJobs] = useState<StrapiJob[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchAndFilterJobs = async () => {
			const allJobs = await getJobs();
			const filtered = allJobs.filter((job) => job.active === true);
			setActiveJobs(filtered);
			setLoading(false);
		};
		fetchAndFilterJobs();
	}, []);

	if (loading)
		return (
			<div className="py-40 text-center bg-[#fffaeb] text-[#5b3644]/50 italic">
				Loading opportunities...
			</div>
		);

	return (
		<section className="py-24 md:py-40 px-6 lg:px-20 bg-[#fffaeb]">
			<div className="max-w-5xl mx-auto">
				{/* ... Header Section remains the same ... */}
				<div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-start justify-between gap-10 md:gap-12 border-b border-[#5b3644]/10 pb-16">
					<div className="space-y-6 flex-1">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							className="flex items-center gap-4">
							<div className="w-12 h-[1px] bg-[#bfa15f]" />
							<span className="text-[10px] uppercase tracking-[0.6em] text-[#bfa15f] font-bold block">
								Opportunities
							</span>
						</motion.div>
						<h2 className="text-4xl sm:text-5xl md:text-7xl text-[#5b3644] font-light italic leading-[1.1] tracking-tight">
							Be part of the <br className="hidden sm:block" />
							<span className="text-[#bfa15f]">creative</span> narrative.
						</h2>
					</div>
					{/* openings count */}
					<div className="relative flex flex-col items-start md:items-end justify-center self-end md:self-start">
						<div className="relative">
							<span className="text-[7rem] sm:text-[10rem] md:text-[14rem] font-bold leading-none text-[#5b3644]/[0.03] absolute -top-12 sm:-top-16 md:-top-24 -right-2 md:-right-8 select-none">
								{activeJobs.length}
							</span>
							<div className="relative z-10 text-right">
								<p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black text-[#5b3644]">
									Current
								</p>
								<div className="flex items-baseline justify-end gap-1">
									<span className="text-5xl sm:text-6xl md:text-8xl font-light text-[#bfa15f] leading-none">
										0{activeJobs.length}
									</span>
									<span className="text-[#5b3644] text-[10px] md:text-xs font-bold uppercase tracking-widest">
										Roles
									</span>
								</div>
								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: "100%" }}
									transition={{ duration: 1.5 }}
									className="h-[2px] bg-[#5b3644] mt-2 origin-right"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Job List */}
				<div className="space-y-0">
					{activeJobs.map((job, index) => (
						<motion.div
							key={job.slug}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="border-b border-[#5b3644]/10">
							{/* Clickable Row */}
							<div
								onClick={() =>
									setExpandedJob(expandedJob === job.slug ? null : job.slug)
								}
								className="w-full py-8 md:py-12 flex flex-col md:flex-row md:items-center cursor-pointer group relative transition-colors duration-500 hover:bg-[#5b3644]/[0.01]">
								<span className="text-[10px] font-bold text-[#bfa15f] mb-2 md:mb-0 md:w-24 tracking-tighter">
									0{index + 1}—
								</span>
								<div className="flex-grow">
									<h3 className="text-2xl sm:text-3xl md:text-5xl text-[#5b3644] font-light italic transition-all duration-500 md:group-hover:pl-4">
										{job.title}
									</h3>
									<div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 md:mt-4">
										<span className="text-[9px] uppercase tracking-[0.3em] text-[#5b3644]/40 font-bold whitespace-nowrap">
											{job.location}
										</span>
										<span className="text-[9px] uppercase tracking-[0.3em] text-[#bfa15f] font-bold whitespace-nowrap">
											{job.status}
										</span>
									</div>
								</div>
								{/* Plus/Minus Icon */}
								<div className="hidden sm:block overflow-hidden h-8 w-8 relative ml-4">
									<motion.div
										animate={{ y: expandedJob === job.slug ? -32 : 0 }}
										transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
										className="flex flex-col items-center gap-4">
										<div className="h-8 w-8 flex items-center justify-center text-[#5b3644]/30 group-hover:text-[#bfa15f]">
											<div className="w-4 h-[1px] bg-current" />
											<div className="w-[1px] h-4 bg-current absolute" />
										</div>
										<div className="h-8 w-8 flex items-center justify-center text-[#bfa15f]">
											<div className="w-4 h-[1px] bg-current" />
										</div>
									</motion.div>
								</div>
							</div>

							{/* Expanded Content */}
							<AnimatePresence>
								{expandedJob === job.slug && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
										className="overflow-hidden">
										<div className="pb-12 md:pb-16 md:pl-24 max-w-3xl">
											{/* Description Section */}
											<div className="mb-10">
												<h4 className="text-[10px] uppercase tracking-[0.3em] text-[#bfa15f] font-bold mb-4">
													The Role
												</h4>
												<p className="text-[#5b3644]/70 leading-relaxed text-lg md:text-xl font-light italic whitespace-pre-line">
													{job.description}
												</p>
											</div>

											{/* Requirements Section */}
											{job.requirements && (
												<div className="mb-12">
													<h4 className="text-[10px] uppercase tracking-[0.3em] text-[#bfa15f] font-bold mb-6">
														Requirements
													</h4>
													<div className="text-[#5b3644]/80 leading-relaxed text-sm md:text-base font-light whitespace-pre-line border-l border-[#bfa15f]/20 pl-6">
														{job.requirements}
													</div>
												</div>
											)}

											<button
												onClick={(e) => {
													e.stopPropagation();
													onApply(job.title);
												}}
												className="group/btn relative inline-flex items-center gap-6 md:gap-8 py-2 overflow-hidden">
												<span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#5b3644]">
													Submit Application
												</span>
												<div className="w-10 md:w-12 h-[1px] bg-[#bfa15f] relative overflow-hidden">
													<motion.div
														initial={{ x: "-100%" }}
														whileHover={{ x: "100%" }}
														transition={{ duration: 0.5 }}
														className="absolute inset-0 bg-[#5b3644]"
													/>
												</div>
											</button>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default JobListing;
