import type { ReactNode } from "react";

export interface ProductoBrand {
  name: string;
  important?: boolean;
}

export interface ProductoItem {
  slug: string;
  title: string;
  flag?: string;
  summary: string;
  lead: string;
  specs: string[];
  brands: ProductoBrand[];
  icon: ReactNode;
  image: string;
  minHeight?: number;
}

export const productos: ProductoItem[] = [
  {
    slug: "cables",
    title: "Cables Eléctricos Especiales",
    summary:
      "Cables de instrumentación, armado, VFD y control para condiciones industriales exigentes.",
    lead: "Cables de instrumentación, armado, VFD y control, compuestos por cobre de alta conductividad y revestimientos resistentes a condiciones industriales exigentes: calor, humedad, ruido eléctrico y esfuerzo mecánico.",
    specs: [
      "Cable de instrumentación blindado",
      "Cable armado para tendidos subterráneos",
      "Cable VFD para variadores de frecuencia",
      "Cable de control multiconductor",
    ],
    brands: [
      { name: "OKONITE" },
      { name: "SOUTHWIRE" },
      { name: "NEXANS" },
      { name: "GENERAL CABLE" },
    ],
    image: "/assets/producto-cables-especiales.webp",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M3 12c3-4 6 4 9 0s6 4 9 0" />
      </svg>
    ),
  },
  {
    slug: "automatizacion",
    title: "Automatización Industrial",
    summary:
      "Soluciones de automatización y control para plantas industriales, de tableros MCC a sistemas SCADA.",
    lead: "Integramos soluciones de automatización y control para plantas industriales, desde tableros MCC hasta sistemas SCADA para monitoreo y control de procesos.",
    specs: [
      "PLC y sistemas de control",
      "SCADA para monitoreo de plantas de generación",
      "Variadores de frecuencia y de medio voltaje",
      "Tableros MCC integrados",
    ],
    brands: [{ name: "SIEMENS" }],
    image: "/assets/producto-automatizacion.webp",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M9 9h6v6H9z" />
        <path d="M4 9h2M4 15h2M18 9h2M18 15h2M9 4v2M15 4v2M9 18v2M15 18v2" />
      </svg>
    ),
  },
  {
    slug: "medicion",
    title: "Instrumentos de Medición",
    summary:
      "Equipos de precisión para diagnóstico eléctrico, mantenimiento predictivo y certificación de SPT.",
    lead: "Equipos de precisión para diagnóstico eléctrico, mantenimiento predictivo y certificación de sistemas de puesta a tierra.",
    specs: [
      "Telurómetros de resistividad",
      "Medidores de toque y paso",
      "Pinzas amperimétricas y multímetros",
      "Analizadores de calidad de energía",
    ],
    brands: [{ name: "FLUKE" }],
    image: "/assets/producto-instrumentos-medicion.webp",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l4 2" />
      </svg>
    ),
  },
  {
    slug: "wetown",
    title: "Ducto de Barras — WETOWN",
    flag: "Línea insignia",
    summary:
      "Distribución eléctrica de alta densidad, modular y con mínimas pérdidas para plantas industriales.",
    lead: "El ducto de barras (busway) WETOWN es una solución de distribución eléctrica de alta densidad, ideal para plantas industriales que requieren transportar grandes cargas de energía de forma segura, modular y con mínimas pérdidas.",
    specs: [
      "Alta capacidad de corriente en poco espacio",
      "Instalación modular y de rápido montaje",
      "Menor caída de tensión que el cableado convencional",
      "Ideal para plantas industriales y centros de datos",
    ],
    brands: [{ name: "WETOWN", important: true }],
    image: "/assets/producto-ducto-barras.webp",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <rect x="3" y="10" width="18" height="4" rx="1" />
        <path d="M6 10V6M10 10V6M14 10V6M18 10V6M6 14v4M10 14v4M14 14v4M18 14v4" />
      </svg>
    ),
  },
  {
    slug: "svg",
    title: "SVG — Corrección de Factor de Potencia Electrónica",
    summary:
      "Compensador estático de reactivos que corrige el factor de potencia en tiempo real.",
    lead: "El compensador estático de reactivos (SVG) corrige el factor de potencia de forma dinámica y electrónica, respondiendo en tiempo real a las variaciones de carga de su planta, sin los inconvenientes de los bancos de condensadores tradicionales.",
    specs: [
      "Respuesta dinámica en tiempo real",
      "Reduce pérdidas y evita multas por bajo factor de potencia",
      "Sin resonancias ni sobrecargas de condensadores",
      "Ideal para cargas variables e industriales",
    ],
    brands: [{ name: "CIRCUTOR" }],
    image: "/assets/producto-svg.webp",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M3 17l6-6 4 4 8-8" />
      </svg>
    ),
  },
  {
    slug: "afq",
    title: "AFQ — Filtro Activo de Armónicos",
    summary:
      "Elimina distorsiones armónicas de cargas no lineales y protege equipos sensibles.",
    lead: "El filtro activo (AFQ) elimina las distorsiones armónicas generadas por cargas no lineales, protegiendo sus equipos sensibles y mejorando la calidad de energía de toda la instalación.",
    specs: [
      "Elimina armónicos de corriente en tiempo real",
      "Protege equipos electrónicos sensibles",
      "Mejora la calidad de energía de la planta",
      "Compatible con cargas industriales variables",
    ],
    brands: [{ name: "CIRCUTOR" }],
    image: "/assets/producto-afq.webp",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M3 12h4l2-7 4 14 2-7h6" />
      </svg>
    ),
  },
];

export function getProducto(slug: string): ProductoItem | undefined {
  return productos.find((p) => p.slug === slug);
}
