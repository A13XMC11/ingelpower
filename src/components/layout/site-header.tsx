"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/nav-links";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const applyHeaderShadow = () => {
      setIsScrolled(window.scrollY > 8);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(applyHeaderShadow);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div>Energía que trasciende — Ingeniería eléctrica y media tensión</div>
          <div className="topbar-links">
            <a href="tel:+593000000000">+593 00 000 0000</a>
            <a href="mailto:info@ingelpower.com">info@ingelpower.com</a>
          </div>
        </div>
      </div>

      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
        <div className="container nav-wrap">
          <Link href="/" className="logo-link">
            <Image src="/assets/logo.svg" alt="INGELPOWER" width={190} height={44} priority />
          </Link>
          <nav className={`main-nav${isNavOpen ? " open" : ""}`}>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={pathname === link.href ? "active" : ""}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-cta">
            <Link href="/contacto" className="btn btn-ghost">
              Solicitar Cotización
            </Link>
            <button
              className="nav-toggle"
              aria-label="Abrir menú"
              aria-expanded={isNavOpen}
              onClick={() => setIsNavOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
