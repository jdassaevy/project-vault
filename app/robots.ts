import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://project-vault-rho.vercel.app/sitemap.xml",
    host: "https://project-vault-rho.vercel.app",
  };
}
