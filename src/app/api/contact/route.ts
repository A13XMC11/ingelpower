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

  // Opportunistic cleanup: drop IPs with no requests in the current window
  // so this map can't grow unbounded over a long-lived warm instance.
  for (const [key, timestamps] of requestLog) {
    if (timestamps.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
      requestLog.delete(key);
    }
  }

  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function isTrustedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  // Same-origin requests from browsers (fetch/XHR) always send an Origin
  // header; its absence means the request didn't come from a page load in
  // a browser (e.g. curl, a server-to-server script), which we also allow
  // since this endpoint has no session/cookie state to forge.
  if (!origin) return true;
  return origin === request.nextUrl.origin;
}

// Strip CR/LF and other control characters so user input can't break out of
// the single-line email subject or inject stray header-like lines into the
// plain-text body.
function sanitizeForEmail(value: string): string {
  return value.replace(/[\r\n\x00-\x1f\x7f]/g, " ").trim();
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!isTrustedOrigin(request)) {
    return NextResponse.json({ error: "Origen no permitido." }, { status: 403 });
  }

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
  const safeName = sanitizeForEmail(name);
  const safeCompany = company ? sanitizeForEmail(company) : company;
  const safePhone = phone ? sanitizeForEmail(phone) : phone;
  const safeInterest = sanitizeForEmail(interest);
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "INGELPOWER Web <onboarding@resend.dev>",
    to: [toEmail],
    replyTo: email,
    subject: `Nuevo contacto web: ${safeName}`,
    text: [
      `Nombre: ${safeName}`,
      safeCompany ? `Empresa: ${safeCompany}` : null,
      `Correo: ${email}`,
      safePhone ? `Teléfono: ${safePhone}` : null,
      `Interés: ${safeInterest}`,
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
