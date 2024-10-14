import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();  // No need for dotenv
  
  try {
    const reCaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.SECRET_API_CAPTCHA}&response=${body.gRecaptchaToken}`,
    });

    const reCaptchaRes = await reCaptchaResponse.json();

    if (reCaptchaRes?.score > 0.5) {
      // Zoho Mail SMTP Transporter
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.zoho.com",
        auth: {
          user: process.env.ZOHO_EMAIL,   // Zoho email address
          pass: process.env.ZOHO_PASSWORD, // Zoho email password
        },
        secure: true,
      });

      // Client email data
      const mailDataForClient = {
        from: `Consultation <${process.env.ZOHO_EMAIL}>`,
        to: body.email,
        subject: `Message From Quatechbit`,
        html: `
          <table cellpadding='0' cellspacing='0' border='0' width='100%' style='max-width:600px; margin:auto; background-color:#ffffff;'>
            <tr><td style='padding:20px;text-align:center;background-color:#f5f5f5;'><h1>Thank you for contacting us</h1></td></tr>
            <tr><td style='padding:20px;'><p>Dear ${body.name},</p><p>We will get back to you soon.</p><p>Best regards,</p><p>Admin & Team (CoderArt Studio)</p></td></tr>
          </table>
          <br><p style="color:red;">This mail is auto-generated. Please do not reply.</p>`
      };

      // Team email data
      const mailDataForTeam = {
        from: `Admin <${process.env.ZOHO_EMAIL}>`,
        to: "admin@Quatechbit.com",
        cc: "smartyjahid@gmail.com",
        subject: `Message From Quatechbit`,
        html: `
          <div style="background-color: #f2f2f2; padding:20px;">
            <h1>Client Contact</h1><p>We have received a message from ${body.name}.</p>
            <ul><li>Email: ${body.email}</li><li>Message: ${body.message}</li></ul>
          </div>`
      };

      // Send emails
      await transporter.sendMail(mailDataForClient);
      await transporter.sendMail(mailDataForTeam);

      return NextResponse.json({
        status: "Success",
        message: "Emails sent",
      });
    } else {
      return NextResponse.json({
        status: "Failure",
        message: "reCaptcha verification failed",
      });
    }
  } catch (err) {
    console.error("Error in catch block: ", err);
    return NextResponse.json({
      status: "Failure",
      message: "Error submitting the enquiry form",
    });
  }
}
