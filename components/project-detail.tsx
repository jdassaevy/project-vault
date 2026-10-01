"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Check, Code2, LockKeyhole, ShieldCheck } from "lucide-react";
import type { Project } from "@/data/projects";
import { BrandMark } from "@/components/brand-mark";
import { ProjectVisual } from "@/components/project-visual";
import { StudentsRegistrationWalkthrough } from "@/components/students-registration-walkthrough";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="noise min-h-screen">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[700px]" />
      <header className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-9">
        <Link href="/"><BrandMark /></Link>
        <Link href="/#projects" className="glass flex items-center gap-2 rounded-full border border-white/15 bg-white/[.04] px-4 py-2.5 mono text-[9px] font-semibold tracking-[.14em] text-white/85 transition hover:bg-white/[.08] hover:text-white">
          <ArrowLeft size={13} /> BACK TO VAULT
        </Link>
      </header>

      <section className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-20 md:px-9 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid items-end gap-8 lg:grid-cols-[1fr_.8fr]"
        >
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-2 mono text-[9px] tracking-[.16em] text-white/38">
              <span>MISSION {project.index}</span><span className="text-white/15">//</span><span>{project.category}</span>
            </div>
            <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-semibold leading-[.85] tracking-[-.07em]">
              {project.title}
            </h1>
            <p className="mt-6 text-lg text-[#7f8b9c]">{project.subtitle}</p>
          </div>

          <div className="grid grid-cols-3 gap-2 lg:w-[470px] lg:justify-self-end">
            <Info label="STATUS" value={project.status} />
            <Info label="ACCESS" value={project.access} />
            <Info label="ASSET" value={`JD-${project.index}`} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .1 }}
          className="mt-14"
        >
          <ProjectVisual project={project} large />
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-5 px-5 py-12 md:px-9 lg:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-[28px] border border-white/[.07] bg-white/[.018] p-7 md:p-10">
          <p className="mono text-[9px] tracking-[.2em] text-[#6bb6ff]">MISSION BRIEF</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em]">What this project solves</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#8793a5]">{project.longDescription}</p>

          <div className="mt-10 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-lg border border-white/[.08] bg-white/[.025] px-3 py-2 mono text-[9px] tracking-[.1em] text-white/55">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="glass rounded-[28px] p-7 md:p-10">
          <p className="mono text-[9px] tracking-[.2em] text-white/35">DELIVERED MODULES</p>
          <div className="mt-6 space-y-3">
            {project.highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 border-b border-white/[.055] pb-3 text-sm text-white/68 last:border-0">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#5ed8ad]/10 text-[#66dcb4]">
                  <Check size={11} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {project.slug === "students-registration" && <StudentsRegistrationWalkthrough />}

      <section className="mx-auto max-w-[1440px] px-5 pb-28 pt-20 md:px-9">
        <div className="relative overflow-hidden rounded-[28px] border border-white/[.08] bg-white/[.025] p-8 md:flex md:items-center md:justify-between md:p-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#65b6ff]/10 blur-[80px]" />
          <div className="relative">
            <div className="flex items-center gap-2 mono text-[8px] tracking-[.17em] text-white/35">
              {project.access === "PUBLIC" ? <ShieldCheck size={13} /> : <LockKeyhole size={13} />}
              {project.access === "PUBLIC" ? "SOURCE AVAILABLE" : "PRIVATE REPOSITORY"}
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-.03em]">Inspect the build.</h3>
            <p className="mt-2 text-sm text-[#7c899a]">
              {project.github
                ? "Open the source repository and explore the project history."
                : "This source repository is intentionally private; the case study documents the project publicly."}
            </p>
          </div>

          <div className="relative mt-6 md:mt-0">
            {project.github ? (
              <a href={project.github} target="_blank" className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#F5F8FF] px-5 py-3.5 text-sm font-semibold text-[#05070A] shadow-[0_8px_30px_rgba(255,255,255,0.10)] transition hover:bg-white">
                <Code2 size={16} /> Open GitHub <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[.03] px-5 py-3.5 mono text-[9px] font-semibold tracking-[.14em] text-white/75">
                <LockKeyhole size={13} /> PRIVATE SOURCE
              </span>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[.07] bg-white/[.025] px-3 py-3">
      <p className="mono text-[7px] tracking-[.18em] text-white/28">{label}</p>
      <p className="mono mt-1.5 truncate text-[9px] font-semibold text-white/65">{value}</p>
    </div>
  );
}
