export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export const FOOTER_NAV_LINKS: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/proyectos", label: "Proyectos" },
];

export const FOOTER_SERVICE_LINKS: NavLink[] = [
  { href: "/servicios#mallas-a-tierra", label: "Mallas a tierra" },
  { href: "/servicios#tableros-electricos", label: "Tableros eléctricos" },
  { href: "/servicios#factor-potencia", label: "Factor de potencia" },
  { href: "/servicios#media-tension", label: "Media tensión" },
  { href: "/servicios#acometidas", label: "Acometidas eléctricas" },
];
