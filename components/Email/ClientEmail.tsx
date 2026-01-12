// components/emails/ClientEmail.tsx
import * as React from "react";

export interface ClientInquiryData {
	name: string;
	email: string;
	interest: string;
	message: string;
}

export const ClientEmail: React.FC<{ data: ClientInquiryData }> = ({
	data,
}) => (
	<div
		style={{
			backgroundColor: "#faf8f6",
			padding: "60px 20px",
			fontFamily: "'Inter', -apple-system, 'Helvetica Neue', Arial, sans-serif",
		}}>
		<div style={{ maxWidth: "500px", margin: "0 auto" }}>
			<div style={{ textAlign: "center", marginBottom: "40px" }}>
				<div
					style={{
						width: "1px",
						height: "50px",
						backgroundColor: "#000",
						margin: "0 auto 20px",
					}}></div>
				<p
					style={{
						color: "#000",
						letterSpacing: "6px",
						textTransform: "uppercase",
						fontSize: "11px",
						fontWeight: "300",
					}}>
					SP Design Studio
				</p>
			</div>

			<div
				style={{
					backgroundColor: "#ffffff",
					padding: "50px",
					border: "1px solid #e8e4e1",
				}}>
				<p
					style={{
						fontSize: "10px",
						color: "#8c6a5e",
						textTransform: "uppercase",
						letterSpacing: "2px",
						marginBottom: "30px",
					}}>
					Project Inquiry
				</p>

				<h1
					style={{
						fontSize: "28px",
						color: "#1a1a1a",
						fontWeight: "300",
						marginBottom: "5px",
					}}>
					{data.name}
				</h1>
				<p style={{ fontSize: "13px", color: "#999", margin: "0 0 40px 0" }}>
					{data.email}
				</p>

				<div style={{ marginBottom: "35px" }}>
					<p
						style={{
							fontSize: "10px",
							color: "#999",
							textTransform: "uppercase",
							letterSpacing: "1px",
							marginBottom: "8px",
						}}>
						Location / Interest
					</p>
					<p style={{ fontSize: "16px", color: "#1a1a1a", margin: 0 }}>
						{data.interest}
					</p>
				</div>

				<div style={{ marginBottom: "10px" }}>
					<p
						style={{
							fontSize: "10px",
							color: "#999",
							textTransform: "uppercase",
							letterSpacing: "1px",
							marginBottom: "8px",
						}}>
						Message
					</p>
					<p
						style={{
							fontSize: "15px",
							color: "#444",
							margin: 0,
							lineHeight: "1.8",
							fontWeight: "300",
						}}>
						{data.message}
					</p>
				</div>
			</div>
			<p
				style={{
					textAlign: "center",
					fontSize: "10px",
					color: "#bbb",
					marginTop: "30px",
					letterSpacing: "2px",
				}}>
				EST. 2026 — INTERNAL USE ONLY
			</p>
		</div>
	</div>
);
