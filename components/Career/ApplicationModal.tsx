"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { FiUploadCloud, FiCheck, FiX } from "react-icons/fi";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ApplicationModal = ({ isOpen, onClose }: ModalProps) => {
	const [fileName, setFileName] = useState<string | null>(null);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFileName(e.target.files[0].name);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Logic for form submission would go here
		setIsSubmitted(true);
	};

	const handleClose = () => {
		onClose();
		// Reset state after a delay to allow exit animation
		setTimeout(() => {
			setIsSubmitted(false);
			setFileName(null);
		}, 300);
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-10">
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleClose}
						className="absolute inset-0 bg-[#5b3644]/80 backdrop-blur-md"
					/>

					{/* Modal Content */}
					<motion.div
						initial={{ scale: 0.95, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.95, opacity: 0, y: 20 }}
						className="relative w-full max-w-2xl bg-[#fffaeb] p-8 md:p-16 overflow-y-auto max-h-[90vh] shadow-2xl">
						<button
							onClick={handleClose}
							className="absolute top-8 right-8 text-[#5b3644] hover:rotate-90 transition-transform duration-300">
							<FiX size={24} />
						</button>

						{!isSubmitted ? (
							<>
								<h2
									className={`${bdScript.className} text-5xl text-[#5b3644] mb-8`}>
									Apply
								</h2>

								<form className="space-y-8" onSubmit={handleSubmit}>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
										<FormInput label="Full Name" placeholder="Jean-Louis" />
										<FormInput label="Email" placeholder="jean@atelier.com" />
									</div>
									<FormInput
										label="Portfolio Link (optional)"
										placeholder="behance.net/yourname"
									/>

									<div className="space-y-4">
										<label className="text-[10px] uppercase tracking-widest text-[#5b3644]/50 font-bold">
											Resume & Work (PDF)
										</label>
										<div className="relative border-2 border-dashed border-[#bfa15f]/30 p-10 flex flex-col items-center group hover:border-[#bfa15f] transition-colors cursor-pointer">
											<input
												type="file"
												accept=".pdf"
												onChange={handleFileChange}
												className="absolute inset-0 opacity-0 cursor-pointer z-10"
											/>
											{fileName ? (
												<>
													<FiCheck className="text-green-600 mb-4" size={32} />
													<p className="text-[#5b3644] text-sm font-medium text-center">
														{fileName}
													</p>
													<button
														type="button"
														onClick={() => setFileName(null)}
														className="text-[9px] uppercase tracking-widest text-red-400 mt-2 font-bold z-20">
														Remove File
													</button>
												</>
											) : (
												<>
													<FiUploadCloud
														className="text-[#bfa15f] mb-4"
														size={32}
													/>
													<p className="text-[#5b3644]/60 text-sm font-light italic">
														Drag & drop or click to upload
													</p>
													<p className="text-[9px] uppercase tracking-widest text-[#5b3644]/30 mt-2 font-bold">
														Max 20MB
													</p>
												</>
											)}
										</div>
									</div>

									<button className="w-full py-5 bg-[#5b3644] text-[#fffaeb] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#bfa15f] transition-all">
										Submit Application
									</button>
								</form>
							</>
						) : (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="py-20 flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-[#bfa15f]/10 rounded-full flex items-center justify-center text-[#bfa15f] mb-6">
									<FiCheck size={32} />
								</div>
								<h2
									className={`${bdScript.className} text-5xl text-[#5b3644] mb-4`}>
									Merci
								</h2>
								<p className="text-[#5b3644]/60 font-light italic max-w-xs">
									Your application has been received. Our team will review your
									work and reach out shortly.
								</p>
								<button
									onClick={handleClose}
									className="mt-12 text-[10px] uppercase tracking-widest font-bold border-b border-[#bfa15f] pb-1">
									Close Window
								</button>
							</motion.div>
						)}
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

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
			required
			placeholder={placeholder}
			className="bg-transparent border-b border-[#5b3644]/20 py-4 outline-none text-[#5b3644] placeholder:text-[#5b3644]/20 focus:border-[#bfa15f] transition-colors font-light"
		/>
	</div>
);

export default ApplicationModal;
