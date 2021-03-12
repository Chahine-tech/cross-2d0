import nodemailer from "nodemailer"

export default async function sendMail({ from = process.env.MAILER_FROM, to, subject, text, html }) {
  let transporter = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: false,
    ignoreTLS: true
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });
}