import type { ReactNode } from "react";

export interface ServicioItem {
  slug: string;
  title: string;
  flag?: string;
  summary: string;
  lead: string;
  specs: string[];
  note?: string;
  icon: ReactNode;
  minHeight?: number;
}

export const servicios: ServicioItem[] = [
  {
    slug: "mallas-a-tierra",
    title: "Especialistas en Sistemas de Mallas a Tierra",
    flag: "Servicio principal",
    summary:
      "Diseño, suministro y montaje de sistemas de puesta a tierra (SPT) certificados bajo estándares europeos.",
    lead: "Diseñamos, suministramos y montamos sistemas de puesta a tierra (SPT) que protegen personas, equipos y edificaciones frente a descargas atmosféricas y fallas eléctricas.",
    specs: [
      "Diseño de malla a tierra bajo estándares europeos",
      "Suministro y montaje de conductores y electrodos",
      "Sistema de protección contra descargas atmosféricas",
      "Certificación con equipo de medición toque y paso (Metrel)",
    ],
    note: "Caso destacado: suministro y montaje de malla a tierra para las estaciones del Metro de Quito, bajo diseños de ACCIONA España.",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M12 2v10M6 22h12M8 22c0-3 4-4 4-8M16 22c0-3-4-4-4-8" />
      </svg>
    ),
  },
  {
    slug: "tableros-electricos",
    title: "Tableros Eléctricos y Banco de Condensadores",
    flag: "Servicio principal",
    summary:
      "Fabricación y montaje de tableros de distribución, MCC y de transferencia automática, más bancos de condensadores.",
    lead: "Fabricamos y montamos tableros de distribución, MCC y de transferencia automática, además de bancos de condensadores para optimizar el consumo de su instalación.",
    specs: [
      "Tableros MCC bajo norma NEMA",
      "Tableros de transferencia automática 4 polos",
      "Bancos de condensadores para compensación reactiva",
      "Equipamiento explosion proof para áreas clasificadas",
    ],
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
  },
  {
    slug: "factor-potencia",
    title: "Corrección de Factor de Potencia",
    flag: "Servicio principal",
    summary:
      "Soluciones de compensación reactiva convencionales y electrónicas para eliminar multas y mejorar eficiencia.",
    lead: "Un bajo factor de potencia genera multas y sobrecostos en su planilla eléctrica. Diseñamos soluciones de compensación reactiva —convencionales y electrónicas— para eliminar esas penalizaciones y mejorar la eficiencia de su instalación.",
    specs: [
      "Diagnóstico de factor de potencia en planta",
      "Bancos de condensadores automáticos",
      "Corrección electrónica con equipos SVG (Circutor)",
      "Filtrado de armónicos con equipos AFQ (Circutor)",
    ],
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </svg>
    ),
  },
  {
    slug: "media-tension",
    title: "Proyectos de Media Tensión",
    flag: "Servicio principal",
    summary:
      "Proyectos integrales de media tensión: desde el diseño eléctrico hasta el comisionamiento.",
    lead: "Ejecutamos proyectos integrales de media tensión: desde el diseño eléctrico hasta el comisionamiento, con personal calificado y coordinación de protecciones.",
    specs: [
      "Celdas de media tensión 15kV, 17.5kV y 25kV",
      "Coordinación de protecciones con software ETAP",
      "Cámaras de transformación y redes de media voltaje",
      "Variadores de medio voltaje y arrancadores",
    ],
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z" />
      </svg>
    ),
  },
  {
    slug: "acometidas",
    title: "Acometidas Eléctricas",
    summary:
      "Ingeniería, procura y construcción de acometidas eléctricas de socorro y de servicio normal.",
    lead: "Ingeniería, procura y construcción de acometidas eléctricas de socorro y de servicio normal, en fases de nivel básico, conceptual y de detalle.",
    specs: [
      "Ingeniería básica, conceptual y de detalle",
      "Acometidas de socorro en media tensión",
      "Soterramiento de cables y cajas pad mounted",
      "Reubicación de transformadores",
    ],
    minHeight: 240,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M4 20h16M6 20V10l6-6 6 6v10" />
      </svg>
    ),
  },
  {
    slug: "alquiler-equipos",
    title: "Alquiler de Equipos de Medición",
    summary:
      "Equipo especializado para mediciones y certificaciones de campo, con soporte técnico incluido.",
    lead: "Ponemos a su disposición equipo especializado para mediciones y certificaciones de campo.",
    specs: [
      "Telurómetro para medición de resistividad",
      "Medidor de toque y paso",
      "Soporte técnico durante la medición",
    ],
    minHeight: 240,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <rect x="3" y="7" width="18" height="10" rx="2" />
        <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
];

export function getServicio(slug: string): ServicioItem | undefined {
  return servicios.find((s) => s.slug === slug);
}
