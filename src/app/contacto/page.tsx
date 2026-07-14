import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctese con INGELPOWER para cotizar servicios de ingeniería eléctrica, media tensión, mallas a tierra o productos como cables especiales, WETOWN, FLUKE y CIRCUTOR.",
};

export default function ContactoPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> / <span>Contacto</span>
          </div>
          <h1>Hablemos de su próximo proyecto</h1>
          <p className="lead text-[#DCE6F6] max-w-[640px]">
            Cuéntenos qué necesita: un servicio de ingeniería, un producto específico o una
            cotización para su planta.
          </p>
        </div>
      </div>

      <section>
        <div className="container contact-grid">
          <div className="contact-info-card">
            <h3>Información de contacto</h3>
            <p className="text-[#C9D4E6] mb-7.5">Nuestro equipo responde en menos de 24 horas hábiles.</p>

            <div className="contact-item">
              <div className="ci-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                  <path d="M3 5a2 2 0 0 1 2-2h2l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v2a2 2 0 0 1-2 2A16 16 0 0 1 3 5z" />
                </svg>
              </div>
              <div>
                <h5>Teléfono</h5>
                <p>
                  <a href="tel:+593000000000">+593 00 000 0000</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <div>
                <h5>Correo electrónico</h5>
                <p>
                  <a href="mailto:info@ingelpower.com">info@ingelpower.com</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                  <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <h5>Ubicación</h5>
                <p>Quito, Ecuador</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                  <path d="M12 8v4l3 2" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <div>
                <h5>Horario de atención</h5>
                <p>Lunes a viernes, 8:00 – 17:00</p>
              </div>
            </div>

            <div className="social-row mt-7.5">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                  <path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H8v3h3v6h3v-6h3l1-3h-4V9a1 1 0 0 1 1-1z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
            </div>
          </div>

          <div className="form-card">
            <h3>Envíenos un mensaje</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-gray section-tight">
        <div className="container">
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-brand-xl)] ring-1 ring-white/10">
            <iframe
              src="https://www.google.com/maps?q=-0.1515661,-78.4765535&z=16&output=embed"
              title="Ubicación de INGELPOWER en el mapa"
              width="100%"
              height="320"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-sm">
            <a
              href="https://maps.app.goo.gl/mrqxWMfG56Tb6eVLA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Ver ubicación en Google Maps
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
