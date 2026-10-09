export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  status: "PRODUCTION" | "ACTIVE" | "LAB" | "ARCHIVED";
  access: "PUBLIC" | "PRIVATE";
  description: string;
  longDescription: string;
  stack: string[];
  highlights: string[];
  github?: string;
  liveUrl?: string;
  accent: "blue" | "violet" | "green" | "amber";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "students-registration",
    index: "01",
    title: "Students Registration",
    subtitle: "Academy Management SaaS",
    category: "FULL STACK · SAAS",
    status: "PRODUCTION",
    access: "PUBLIC",
    description: "Multi-academy platform for students, classes, payments and automated communication.",
    longDescription:
      "A production-focused SaaS built to centralize academy operations. It combines tenant-aware student management, financial tracking, document exports, authentication and automated WhatsApp/email communication in one operational dashboard.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel", "Resend", "Meta API"],
    highlights: [
      "Multi-academy architecture",
      "Per-student payment tracking",
      "WhatsApp payment automations",
      "Email authentication and recovery",
      "DOCX exports for class rosters",
      "Responsive light/dark dashboard",
    ],
    github: "https://github.com/jdassaevy/students-registration",
    accent: "blue",
    featured: true,
  },
  {
    slug: "family-finance",
    index: "02",
    title: "Family Finance",
    subtitle: "Personal Finance Workspace",
    category: "PRODUCT · FINTECH",
    status: "ACTIVE",
    access: "PRIVATE",
    description: "Private finance workspace focused on household organization and clearer money decisions.",
    longDescription:
      "An evolving private product for organizing household finances. The project is part of my product-design practice: reducing complex financial information into an interface that is quick to understand and maintain.",
    stack: ["TypeScript", "Web App", "Product UX"],
    highlights: [
      "Private product repository",
      "Finance-oriented data organization",
      "Product UX exploration",
      "Iterative development workflow",
    ],
    accent: "green",
  },
  {
    slug: "plant-growth-multiplier",
    index: "03",
    title: "Plant Growth Multiplier",
    subtitle: "Minecraft Fabric Mod",
    category: "GAME DEV · MODDING",
    status: "LAB",
    access: "PRIVATE",
    description: "A focused Fabric mod that accelerates crop and plant growth while keeping a Vanilla+ feel.",
    longDescription:
      "A small game-mod engineering project built around one clear mechanic: configurable faster growth for common crops and plants without changing the core Minecraft experience. It is intentionally narrow, lightweight and easy to reason about.",
    stack: ["Java", "Fabric", "Minecraft", "Gradle"],
    highlights: [
      "Single-purpose mod architecture",
      "Vanilla+ design constraint",
      "Configurable growth behavior",
      "Game systems experimentation",
    ],
    accent: "amber",
  },
  {
    slug: "nlw-habits",
    index: "04",
    title: "NLW Habits",
    subtitle: "Habit Tracking Experience",
    category: "WEB · LEARNING BUILD",
    status: "ARCHIVED",
    access: "PUBLIC",
    description: "Habit tracking interface created as a practical full-stack learning project.",
    longDescription:
      "A learning build focused on the fundamentals of a modern web product: interface composition, habit tracking interactions and connecting frontend decisions to application behavior.",
    stack: ["TypeScript", "React", "Web"],
    highlights: [
      "Hands-on full-stack learning",
      "Habit tracking interactions",
      "Reusable UI composition",
      "Public source code",
    ],
    github: "https://github.com/jdassaevy/NLW-habits",
    accent: "violet",
  },
  {
    slug: "dassaevy-labs-landing",
    index: "05",
    title: "Dassaevy Labs",
    subtitle: "Commercial Landing Page",
    category: "WEB · BUSINESS",
    status: "PRODUCTION",
    access: "PUBLIC",
    description: "Commercial landing page designed to present digital services and turn visitors into qualified project leads.",
    longDescription:
      "A production landing page for Dassaevy Labs built to connect product presentation with business conversion. The experience brings together services, case studies, pricing, process, responsive motion, quote capture and direct WhatsApp/email contact in one polished commercial flow.",
    stack: ["Next.js", "TypeScript", "Motion", "Resend", "Vercel"],
    highlights: [
      "Responsive commercial landing experience",
      "Motion system with reduced-motion support",
      "Quote request form and lead capture",
      "SEO and structured business metadata",
      "Service, case-study and pricing sections",
      "WhatsApp and email conversion paths",
    ],
    github: "https://github.com/jdassaevy/landing-page-dassaevylabs",
    liveUrl: "https://dassaevylabs.com.br",
    accent: "blue",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
