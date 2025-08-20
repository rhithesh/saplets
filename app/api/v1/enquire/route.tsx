import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { Resend } from "resend";
import EnquiryEmail, { EnquiryEmailProps } from "./emaillook";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body: EnquiryEmailProps = await req.json(); // ✅ Use props type here
    const prisma = new PrismaClient();

    const {
      firstName,
      lastName,
      company,
      designation,
      email,
      phone,
      city,
      state,
      country,
      website,
      industry,
      products,
      source,
      message,
      consent,
    } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    const enquiry = await prisma.enquiry.create({ data: body });

    await resend.emails.send({
      from: "Enquiries <no-reply@hithesh.live>",
      to: "shreychandak200@gmail.com",
      subject: `New Enquiry from ${firstName} ${lastName}`,
      react: <EnquiryEmail {...body} />, // ✅ spread works correctly
    });

    return NextResponse.json({ success: true, enquiry }, { status: 201 });
  } catch (error) {
    console.error("Error saving enquiry:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
