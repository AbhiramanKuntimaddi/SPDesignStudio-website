import React from "react";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ClientEmail } from "@/components/Email/ClientEmail";
import { VendorEmail } from "@/components/Email/VendorEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

// Define strict interfaces for our data objects
interface VendorInquiryData {
	name: string;
	company: string;
	service: string;
	website: string;
}

interface ClientInquiryData {
	name: string;
	email: string;
	interest: string;
	message: string;
}

export async function POST(req: Request): Promise<NextResponse> {
	try {
		const formData = await req.formData();
		const type = (formData.get("type") as string) || "";
		const name = (formData.get("name") as string) || "Anonymous";
		const email = (formData.get("email") as string) || "";

		// --- VENDOR LOGIC ---
		if (type.toLowerCase().includes("vendor")) {
			const vendorData: VendorInquiryData = {
				name,
				company: (formData.get("companyName") as string) || "N/A",
				service: (formData.get("serviceCategory") as string) || "N/A",
				website: (formData.get("website") as string) || "N/A",
			};

			const vendorRes = await resend.emails.send({
				// Updated format to ensure Resend accepts the 'from' field
				from: "SP Design Studio <onboarding@resend.dev>",
				to: ["spdesignhyd@gmail.com"],
				subject: `[VENDOR] ${vendorData.company} — ${vendorData.service}`,
				react: React.createElement(VendorEmail, { data: vendorData }),
			});

			if (vendorRes.error) {
				// Return error.message specifically to avoid {} in console
				return NextResponse.json(
					{ error: vendorRes.error.message || "Vendor email failed" },
					{ status: 500 }
				);
			}
			return NextResponse.json({ success: true });
		}

		// --- CLIENT LOGIC ---
		const clientData: ClientInquiryData = {
			name,
			email,
			interest: (formData.get("projectLocation") as string) || "Inquiry",
			message: (formData.get("message") as string) || "",
		};

		const clientRes = await resend.emails.send({
			from: "SP Design Studio <onboarding@resend.dev>",
			to: ["spdesignhyd@gmail.com"],
			subject: `[CLIENT] ${clientData.name} — ${clientData.interest}`,
			react: React.createElement(ClientEmail, { data: clientData }),
		});

		if (clientRes.error) {
			return NextResponse.json(
				{ error: clientRes.error.message || "Client email failed" },
				{ status: 500 }
			);
		}

		return NextResponse.json({ success: true });
	} catch (err: unknown) {
		// Handling the unknown error type strictly
		const errorMessage =
			err instanceof Error ? err.message : "Internal Server Error";
		console.error("Route Error:", errorMessage);

		return NextResponse.json({ error: errorMessage }, { status: 500 });
	}
}
