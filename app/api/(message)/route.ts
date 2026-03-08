import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, number, interested, message } = body;

    // ✅ Create transporter using your Gmail credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_GMAIL, // your Gmail (sender)
        pass: process.env.MY_GMAIL_APP_PASSWORD,
      },
    });

    // ✅ Email details — from user → to you
    const mailOptions = {
      from: `${name} <${email}>`, // shows user's name and email
      to: process.env.MY_GMAIL, // goes to you
      replyTo: email, // so you can reply easily
      subject: "🚀 New Demo Class Request",
      text: `
You have a new demo class request!

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${number || "Not provided"}
📘 Interested in: ${interested}
💬 Message:
${message || "No additional message."}
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending failed:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email" }),
      { status: 500 }
    );
  }
}
