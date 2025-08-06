// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// interface ContactRequestBody {
//   name: string;
//   email: string;
//   message: string;
// }

// export async function POST(request: Request) {
//   try {
//     (await request.json()) as ContactRequestBody;

//     // Here you would typically:
//     // 1. Validate the input
//     // 2. Send an email using a service like SendGrid, AWS SES, etc.
//     // 3. Store the message in a database if needed

//     // For now, we'll just simulate a successful response

//     return NextResponse.json(
//       { message: "Message sent successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     const errorMessage =
//       error instanceof Error ? error.message : "Failed to send message";
//     return NextResponse.json({ message: errorMessage }, { status: 500 });
//   }
// }
// app/api/contact/route.ts

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Parse the incoming JSON body from the request
  const { name, email, message } = await request.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  // Create a transporter object using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address from .env.local
      pass: process.env.GMAIL_PASS, // Your App Password from .env.local
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: process.env.GMAIL_USER, // Sender address
      to: process.env.GMAIL_USER, // The email you want to receive messages at
      subject: `New Contact Form Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Return a success response
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    // Return an error response
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
