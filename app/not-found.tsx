import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="text-center">
        <p className="mono text-[10px] tracking-[.2em] text-[#6bb6ff]">ERROR // 404</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-.05em]">Asset not found.</h1>
        <p className="mt-4 text-[#7f8b9c]">This item is not stored in the vault.</p>
        <Link href="/" className="mt-8 inline-block rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black">Return to vault</Link>
      </div>
    </main>
  );
}
