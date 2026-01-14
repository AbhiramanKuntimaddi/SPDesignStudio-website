"use client";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const ContactUs = () => {
	return (
		<section className="w-full bg-[#5b3644] py-24 md:py-40 px-6 overflow-hidden">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0 items-start">
				{/* Left Side: Editorial Branding */}
				<div className="flex flex-col lg:sticky lg:top-40">
					<motion.span
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 0.4 }}
						className="text-[10px] tracking-[1.2em] uppercase mb-8 text-[#fffaeb] font-bold">
						Inquiries
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
						className={`${bdScript.className} text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-[#fffaeb] mb-12`}>
						Let&apos;s Build <br />
						<span className="text-[#bfa15f]">Your Vision</span>
					</motion.h2>

					<div className="h-[1px] w-48 bg-[#fffaeb]/20 mb-12" />

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.6 }}
						className="text-[11px] md:text-xs uppercase tracking-[0.4em] max-w-md leading-relaxed text-[#fffaeb] font-medium">
						Translating Spandana Puppala&apos;s meticulous design philosophy
						into your tactile reality.
					</motion.p>
				</div>

				{/* Right Side: Structured Details */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-32 md:gap-x-12 border-l border-[#fffaeb]/10 lg:pl-24">
					{/* Email Block */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						className="group">
						<div className="flex items-center gap-3 mb-6">
							<FiMail className="text-[#bfa15f] opacity-60" size={18} />
							<p className="text-[9px] uppercase tracking-[0.6em] text-[#bfa15f] font-bold italic">
								Email
							</p>
						</div>
						<a
							href="mailto:hello@spandanapuppala.com"
							className="text-lg md:text-xl font-light text-[#fffaeb] flex items-center gap-2 group-hover:translate-x-2 transition-all duration-500">
							hello@spandanapuppala.com{" "}
							<FiArrowUpRight className="opacity-40" />
						</a>
					</motion.div>

					{/* Phone Block */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="group">
						<div className="flex items-center gap-3 mb-6">
							<FiPhone className="text-[#bfa15f] opacity-60" size={18} />
							<p className="text-[9px] uppercase tracking-[0.6em] text-[#bfa15f] font-bold italic">
								Phone
							</p>
						</div>
						<a
							href="tel:+919100111450"
							className="text-lg md:text-xl font-light text-[#fffaeb] group-hover:translate-x-2 transition-all duration-500">
							+91 9100111450
						</a>
					</motion.div>

					{/* Location Block */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="md:col-span-2 group">
						<div className="flex items-center gap-3 mb-6">
							<FiMapPin className="text-[#bfa15f] opacity-60" size={18} />
							<p className="text-[9px] uppercase tracking-[0.6em] text-[#bfa15f] font-bold italic">
								Studio
							</p>
						</div>
						<address className="not-italic text-lg md:text-2xl font-light text-[#fffaeb] leading-relaxed max-w-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500">
							Banjara Hills, Road No-1, <br />
							Naveen Nagar, Hyderabad, India
						</address>
					</motion.div>

					{/* Socials */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="md:col-span-2 flex items-center gap-12 pt-12 border-t border-[#fffaeb]/10">
						<a
							href="https://www.instagram.com/spdesigns_official/"
							className="text-[#fffaeb] opacity-40 hover:opacity-100 hover:text-[#bfa15f] transition-all duration-500">
							<FaInstagram size={20} />
						</a>
						<a
							href="https://www.linkedin.com/company/spandana-puppala-designs/"
							className="text-[#fffaeb] opacity-40 hover:opacity-100 hover:text-[#bfa15f] transition-all duration-500">
							<FaLinkedin size={20} />
						</a>
						<a
							href="https://wa.me/9100111450"
							className="text-[#fffaeb] opacity-40 hover:opacity-100 hover:text-[#bfa15f] transition-all duration-500">
							<FaWhatsapp size={20} />
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
