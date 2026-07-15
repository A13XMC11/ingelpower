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
  image: string;
  minHeight?: number;
}

export const servicios: ServicioItem[] = [
  {
    slug: "mallas-a-tierra",
    title: "Especialistas en Sistemas de Mallas a Tierra",
    flag: "Servicio principal",
    summary:
      "Diseño, suministro y montaje de sistemas de puesta a tierra (SPT) certificados bajo estándares europeos.",
    lead: "Una malla a tierra mal diseñada no es visible hasta que ocurre un accidente o una falla destruye equipos de cientos de miles de dólares. En INGELPOWER diseñamos, suministramos y montamos sistemas de puesta a tierra (SPT) bajo IEEE 80 y estándares europeos, calculados para que las tensiones de toque y paso nunca superen los límites seguros para las personas — y lo certificamos con equipo de medición propio. Lo ejecutamos en las 15 estaciones del Metro de Quito bajo los protocolos de ACCIONA España, y en plantas industriales de sectores petroquímico, automotriz y alimenticio.",
    specs: [
      "Medición de resistividad del suelo con equipo Metrel (método Wenner, 4 electrodos)",
      "Modelamiento y diseño de malla conforme a IEEE 80 y estándares europeos ACCIONA",
      "Suministro e instalación de conductores de cobre desnudo calibre 2/0 AWG a 500 MCM",
      "Electrodos tipo cooperweld y barras de conexión equipotencial",
      "Soldadura exotérmica (termita) en todas las uniones, sin puntos de corrosión",
      "Certificación final con medición de tensiones de toque y paso — entrega de informe técnico",
    ],
    note: "Proyecto icónico: SPT en las 15 estaciones y pozos del Metro de Quito, bajo diseño y supervisión de ACCIONA España. Único contratista ecuatoriano en ejecutar mallas a tierra bajo estándar europeo para infraestructura de transporte masivo.",
    image: "/assets/servicio-mallas-tierra.webp",
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
    lead: "Un tablero fabricado sin ingeniería de respaldo es un riesgo que se descubre en el peor momento: cuando falla el suministro o se dispara una protección sin causa aparente. INGELPOWER fabrica tableros MCC, de transferencia automática y distribución bajo norma NEMA, con componentes Siemens, ABB y Schneider, y entrega dossier de calidad con planos As-Built, protocolos de prueba y memorias de cálculo. También fabricamos equipamiento explosion proof para áreas clasificadas según NEC y ATEX.",
    specs: [
      "Tableros MCC (Motor Control Center) bajo norma NEMA I, 12 y 4X con arrancadores suaves y variadores",
      "Tableros de transferencia automática (ATS) 4 polos hasta 2500A con lógica programable",
      "Tableros de distribución principal y secundaria para baja y media tensión",
      "Bancos de condensadores automáticos para compensación de potencia reactiva",
      "Equipamiento explosion proof certificado para áreas clasificadas NEC/ATEX (petroquímica, minería)",
      "Entrega de dossier de calidad: planos As-Built, protocolos de prueba FAT y memoria de cálculo",
    ],
    image: "/assets/servicio-tableros-electricos.webp",
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
    lead: "En Ecuador, las empresas distribuidoras penalizan con recargos del 30% al 50% sobre la energía reactiva cuando el factor de potencia cae por debajo de 0.92. Además, un FP bajo aumenta las pérdidas en conductores, sobrecarga transformadores y acorta la vida de los equipos. INGELPOWER diagnostica el problema con analizadores de calidad de energía durante 7 días continuos y diseña la solución exacta: banco de condensadores convencional, SVG electrónico o filtro activo de armónicos, según lo que su planta realmente necesite.",
    specs: [
      "Diagnóstico con analizador de calidad de energía (registro continuo 7 días, curvas de carga y armónicos)",
      "Dimensionamiento y suministro de banco de condensadores automático con regulador de reactivos",
      "Corrección electrónica dinámica con compensador estático SVG Circutor — respuesta < 20ms",
      "Eliminación de armónicos con filtro activo AFQ Circutor — THD-I < 5% según IEEE 519",
      "Informe técnico antes y después con medición de ahorro real en kVAR y factor de potencia",
    ],
    image: "/assets/servicio-factor-potencia.webp",
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
    lead: "La media tensión no admite improvisación: un error en la coordinación de protecciones puede dejar sin suministro a una planta entera o dañar un transformador de $200,000 en segundos. INGELPOWER ejecuta proyectos integrales de 15kV, 17.5kV y 25kV — desde la ingeniería básica con ETAP hasta el comisionamiento final — con personal certificado que ya lo hizo en el Metro de Quito (25kV, estándar europeo ACCIONA) y en el Aeropuerto del Coca, entre otros proyectos de infraestructura crítica en Ecuador.",
    specs: [
      "Celdas de media tensión 15kV, 17.5kV y 25kV (tecnología SF6 y vacío, marcas ABB, Schneider, Siemens)",
      "Coordinación de protecciones con software ETAP: estudio de cortocircuito, arco eléctrico y selectividad",
      "Soterramiento de cables de media tensión en ductos HDPE y cajas de derivación pad mounted",
      "Cámaras de transformación y subestaciones en contenedor para zonas remotas o industriales",
      "Variadores de medio voltaje y arrancadores a voltaje reducido para grandes motores",
      "Comisionamiento con protocolo de pruebas de alta tensión, relés de protección y entrega de As-Built",
    ],
    image: "/assets/servicio-media-tension.webp",
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
    lead: "Una acometida eléctrica mal ejecutada es el cuello de botella de toda su instalación: si falla el punto de entrada, falla todo lo demás. INGELPOWER diseña y construye acometidas de servicio normal y de socorro en baja y media tensión, incluyendo el trámite de permisos ante la empresa distribuidora. Hemos ejecutado acometidas de socorro 25kV en las 15 estaciones del Metro de Quito, soterramientos en plantas industriales y reubicaciones de transformadores en proyectos de ampliación.",
    specs: [
      "Ingeniería básica, conceptual y de detalle para acometidas en baja y media tensión",
      "Acometidas de socorro en media tensión (15kV y 25kV) con tablero de transferencia automática",
      "Soterramiento de cables en ductos HDPE con pozos de revisión y cajas pad mounted",
      "Gestión de permisos y aprobación ante empresas distribuidoras (EEQ, CNEL, EERSSA)",
      "Reubicación de transformadores y readecuación de cámaras de transformación existentes",
    ],
    image: "/assets/servicio-acometidas.webp",
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
    lead: "No siempre es necesario contratar un proyecto completo para obtener los datos que necesita. Si su empresa requiere certificar un sistema de puesta a tierra existente, medir la resistividad del suelo antes de diseñar una malla o verificar tensiones de toque y paso para cumplimiento normativo, INGELPOWER alquila el equipo especializado con soporte técnico incluido. El mismo equipo que usamos en nuestros proyectos, operado por personal capacitado o con guía para su propio equipo.",
    specs: [
      "Telurómetro de cuatro hilos para medición de resistividad del suelo (método Wenner)",
      "Medidor de tensiones de toque y paso para certificación de SPT bajo IEEE 80",
      "Soporte técnico en campo durante la medición e interpretación de resultados",
      "Entrega de informe técnico con los valores medidos y comparación contra límites normativos",
    ],
    image: "/assets/servicio-equipos-medicion.webp",
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
