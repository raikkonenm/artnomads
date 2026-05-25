import { NextResponse } from "next/server";

const RESEND_EMAIL_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_TO_EMAIL = "artcnomads@gmail.com";
const MAX_MESSAGE_LENGTH = 10_000;

type ContactPayload = {
  role?: unknown;
  projectType?: unknown;
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function requiredString(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();

  if (!trimmed || trimmed.length > maxLength) {
    return null;
  }

  return trimmed;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const role = requiredString(body.role, 80);
  const projectType = requiredString(body.projectType, 100);
  const name = requiredString(body.name, 120);
  const email = requiredString(body.email, 254);
  const message = requiredString(body.message, MAX_MESSAGE_LENGTH);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!role || !projectType || !name || !email || !message || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please complete all required fields with valid information." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? DEFAULT_TO_EMAIL;

  if (!resendApiKey || !fromEmail) {
    console.error("Contact delivery is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL.");
    return NextResponse.json({ error: "Inquiry delivery is unavailable." }, { status: 500 });
  }

  const emailText = [
    "New inquiry from ArtNomad Curators",
    "",
    `Sender type: ${role}`,
    `Project type: ${projectType}`,
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const response = await fetch(RESEND_EMAIL_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        text: emailText,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend delivery failed:", response.status, errorText);
      return NextResponse.json({ error: "Inquiry delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact delivery request failed:", error);
    return NextResponse.json({ error: "Inquiry delivery failed." }, { status: 502 });
  }
}
