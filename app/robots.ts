import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // On laisse tout explorable, y compris /demo : cette page porte un
    // noindex dans son en-tete, et un robot doit pouvoir la lire pour le voir.
    // L'interdire ici reviendrait a la faire indexer sans contenu.
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
