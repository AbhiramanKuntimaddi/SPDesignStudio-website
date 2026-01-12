"use client";

const Footer = () => {
	return (
		<footer className="w-full bg-[#5b3644] text-[#fffaeb] py-16 px-6">
			<div className="max-w-6xl mx-auto flex flex-col items-center">
				{/* Centered, refined line instead of a full-width border */}
				<div className="w-24 h-[1px] bg-[#fffaeb]/10 mb-12" />

				<div className="flex flex-col items-center space-y-6">
					<p className="text-[9px] md:text-[11px] uppercase tracking-[0.5em] opacity-30 text-center leading-loose max-w-3xl">
						© {new Date().getFullYear()} SP Design Studio — A canvas of
						artistry and dedication. All rights tastefully reserved.
					</p>

					<div className="text-[10px] uppercase tracking-[0.3em] opacity-20 font-light">
						Website brought to life by{" "}
						<a
							href="https://akport.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-4 hover:text-[#bfa15f] transition-colors">
							AK
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
