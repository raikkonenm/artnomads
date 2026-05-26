import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_FROM_EMAIL = "ArtNomads Contact <onboarding@resend.dev>";
const CONTACT_TO_EMAIL = "artcnomads@gmail.com";
const CONTACT_SUBJECT = "New inquiry — ArtNomads";
const MAX_MESSAGE_LENGTH = 10_000;

type ContactPayload = {
  source?: unknown;
  role?: unknown;
  projectType?: unknown;
  name?: unknown;
  email?: unknown;
  message?: unknown;
  phone?: unknown;
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

  const name = requiredString(body.name, 120);
  const email = requiredString(body.email, 254);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please complete all required fields with valid information." },
      { status: 400 },
    );
  }

  let subject: string;
  let emailText: string;

  if (body.source === "workflow-access") {
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";

    if (phone.length > 180) {
      return NextResponse.json({ error: "Phone / Messenger entry is too long." }, { status: 400 });
    }

    subject = "Workflow access request — ArtNomads";
    emailText = [
      "New Workflow.art access request",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone / Messenger: ${phone || "Not provided"}`,
      "Source: Workflow.art final CTA",
    ].join("\n");
  } else {
    const role = requiredString(body.role, 80);
    const projectType = requiredString(body.projectType, 100);
    const message = requiredString(body.message, MAX_MESSAGE_LENGTH);

    if (!role || !projectType || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields with valid information." },
        { status: 400 },
      );
    }

    subject = CONTACT_SUBJECT;
    emailText = [
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
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("Contact delivery is not configured. Set RESEND_API_KEY.");
    return NextResponse.json({ error: "Inquiry delivery is unavailable." }, { status: 500 });
  }

  try {
    const resend = new Resend(resendApiKey);
    const { data, error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: email,
      subject,
      text: emailText,
    });

    if (error) {
      console.error("Resend delivery failed:", error);
      return NextResponse.json({ error: "Inquiry delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact delivery request failed:", error);
    return NextResponse.json({ error: "Inquiry delivery failed." }, { status: 502 });
  }
}
