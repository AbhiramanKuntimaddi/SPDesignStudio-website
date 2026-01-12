export interface Job {
	id: string;
	title: string;
	location: string;
	type: string;
	description: string;
}

export const jobs: Job[] = [
	{
		id: "sr-designer",
		title: "Senior Interior Designer",
		location: "Hyderabad",
		type: "Full-time",
		description:
			"We are seeking a visionary Senior Interior Designer with 5+ years of experience in luxury residential projects. You will be responsible for leading design concepts, managing high-profile clients, and overseeing the project lifecycle from mood boards to site execution.",
	},
	{
		id: "jr-designer",
		title: "Junior Interior Designer",
		location: "Hyderabad",
		type: "Full-time",
		description:
			"A creative and detail-oriented Junior Designer to support our senior team. You should have a strong grasp of technical drawings, material palettes, and 3D modeling. Ideal candidates have 1-2 years of experience in high-end design.",
	},
	{
		id: "intern-designer",
		title: "Design Intern",
		location: "Hyderabad",
		type: "Internship",
		description:
			"Join our atelier as a Design Intern to gain hands-on experience in the luxury interior space. You will assist with material sourcing, library management, and digital drafting. We look for students or recent graduates with a passion for craftsmanship.",
	},
];
