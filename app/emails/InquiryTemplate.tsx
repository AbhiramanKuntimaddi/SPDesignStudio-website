import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
} from "@react-email/components";

interface EmailProps {
	type: string;
	name: string;
	email: string;
	message: string;
	details: Record<string, string>;
}

export const InquiryTemplate = ({
	type,
	name,
	email,
	message,
	details,
}: EmailProps) => {
	const isApplicant = type?.toLowerCase().includes("applicant");
	const isVendor = type?.toLowerCase().includes("vendor");

	const accentColor = isApplicant
		? "#714d59"
		: isVendor
			? "#5b3644"
			: "#bfa15f";

	return (
		<Html>
			<Head />
			<Preview>
				New {type} Inquiry from {name}
			</Preview>
			<Body style={main}>
				<Container style={container}>
					{/* Header Section */}
					<Section style={{ textAlign: "center", marginBottom: "40px" }}>
						<Text style={logoText}>SP DESIGN STUDIO</Text>
						<Text style={label(accentColor)}>{type} Channel</Text>
					</Section>

					<Heading style={h1}>New Submission</Heading>

					{/* Contact Details Box */}
					<Section style={infoBox}>
						<Text style={text}>
							<strong style={strongLabel}>Name:</strong> {name}
						</Text>
						<Text style={text}>
							<strong style={strongLabel}>Email:</strong> {email}
						</Text>

						{Object.entries(details).map(([key, value]) => (
							<Text key={key} style={text}>
								<strong style={strongLabel}>{key}:</strong> {value}
							</Text>
						))}
					</Section>

					{/* Message Section */}
					<Section style={messageSection}>
						<Text style={messageLabel}>Inquiry Message</Text>
						<Text style={messageText}>&quot;{message}&quot;</Text>
					</Section>

					{/* Button Section Removed as requested */}

					<Hr style={hr} />

					{/* Footer */}
					<Section style={{ textAlign: "center" }}>
						<Text style={footer}>
							This is an automated notification from the SP Design Studio
							digital portal. All inquiries are archived for studio records.
						</Text>
						<Text style={footerURL}>spandanapuppala.in</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default InquiryTemplate;

/* --- THEME STYLES --- */

const main = {
	backgroundColor: "#fffaeb",
	fontFamily: "'Georgia', 'Times New Roman', serif",
	padding: "60px 0",
};

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "50px 60px",
	maxWidth: "600px",
	border: "1px solid #5b364408",
};

const logoText = {
	fontSize: "20px",
	color: "#5b3644",
	margin: "0",
	letterSpacing: "4px",
	fontWeight: "300",
};

const label = (color: string) => ({
	fontSize: "10px",
	textTransform: "uppercase" as const,
	letterSpacing: "3px",
	color: color,
	fontWeight: "700",
	margin: "12px 0 0 0",
});

const h1 = {
	color: "#5b3644",
	fontSize: "28px",
	fontWeight: "300",
	fontStyle: "italic",
	textAlign: "center" as const,
	margin: "40px 0",
};

const infoBox = {
	padding: "24px",
	backgroundColor: "#fcfcfc",
	border: "1px solid #5b364408",
	borderRadius: "2px",
};

const text = {
	color: "#5b3644",
	fontSize: "14px",
	lineHeight: "26px",
	margin: "6px 0",
};

const strongLabel = {
	fontWeight: "600",
	color: "#5b3644",
	marginRight: "8px",
};

const messageSection = {
	marginTop: "40px",
};

const messageLabel = {
	fontSize: "10px",
	textTransform: "uppercase" as const,
	letterSpacing: "2px",
	color: "#5b364440",
	fontWeight: "700",
	marginBottom: "10px",
};

const messageText = {
	color: "#5b3644",
	fontSize: "15px",
	lineHeight: "1.8",
	fontStyle: "italic",
	margin: "0",
};

const hr = {
	borderColor: "#5b364410",
	margin: "50px 0 30px 0",
};

const footer = {
	fontSize: "11px",
	textAlign: "center" as const,
	color: "#5b364460",
	lineHeight: "18px",
	maxWidth: "400px",
	margin: "0 auto 10px auto",
};

const footerURL = {
	fontSize: "11px",
	textAlign: "center" as const,
	color: "#bfa15f",
	fontWeight: "600",
	letterSpacing: "1px",
	margin: "0",
};
