import React from "react";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
	ApplicantEmail,
	ApplicantInquiryData,
} from "@/components/Email/ApplicantEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

// Define the shape of the attachment for Resend
interface EmailAttachment {
	filename: string;
	content: Buffer;
}

export async function POST(req: Request): Promise<NextResponse> {
	try {
		const formData = await req.formData();

		// Type-safe extraction of string fields
		const applicantData: ApplicantInquiryData = {
			name: (formData.get("name") as string) || "Not Provided",
			email: (formData.get("email") as string) || "Not Provided",
			role: (formData.get("role") as string) || "General Application",
			link: (formData.get("link") as string) || "None provided",
		};

		const attachments: EmailAttachment[] = [];

		/**
		 * Helper to process file into Buffer for Resend
		 * Strictly typed to handle the File object from FormData
		 */
		const addFileToAttachments = async (key: string): Promise<void> => {
			const file = formData.get(key) as File | null;
			if (file && file.size > 0) {
				const buffer = Buffer.from(await file.arrayBuffer());
				attachments.push({
					filename: file.name,
					content: buffer,
				});
			}
		};

		// Extract both the Resume and the Portfolio files
		await addFileToAttachments("resume");
		await addFileToAttachments("portfolioFile");

		const { data, error } = await resend.emails.send({
			from: "SP Design Studio Careers <onboarding@resend.dev>",
			to: ["spdesignhyd@gmail.com"],
			subject: `[APPLICANT] ${applicantData.role} — ${applicantData.name}`,
			react: React.createElement(ApplicantEmail, { data: applicantData }),
			attachments: attachments,
		});

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		return NextResponse.json({ success: true, id: data?.id });
	} catch (err: unknown) {
		// Handling 'unknown' error type strictly
		const errorMessage =
			err instanceof Error ? err.message : "Internal Server Error";
		console.error("Apply Route Error:", errorMessage);

		return NextResponse.json(
			{ error: "Submission failed on the server." },
			{ status: 500 }
		);
	}
}
