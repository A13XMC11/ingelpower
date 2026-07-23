import Image from "next/image";
import Link from "next/link";
import { FOOTER_NAV_LINKS, FOOTER_SERVICE_LINKS } from "@/lib/nav-links";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <Image
                src="/assets/logo-white.svg"
                alt="INGELPOWER"
                width={173}
                height={40}
                style={{ width: "auto", height: "40px" }}
                loading="lazy"
              />
            </div>
            <p>
              Energía que trasciende. Ingeniería, procura y construcción de sistemas eléctricos
              de media y baja tensión para la industria ecuatoriana.
            </p>
            <div className="social-row">
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/593998308866"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zM12.001 2C6.478 2 2 6.477 2 12c0 2.115.654 4.08 1.771 5.708L2.5 22l4.428-1.246A9.958 9.958 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.19a8.15 8.15 0 0 1-4.153-1.145l-.298-.176-2.632.74.706-2.567-.193-.264A8.19 8.19 0 1 1 20.19 12c0 4.518-3.674 8.19-8.189 8.19z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Navegación</h4>
            <ul>
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Servicios</h4>
            <ul>
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>Quito, Ecuador</li>
              <li>
                <a href="tel:+593984255690">+593 98 425 5690</a>
              </li>
              <li>
                <a href="https://wa.me/593998308866" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +593 99 830 8866
                </a>
              </li>
              <li>
                <a href="mailto:ingenieria@ingelpower.com">ingenieria@ingelpower.com</a>
              </li>
              <li>
                <a href="mailto:proyectos@ingelpower.com">proyectos@ingelpower.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {year} INGELPOWER S.A. Todos los derechos reservados.</span>
          <span>Energía que trasciende</span>
        </div>
      </div>
    </footer>
  );
}
