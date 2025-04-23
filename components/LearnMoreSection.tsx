"use client";

interface LearnMoreSectionProps {
	className?: string;
}

const LearnMoreSection = ({ className }: LearnMoreSectionProps) => {
	return (
		<div
			className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center ${className}`}>
			<p className="text-[#fffaeb] text-2xl font-light cursor-pointer">
				Learn More
			</p>
			{/* Downward Arrow */}
			<svg
				className="mt-2 w-6 h-6 text-[#fffaeb]"
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
	);
};

export default LearnMoreSection;
