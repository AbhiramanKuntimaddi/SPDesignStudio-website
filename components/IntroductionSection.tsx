import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";
import BlurText from "./animations/BlurText";

const IntroductionSection = () => {
	return (
		<section className="flex min-h-screen w-full flex-col md:flex-row">
			{/* Left Side - Full Height Image (Hidden on small screens) */}
			<motion.div
				className="relative hidden md:block w-1/2 h-screen bg-cover bg-center"
				style={{ backgroundImage: `url('./images/intro-left.jpg')` }}
				initial={{ x: "-100%", opacity: 0 }}
				whileInView={{ x: "0%", opacity: 1 }}
				transition={{ duration: 1, ease: "easeOut" }}>
				{/* Overlay for opacity */}
				<div className="absolute inset-0 bg-zinc-900 bg-opacity-45" />
			</motion.div>

			{/* Right Side */}
			<div className="w-full md:w-1/2 h-screen flex flex-col items-start justify-center p-10 md:p-24 bg-[#5b3644] gap-6">
				{/* Animated Header Text */}
				<BlurText
					className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#fffaeb] text-left"
					text="Transform Your Space. Reflect Your Story!!!"
					delay={150}
					animateBy="words"
					direction="top"
				/>

				{/* Animated Paragraph Text */}
				<ScrollReveal
					containerClassName="max-w-3xl mx-auto"
					textClassName="text-sm sm:text-base md:text-xl lg:text-2xl font-light text-[#fffaeb] leading-relaxed"
					enableBlur={true}
					baseOpacity={0}
					baseRotation={5}
					blurStrength={5}>
					{`At SP Design Studio, we believe interior design is more than aesthetics—it's about crafting meaningful spaces that elevate the way you live, work, and feel.
Our team of dedicated, experienced designers combines creative insight with technical precision to transform everyday environments into timeless, functional works of art.
Whether you're envisioning a serene home retreat or a refined commercial space, we collaborate closely to ensure every detail mirrors your identity, values, and lifestyle.`}
				</ScrollReveal>

				{/* Modern Interactive Link as CTA */}
				<motion.a
					href="#portfolio" // or the appropriate anchor/route
					whileHover={{ y: -3 }}
					transition={{ type: "tween", duration: 0.3 }}
					className="mt-6 inline-flex items-center text-sm sm:text-base md:text-xl font-medium text-[#fffaeb] border-b border-transparent hover:border-[#fffaeb]">
					View Our Work
					<svg
						className="ml-2 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</motion.a>
			</div>
		</section>
	);
};

export default IntroductionSection;
