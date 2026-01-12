// components/emails/ApplicantEmail.tsx
import * as React from "react";

export interface ApplicantInquiryData {
	name: string;
	email: string;
	role: string;
	link: string;
}

export const ApplicantEmail: React.FC<{ data: ApplicantInquiryData }> = ({
	data,
}) => (
	<div
		style={{
			backgroundColor: "#fcfcfc",
			padding: "50px 20px",
			fontFamily: "Didot, 'Bodoni MT', 'Noto Serif Display', serif",
		}}>
		<div
			style={{
				maxWidth: "600px",
				margin: "0 auto",
				backgroundColor: "#ffffff",
				padding: "60px",
				border: "1px solid #eee",
			}}>
			<header
				style={{
					marginBottom: "50px",
					borderBottom: "1.5px solid #1a1a1a",
					paddingBottom: "20px",
				}}>
				<p
					style={{
						letterSpacing: "5px",
						textTransform: "uppercase",
						fontSize: "10px",
						margin: "0 0 10px 0",
						color: "#a3a3a3",
					}}>
					SP Design Studio / Careers
				</p>
				<h1
					style={{
						fontSize: "42px",
						fontWeight: "normal",
						margin: 0,
						color: "#1a1a1a",
						letterSpacing: "-1px",
					}}>
					{data.name}
				</h1>
			</header>

			<div style={{ marginBottom: "40px" }}>
				<p
					style={{
						fontSize: "11px",
						textTransform: "uppercase",
						color: "#a3a3a3",
						letterSpacing: "2px",
						margin: "0 0 8px 0",
					}}>
					Intent
				</p>
				<p style={{ fontSize: "20px", margin: "0 0 30px 0", color: "#1a1a1a" }}>
					Application for {data.role}
				</p>

				<p
					style={{
						fontSize: "11px",
						textTransform: "uppercase",
						color: "#a3a3a3",
						letterSpacing: "2px",
						margin: "0 0 8px 0",
					}}>
					Portfolio
				</p>
				<a
					href={data.link}
					style={{
						fontSize: "16px",
						color: "#8c6a5e",
						textDecoration: "none",
						borderBottom: "1px solid #8c6a5e",
					}}>
					Review Digital Work ↗
				</a>
			</div>

			<div
				style={{
					padding: "30px",
					backgroundColor: "#1a1a1a",
					marginTop: "50px",
				}}>
				<p
					style={{
						margin: 0,
						fontSize: "12px",
						lineHeight: "1.6",
						fontWeight: "300",
						color: "#ffffff",
						letterSpacing: "0.5px",
					}}>
					The applicant&quot;s CV/Resume is attached to this transmission. <br />
					Direct Correspondence:{" "}
					<span style={{ color: "#c4a484" }}>{data.email}</span>
				</p>
			</div>
		</div>
	</div>
);
