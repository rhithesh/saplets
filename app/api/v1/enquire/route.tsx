import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import EnquiryEmail, { EnquiryEmailProps } from "./emaillook";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body: EnquiryEmailProps = await req.json();

    const {
      firstName,
      lastName,
      email,
      message,
    } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    // Render email template as HTML
    const html = await render(<EnquiryEmail {...body} />); // ⚠ ensure await here

    // Send mail
    await transporter.sendMail({
      from: `"Enquiries" <${process.env.SMTP_USER}>`,
      to: "spinachachiever@gmail.com",
      subject: `New Enquiry from ${firstName} ${lastName ?? ""}`,
      html,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error saving enquiry:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
