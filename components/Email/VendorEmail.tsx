// components/emails/VendorEmail.tsx
import * as React from "react";

export interface VendorInquiryData {
	name: string;
	company: string;
	service: string;
	website: string;
}

export const VendorEmail: React.FC<{ data: VendorInquiryData }> = ({
	data,
}) => (
	<div
		style={{
			backgroundColor: "#ffffff",
			padding: "40px",
			fontFamily: "'SF Mono', 'Menlo', 'Courier New', monospace",
		}}>
		<div
			style={{
				maxWidth: "600px",
				margin: "0 auto",
				border: "2px solid #1a1a1a",
			}}>
			<div
				style={{
					padding: "15px 25px",
					backgroundColor: "#1a1a1a",
					display: "flex",
					justifyContent: "space-between",
					color: "#fff",
				}}>
				<span style={{ fontSize: "12px", letterSpacing: "2px" }}>
					SP_DESIGN_STUDIO // VENDOR_INTAKE
				</span>
			</div>

			<div style={{ padding: "40px" }}>
				<h2
					style={{
						fontSize: "22px",
						margin: "0 0 30px 0",
						borderBottom: "1px solid #eee",
						paddingBottom: "10px",
					}}>
					{data.company.toUpperCase()}
				</h2>

				<table width="100%" style={{ borderCollapse: "collapse" }}>
					<tr>
						<td
							style={{
								padding: "12px 0",
								borderBottom: "1px solid #f0f0f0",
								color: "#888",
								fontSize: "12px",
							}}>
							POINT_OF_CONTACT
						</td>
						<td
							style={{
								padding: "12px 0",
								borderBottom: "1px solid #f0f0f0",
								textAlign: "right",
								fontSize: "14px",
							}}>
							{data.name}
						</td>
					</tr>
					<tr>
						<td
							style={{
								padding: "12px 0",
								borderBottom: "1px solid #f0f0f0",
								color: "#888",
								fontSize: "12px",
							}}>
							CATEGORY
						</td>
						<td
							style={{
								padding: "12px 0",
								borderBottom: "1px solid #f0f0f0",
								textAlign: "right",
								fontSize: "14px",
							}}>
							{data.service}
						</td>
					</tr>
					<tr>
						<td
							style={{
								padding: "12px 0",
								borderBottom: "1px solid #f0f0f0",
								color: "#888",
								fontSize: "12px",
							}}>
							WEBSITE_URL
						</td>
						<td
							style={{
								padding: "12px 0",
								borderBottom: "1px solid #f0f0f0",
								textAlign: "right",
								fontSize: "14px",
							}}>
							<a
								href={data.website}
								style={{ color: "#1a1a1a", textDecoration: "underline" }}>
								LINK
							</a>
						</td>
					</tr>
				</table>

				<div
					style={{
						marginTop: "40px",
						padding: "15px",
						backgroundColor: "#f9f9f9",
						fontSize: "11px",
						color: "#666",
						lineHeight: "1.5",
					}}>
					LOG_ENTRY: Verified vendor submission via SP Design Studio digital
					portal. System status: Pending review.
				</div>
			</div>
		</div>
	</div>
);
