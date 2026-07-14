import type { MetadataRoute } from "next";
import { NAV_LINKS } from "@/lib/nav-links";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ingelpower.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_LINKS.map(({ href }) => ({
    url: `${SITE_URL}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.7,
  }));
}
