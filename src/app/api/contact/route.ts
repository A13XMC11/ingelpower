import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  interest: z.string().trim().max(160),
  message: z.string().trim().min(10).max(2000),
  // Honeypot field: real users never fill this hidden input; bots often do.
  website: z.string().max(0).optional().or(z.literal("")),
});

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intente de nuevo en un minuto." },
      { status: 429 },
    );
  }

  const body: unknown = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Honeypot triggered: silently report success without sending anything.
  if (parsed.data.website) {
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { error: "El servicio de contacto no está configurado." },
      { status: 503 },
    );
  }

  const { name, company, email, phone, interest, message } = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "INGELPOWER Web <onboarding@resend.dev>",
    to: [toEmail],
    replyTo: email,
    subject: `Nuevo contacto web: ${name}`,
    text: [
      `Nombre: ${name}`,
      company ? `Empresa: ${company}` : null,
      `Correo: ${email}`,
      phone ? `Teléfono: ${phone}` : null,
      `Interés: ${interest}`,
      "",
      "Mensaje:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intente de nuevo más tarde." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
