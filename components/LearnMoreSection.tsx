"use client";

interface LearnMoreSectionProps {
	className?: string;
}

const LearnMoreSection = ({}: LearnMoreSectionProps) => {
	return (
		<div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-full px-6 flex justify-center items-center">
			<div className="flex flex-col items-center gap-1">
				<p className="text-[#fffaeb] text-xl sm:text-2xl font-light cursor-pointer text-center">
					Learn More
				</p>
				<svg
					className="w-5 sm:w-6 h-5 sm:h-6 text-[#fffaeb]"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>
		</div>
	);
};

export default LearnMoreSection;
