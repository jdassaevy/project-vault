export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[.04] mono text-[11px] font-bold tracking-[-.08em]">
        <span>JD</span>
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#6bb6ff] to-[#8b7cff]" />
      </div>
      <div className="hidden sm:block">
        <p className="mono text-[10px] font-semibold tracking-[.2em] text-white">PROJECT VAULT</p>
        <p className="mono mt-0.5 text-[8px] tracking-[.22em] text-[#657083]">JD // 2026</p>
      </div>
    </div>
  );
}
