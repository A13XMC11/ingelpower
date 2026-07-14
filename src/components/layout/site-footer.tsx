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
                <a href="tel:+593000000000">+593 00 000 0000</a>
              </li>
              <li>
                <a href="mailto:info@ingelpower.com">info@ingelpower.com</a>
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
