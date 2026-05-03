import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, interest, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format the inquiry details
    const inquiryDetails = `
New Contact Form Submission
============================

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Interest: ${interest}

Message:
${message}

Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    `.trim();

    // Send email notification
    if (resend) {
      try {
        await resend.emails.send({
          from: "Website Contact Form <onboarding@resend.dev>", // Change this after domain verification
          to: process.env.CONTACT_EMAIL || "puneet@devkinandanandsons.com",
          subject: `New Contact Form Submission from ${name}`,
          text: inquiryDetails,
          replyTo: email || undefined,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Still log to console as fallback
        console.log(inquiryDetails);
      }
    } else {
      // Log to console if Resend is not configured
      console.log("Resend not configured. Contact form submission:");
      console.log(inquiryDetails);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry. We'll get back to you soon!"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
