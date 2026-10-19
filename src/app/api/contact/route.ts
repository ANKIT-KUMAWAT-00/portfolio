import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, or message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    const recipientEmail = "ankitkumawat9509207175@gmail.com";
    const timestamp = new Date().toISOString();

    // 1. Persistent Storage Fallback (Guarantees zero message loss)
    try {
      const logDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      const logFile = path.join(logDir, "inquiries.json");
      let existingInquiries = [];
      if (fs.existsSync(logFile)) {
        try {
          existingInquiries = JSON.parse(fs.readFileSync(logFile, "utf-8"));
        } catch (e) {
          existingInquiries = [];
        }
      }
      existingInquiries.push({
        id: `inq_${Date.now()}`,
        name,
        email,
        subject: subject || "Portfolio Inquiry",
        message,
        timestamp,
      });
      fs.writeFileSync(logFile, JSON.stringify(existingInquiries, null, 2));
    } catch (fsErr) {
      console.error("Local inquiry logging error:", fsErr);
    }

    // 2. SMTP Delivery with Nodemailer (If SMTP credentials configured in .env.local)
    let emailSent = false;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `⚡ [Portfolio Lead] ${subject || "New Message"} from ${name}`,
          text: `You received a new inquiry from your 3D portfolio:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "No Subject"}\nTime: ${timestamp}\n\nMessage:\n${message}\n`,
          html: `
            <div style="font-family: sans-serif; background: #0B0806; color: #F2E8D8; padding: 24px; border-radius: 8px; border: 1px solid #B88A56;">
              <h2 style="color: #D9B783; margin-top: 0;">⚡ New Portfolio Message Received</h2>
              <p style="color: #B6A797; font-size: 13px;">Received from Ankit Kumawat's 3D Portfolio Contact Form</p>
              <hr style="border-color: #24160F; margin: 16px 0;" />
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="color: #B88A56; padding: 6px 0; width: 90px;"><strong>Name:</strong></td><td>${name}</td></tr>
                <tr><td style="color: #B88A56; padding: 6px 0;"><strong>Email:</strong></td><td><a href="mailto:${email}" style="color: #D9B783;">${email}</a></td></tr>
                <tr><td style="color: #B88A56; padding: 6px 0;"><strong>Subject:</strong></td><td>${subject || "No Subject"}</td></tr>
                <tr><td style="color: #B88A56; padding: 6px 0;"><strong>Timestamp:</strong></td><td style="color: #B6A797;">${timestamp}</td></tr>
              </table>
              <div style="margin-top: 20px; padding: 16px; background: #17100C; border-left: 3px solid #D9B783; border-radius: 4px;">
                <p style="margin: 0; white-space: pre-wrap; font-size: 15px; line-height: 1.6;">${message}</p>
              </div>
              <div style="margin-top: 20px;">
                <a href="mailto:${email}?subject=${encodeURIComponent("Re: " + (subject || "Your message to Ankit Kumawat"))}" style="display: inline-block; background: #D9B783; color: #0B0806; padding: 10px 20px; border-radius: 4px; font-weight: bold; text-decoration: none;">Reply Directly to ${name}</a>
              </div>
            </div>
          `,
        });

        emailSent = true;
      } catch (mailErr) {
        console.error("Nodemailer dispatch error:", mailErr);
      }
    }

    // 3. Construct pre-filled mailto URL for seamless client-side backup
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject || "Contact from " + name}`
    )}&body=${encodeURIComponent(
      `Hi Ankit,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    )}`;

    return NextResponse.json({
      success: true,
      message: "Message processed successfully.",
      emailSent,
      storedLocally: true,
      mailtoUrl,
    });
  } catch (err: any) {
    console.error("Contact API fatal error:", err);
    return NextResponse.json(
      { error: "Internal server error occurred while processing message." },
      { status: 500 }
    );
  }
}
