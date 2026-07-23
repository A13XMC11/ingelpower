import type { ReactNode } from "react";

export interface ServicioSubItem {
  slug: string;
  name: string;
  summary: string;
  description: string;
  applications: string[];
  image: string;
  imageAlt: string;
}

export interface ServicioGaleriaItem {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ServicioItem {
  slug: string;
  title: string;
  flag?: string;
  summary: string;
  lead: string;
  specs: string[];
  note?: string;
  items?: ServicioSubItem[];
  galeria?: ServicioGaleriaItem[];
  icon: ReactNode;
  image: string;
  cardImageClass?: string;
  minHeight?: number;
}

export const servicios: ServicioItem[] = [
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
    image: "/assets/servicios-proyecto-media-tension.jpg",
    minHeight: 520,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z" />
      </svg>
    ),
  },
  {
    slug: "mallas-a-tierra",
    title: "Especialistas en Sistemas de Mallas a Tierra",
    flag: "Servicio principal",
    summary:
      "Diseño, suministro y montaje de sistemas de mallas a tierra (SPT) certificados bajo estándares europeos.",
    lead: "Una malla a tierra mal diseñada no es visible hasta que ocurre un accidente o una falla destruye equipos de cientos de miles de dólares. En INGELPOWER diseñamos, suministramos y montamos sistemas de mallas a tierra (SPT) bajo IEEE 80 y estándares europeos, calculados para que las tensiones de toque y paso nunca superen los límites seguros para las personas — y lo certificamos con equipo de medición propio. Lo ejecutamos en las 15 estaciones del Metro de Quito bajo los protocolos de ACCIONA España, y en plantas industriales de sectores petroquímico, automotriz y alimenticio.",
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
    title: "Tableros Eléctricos",
    flag: "Servicio principal",
    summary:
      "Fabricación y montaje de tableros de distribución, Banco de Condensadores, MCC y de transferencia automática.",
    lead: "Un tablero fabricado sin ingeniería de respaldo es un riesgo que se descubre en el peor momento: cuando falla el suministro o se dispara una protección sin causa aparente. INGELPOWER fabrica tableros MCC, de transferencia automática y distribución bajo norma NEMA, con componentes Siemens, ABB y Schneider, y entrega dossier de calidad con planos As-Built, protocolos de prueba y memorias de cálculo. También fabricamos equipamiento explosion proof para áreas clasificadas según NEC y ATEX.",
    specs: [
      "Tableros MCC (Motor Control Center) bajo norma NEMA I, 12 y 4X con arrancadores suaves y variadores",
      "Tableros de transferencia automática (ATS) 4 polos hasta 2500A con lógica programable",
      "Tableros de distribución principal y secundaria para baja y media tensión",
      "Equipamiento explosion proof certificado para áreas clasificadas NEC/ATEX (petroquímica, minería)",
      "Entrega de dossier de calidad: planos As-Built, protocolos de prueba FAT y memoria de cálculo",
    ],
    galeria: [
      {
        name: "Tableros de Distribución",
        description:
          "Fabricamos tableros de distribución principal y secundaria a la medida de la carga instalada de cada cliente: gabinetes en lámina galvanizada con pintura electrostática, placa de identificación del proyecto, buses de cobre certificados y breakers Siemens, ABB o Schneider. Cada circuito queda numerado y documentado para que el mantenimiento futuro sea rápido y seguro.",
        image: "/assets/tableros/tablero-distribucion.webp",
        imageAlt: "Tablero de distribución eléctrica fabricado por INGELPOWER",
      },
      {
        name: "Tableros de Distribución de Alta Capacidad (3200A–4500A)",
        description:
          "Para plantas industriales con cargas superiores a 3000A fabricamos tableros de distribución pesada con barras de cobre dimensionadas para 3200A y 4500A, botas termoencogibles señalizadas por fase, frente muerto para protección del personal y breakers de bastidor abierto Siemens. Cada unidad se entrega con protocolo de pruebas FAT antes de salir de taller.",
        image: "/assets/tableros/tablero-distribucion-alta-capacidad.webp",
        imageAlt: "Tablero de distribución de alta capacidad 3200 amperios",
      },
      {
        name: "Banco de Condensadores",
        description:
          "Bancos de condensadores automáticos de 200 kVAR a 300 kVAR / 440V para corrección de factor de potencia, con regulador de reactivos, contactores de maniobra capacitiva y protecciones individuales por escalón. Eliminan las multas por energía reactiva y reducen las pérdidas por sobrecarga en conductores y transformadores.",
        image: "/assets/tableros/banco-condensadores.webp",
        imageAlt: "Banco de condensadores 200 kVAR fabricado por INGELPOWER",
      },
      {
        name: "Tableros de Bypass",
        description:
          "Tableros de bypass manual y automático que permiten mantener el suministro eléctrico durante el mantenimiento o falla de un equipo aguas arriba (UPS, variador o transferencia), sin interrumpir el proceso productivo. Fabricados con enclavamientos mecánicos y eléctricos que impiden maniobras incorrectas.",
        image: "/assets/tableros/tablero-bypass.webp",
        imageAlt: "Tablero eléctrico de bypass en fabricación",
      },
      {
        name: "Mantenimiento y Análisis Termográfico de Tableros",
        description:
          "Inspección predictiva de tableros en operación con cámara termográfica FLUKE Ti400 y pinza amperimétrica, sin necesidad de desenergizar el equipo. Detectamos puntos calientes por conexiones flojas o sobrecargadas antes de que deriven en una falla, y entregamos un informe técnico con hallazgos y recomendaciones.",
        image: "/assets/tableros/mantenimiento-termografia.webp",
        imageAlt: "Técnico de INGELPOWER realizando análisis termográfico a un tablero eléctrico",
      },
    ],
    image: "/assets/tablero-electrico.webp",
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
    lead: "No siempre es necesario contratar un proyecto completo para obtener los datos que necesita. Si su empresa requiere certificar un sistema de mallas a tierra existente, medir la resistividad del suelo antes de diseñar una malla, analizar la calidad de energía de su red o verificar el estado térmico de sus tableros, INGELPOWER alquila el equipo especializado FLUKE y METREL con soporte técnico incluido. El mismo equipo que usamos en nuestros proyectos, operado por personal capacitado o con guía para su propio equipo.",
    specs: [
      "Soporte técnico en campo durante la medición e interpretación de resultados",
      "Entrega de informe técnico con los valores medidos y comparación contra límites normativos",
      "Equipos calibrados y disponibles para alquiler por día, semana o proyecto",
    ],
    items: [
      {
        slug: "teluromentro-fluke-1625",
        name: "Telurómetro FLUKE 1625",
        summary: "Medición de resistividad del suelo y resistencia de puesta a tierra bajo método Wenner.",
        description:
          "Equipo de cuatro hilos para medir resistividad del suelo y resistencia de puesta a tierra sin necesidad de desconectar el sistema bajo prueba. Es la base para diseñar o certificar cualquier sistema de mallas a tierra (SPT) conforme a IEEE 80.",
        applications: [
          "Medición de resistividad del suelo previa al diseño de una malla a tierra",
          "Certificación anual de resistencia de puesta a tierra en subestaciones y plantas industriales",
          "Diagnóstico de mallas existentes con sospecha de deterioro o corrosión",
        ],
        image: "/assets/alquiler-equipo-medicion-fluke.webp",
        imageAlt: "Telurómetro FLUKE 1625",
      },
      {
        slug: "analizador-energia-fluke-435",
        name: "Analizador de Energía FLUKE 435",
        summary: "Registro de armónicos, flicker, factor de potencia y calidad de energía en tiempo real.",
        description:
          "Analizador de calidad de energía de clase A que registra armónicos, desbalances, flicker y factor de potencia durante periodos prolongados (hasta 7 días continuos), permitiendo sustentar reclamos ante la empresa eléctrica o diagnosticar fallas intermitentes en la red.",
        applications: [
          "Diagnóstico previo a la corrección de factor de potencia (banco de condensadores, SVG o AFQ)",
          "Registro continuo de armónicos y desbalances para sustentar reclamos ante la distribuidora",
          "Investigación de fallas intermitentes en tableros de distribución",
        ],
        image: "/assets/producto-instrumentos-medicion-fluke.webp",
        imageAlt: "Analizador de Energía FLUKE 435",
      },
      {
        slug: "medidor-aislamiento-fluke-1507",
        name: "Medidor de Aislamiento FLUKE 1507",
        summary: "Prueba de resistencia de aislamiento en motores, cables y transformadores.",
        description:
          "Megóhmetro que aplica tensiones de prueba de hasta 1000V para verificar el estado del aislamiento de motores, cables, transformadores y devanados, detectando degradación por humedad, envejecimiento o contaminación antes de que derive en una falla.",
        applications: [
          "Pruebas de aislamiento a motores y transformadores durante mantenimiento predictivo",
          "Verificación de cables de media y baja tensión antes de su puesta en servicio",
          "Diagnóstico de fallas de aislamiento en devanados de máquinas rotativas",
        ],
        image: "/assets/producto-instrumentos-medicion-fluke.webp",
        imageAlt: "Medidor de aislamiento FLUKE 1507",
      },
      {
        slug: "medidor-tension-toque-paso-metrel",
        name: "Medidor de Tensión de Toque y Paso METREL",
        summary: "Certificación de tensiones de toque y paso para sistemas de mallas a tierra bajo IEEE 80.",
        description:
          "Equipo METREL especializado en la medición de tensiones de toque y de paso, el paso final para certificar que un sistema de mallas a tierra mantiene esos valores dentro de los límites seguros para las personas establecidos en IEEE 80.",
        applications: [
          "Certificación final de sistemas de mallas a tierra en subestaciones y plantas industriales",
          "Verificación normativa de tensiones de paso en instalaciones de infraestructura crítica",
          "Auditorías de seguridad eléctrica exigidas por organismos de control",
        ],
        image: "/assets/alquiler-equipo-medicion-fluke.webp",
        imageAlt: "Medidor de tensión de toque y paso METREL",
      },
      {
        slug: "termografia-fluke-ti400",
        name: "Análisis de Termografía — Cámara FLUKE Ti400",
        summary: "Detección de puntos calientes en tableros y conexiones antes de que causen una falla.",
        description:
          "Cámara termográfica de alta resolución que detecta puntos calientes en conexiones, breakers, transformadores y tableros eléctricos sin necesidad de contacto ni desenergizar el equipo, permitiendo programar el mantenimiento antes de que ocurra una falla.",
        applications: [
          "Rutinas de mantenimiento predictivo durante paradas de planta programadas",
          "Inspección de tableros de distribución y MCC en operación (sin desenergizar)",
          "Detección temprana de conexiones flojas o sobrecargadas en subestaciones",
        ],
        image: "/assets/servicio-equipos-medicion.webp",
        imageAlt: "Cámara termográfica FLUKE Ti400",
      },
    ],
    image: "/assets/alquiler-equipo-medicion-fluke.webp",
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

export function getServicioSubItem(
  servicioSlug: string,
  itemSlug: string
): { servicio: ServicioItem; item: ServicioSubItem } | undefined {
  const servicio = getServicio(servicioSlug);
  const item = servicio?.items?.find((i) => i.slug === itemSlug);
  if (!servicio || !item) return undefined;
  return { servicio, item };
}
