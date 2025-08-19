import { NextResponse } from "next/server"

import { PrismaClient } from "@/lib/generated/prisma"


export async function POST(req: Request) {
    
  try {
    const body = await req.json()
    console.log(body,"Hello")
    const prisma = new PrismaClient()

    console.log(body)


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
    } = body

    // Basic validation
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      )
    }

    // Store in DB
    const enquiry = await prisma.enquiry.create({
      data: {
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
      },
    })

    return NextResponse.json({ success: true, enquiry }, { status: 201 })
  } catch (error) {
    console.error("Error saving enquiry:", error)
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    )
  }
}
