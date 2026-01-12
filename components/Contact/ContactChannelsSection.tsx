"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import Link from "next/link";
import { channels, Channel } from "@/lib/channels";
import { FiX } from "react-icons/fi";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const ContactChannelsSection = () => {
	// This state tracks which channel's form is currently open in the sidebar
	const [activeChannel, setActiveChannel] = useState<Channel | null>(null);

	return (
		<section
			id="inquiry-form"
			className="bg-[#fffaeb] py-24 md:py-40 px-6 lg:px-20 relative">
			<div className="max-w-screen-2xl mx-auto">
				{/* Centered Section Title */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="flex flex-col items-center text-center mb-10 md:mb-20">
					<h2
						className={`${bdScript.className} text-[clamp(3.5rem,9vw,7.5rem)] text-[#5b3644] leading-tight`}>
						Inquiry Channels
					</h2>
					<div className="h-[1px] w-24 md:w-32 bg-[#bfa15f] mt-8 md:mt-10" />
				</motion.div>

				{/* Grid of Channels */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-0">
					{channels.map((channel: Channel, index: number) => {
						const isApplicant = channel.title
							.toLowerCase()
							.includes("applicant");

						return (
							<motion.div
								key={channel.title}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2, duration: 1.2 }}
								className={`group flex flex-col items-center text-center h-full px-4 md:px-8 lg:px-14 py-2 border-[#5b3644]/10 
                  ${index !== 0 ? "md:border-l" : ""} 
                  ${index === 0 ? "md:pl-0" : ""} 
                  ${index === channels.length - 1 ? "md:pr-0" : ""}`}>
								<span className="text-[9px] md:text-[10px] uppercase tracking-[0.7em] text-[#bfa15f] font-bold mb-6 md:mb-8">
									{channel.subtitle}
								</span>

								<h3 className="text-[#5b3644] text-4xl lg:text-6xl font-light mb-8 md:mb-12 tracking-tighter italic">
									{channel.title}
								</h3>

								<p className="text-[#5b3644]/60 text-base md:text-lg font-light leading-relaxed mb-12 md:mb-20 flex-grow max-w-[90%] mx-auto">
									{channel.description}
								</p>

								{/* LOGIC: Applicants go to a new page, others open the sidebar */}
								{isApplicant ? (
									<Link
										href="/careers"
										className="relative flex flex-row items-center justify-center group/btn mt-auto whitespace-nowrap">
										<span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-semibold text-[#5b3644]">
											{channel.cta}
										</span>
										<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-[#bfa15f] group-hover/btn:w-full transition-all duration-700 ease-in-out" />
									</Link>
								) : (
									<button
										onClick={() => setActiveChannel(channel)}
										className="relative flex flex-row items-center justify-center group/btn mt-auto whitespace-nowrap">
										<span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-semibold text-[#5b3644]">
											{channel.cta}
										</span>
										<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-[#bfa15f] group-hover/btn:w-full transition-all duration-700 ease-in-out" />
									</button>
								)}
							</motion.div>
						);
					})}
				</div>
			</div>

			{/* --- SIDEBAR OVERLAY --- */}
			<AnimatePresence>
				{activeChannel && (
					<div className="fixed inset-0 z-[100] flex justify-end">
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setActiveChannel(null)}
							className="absolute inset-0 bg-[#5b3644]/40 backdrop-blur-sm"
						/>

						{/* Slide-out Panel */}
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", damping: 30, stiffness: 300 }}
							className="relative w-full max-w-xl h-full bg-[#fffaeb] shadow-2xl p-10 md:p-16 overflow-y-auto">
							<button
								onClick={() => setActiveChannel(null)}
								className="absolute top-10 right-10 text-[#5b3644] hover:rotate-90 transition-transform">
								<FiX size={28} />
							</button>

							<div className="mt-12">
								<span className="text-[10px] uppercase tracking-[0.5em] text-[#bfa15f] font-bold">
									{activeChannel.subtitle}
								</span>
								<h2
									className={`${bdScript.className} text-5xl text-[#5b3644] mt-4 mb-10`}>
									{activeChannel.title}
								</h2>

								{/* Pass the channel title to our form component */}
								<InquiryForm type={activeChannel.title} />
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</section>
	);
};

/* --- THE INQUIRY FORM SUB-COMPONENT --- */
const InquiryForm = ({ type }: { type: string }) => {
	const isVendor = type.toLowerCase().includes("vendor");

	return (
		<form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
			<div className="space-y-6">
				<FormInput label="Full Name" placeholder="Your name" />
				<FormInput label="Email Address" placeholder="email@address.com" />

				{isVendor ? (
					<>
						<FormInput label="Company Name" placeholder="Business Name" />
						<FormInput
							label="Service Category"
							placeholder="Furniture, Lighting, etc."
						/>
					</>
				) : (
					<>
						<FormInput label="Project Location" placeholder="City / Area" />
						<FormInput label="Phone Number" placeholder="+91 ..." />
					</>
				)}

				<div className="flex flex-col gap-2">
					<label className="text-[10px] uppercase tracking-widest text-[#5b3644]/50 font-bold">
						Message
					</label>
					<textarea
						rows={4}
						className="bg-transparent border-b border-[#5b3644]/20 py-4 outline-none text-[#5b3644] focus:border-[#bfa15f] transition-colors resize-none"
						placeholder="Tell us about your inquiry..."
					/>
				</div>
			</div>

			<button className="w-full py-5 bg-[#5b3644] text-[#fffaeb] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#bfa15f] transition-all">
				Send Inquiry
			</button>
		</form>
	);
};

/* --- REUSABLE INPUT COMPONENT --- */
const FormInput = ({
	label,
	placeholder,
}: {
	label: string;
	placeholder: string;
}) => (
	<div className="flex flex-col gap-2">
		<label className="text-[10px] uppercase tracking-widest text-[#5b3644]/50 font-bold">
			{label}
		</label>
		<input
			type="text"
			placeholder={placeholder}
			className="bg-transparent border-b border-[#5b3644]/20 py-4 outline-none text-[#5b3644] focus:border-[#bfa15f] transition-colors"
		/>
	</div>
);

export default ContactChannelsSection;
