export interface ApproachStep {
	number: string;
	title: string;
	description: string;
}

export const approachSteps: ApproachStep[] = [
	{
		number: "01",
		title: "Discovery & Consultation",
		description:
			"We begin with deep listening—understanding your rhythm, habits, and lifestyle to establish a foundation for a space that is uniquely yours.",
	},
	{
		number: "02",
		title: "Concept & Moodboarding",
		description:
			"Translating insights into a curated palette of textures, shapes, and tones that define the atmospheric direction of the project.",
	},
	{
		number: "03",
		title: "Design & Refinement",
		description:
			"Our studio blends aesthetic clarity with functional layouts, ensuring your space feels as effortless as it looks.",
	},
	{
		number: "04",
		title: "Material Selections",
		description:
			"We carefully source honest materials and custom finishes to create cohesive, tactile, and enduring living experiences.",
	},
	{
		number: "05",
		title: "Execution & Styling",
		description:
			"We oversee the final realization, from technical implementation to the final styling touches that breathe life into the room.",
	},
	{
		number: "06",
		title: "Project Handover",
		description:
			"The final reveal—a space designed with soul, story, and intention, ready for you to inhabit and make your own.",
	},
];
