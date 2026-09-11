import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Uniquement les pages indexables. /demo/artisan et /brad/privacy portent un
// noindex : les lister ici enverrait un signal contradictoire.
const routes = [
  "",
  "/artisans",
  "/associations",
  "/services",
  "/projects",
  "/apropos",
  "/cv",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
