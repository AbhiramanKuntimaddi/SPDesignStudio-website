"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
import { team, TeamMember } from "@/lib/team";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const CollectiveSection = () => {
	return (
		<section
			id="collective"
			className="relative w-full bg-[#5b3644] text-[#fffaeb] overflow-hidden">
			<div className="max-w-7xl mx-auto grid md:grid-cols-12 items-start">
				<motion.div
					className="md:col-span-12 flex flex-col px-6 md:px-12 py-24 md:py-32"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}>
					{/* Section Label in BDScript */}
					<span
						className={`${bdScript.className} text-7xl md:text-8xl text-[#bfa15f] leading-none mb-8 sm:mb-6`}>
						The Team
					</span>

					{/* Title in Serif */}
					<h2 className="text-4xl md:text-6xl leading-[1.1] mt-[10px] md:mt-[-5px] text-[#fffaeb]">
						Our Collective
					</h2>

					{/* Minimalist Single-Line Philosophy */}
					<p className="text-xl md:text-3xl font-light text-[#fffaeb]/80 max-w-7xl mt-10 text-balance">
						A collective of diverse minds synchronizing artistry
						and technical precision to craft soulful environments.
					</p>

					{/* Team Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mt-20">
						{team.map((member: TeamMember, i: number) => (
							<motion.div
								key={i}
								className="group"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1, duration: 0.8 }}
								viewport={{ once: true }}>
								<div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-xl">
									<Image
										src={member.avatarUrl || "/placeholder.jpg"}
										alt={member.name}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>

								<div className="space-y-1">
									<h4 className="text-2xl font-serif text-[#fffaeb]">
										{member.name}
									</h4>
									<p className="text-[#bfa15f] text-sm uppercase tracking-[0.2em] font-medium">
										{member.role}
									</p>
									<p className="text-[#fffaeb]/60 font-light text-sm leading-relaxed pt-3 max-w-[95%]">
										{member.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CollectiveSection;
