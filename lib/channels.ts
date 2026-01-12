export interface Channel {
	title: string;
	subtitle: string;
	description: string;
	cta: string;
}

export const channels: Channel[] = [
	{
		title: "Clients",
		subtitle: "New Projects",
		description:
			"Whether you are looking to transform a residence or a commercial space, we are ready to bring your vision to life.",
		cta: "Start a Project",
	},
	{
		title: "Vendors",
		subtitle: "Partnerships",
		description:
			"We are always looking to expand our network of high-end artisans, suppliers, and skilled contractors.",
		cta: "Join Network",
	},
	{
		title: "Applicants",
		subtitle: "Careers",
		description:
			"Join our collective of designers and architects. We are always seeking passionate talent to join our studio.",
		cta: "View Openings",
	},
];
