"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import Link from "next/link";
import { channels, Channel } from "@/lib/channels";
import { FiX, FiCheckCircle, FiLoader } from "react-icons/fi";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

/* --- REUSABLE INPUT COMPONENT --- */
interface FormInputProps {
	label: string;
	placeholder: string;
	name: string;
	type?: string;
	required?: boolean;
}

const FormInput = ({
	label,
	placeholder,
	name,
	type = "text",
	required = false,
}: FormInputProps) => (
	<div className="flex flex-col gap-2">
		<label className="text-[10px] uppercase tracking-widest text-[#5b3644]/50 font-bold">
			{label}
		</label>
		<input
			name={name}
			type={type}
			required={required}
			placeholder={placeholder}
			className="bg-transparent border-b border-[#5b3644]/20 py-4 outline-none text-[#5b3644] focus:border-[#bfa15f] transition-colors"
		/>
	</div>
);

/* --- THE INQUIRY FORM SUB-COMPONENT --- */

interface ApiErrorResponse {
	error?: string;
}

const InquiryForm = ({ type }: { type: string }) => {
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const isVendor = type.toLowerCase().includes("vendor");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		e.stopPropagation();
		setStatus("loading");

		const form = e.currentTarget;
		const formData = new FormData(form);
		formData.append("type", type);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				const contentType = response.headers.get("content-type");
				if (contentType && contentType.includes("application/json")) {
					// Strictly typed error data
					const errorData = (await response.json()) as ApiErrorResponse;
					// Log the specific error string instead of the whole object
					console.error(
						"API Error Response:",
						errorData.error || "Unknown error"
					);
				} else {
					const textError = await response.text();
					console.error("Server Error (Text):", textError);
				}
				throw new Error("Submission failed");
			}

			setStatus("success");
		} catch (err: unknown) {
			// Strictly handle the 'unknown' error type
			const message =
				err instanceof Error ? err.message : "Client Submission Error";
			console.error(message);
			setStatus("error");
		}
	}

	if (status === "success") {
		return (
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				className="flex flex-col items-center text-center py-20">
				<FiCheckCircle size={48} className="text-[#bfa15f] mb-6" />
				<h3 className="text-[#5b3644] text-2xl font-light italic mb-2">
					Message Sent
				</h3>
				<p className="text-[#5b3644]/60 text-sm">
					Thank you for reaching out. We will be in touch shortly.
				</p>
			</motion.div>
		);
	}

	return (
		<form className="space-y-8" onSubmit={handleSubmit}>
			<div className="space-y-6">
				<FormInput
					name="name"
					label="Full Name"
					placeholder="Your name"
					required
				/>
				<FormInput
					name="email"
					label="Email Address"
					placeholder="email@address.com"
					type="email"
					required
				/>

				{isVendor ? (
					<>
						<FormInput
							name="companyName"
							label="Company Name"
							placeholder="Business Name"
							required
						/>
						<FormInput
							name="serviceCategory"
							label="Service Category"
							placeholder="Furniture, Lighting, etc."
							required
						/>
					</>
				) : (
					<>
						<FormInput
							name="projectLocation"
							label="Project Location"
							placeholder="City / Area"
							required
						/>
						<FormInput
							name="phoneNumber"
							label="Phone Number"
							placeholder="+91 ..."
							required
						/>
					</>
				)}

				<div className="flex flex-col gap-2">
					<label className="text-[10px] uppercase tracking-widest text-[#5b3644]/50 font-bold">
						Message
					</label>
					<textarea
						name="message"
						rows={4}
						required
						className="bg-transparent border-b border-[#5b3644]/20 py-4 outline-none text-[#5b3644] focus:border-[#bfa15f] transition-colors resize-none"
						placeholder="Tell us about your inquiry..."
					/>
				</div>
			</div>

			<button
				type="submit"
				disabled={status === "loading"}
				className="w-full py-5 bg-[#5b3644] text-[#fffaeb] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#bfa15f] transition-all disabled:bg-[#5b3644]/50 flex items-center justify-center gap-2">
				{status === "loading" ? (
					<>
						<FiLoader className="animate-spin" /> Processing
					</>
				) : (
					"Send Inquiry"
				)}
			</button>

			{status === "error" && (
				<p className="text-red-700 text-[10px] uppercase tracking-widest text-center mt-4">
					Something went wrong. Please check your connection and try again.
				</p>
			)}
		</form>
	);
};

/* --- MAIN SECTION COMPONENT --- */
const ContactChannelsSection = () => {
	const [activeChannel, setActiveChannel] = useState<Channel | null>(null);

	return (
		<section
			id="inquiry-form"
			className="bg-[#fffaeb] py-24 md:py-40 px-6 lg:px-20 relative">
			<div className="max-w-screen-2xl mx-auto">
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

			<AnimatePresence>
				{activeChannel && (
					<div className="fixed inset-0 z-[100] flex justify-end">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setActiveChannel(null)}
							className="absolute inset-0 bg-[#5b3644]/40 backdrop-blur-sm"
						/>

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

								<InquiryForm type={activeChannel.title} />
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default ContactChannelsSection;
