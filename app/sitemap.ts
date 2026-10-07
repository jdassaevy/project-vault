import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://project-vault-rho.vercel.app";
const prioritySlugs = [
  "students-registration",
  ...projects
    .map((project) => project.slug)
    .filter((slug) => slug !== "students-registration"),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = prioritySlugs.map((slug, index) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: slug === "students-registration" ? "weekly" : "monthly",
    priority: slug === "students-registration" ? 0.9 : Math.max(0.6, 0.8 - index * 0.05),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectEntries,
  ];
}
