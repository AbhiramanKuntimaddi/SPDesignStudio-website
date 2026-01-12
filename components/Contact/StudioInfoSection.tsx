"use client";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
	FiPhone,
	FiMail,
	FiMapPin,
	FiArrowUpRight,
	FiClock,
} from "react-icons/fi";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const StudioInfoSection = () => {
	const googleMapsUrl = "https://maps.app.goo.gl/y_fqMeSRyzsRFY-pWRbOM4I";
	const embedUrl =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.741088487!2d78.4418!3d17.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97e431faffcb%3A0x8233ce1659a98f15!2sSP%20Design%20Studio!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

	const businessHours = [
		{ days: "Mon — Fri", time: "10:00 AM — 06:00 PM", status: "Open" },
		{ days: "Sat — Sun", time: "By Appointment", status: "Closed" },
	];

	return (
		<section id="studio-info" className="relative bg-[#5b3644] py-24 md:py-40 px-6 lg:px-20 overflow-hidden">
			<div className="max-w-screen-2xl mx-auto">
				{/* CENTERED HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="flex flex-col items-center text-center mb-24 md:mb-32">
					<h2
						className={`${bdScript.className} text-[clamp(3.5rem,8vw,7rem)] text-[#fffaeb] leading-none`}>
						Visit Our Studio
					</h2>
					<div className="h-[1px] w-24 bg-[#bfa15f] mt-10 opacity-50" />
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
					{/* LEFT COLUMN: CONTACT & HOURS */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
						className="space-y-16">
						<div className="space-y-6">
							<h3 className="text-[10px] uppercase tracking-[0.4em] text-[#bfa15f] font-bold flex items-center gap-3">
								<FiMapPin className="text-[#bfa15f]" /> Location
							</h3>
							<p className="text-2xl md:text-3xl font-light text-[#fffaeb] leading-snug italic opacity-90">
								Road No-1, Naveen Nagar,
								<br />
								Banjara Hills, Hyderabad,
								<br />
								Telangana 500033
							</p>
						</div>

						<div className="pt-12 border-t border-[#fffaeb]/10">
							<h3 className="text-[10px] uppercase tracking-[0.4em] text-[#bfa15f] font-bold flex items-center gap-3 mb-8">
								<FiClock className="text-[#bfa15f]" /> Studio Hours
							</h3>

							<div className="grid grid-cols-1 gap-y-4 max-w-md">
								{businessHours.map((item, idx) => (
									<div
										key={idx}
										className="flex items-center justify-between py-2 border-b border-[#fffaeb]/5 last:border-0">
										<div className="flex flex-col">
											<span className="text-sm text-[#fffaeb] font-medium tracking-tight">
												{item.days}
											</span>
											<span className="text-[11px] uppercase tracking-widest text-[#bfa15f] font-bold mt-1">
												{item.status === "Open"
													? "Regular Hours"
													: "Private Session"}
											</span>
										</div>
										<span className="text-base text-[#fffaeb]/70 font-light italic">
											{item.time}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-[#fffaeb]/10">
							<div className="space-y-8">
								<a
									href="mailto:hello@spandanapuppala.com"
									className="group flex flex-col gap-2">
									<span className="text-[10px] uppercase tracking-[0.4em] text-[#bfa15f] font-bold flex items-center gap-3">
										<FiMail className="text-[#bfa15f] group-hover:translate-x-1 transition-transform" />{" "}
										Inquiries
									</span>
									<span className="text-base text-[#fffaeb] group-hover:text-[#bfa15f] transition-colors font-light">
										hello@spandanapuppala.com
									</span>
								</a>
								<a
									href="tel:+919100111450"
									className="group flex flex-col gap-2">
									<span className="text-[10px] uppercase tracking-[0.4em] text-[#bfa15f] font-bold flex items-center gap-3">
										<FiPhone className="text-[#bfa15f] group-hover:rotate-12 transition-transform" />{" "}
										Call
									</span>
									<span className="text-base text-[#fffaeb] group-hover:text-[#bfa15f] transition-colors font-light">
										+91 91001 11450
									</span>
								</a>
							</div>

							<div className="flex flex-col gap-6">
								<span className="text-[10px] uppercase tracking-[0.4em] text-[#bfa15f] font-bold">
									Connect
								</span>
								<div className="flex items-center space-x-8">
									{[
										{
											icon: <FaInstagram />,
											link: "https://www.instagram.com/spdesigns_official/",
										},
										{
											icon: <FaLinkedin />,
											link: "https://www.linkedin.com/company/spandana-puppala-designs/",
										},
										{
											icon: <FaWhatsapp />,
											link: "https://wa.me/919100111450",
										},
									].map((social, idx) => (
										<a
											key={idx}
											href={social.link}
											target="_blank"
											rel="noreferrer"
											className="text-xl text-[#fffaeb]/40 hover:text-[#bfa15f] transition-all transform hover:-translate-y-1">
											{social.icon}
										</a>
									))}
								</div>
							</div>
						</div>
					</motion.div>

					{/* RIGHT COLUMN: CREAM THEMED MAP ON PLUM BACKGROUND */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
						className="relative h-[500px] md:h-[700px] group/map">
						<div className="relative z-0 w-full h-full overflow-hidden border border-[#fffaeb]/10 bg-[#fffaeb]">
							<iframe
								src={embedUrl}
								className="w-full h-full grayscale brightness-[1.05] contrast-[1.1] opacity-50 pointer-events-none"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
							/>

							{/* Overlay that pulls the map into the Cream/Plum palette */}
							<div className="absolute inset-0 bg-[#5b3644] mix-blend-color z-10 pointer-events-none opacity-20" />
							<div className="absolute inset-0 bg-[#fffaeb] mix-blend-multiply z-10 pointer-events-none opacity-30" />

							{/* DARK PLUM DIALOG BUBBLE (STATIC) */}
							<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
								<div className="flex flex-col items-center">
									<div className="bg-[#5b3644] px-6 py-4 rounded-sm shadow-2xl border border-[#bfa15f]/40 flex flex-col items-center gap-1 relative">
										<span className="text-[9px] uppercase tracking-[0.4em] text-[#bfa15f] font-bold">
											Studio
										</span>
										<span className="text-sm tracking-[0.1em] text-[#fffaeb] font-medium whitespace-nowrap">
											SP DESIGN STUDIO
										</span>
										<div
											className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 
                      border-l-[8px] border-l-transparent 
                      border-r-[8px] border-r-transparent 
                      border-t-[10px] border-t-[#5b3644]"></div>
									</div>
									<div className="w-2.5 h-2.5 bg-[#5b3644] rounded-full mt-4 border-2 border-[#bfa15f]" />
								</div>
							</div>

							{/* GET DIRECTIONS BUTTON */}
							<motion.button
								whileHover={{
									scale: 1.03,
									backgroundColor: "#5b3644",
									color: "#fffaeb",
								}}
								whileTap={{ scale: 0.97 }}
								onClick={() => window.open(googleMapsUrl, "_blank")}
								className="absolute bottom-8 right-8 z-30 bg-[#fffaeb] text-[#5b3644] px-8 py-5 flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold shadow-2xl transition-all pointer-events-auto border border-[#5b3644]/10">
								Get Directions <FiArrowUpRight size={18} />
							</motion.button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default StudioInfoSection;
