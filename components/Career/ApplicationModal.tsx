"use client";

import { useState, useRef, ChangeEvent, FormEvent, FC, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { FiUploadCloud, FiCheck, FiX, FiFileText } from "react-icons/fi";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	jobTitle: string;
}

const ApplicationModal: FC<ModalProps> = ({ isOpen, onClose, jobTitle }) => {
	const [resumeFile, setResumeFile] = useState<File | null>(null);
	const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const resumeRef = useRef<HTMLInputElement>(null);
	const portfolioRef = useRef<HTMLInputElement>(null);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const form = e.currentTarget;
		const formData = new FormData(form);

		/**
		 * STRAPI FILE UPLOAD LOGIC
		 * Strapi expects a "data" field with JSON and files prefixed with "files."
		 */
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			portfolioLink: formData.get("link"),
			appliedRole: jobTitle, // Passed from our Strapi Job listing
		};

		const strapiPayload = new FormData();
		strapiPayload.append("data", JSON.stringify(data));

		if (resumeFile) {
			// "resume" matches the field name in your Strapi 'Application' collection
			strapiPayload.append("files.resume", resumeFile);
		}
		if (portfolioFile) {
			// "portfolioFile" matches the field name in your Strapi 'Application' collection
			strapiPayload.append("files.portfolio", portfolioFile);
		}

		try {
			// We call your tunnel URL directly or through the /api proxy
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL}/api/applications`,
				{
					method: "POST",
					body: strapiPayload,
					// Note: Do NOT set Content-Type header; browser handles it for FormData
				}
			);

			if (response.ok) {
				setIsSubmitted(true);
			} else {
				const errorLog = await response.json();
				console.error("Strapi Error:", errorLog);
				alert(
					"Submission failed. Ensure the 'Applications' collection in Strapi has 'Create' permissions for Public."
				);
			}
		} catch (error) {
			console.error("Connection Error:", error);
			alert("Error connecting to the server.");
		} finally {
			setIsLoading(false);
		}
	};

	const handleClose = (): void => {
		onClose();
		setTimeout(() => {
			setIsSubmitted(false);
			setResumeFile(null);
			setPortfolioFile(null);
		}, 300);
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-10">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleClose}
						className="absolute inset-0 bg-[#5b3644]/80 backdrop-blur-md"
					/>

					<motion.div
						initial={{ scale: 0.95, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.95, opacity: 0, y: 20 }}
						className="relative w-full max-w-2xl bg-[#fffaeb] p-8 md:p-16 overflow-y-auto max-h-[90vh] shadow-2xl">
						<button
							onClick={handleClose}
							className="absolute top-8 right-8 text-[#5b3644] hover:rotate-90 transition-transform duration-300 z-50">
							<FiX size={24} />
						</button>

						{!isSubmitted ? (
							<>
								<h2
									className={`${bdScript.className} text-5xl text-[#5b3644] mb-2`}>
									Apply
								</h2>
								<p className="text-[10px] uppercase tracking-widest text-[#bfa15f] font-bold mb-8">
									Position: {jobTitle}
								</p>

								<form className="space-y-8" onSubmit={handleSubmit}>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
										<FormInput
											name="name"
											label="Full Name"
											placeholder="Jean-Louis"
											required
										/>
										<FormInput
											name="email"
											label="Email"
											placeholder="jean@spdesign.com"
											type="email"
											required
										/>
									</div>

									<FormInput
										name="link"
										label="Portfolio Link (optional)"
										placeholder="behance.net/yourname"
										required={false}
									/>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<FileUploadZone
											label="Resume / CV (PDF)"
											file={resumeFile}
											setFile={setResumeFile}
											inputRef={resumeRef}
											required
										/>
										<FileUploadZone
											label="Portfolio (PDF - Optional)"
											file={portfolioFile}
											setFile={setPortfolioFile}
											inputRef={portfolioRef}
										/>
									</div>

									<button
										type="submit"
										disabled={isLoading || !resumeFile}
										className="w-full py-5 bg-[#5b3644] text-[#fffaeb] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#bfa15f] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
										{isLoading ? "Transmitting..." : "Submit Application"}
									</button>
								</form>
							</>
						) : (
							<SuccessView
								jobTitle={jobTitle}
								bdScriptClass={bdScript.className}
								onDone={handleClose}
							/>
						)}
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

/* --- SUB-COMPONENTS (Keep same as your original) --- */

const FileUploadZone: FC<FileUploadZoneProps> = ({
	label,
	file,
	setFile,
	inputRef,
	required = false,
}) => (
	<div className="space-y-4">
		<label className="text-[10px] uppercase tracking-widest text-[#5b3644]/50 font-bold">
			{label} {required && "*"}
		</label>
		<div
			onClick={() => inputRef.current?.click()}
			className={`relative border-2 border-dashed p-6 flex flex-col items-center group transition-all cursor-pointer min-h-[140px] justify-center
      ${file ? "border-green-600/30 bg-green-50/20" : "border-[#bfa15f]/30 hover:border-[#bfa15f]"}`}>
			<input
				ref={inputRef}
				type="file"
				accept=".pdf"
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					e.target.files && setFile(e.target.files[0])
				}
				className="hidden"
			/>
			{file ? (
				<div className="text-center w-full">
					<FiFileText className="text-green-600 mx-auto mb-2" size={24} />
					<p className="text-[#5b3644] text-[11px] font-medium truncate px-2">
						{file.name}
					</p>
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							setFile(null);
						}}
						className="text-[9px] uppercase tracking-tighter text-red-500 mt-2 font-bold hover:underline">
						Remove
					</button>
				</div>
			) : (
				<>
					<FiUploadCloud
						className="text-[#bfa15f]/40 group-hover:text-[#bfa15f] mb-2 transition-colors"
						size={24}
					/>
					<p className="text-[#5b3644]/40 text-[10px] font-light italic">
						Click to upload PDF
					</p>
				</>
			)}
		</div>
	</div>
);

const FormInput: FC<FormInputProps> = ({
	label,
	placeholder,
	name,
	required = true,
	type = "text",
}) => (
	<div className="flex flex-col gap-2">
		<label className="text-[10px] uppercase tracking-widest text-[#5b3644]/50 font-bold">
			{label}
		</label>
		<input
			name={name}
			type={type}
			required={required}
			placeholder={placeholder}
			className="bg-transparent border-b border-[#5b3644]/20 py-4 outline-none text-[#5b3644] placeholder:text-[#5b3644]/20 focus:border-[#bfa15f] transition-colors font-light text-sm"
		/>
	</div>
);

const SuccessView: FC<SuccessViewProps> = ({
	jobTitle,
	bdScriptClass,
	onDone,
}) => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		className="py-20 flex flex-col items-center text-center">
		<div className="w-16 h-16 bg-[#bfa15f]/10 rounded-full flex items-center justify-center text-[#bfa15f] mb-6">
			<FiCheck size={32} />
		</div>
		<h2 className={`${bdScriptClass} text-5xl text-[#5b3644] mb-4`}>Merci</h2>
		<p className="text-[#5b3644]/60 font-light italic max-w-xs">
			Your application for {jobTitle} has been received. Our team will review
			your work shortly.
		</p>
		<button
			onClick={onDone}
			className="mt-12 text-[10px] uppercase tracking-widest font-bold border-b border-[#bfa15f] pb-1">
			Back to Careers
		</button>
	</motion.div>
);

// Types
interface FileUploadZoneProps {
	label: string;
	file: File | null;
	setFile: (file: File | null) => void;
	inputRef: RefObject<HTMLInputElement | null>;
	required?: boolean;
}
interface FormInputProps {
	label: string;
	placeholder: string;
	name: string;
	required?: boolean;
	type?: string;
}
interface SuccessViewProps {
	jobTitle: string;
	bdScriptClass: string;
	onDone: () => void;
}

export default ApplicationModal;
