"use client";

import { useRef, useState } from "react";

type SubmitState = "idle" | "submitting" | "success";

const WHATSAPP_NUMBER = "593998308866";

function buildWhatsAppMessage(fields: {
  name: FormDataEntryValue | null;
  company: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
  interest: FormDataEntryValue | null;
  message: FormDataEntryValue | null;
}): string {
  const lines = [
    "⚡ *Nuevo contacto desde la web INGELPOWER*",
    "",
    `👤 *Nombre:* ${fields.name}`,
    fields.company ? `🏢 *Empresa:* ${fields.company}` : null,
    `📧 *Correo:* ${fields.email}`,
    fields.phone ? `📱 *Teléfono:* ${fields.phone}` : null,
    `🔧 *Interés:* ${fields.interest}`,
    "",
    `💬 *Mensaje:*\n${fields.message}`,
  ].filter(Boolean);

  return lines.join("\n");
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const successRef = useRef<HTMLParagraphElement | null>(null);
  const [status, setStatus] = useState<SubmitState>("idle");
  const showSuccess = status === "success";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    // Honeypot: bots fill this hidden field, real users never do.
    if (formData.get("website")) return;

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interest: formData.get("interest"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    // Open WhatsApp synchronously (same user gesture) so browsers don't block the popup.
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildWhatsAppMessage(payload),
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "No se pudo enviar el mensaje.");
      }
    } catch {
      // Email delivery is a best-effort backup; WhatsApp is the primary channel.
    }

    form.reset();
    setStatus("success");
    requestAnimationFrame(() => {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Nombre completo</label>
          <input type="text" id="name" name="name" required placeholder="Su nombre" />
        </div>
        <div className="form-field">
          <label htmlFor="company">Empresa</label>
          <input type="text" id="company" name="company" placeholder="Nombre de su empresa" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required placeholder="correo@empresa.com" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Teléfono</label>
          <input type="tel" id="phone" name="phone" placeholder="09xxxxxxxx" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="interest">Me interesa</label>
        <select id="interest" name="interest">
          <option>Servicio de mallas a tierra</option>
          <option>Tableros eléctricos</option>
          <option>Corrección de factor de potencia</option>
          <option>Proyecto de media tensión</option>
          <option>Acometidas eléctricas</option>
          <option>Alquiler de equipos de medición</option>
          <option>Cables eléctricos especiales</option>
          <option>Ducto de barras WETOWN</option>
          <option>Automatización SIEMENS</option>
          <option>Instrumentos de medición FLUKE</option>
          <option>Otro</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Cuéntenos sobre su proyecto o requerimiento..."
        />
      </div>
      {/* Honeypot: hidden from real users, filled by bots. Server rejects silently when non-empty. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <button type="submit" className="btn btn-primary w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Enviando..." : "Enviar por WhatsApp"}
      </button>
      <p className="form-note">
        Al enviar, se abrirá WhatsApp con su mensaje listo para enviar a nuestro equipo comercial.
      </p>
      {showSuccess && (
        <p
          ref={successRef}
          className="mt-4 py-3.5 px-4 bg-blue-100 text-blue-800 rounded-lg text-[.9rem] font-semibold"
        >
          ¡Listo! Le abrimos WhatsApp con su mensaje — solo confirme el envío allí.
        </p>
      )}
    </form>
  );
}
