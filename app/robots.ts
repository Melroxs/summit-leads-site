import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"]
    },
    sitemap: "https://summitleadsltd.com/sitemap.xml",
    host: "https://summitleadsltd.com"
  };
}
