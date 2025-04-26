"use client";

const Footer = () => {
	return (
		<footer className="w-full bg-[#5b3644] text-[#fffaeb] py-4 flex items-center justify-center">
			<p className="text-xs sm:text-sm md:text-base font-light text-center">
				© {new Date().getFullYear()} SP Design Studio - A canvas of artistry and
				dedication, with all rights tastefully reserved. Website brought to life
				by{" "}
				<a
					href="https://akport.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
					className="underline hover:text-[#72505d]">
					the dev
				</a>
				.
			</p>
		</footer>
	);
};

export default Footer;