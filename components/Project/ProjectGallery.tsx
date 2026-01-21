"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GallerySectionProps {
	number: string;
	title: string;
	images: string[]; // These will be the relative paths from Strapi
	isGrayscale?: boolean;
}

/**
 * Re-using your Strapi URL helper logic to ensure images load
 */
const getStrapiURL = (path: string | undefined) => {
	if (!path) return "/placeholder.jpg";
	const baseUrl = process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL || "";
	if (path.startsWith("http")) return path;
	return `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};

const ProjectGallery = ({
	number,
	title,
	images,
	isGrayscale,
}: GallerySectionProps) => {
	return (
		<div className="space-y-12">
			{/* Header / Divider */}
			<div className="flex items-center gap-6">
				<span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#bfa15f]">
					{number} / {title}
				</span>
				<div className="h-[1px] flex-1 bg-[#5b3644]/10" />
			</div>

			{/* Image Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{images.map((img, i) => (
					<motion.div
						key={`${title}-${i}`} // More unique key than just index
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#5b3644]/5 group">
						<Image
							src={getStrapiURL(img)}
							alt={`${title} detail ${i + 1}`}
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							className={`object-cover transition-all duration-[1.5s] ease-out group-hover:scale-105 ${
								isGrayscale ? "grayscale hover:grayscale-0" : ""
							}`}
						/>
						{/* Subtle overlay for architectural depth */}
						<div className="absolute inset-0 bg-[#5b3644]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default ProjectGallery;
