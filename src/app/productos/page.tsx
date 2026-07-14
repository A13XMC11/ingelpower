import type { Metadata } from "next";
import Link from "next/link";
import { IndustrialPlate } from "@/components/industrial-plate";
import { SideNav } from "@/components/side-nav";

export const metadata: Metadata = {
  title: "Productos | Cables, WETOWN, SIEMENS, FLUKE y CIRCUTOR",
  description:
    "Productos INGELPOWER: cables eléctricos especiales Okonite, Southwire, Nexans y General Cable; automatización SIEMENS; instrumentos FLUKE; ducto de barras WETOWN; corrección electrónica y filtro activo de armónicos CIRCUTOR.",
};

const sideNavItems = [
  { href: "#cables", label: "Cables Especiales" },
  { href: "#automatizacion", label: "Automatización — SIEMENS" },
  { href: "#medicion", label: "Instrumentos — FLUKE" },
  { href: "#wetown", label: "Ducto de Barras — WETOWN" },
  { href: "#svg", label: "Corrección Electrónica — SVG" },
  { href: "#afq", label: "Filtro de Armónicos — AFQ" },
];

export default function ProductosPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> / <span>Productos</span>
          </div>
          <h1>Productos y marcas por los que nos destacamos</h1>
          <p className="lead text-[#DCE6F6] max-w-[660px]">
            Representamos marcas líderes a nivel mundial para llevar a su planta cables,
            automatización, medición y corrección de energía de la más alta calidad.
          </p>
        </div>
      </div>

      <section className="section-tight">
        <div className="container layout-with-side">
          <SideNav title="Productos" items={sideNavItems} />

          <div>
            <div className="detail-block" id="cables">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <div>
                  <h2>Cables Eléctricos Especiales</h2>
                  <p className="lead">
                    Cables de instrumentación, armado, VFD y control, compuestos por cobre de alta
                    conductividad y revestimientos resistentes a condiciones industriales
                    exigentes: calor, humedad, ruido eléctrico y esfuerzo mecánico.
                  </p>
                  <ul className="spec-list">
                    <li>Cable de instrumentación blindado</li>
                    <li>Cable armado para tendidos subterráneos</li>
                    <li>Cable VFD para variadores de frecuencia</li>
                    <li>Cable de control multiconductor</li>
                  </ul>
                  <div className="brand-tags">
                    {["OKONITE", "SOUTHWIRE", "NEXANS", "GENERAL CABLE"].map((b) => (
                      <span key={b} className="brand-tag">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <IndustrialPlate
                  minHeight={280}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                      <path d="M3 12c3-4 6 4 9 0s6 4 9 0" />
                    </svg>
                  }
                />
              </div>
            </div>

            <div className="detail-block" id="automatizacion">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <IndustrialPlate
                  minHeight={280}
                  order="last"
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                      <rect x="4" y="4" width="16" height="16" rx="3" />
                      <path d="M9 9h6v6H9z" />
                      <path d="M4 9h2M4 15h2M18 9h2M18 15h2M9 4v2M15 4v2M9 18v2M15 18v2" />
                    </svg>
                  }
                />
                <div>
                  <h2>Automatización Industrial</h2>
                  <p className="lead">
                    Integramos soluciones de automatización y control para plantas industriales,
                    desde tableros MCC hasta sistemas SCADA para monitoreo y control de procesos.
                  </p>
                  <ul className="spec-list">
                    <li>PLC y sistemas de control</li>
                    <li>SCADA para monitoreo de plantas de generación</li>
                    <li>Variadores de frecuencia y de medio voltaje</li>
                    <li>Tableros MCC integrados</li>
                  </ul>
                  <div className="brand-tags">
                    <span className="brand-tag">SIEMENS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-block" id="medicion">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <div>
                  <h2>Instrumentos de Medición</h2>
                  <p className="lead">
                    Equipos de precisión para diagnóstico eléctrico, mantenimiento predictivo y
                    certificación de sistemas de puesta a tierra.
                  </p>
                  <ul className="spec-list">
                    <li>Telurómetros de resistividad</li>
                    <li>Medidores de toque y paso</li>
                    <li>Pinzas amperimétricas y multímetros</li>
                    <li>Analizadores de calidad de energía</li>
                  </ul>
                  <div className="brand-tags">
                    <span className="brand-tag">FLUKE</span>
                  </div>
                </div>
                <IndustrialPlate
                  minHeight={280}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l4 2" />
                    </svg>
                  }
                />
              </div>
            </div>

            <div className="detail-block" id="wetown">
              <span className="detail-flag">Línea insignia</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <IndustrialPlate
                  minHeight={280}
                  order="last"
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                      <rect x="3" y="10" width="18" height="4" rx="1" />
                      <path d="M6 10V6M10 10V6M14 10V6M18 10V6M6 14v4M10 14v4M14 14v4M18 14v4" />
                    </svg>
                  }
                />
                <div>
                  <h2>Ducto de Barras — WETOWN</h2>
                  <p className="lead">
                    El ducto de barras (busway) WETOWN es una solución de distribución eléctrica
                    de alta densidad, ideal para plantas industriales que requieren transportar
                    grandes cargas de energía de forma segura, modular y con mínimas pérdidas.
                  </p>
                  <ul className="spec-list">
                    <li>Alta capacidad de corriente en poco espacio</li>
                    <li>Instalación modular y de rápido montaje</li>
                    <li>Menor caída de tensión que el cableado convencional</li>
                    <li>Ideal para plantas industriales y centros de datos</li>
                  </ul>
                  <div className="brand-tags">
                    <span className="brand-tag important">WETOWN</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-block" id="svg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <div>
                  <h2>SVG — Corrección de Factor de Potencia Electrónica</h2>
                  <p className="lead">
                    El compensador estático de reactivos (SVG) corrige el factor de potencia de
                    forma dinámica y electrónica, respondiendo en tiempo real a las variaciones de
                    carga de su planta, sin los inconvenientes de los bancos de condensadores
                    tradicionales.
                  </p>
                  <ul className="spec-list">
                    <li>Respuesta dinámica en tiempo real</li>
                    <li>Reduce pérdidas y evita multas por bajo factor de potencia</li>
                    <li>Sin resonancias ni sobrecargas de condensadores</li>
                    <li>Ideal para cargas variables e industriales</li>
                  </ul>
                  <div className="brand-tags">
                    <span className="brand-tag">CIRCUTOR</span>
                  </div>
                </div>
                <IndustrialPlate
                  minHeight={280}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                      <path d="M3 17l6-6 4 4 8-8" />
                    </svg>
                  }
                />
              </div>
            </div>

            <div className="detail-block" id="afq">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <IndustrialPlate
                  minHeight={280}
                  order="last"
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                      <path d="M3 12h4l2-7 4 14 2-7h6" />
                    </svg>
                  }
                />
                <div>
                  <h2>AFQ — Filtro Activo de Armónicos</h2>
                  <p className="lead">
                    El filtro activo (AFQ) elimina las distorsiones armónicas generadas por cargas
                    no lineales, protegiendo sus equipos sensibles y mejorando la calidad de
                    energía de toda la instalación.
                  </p>
                  <ul className="spec-list">
                    <li>Elimina armónicos de corriente en tiempo real</li>
                    <li>Protege equipos electrónicos sensibles</li>
                    <li>Mejora la calidad de energía de la planta</li>
                    <li>Compatible con cargas industriales variables</li>
                  </ul>
                  <div className="brand-tags">
                    <span className="brand-tag">CIRCUTOR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>¿Busca un producto específico para su planta?</h2>
              <p>Cuéntenos qué necesita y le enviamos disponibilidad, ficha técnica y cotización.</p>
            </div>
            <Link href="/contacto" className="btn btn-outline">
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
