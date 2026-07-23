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

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div>Energía que trasciende — Ingeniería eléctrica y media tensión</div>
          <div className="topbar-links">
            <a href="tel:+593984255690">+593 98 425 5690</a>
            <a href="mailto:ingenieria@ingelpower.com">ingenieria@ingelpower.com</a>
            <a href="mailto:proyectos@ingelpower.com">proyectos@ingelpower.com</a>
          </div>
        </div>
      </div>

      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
        <div className="container nav-wrap">
          <Link href="/" className="logo-link">
            <Image src="/assets/logo.svg" alt="INGELPOWER" width={238} height={55} priority />
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
