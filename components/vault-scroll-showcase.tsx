"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ChevronDown, Crosshair } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const accentStyles = {
  blue: {
    glow: "bg-[#5ea7ff]",
    text: "text-[#79bdff]",
    border: "border-[#5ea7ff]/25",
  },
  green: {
    glow: "bg-[#55d6a7]",
    text: "text-[#65deb7]",
    border: "border-[#55d6a7]/25",
  },
  amber: {
    glow: "bg-[#efbd67]",
    text: "text-[#f2c876]",
    border: "border-[#efbd67]/25",
  },
  violet: {
    glow: "bg-[#8b7cff]",
    text: "text-[#a398ff]",
    border: "border-[#8b7cff]/25",
  },
};

export function VaultScrollShowcase() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".vault-pin-experience", { display: "none" });
        gsap.set(".vault-reduced-experience", { display: "block" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const panels = gsap.utils.toArray<HTMLElement>(".vault-panel");
        const progress = root.current?.querySelector<HTMLElement>(".vault-progress-fill");
        const orb = root.current?.querySelector<HTMLElement>(".vault-orb");

        gsap.set(panels, {
          yPercent: 115,
          opacity: 0,
          scale: 0.84,
          rotateX: 8,
          transformOrigin: "50% 100%",
        });

        if (progress) {
          gsap.set(progress, { scaleX: 0, transformOrigin: "0% 50%" });
        }

        const introSegment = 0.9;
        const panelSegment = 1.55;
        const panelEnter = 0.38;
        const panelHold = 0.72;
        const panelExit = 0.42;
        const totalDuration = introSegment + panels.length * panelSegment;
        const scrollDistance = 520 + panels.length * 760;

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: `+=${scrollDistance}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        if (progress) {
          timeline.to(
            progress,
            {
              scaleX: 1,
              duration: totalDuration,
            },
            0,
          );
        }

        timeline
          .to(
            ".vault-intro-kicker",
            {
              letterSpacing: "0.72em",
              opacity: 0,
              y: -24,
              duration: 0.38,
            },
            0,
          )
          .to(
            ".vault-intro-title",
            {
              scale: 1.42,
              opacity: 0,
              filter: "blur(12px)",
              duration: 0.72,
              ease: "power2.in",
            },
            0.04,
          )
          .to(
            ".vault-intro-frame",
            {
              scale: 1.14,
              opacity: 0,
              duration: 0.68,
              ease: "power2.in",
            },
            0.04,
          )
          .to(
            ".vault-intro-sub",
            {
              opacity: 0,
              y: 18,
              duration: 0.28,
            },
            0.08,
          );

        panels.forEach((panel, index) => {
          const copy = panel.querySelectorAll(".vault-panel-copy");
          const panelVisual = panel.querySelector(".vault-panel-visual");
          const panelStart = introSegment + index * panelSegment;

          timeline.to(
            panel,
            {
              yPercent: 0,
              opacity: 1,
              scale: 1,
              rotateX: 0,
              filter: "blur(0px)",
              duration: panelEnter,
              ease: "power3.out",
            },
            panelStart,
          );

          timeline.fromTo(
            copy,
            { opacity: 0, y: 42 },
            {
              opacity: 1,
              y: 0,
              duration: 0.34,
              stagger: 0.035,
              ease: "power2.out",
            },
            panelStart + 0.08,
          );

          if (panelVisual) {
            timeline.fromTo(
              panelVisual,
              { scale: 0.9, rotateZ: index % 2 === 0 ? 2.2 : -2.2 },
              {
                scale: 1,
                rotateZ: 0,
                duration: 0.42,
                ease: "power3.out",
              },
              panelStart + 0.03,
            );
          }

          if (orb) {
            timeline.to(
              orb,
              {
                xPercent: index % 2 === 0 ? 22 : -18,
                yPercent: index % 3 === 0 ? -10 : 15,
                scale: 1 + index * 0.1,
                duration: 0.46,
                ease: "power2.inOut",
              },
              panelStart + 0.06,
            );
          }

          timeline.to(
            panel,
            {
              scale: 1.012,
              duration: panelHold,
              ease: "none",
            },
            panelStart + panelEnter,
          );

          timeline.to(
            panel,
            {
              yPercent: -24,
              scale: 0.92,
              opacity: 0,
              filter: "blur(8px)",
              duration: panelExit,
              ease: "power2.in",
            },
            panelStart + panelEnter + panelHold,
          );
        });

        timeline.to(".vault-stage-ui", { opacity: 0, duration: 0.25 }, totalDuration - 0.18);

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative hidden h-screen overflow-hidden border-y border-white/[.06] bg-[#05070a] md:block">
      <div className="vault-pin-experience relative h-screen overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,85,145,.12),transparent_56%)]" />
        <div className="vault-orb pointer-events-none absolute left-1/2 top-1/2 h-[48vw] max-h-[760px] w-[48vw] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5ea7ff] opacity-[.07] blur-[100px]" />

        <div className="vault-stage-ui absolute inset-x-0 top-0 z-40 mx-auto flex h-20 max-w-[1440px] items-center justify-between px-9">
          <div className="flex items-center gap-3 mono text-[8px] tracking-[.22em] text-white/35">
            <Crosshair size={13} className="text-[#6bb6ff]" />
            ARCHIVE SEQUENCE
          </div>
          <div className="mono text-[8px] tracking-[.22em] text-white/30">
            {String(projects.length).padStart(2, "0")} ASSETS // SCROLL CONTROLLED
          </div>
        </div>

        <div className="vault-intro-frame pointer-events-none absolute left-1/2 top-1/2 z-20 h-[min(62vw,720px)] w-[min(62vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.055]">
          <div className="absolute inset-[15%] rounded-full border border-white/[.045]" />
          <div className="absolute inset-[31%] rounded-full border border-white/[.035]" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[.035] to-transparent" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/[.035] to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-9 text-center">
          <div>
            <p className="vault-intro-kicker mono text-[9px] font-medium tracking-[.35em] text-[#6bb6ff]">
              JD // ACCESS GRANTED
            </p>
            <h2 className="vault-intro-title mt-6 text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.8] tracking-[-.08em] text-white">
              ENTERING
              <br />
              <span className="text-gradient">THE VAULT.</span>
            </h2>
            <div className="vault-intro-sub mt-9 flex items-center justify-center gap-3 mono text-[8px] tracking-[.2em] text-white/30">
              KEEP SCROLLING
              <ChevronDown size={13} />
            </div>
          </div>
        </div>

        {projects.map((project) => {
          const accent = accentStyles[project.accent];

          return (
            <article
              key={project.slug}
              className="vault-panel pointer-events-none absolute inset-x-0 bottom-[76px] top-[92px] z-20 mx-auto max-w-[1440px] px-9"
            >
              <div className={`relative grid h-full overflow-hidden rounded-[34px] border bg-[#090d14]/95 p-6 shadow-2xl backdrop-blur-xl lg:grid-cols-[.86fr_1.14fr] lg:p-8 ${accent.border}`}>
                <div className={`absolute -left-40 -top-40 h-[460px] w-[460px] rounded-full opacity-[.08] blur-[100px] ${accent.glow}`} />
                <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

                <div className="relative z-10 flex flex-col justify-between p-4 lg:p-8">
                  <div>
                    <div className="vault-panel-copy flex items-center gap-3 mono text-[8px] tracking-[.22em] text-white/35">
                      <span className={accent.text}>MISSION {project.index}</span>
                      <span>//</span>
                      <span>{project.category}</span>
                    </div>

                    <h3 className="vault-panel-copy mt-8 max-w-[620px] text-[clamp(3.4rem,6vw,7.4rem)] font-semibold leading-[.84] tracking-[-.075em] text-white">
                      {project.title}
                    </h3>

                    <p className="vault-panel-copy mt-7 max-w-xl text-base leading-7 text-[#8591a2]">
                      {project.description}
                    </p>

                    <div className="vault-panel-copy mt-8 flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/[.08] bg-white/[.025] px-3 py-2 mono text-[8px] tracking-[.12em] text-white/55"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="vault-panel-copy mt-8 flex items-end justify-between gap-6">
                    <div>
                      <p className="mono text-[7px] tracking-[.19em] text-white/25">STATUS</p>
                      <p className="mono mt-2 text-[9px] tracking-[.12em] text-white/70">{project.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="mono text-[7px] tracking-[.19em] text-white/25">ASSET ID</p>
                      <p className="mono mt-2 text-[9px] tracking-[.12em] text-white/70">JD-{project.index}</p>
                    </div>
                  </div>
                </div>

                <div className="vault-panel-visual relative z-10 min-h-0 p-1">
                  <ProjectVisual project={project} large />
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="pointer-events-auto absolute bottom-7 right-7 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white text-[#05070a] shadow-[0_12px_34px_rgba(255,255,255,.12)] transition hover:scale-105"
                  aria-label={`Open ${project.title} case study`}
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </article>
          );
        })}

        <div className="vault-stage-ui absolute inset-x-0 bottom-0 z-40 mx-auto flex h-[76px] max-w-[1440px] items-center gap-5 px-9">
          <span className="mono text-[8px] tracking-[.2em] text-white/28">SCROLL</span>
          <div className="h-px flex-1 overflow-hidden bg-white/[.08]">
            <div className="vault-progress-fill h-full bg-gradient-to-r from-[#6bb6ff] via-[#80b8ff] to-[#8b7cff]" />
          </div>
          <span className="mono text-[8px] tracking-[.2em] text-white/28">
            SCRUB // 01—{String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="vault-reduced-experience hidden px-9 py-24">
        <p className="mono text-[9px] tracking-[.22em] text-[#6bb6ff]">PROJECT VAULT</p>
        <h2 className="mt-5 text-5xl font-semibold tracking-[-.06em]">Selected archive assets.</h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-2xl border border-white/[.08] bg-white/[.025] p-6"
            >
              <p className="mono text-[8px] tracking-[.18em] text-white/30">MISSION {project.index}</p>
              <p className="mt-4 text-xl font-semibold">{project.title}</p>
              <p className="mt-2 text-sm text-[#7f8b9c]">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
