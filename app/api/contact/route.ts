import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();
    const parsed = contactFormSchema.safeParse(rawBody);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      return NextResponse.json(
        { error: issue?.message ?? "Please review the form and try again." },
        { status: 400 }
      );
    }

    const payload = parsed.data;

    if (payload.website && payload.website.length > 0) {
      return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    }

    const whatsappMessage = [
      "Hi Maruti Harbals,",
      `I am interested in ${payload.interest}.`,
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      payload.email ? `Email: ${payload.email}` : null,
      payload.product ? `Product: ${payload.product}` : null,
      `Message: ${payload.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const response = {
      ok: true,
      message: "Thank you! Your enquiry has been received. Our team will contact you soon.",
      whatsappMessage,
    };

    return NextResponse.json(response, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while submitting your enquiry." },
      { status: 500 }
    );
  }
}
