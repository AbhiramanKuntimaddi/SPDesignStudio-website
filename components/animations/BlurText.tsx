import { useRef, useEffect, useState } from "react";
import { useSprings, animated, easings } from "@react-spring/web";

const AnimatedSpan = animated.span as React.FC<
    React.HTMLAttributes<HTMLSpanElement>
>;

interface AnimationStyle {
    opacity?: number;
    filter?: string;
    transform?: string;
}

interface BlurTextProps {
    text?: string;
    delay?: number;
    className?: string;
    animateBy?: "words" | "letters";
    direction?: "top" | "bottom";
    threshold?: number;
    rootMargin?: string;
    animationFrom?: AnimationStyle;
    animationTo?: AnimationStyle[];
    easing?: keyof typeof easings;
    onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
    text = "",
    delay = 400, // Extended delay for smoother effect
    className = "",
    animateBy = "words",
    direction = "top",
    threshold = 0.1,
    rootMargin = "0px",
    animationFrom,
    animationTo,
    easing = "easeOutExpo", // Slower easing effect
    onAnimationComplete,
}) => {
    const elements = animateBy === "words" ? text.split(" ") : text.split("");
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);
    const animatedCount = useRef(0);

    const defaultFrom: AnimationStyle =
        direction === "top"
            ? {
                    opacity: 0,
                    filter: "blur(15px)", // Stronger blur effect initially
                    transform: "translate3d(0,-50px,0)",
              }
            : {
                    opacity: 0,
                    filter: "blur(15px)", // Stronger blur effect initially
                    transform: "translate3d(0,50px,0)",
              };

    const defaultTo: AnimationStyle[] = [
        {
            opacity: 0.3,
            filter: "blur(12px)", // Maintain blur effect for a longer duration
            transform:
                direction === "top" ? "translate3d(0,10px,0)" : "translate3d(0,-10px,0)",
        },
        {
            opacity: 0.6,
            filter: "blur(8px)", // Intermediate blur level
            transform:
                direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
        },
        {
            opacity: 0.8,
            filter: "blur(4px)", // Gradual transition to clarity
            transform: "translate3d(0,2px,0)",
        },
        {
            opacity: 1,
            filter: "blur(0px)", // Fully clear text
            transform: "translate3d(0,0,0)",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
            observer.disconnect();
        };
    }, [threshold, rootMargin]);

    const [springs, api] = useSprings(elements.length, () => ({
        from: animationFrom || defaultFrom,
    }));

    useEffect(() => {
        if (!inView) return;

        const keyframes = animationTo || defaultTo;

        elements.forEach((_, i) => {
            (async () => {
                for (const step of keyframes) {
                    await api.start((index) => {
                        if (index === i) {
                            return {
                                ...step,
                                delay: i * delay,
                                config: { easing: easings[easing] },
                            };
                        }
                        return {};
                    });
                }
                animatedCount.current += 1;
                if (animatedCount.current === elements.length && onAnimationComplete) {
                    onAnimationComplete();
                }
            })();
        });
    }, [inView]);

    return (
        <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
            {springs.map((props, index) => (
                <AnimatedSpan
                    key={index}
                    // @ts-expect-error TS doesn't recognize `filter`, but it works
                    style={props}
                    className="inline-block will-change-[transform,filter,opacity]">
                    {elements[index] === " " ? "\u00A0" : elements[index]}
                    {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
                </AnimatedSpan>
            ))}
        </p>
    );
};

export default BlurText;