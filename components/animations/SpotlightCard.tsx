import React, { useRef, useState } from "react";

interface Position {
	x: number;
	y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
	className?: string;
	spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
	children,
	className = "",
	spotlightColor = "rgba(255, 247, 236, 0.15)", // soft, elegant glow
}) => {
	const divRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);

	const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
		if (!divRef.current) return;
		const rect = divRef.current.getBoundingClientRect();
		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	const handleMouseEnter = () => setOpacity(0.15);
	const handleMouseLeave = () => setOpacity(0);

	return (
		<div
			ref={divRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`relative rounded-2xl border border-[#fff7ec]/20 backdrop-blur-xl overflow-hidden p-8 ${className}`}>
			<div
				className="pointer-events-none absolute inset-0 transition-all duration-500 ease-in-out"
				style={{
					opacity,
					background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 120%)`,
				}}
			/>
			{children}
		</div>
	);
};

export default SpotlightCard;
