"use client";

interface LearnMoreSectionProps {
  className?: string;
}

const LearnMoreSection = ({ className = "" }: LearnMoreSectionProps) => {
  return (
    // The "hidden sm:flex" class hides the element on extra-small screens and displays it as a flex container starting at the "sm" breakpoint.
    <div
      className={`absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-full px-6 justify-center items-center hidden sm:flex ${className}`}
    >
      <div className="flex flex-col items-center gap-1">
        <p className="text-[#fffaeb] text-xl sm:text-2xl font-light cursor-pointer text-center transition-colors duration-200 hover:text-white">
          Learn More
        </p>
        <svg
          className="w-5 sm:w-6 h-5 sm:h-6 text-[#fffaeb] transition-transform duration-300 hover:-translate-y-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
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