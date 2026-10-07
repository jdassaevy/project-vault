import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://project-vault-rho.vercel.app"),
  title: {
    default: "JD // Project Vault",
    template: "%s // JD Project Vault",
  },
  description:
    "Full Stack developer portfolio featuring production SaaS, web products, automations and software engineering case studies.",
  keywords: [
    "Full Stack Developer",
    "Software Engineering",
    "Next.js",
    "TypeScript",
    "React",
    "Supabase",
    "SaaS",
    "Automation",
  ],
  authors: [
    {
      name: "Julio Dassaevy Seemann de Mattia",
      url: "https://www.linkedin.com/in/juliodassaevy",
    },
  ],
  creator: "Julio Dassaevy Seemann de Mattia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JD // Project Vault",
    description: "Software Engineering · Full Stack Development · SaaS · Automation",
    url: "/",
    siteName: "JD // Project Vault",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "JD // Project Vault — Full Stack Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JD // Project Vault",
    description: "Software Engineering · Full Stack Development · SaaS · Automation",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
