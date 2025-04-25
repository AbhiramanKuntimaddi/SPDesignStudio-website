"use client";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactUs() {
	return (
		<main className="min-h-screen/3 flex flex-col md:flex-row">
			{/* Left column - Contact Message */}
			<section className="md:w-1/2 flex items-center justify-start bg-[#5b3644] p-6 sm:p-10 md:p-24">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-[#fffaeb] max-w-md text-left">
					<h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 leading-snug">
						Let&apos;s Create Something Extraordinary?
					</h1>
					<p className="text-xl sm:text-3xl font-light mt-3">
						We&apos;re excited to collaborate with you and bring spaces to life.
					</p>
				</motion.div>
			</section>

			{/* Right column - Contact Details */}
			<section className="md:w-1/2 bg-[#fffaeb] text-[#5b3644] flex flex-col justify-start p-6 sm:p-10 md:p-24 gap-10 text-left">
				<div className="space-y-6">
					{/* Address */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut" }}>
						<h3 className="text-3xl sm:text-4xl mb-3">Address</h3>
						<div className="flex items-start text-xl sm:text-xl font-light">
							<FiMapPin className="mr-3 mt-1" size={20} />
							<span>
								SP Design Studio, Road No-1,
								<br /> Naveen Nagar, Banjara Hills,
								<br /> Hyderabad, Telangana, India
							</span>
						</div>
					</motion.div>

					{/* Phone */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}>
						<h3 className="text-3xl sm:text-4xl mb-3">Phone</h3>
						<div className="flex items-center text-xl sm:text-xl font-light">
							<FiPhone className="mr-3" size={20} />
							<a href="tel:+91-9100111450" className="hover:underline">
								+91-9100111450
							</a>
						</div>
					</motion.div>

					{/* Email */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}>
						<h3 className="text-3xl sm:text-4xl mb-3">Email</h3>
						<div className="flex items-center text-xl sm:text-xl font-light">
							<FiMail className="mr-3" size={20} />
							<a
								href="mailto:hello@spandanapuppala.com"
								className="hover:underline">
								hello@spandanapuppala.com
							</a>
						</div>
					</motion.div>
				</div>

				{/* Social Links */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="mt-6">
					<div className="text-3xl sm:text-4xl mb-3">Connect with Us</div>
					<p className="text-xl sm:text-xl mb-4">
						Stay connected for fresh perspectives and thoughtful design.
					</p>
					<div className="flex space-x-6">
						<a
							href="https://www.instagram.com/spdesigns_official/"
							className="text-[#5b3644] hover:text-[#72505d] transition-transform transform hover:scale-110">
							<FaInstagram size={30} />
						</a>
						<a
							href="https://www.linkedin.com/company/spandana-puppala-designs/"
							className="text-[#5b3644] hover:text-[#72505d] transition-transform transform hover:scale-110">
							<FaLinkedin size={30} />
						</a>
						<a
							href="https://wa.me/9100111450"
							className="text-[#5b3644] hover:text-[#72505d] transition-transform transform hover:scale-110">
							<FaWhatsapp size={30} />
						</a>
					</div>
				</motion.div>
			</section>
		</main>
	);
}
