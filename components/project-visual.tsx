import { Activity, Boxes, CircleDollarSign, Sprout } from "lucide-react";
import type { Project } from "@/data/projects";

const styles = {
  blue: { glow: "from-[#67b7ff]/35 via-[#346fdb]/15 to-transparent", border: "border-[#6bb6ff]/25", icon: "text-[#7ec4ff]" },
  violet: { glow: "from-[#9b8cff]/30 via-[#6756d8]/15 to-transparent", border: "border-[#988aff]/25", icon: "text-[#a99eff]" },
  green: { glow: "from-[#5ed8ad]/25 via-[#246b57]/15 to-transparent", border: "border-[#5ed8ad]/25", icon: "text-[#67ddb5]" },
  amber: { glow: "from-[#efbd67]/25 via-[#865d22]/15 to-transparent", border: "border-[#efbd67]/25", icon: "text-[#f4c977]" },
};

function VisualIcon({ slug, className }: { slug: string; className?: string }) {
  if (slug === "students-registration") return <Boxes className={className} />;
  if (slug === "family-finance") return <CircleDollarSign className={className} />;
  if (slug === "plant-growth-multiplier") return <Sprout className={className} />;
  return <Activity className={className} />;
}

export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const theme = styles[project.accent];

  return (
    <div className={`scanline relative overflow-hidden rounded-[24px] border bg-[#090d14] ${theme.border} ${large ? "min-h-[380px]" : "aspect-[16/10]"}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.glow}`} />
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div className="absolute left-[8%] top-[10%] h-[62%] w-[62%] rounded-full border border-white/[.06]" />
      <div className="absolute left-[18%] top-[20%] h-[42%] w-[42%] rounded-full border border-white/[.04]" />
      <div className="absolute -bottom-12 -right-8 h-52 w-52 rotate-12 rounded-[38px] border border-white/[.05] bg-white/[.018]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-[30px] border border-white/10 bg-white/[.035] shadow-2xl backdrop-blur-md md:h-32 md:w-32">
          <VisualIcon slug={project.slug} className={`h-12 w-12 ${theme.icon}`} />
          <span className="absolute -right-5 -top-5 mono text-[10px] tracking-[.18em] text-white/30">{project.index}</span>
        </div>
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div>
          <p className="mono text-[8px] tracking-[.22em] text-white/35">VAULT ASSET</p>
          <p className="mt-1 text-sm font-semibold text-white/80">{project.title}</p>
        </div>
        <p className="mono text-[8px] tracking-[.2em] text-white/30">JD-{project.index}</p>
      </div>
    </div>
  );
}
