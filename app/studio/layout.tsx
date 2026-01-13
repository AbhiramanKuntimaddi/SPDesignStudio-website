export const metadata = {
	title: "SP Design Studio | Management",
	description: "Project Portfolio CMS",
};

export default function StudioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/* We use a clean <body> here without your website's 
          Header, Footer, or background colors. 
      */}
			<body style={{ margin: 0, padding: 0 }}>{children}</body>
		</html>
	);
}
