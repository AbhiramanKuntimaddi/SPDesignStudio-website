"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jobs } from "@/lib/jobs";

// Props now require a function that takes the job title string
const JobListing = ({ onApply }: { onApply: (title: string) => void }) => {
	const [expandedJob, setExpandedJob] = useState<string | null>(null);

	return (
		<section className="py-24 md:py-40 px-6 lg:px-20 bg-[#fffaeb]">
			<div className="max-w-5xl mx-auto">
				{/* Header Section */}
				<div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-start justify-between gap-10 md:gap-12 border-b border-[#5b3644]/10 pb-16">
					<div className="space-y-6 flex-1">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
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

					{/* Openings Count Decorator */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
						className="relative flex flex-col items-start md:items-end justify-center self-end md:self-start">
						<div className="relative">
							<span className="text-[7rem] sm:text-[10rem] md:text-[14rem] font-bold leading-none text-[#5b3644]/[0.03] absolute -top-12 sm:-top-16 md:-top-24 -right-2 md:-right-8 select-none">
								{jobs.length}
							</span>

							<div className="relative z-10 text-right">
								<p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black text-[#5b3644]">
									Current
								</p>
								<div className="flex items-baseline justify-end gap-1">
									<span className="text-5xl sm:text-6xl md:text-8xl font-light text-[#bfa15f] leading-none">
										0{jobs.length}
									</span>
									<span className="text-[#5b3644] text-[10px] md:text-xs font-bold uppercase tracking-widest">
										Roles
									</span>
								</div>
								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: "100%" }}
									transition={{ duration: 1.5, delay: 0.5 }}
									className="h-[2px] bg-[#5b3644] mt-2 origin-right"
								/>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Job List */}
				<div className="space-y-0">
					{jobs.map((job, index) => (
						<motion.div
							key={job.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="border-b border-[#5b3644]/10">
							<div
								onClick={() =>
									setExpandedJob(expandedJob === job.id ? null : job.id)
								}
								className="w-full py-8 md:py-12 flex flex-col md:flex-row md:items-center cursor-pointer group relative transition-colors duration-500 hover:bg-[#5b3644]/[0.01]">
								{/* RESTORED: Index Number labeling */}
								<span className="text-[10px] font-bold text-[#bfa15f] mb-2 md:mb-0 md:w-24 tracking-tighter">
									0{index + 1}—
								</span>

								{/* Title & Info */}
								<div className="flex-grow">
									<h3 className="text-2xl sm:text-3xl md:text-5xl text-[#5b3644] font-light italic transition-all duration-500 md:group-hover:pl-4">
										{job.title}
									</h3>
									<div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 md:mt-4">
										<span className="text-[9px] uppercase tracking-[0.3em] text-[#5b3644]/40 font-bold whitespace-nowrap">
											{job.location}
										</span>
										<span className="text-[9px] uppercase tracking-[0.3em] text-[#bfa15f] font-bold whitespace-nowrap">
											{job.type}
										</span>
									</div>
								</div>

								{/* Minimalist Toggle Icon */}
								<div className="hidden sm:block overflow-hidden h-8 w-8 relative ml-4">
									<motion.div
										animate={{ y: expandedJob === job.id ? -32 : 0 }}
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

							<AnimatePresence>
								{expandedJob === job.id && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
										className="overflow-hidden">
										<div className="pb-12 md:pb-16 md:pl-24 max-w-3xl">
											<p className="text-[#5b3644]/70 leading-relaxed text-lg md:text-xl font-light italic mb-10">
												{job.description}
											</p>

											{/* Submit Button - Now passes title to parent state */}
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
