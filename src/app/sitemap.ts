import type { MetadataRoute } from "next";
import { NAV_LINKS } from "@/lib/nav-links";
import { servicios } from "@/data/servicios";
import { productos } from "@/data/productos";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ingelpower.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const navEntries: MetadataRoute.Sitemap = NAV_LINKS.map(({ href }) => ({
    url: `${SITE_URL}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.7,
  }));

  const servicioEntries: MetadataRoute.Sitemap = servicios.map(({ slug }) => ({
    url: `${SITE_URL}/servicios/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const productoEntries: MetadataRoute.Sitemap = productos.map(({ slug }) => ({
    url: `${SITE_URL}/productos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const productoItemEntries: MetadataRoute.Sitemap = productos.flatMap(({ slug, items }) =>
    (items ?? []).map((item) => ({
      url: `${SITE_URL}/productos/${slug}/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  );

  const servicioItemEntries: MetadataRoute.Sitemap = servicios.flatMap(({ slug, items }) =>
    (items ?? []).map((item) => ({
      url: `${SITE_URL}/servicios/${slug}/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  );

  return [
    ...navEntries,
    ...servicioEntries,
    ...productoEntries,
    ...productoItemEntries,
    ...servicioItemEntries,
  ];
}
