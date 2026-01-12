// team.ts
export interface TeamMember {
	name: string;
	role: string;
	description?: string;
	avatarUrl?: string;
	quote?: string;
}

export const team: TeamMember[] = [
	{
		name: "Nanda, Kumar",
		role: "Manager",
		description: "Turns ideas into immersive visual experiences.",
		avatarUrl: "/images/luca.jpg",
	},
	{
		name: "Keerthana, Girish",
		role: "Architect",
		description: "Designs spaces that balance aesthetics and functionality.",
		avatarUrl: "/images/team/keerthana.jpeg",
	},
	{
		name: "Mahima, Gurram",
		role: "Jr. Designer",
		description: "Brings color, texture, and life to every design.",
		avatarUrl: "/images/team/mahima.jpeg",
	},
];
