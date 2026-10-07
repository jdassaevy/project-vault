"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Layers3,
  Mail,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { projects } from "@/data/projects";
import { BrandMark } from "@/components/brand-mark";
import { ProjectVisual } from "@/components/project-visual";
import { VaultScrollShowcase } from "@/components/vault-scroll-showcase";

const featured = projects.find((project) => project.featured)!;

export function PortfolioHome() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setBooted(true), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="noise relative min-h-screen">
      <AnimatePresence>
        {!booted && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#05070a]"
          >
            <div className="w-[min(88vw,520px)]">
              <div className="mb-6 flex items-center justify-between mono text-[9px] tracking-[.2em] text-white/35">
                <span>JD // PROJECT VAULT</span>
                <button
                  onClick={() => setBooted(true)}
                  className="flex items-center gap-1 hover:text-white/70"
                >
                  <X size={11} /> SKIP
                </button>
              </div>

              <div className="space-y-2 mono text-xs text-white/70">
                <BootLine delay={0.05}>INITIALIZING INTERFACE...</BootLine>
                <BootLine delay={0.25}>MOUNTING PROJECT ARCHIVE...</BootLine>
                <BootLine delay={0.5}>VERIFYING BUILD STATUS...</BootLine>
                <BootLine delay={0.75}>
                  <span className="text-[#69ddb5]">SYSTEM READY.</span>
                </BootLine>
              </div>

              <div className="mt-5 h-px overflow-hidden bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-[#69b8ff] to-[#8c7cff]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[900px]" />

      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-9">
        <BrandMark />
        <nav className="glass flex items-center gap-1 rounded-full p-1.5 mono text-[9px] tracking-[.14em] text-white/72">
          <a
            href="#projects"
            className="rounded-full px-4 py-2.5 transition hover:bg-white/[.06] hover:text-white"
          >
            PROJECTS
          </a>
          <a
            href="#profile"
            className="hidden rounded-full px-4 py-2.5 transition hover:bg-white/[.06] hover:text-white sm:block"
          >
            PROFILE
          </a>
          <a
            href="#contact"
            className="hidden rounded-full px-4 py-2.5 transition hover:bg-white/[.06] hover:text-white md:block"
          >
            CONTACT
          </a>
          <a
            href="https://github.com/jdassaevy"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-[#F5F8FF] px-4 py-2.5 text-[10px] font-semibold tracking-[.12em] text-[#05070A] shadow-[0_6px_24px_rgba(255,255,255,0.08)] transition hover:bg-white"
          >
            GITHUB ↗
          </a>
        </nav>
      </header>

      <section className="relative mx-auto flex min-h-[880px] max-w-[1440px] items-center px-5 pb-20 pt-28 md:px-9">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={booted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55 }}
          >
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[.025] px-4 py-2 mono text-[9px] tracking-[.18em] text-white/50">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#55d6a7]" />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="mono mb-5 text-[10px] font-medium tracking-[.25em] text-[#6bb6ff]">
              SOFTWARE ENGINEERING // FULL STACK
            </p>

            <h1 className="max-w-[800px] text-[clamp(3.7rem,9vw,8.8rem)] font-semibold leading-[.79] tracking-[-.075em]">
              <span className="text-white">I BUILD</span>
              <br />
              <span className="text-gradient">SYSTEMS.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#8d98a9] md:text-lg">
              A collection of products, experiments and production systems I&apos;ve designed,
              coded and shipped.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#F5F8FF] px-5 py-3.5 text-sm font-semibold text-[#05070A] shadow-[0_8px_30px_rgba(255,255,255,0.10)] transition hover:bg-white"
              >
                Explore the vault
                <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
              </a>
              <a
                href="https://github.com/jdassaevy"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[.04] px-5 py-3.5 text-sm font-medium text-white/90 transition hover:bg-white/[.08] hover:text-white"
              >
                <Code2 size={15} /> GitHub profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={booted ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 rounded-full bg-[#438de6]/10 blur-[90px]" />
            <div className="glass accent-glow relative rounded-[30px] p-4">
              <div className="mb-3 flex items-center justify-between px-1 mono text-[8px] tracking-[.2em] text-white/35">
                <span>FEATURED ASSET</span>
                <span>STATUS // LIVE</span>
              </div>
              <ProjectVisual project={featured} large />
              <div className="grid grid-cols-3 gap-2 pt-3">
                <Metric label="PROJECTS" value="04" />
                <Metric label="FOCUS" value="FULL STACK" />
                <Metric label="BUILD" value="2026" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VaultScrollShowcase />

      <section
        id="projects"
        className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-9 md:py-32"
      >
        <SectionHeader
          eyebrow="ARCHIVE // 01"
          title="Selected builds"
          description="Real projects, different scopes. Open one to inspect the problem, solution and technical decisions."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-[28px] border border-white/[.07] bg-white/[.018] p-3 transition duration-300 hover:-translate-y-1 hover:border-white/[.14] hover:bg-white/[.028]"
              >
                <ProjectVisual project={project} />

                <div className="px-3 pb-3 pt-5">
                  <div className="mb-3 flex items-center justify-between mono text-[8px] tracking-[.18em] text-white/35">
                    <span>{project.category}</span>
                    <span>{project.status}</span>
                  </div>

                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-.025em]">
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-6 text-[#7f8b9c]">
                        {project.description}
                      </p>
                    </div>

                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[.03] text-white/55 transition group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/[.07] px-2.5 py-1.5 mono text-[8px] tracking-[.1em] text-white/42"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="profile"
        className="mx-auto max-w-[1440px] px-5 py-24 md:px-9 md:py-32"
      >
        <div className="grid gap-5 lg:grid-cols-[.75fr_1.25fr]">
          <div className="glass rounded-[28px] p-7 md:p-9">
            <p className="mono text-[9px] tracking-[.2em] text-[#6bb6ff]">PLAYER PROFILE</p>
            <h2 className="mt-7 text-4xl font-semibold tracking-[-.05em]">JD.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#8894a5]">
              Software Engineering student and developer focused on shipping useful products,
              learning through real systems and turning repetitive work into better software.
            </p>

            <div className="mt-10 space-y-3">
              <ProfileRow icon={<Code2 size={15} />} label="CLASS" value="FULL STACK" />
              <ProfileRow
                icon={<Layers3 size={15} />}
                label="SPECIALTY"
                value="PRODUCT SYSTEMS"
              />
              <ProfileRow icon={<Terminal size={15} />} label="MODE" value="BUILD & SHIP" />
            </div>
          </div>

          <div className="rounded-[28px] border border-white/[.07] bg-white/[.018] p-7 md:p-9">
            <div className="flex items-center gap-2 mono text-[9px] tracking-[.2em] text-white/35">
              <Sparkles size={13} /> CORE CAPABILITIES
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Capability
                title="Frontend Engineering"
                tech="Next.js · React · TypeScript"
                detail="Responsive product interfaces, stateful flows and reusable UI systems."
              />
              <Capability
                title="Backend & Data"
                tech="Supabase · PostgreSQL · REST APIs"
                detail="Authentication, tenant-aware data models and operational application state."
              />
              <Capability
                title="Automation & Integrations"
                tech="Meta API · Resend · Vercel"
                detail="Transactional messaging, external services and production delivery workflows."
              />
              <Capability
                title="Product Systems"
                tech="UX · Workflows · Reliability"
                detail="Turning real operational processes into software that stays understandable."
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-9 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[34px] border border-white/[.08] bg-[#080b10] p-7 md:p-11 lg:p-14"
        >
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-45" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#5da9ff]/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 left-[32%] h-72 w-72 rounded-full bg-[#8b7cff]/[.07] blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-3 mono text-[9px] tracking-[.2em] text-[#6bb6ff]">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#55d6a7]" />
                CONTACT // OPEN CHANNEL
              </div>

              <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[.95] tracking-[-.055em] md:text-6xl">
                Looking for someone who can
                <br />
                <span className="text-gradient">build and ship?</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#8793a5] md:text-base">
                I&apos;m open to Full Stack, Front-end and Software Development opportunities.
                If the work involves real product problems, integrations or automation, I&apos;d like
                to hear about it.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/juliodassaevy"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#F5F8FF] px-5 py-3.5 text-sm font-semibold text-[#05070A] shadow-[0_8px_30px_rgba(255,255,255,0.10)] transition hover:bg-white"
                >
                  LinkedIn
                  <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:dassaevylabs@gmail.com"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[.04] px-5 py-3.5 text-sm font-medium text-white/90 transition hover:bg-white/[.08] hover:text-white"
                >
                  <Mail size={15} /> Email me
                </a>
                <a
                  href="https://github.com/jdassaevy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/[.09] px-5 py-3.5 text-sm text-white/60 transition hover:border-white/15 hover:text-white"
                >
                  <Code2 size={15} /> GitHub
                </a>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/[.07] bg-white/[.018] p-6">
              <p className="mono text-[8px] tracking-[.18em] text-white/30">OPPORTUNITY FILTER</p>
              <div className="mt-5 space-y-3">
                <ContactRow label="ROLE" value="FULL STACK / SOFTWARE" />
                <ContactRow label="MODE" value="REMOTE · HYBRID · ON-SITE" />
                <ContactRow label="REGION" value="FLORIANÓPOLIS / BRAZIL" />
                <ContactRow label="STATUS" value="OPEN TO TALK" accent />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto max-w-[1440px] px-5 pb-10 pt-8 md:px-9">
        <div className="border-t border-white/[.07] py-8 md:flex md:items-end md:justify-between">
          <div>
            <p className="mono text-[9px] tracking-[.2em] text-white/30">JD // PROJECT VAULT</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em] md:text-3xl">
              Build something worth opening.
            </h2>
            <p className="mt-3 text-xs text-white/28">Julio Dassaevy · Software Engineering · 2026</p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2 md:mt-0">
            <FooterLink href="https://github.com/jdassaevy" label="GITHUB ↗" external />
            <FooterLink href="https://www.linkedin.com/in/juliodassaevy" label="LINKEDIN ↗" external />
            <FooterLink href="mailto:dassaevylabs@gmail.com" label="EMAIL" />
          </div>
        </div>
      </footer>
    </main>
  );
}

function BootLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      {">"} {children}
    </motion.p>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[.06] bg-white/[.025] px-3 py-3">
      <p className="mono text-[7px] tracking-[.18em] text-white/30">{label}</p>
      <p className="mono mt-1.5 text-[10px] font-semibold text-white/70">{value}</p>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid items-end gap-5 md:grid-cols-2">
      <div>
        <p className="mono text-[9px] tracking-[.2em] text-[#6bb6ff]">{eyebrow}</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-.05em] md:text-6xl">{title}</h2>
      </div>
      <p className="max-w-xl text-sm leading-7 text-[#7f8b9c] md:justify-self-end">
        {description}
      </p>
    </div>
  );
}

function ProfileRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/[.06] bg-white/[.02] px-4 py-3.5">
      <div className="flex items-center gap-3 text-white/50">
        {icon}
        <span className="mono text-[8px] tracking-[.15em]">{label}</span>
      </div>
      <span className="mono text-[8px] tracking-[.12em] text-white/75">{value}</span>
    </div>
  );
}

function Capability({
  title,
  tech,
  detail,
}: {
  title: string;
  tech: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[.065] bg-white/[.02] p-5">
      <p className="text-sm font-medium text-white/88">{title}</p>
      <p className="mt-2 mono text-[8px] tracking-[.1em] text-[#6bb6ff]">{tech}</p>
      <p className="mt-4 text-xs leading-6 text-[#687587]">{detail}</p>
    </div>
  );
}

function ContactRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/[.055] pb-3 last:border-0 last:pb-0">
      <span className="mono text-[7px] tracking-[.16em] text-white/28">{label}</span>
      <span className={`mono text-right text-[8px] tracking-[.11em] ${accent ? "text-[#69ddb5]" : "text-white/65"}`}>
        {value}
      </span>
    </div>
  );
}

function FooterLink({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="rounded-full border border-white/15 bg-white/[.03] px-4 py-2.5 mono text-[8px] tracking-[.14em] text-white/72 transition hover:bg-white hover:text-[#05070A]"
    >
      {label}
    </a>
  );
}
