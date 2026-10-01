"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Boxes,
  Cloud,
  Database,
  Mail,
  MessageCircle,
  Network,
  ShieldCheck,
  WalletCards,
  Zap,
} from "lucide-react";

const decisions = [
  {
    index: "01",
    title: "Tenant-aware operations",
    description:
      "Academy context stays attached to the operational flow so students, classes, finance and automations remain separated by workspace instead of becoming one shared dataset.",
    meta: "MULTI-ACADEMY // DATA BOUNDARIES",
    icon: Boxes,
  },
  {
    index: "02",
    title: "Payments drive the workflow",
    description:
      "Payment state is treated as operational data. Confirming a registration or monthly fee updates financial views and can feed the communication flow instead of living in an isolated screen.",
    meta: "FINANCE // RECEIPTS // STATUS",
    icon: WalletCards,
  },
  {
    index: "03",
    title: "Automations follow real events",
    description:
      "WhatsApp reminders and confirmations are connected to academy events and payment timing, including D-3, D0 and D+3 reminder windows, rather than being a disconnected messaging tool.",
    meta: "META API // EVENT-DRIVEN",
    icon: Zap,
  },
  {
    index: "04",
    title: "Integrations stay replaceable",
    description:
      "Core product behavior remains in the application while external services handle focused responsibilities: Supabase for auth/data, Resend for email, Meta for WhatsApp and Vercel for delivery.",
    meta: "SERVICE BOUNDARIES // DELIVERY",
    icon: Network,
  },
] as const;

export function StudentsRegistrationArchitecture() {
  return (
    <section className="relative overflow-hidden border-b border-white/[.06] bg-[#070a0f]">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#5ea7ff]/[.065] blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-9 md:py-32">
        <div className="grid gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-end">
          <div>
            <p className="mono text-[9px] tracking-[.22em] text-[#6bb6ff]">
              SYSTEM ARCHITECTURE // PRODUCTION FLOW
            </p>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.055em] md:text-6xl">
              Built as a product,
              <br />
              <span className="text-gradient">not a collection of pages.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#7f8b9c] lg:justify-self-end">
            The interface is only one layer. Authentication, tenant-aware data, financial state,
            transactional email and WhatsApp automations are connected through a small set of
            focused services.
          </p>
        </div>

        <div className="mt-16 rounded-[32px] border border-white/[.08] bg-black/20 p-4 shadow-[0_30px_120px_rgba(0,0,0,.35)] md:p-7 lg:p-9">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-white/[.06] pb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#6bb6ff]/20 bg-[#6bb6ff]/10 text-[#79bdff]">
                <Network size={16} />
              </span>
              <div>
                <p className="mono text-[8px] tracking-[.2em] text-white/32">SYSTEM MAP</p>
                <p className="mt-1 text-sm font-medium text-white/78">Students Registration</p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-[#55d6a7]/15 bg-[#55d6a7]/[.055] px-3 py-2 mono text-[8px] tracking-[.14em] text-[#76ddb9]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#55d6a7]" />
              PRODUCTION ARCHITECTURE
            </div>
          </div>

          <div className="hidden min-h-[640px] grid-cols-[1fr_88px_1.15fr_88px_1fr] items-center gap-y-5 lg:grid">
            <div className="space-y-4">
              <ArchitectureNode
                icon={ShieldCheck}
                eyebrow="IDENTITY"
                title="Academy user"
                body="Authenticated operator entering the academy workspace."
              />
              <ArchitectureNode
                icon={Boxes}
                eyebrow="PRODUCT"
                title="Operational UI"
                body="Students, classes, finance, reports and automations."
              />
            </div>

            <Connector label="REQUEST" />

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55 }}
                className="relative overflow-hidden rounded-[28px] border border-[#6bb6ff]/25 bg-[#0d1520] p-8 shadow-[0_0_70px_rgba(94,167,255,.08)]"
              >
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#6bb6ff]/10 blur-[70px]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#6bb6ff]/20 bg-[#6bb6ff]/10 text-[#79bdff]">
                      <Cloud size={20} />
                    </span>
                    <span className="mono text-[8px] tracking-[.17em] text-white/25">CORE // 01</span>
                  </div>

                  <p className="mt-10 mono text-[8px] tracking-[.2em] text-[#6bb6ff]">APPLICATION LAYER</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-.045em]">Next.js + TypeScript</h3>
                  <p className="mt-4 text-sm leading-7 text-[#8290a3]">
                    Product logic, dashboard experience and integration boundaries live in the
                    application layer and are deployed through Vercel.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-2">
                    <MiniStat label="HOST" value="VERCEL" />
                    <MiniStat label="MODE" value="FULL STACK" />
                  </div>
                </div>
              </motion.div>

              <div className="mx-auto mt-5 flex w-fit items-center gap-2 mono text-[8px] tracking-[.16em] text-white/24">
                <ArrowDown size={12} />
                SERVER / DATA / INTEGRATIONS
              </div>
            </div>

            <Connector label="SERVICES" />

            <div className="space-y-4">
              <ArchitectureNode
                icon={Database}
                eyebrow="AUTH + DATA"
                title="Supabase"
                body="Authentication, account recovery and application data."
                accent="green"
              />
              <ArchitectureNode
                icon={Mail}
                eyebrow="TRANSACTIONAL EMAIL"
                title="Resend"
                body="Email delivery for product communication flows."
                accent="violet"
              />
              <ArchitectureNode
                icon={MessageCircle}
                eyebrow="WHATSAPP"
                title="Meta Cloud API"
                body="Reminders, payment confirmations and receipt communication."
                accent="amber"
              />
            </div>
          </div>

          <div className="space-y-4 lg:hidden">
            <ArchitectureNode
              icon={ShieldCheck}
              eyebrow="ENTRY"
              title="Academy user"
              body="Authenticated operator enters the academy workspace."
            />
            <MobileArrow />
            <ArchitectureNode
              icon={Cloud}
              eyebrow="APPLICATION"
              title="Next.js + TypeScript"
              body="Product logic, dashboard UI and integration boundaries deployed through Vercel."
            />
            <MobileArrow />
            <div className="grid gap-3 sm:grid-cols-3">
              <ArchitectureNode
                icon={Database}
                eyebrow="AUTH + DATA"
                title="Supabase"
                body="Identity and application data."
                accent="green"
              />
              <ArchitectureNode
                icon={Mail}
                eyebrow="EMAIL"
                title="Resend"
                body="Transactional delivery."
                accent="violet"
              />
              <ArchitectureNode
                icon={MessageCircle}
                eyebrow="WHATSAPP"
                title="Meta API"
                body="Reminders and confirmations."
                accent="amber"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mono text-[9px] tracking-[.2em] text-white/32">ENGINEERING DECISIONS</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-.045em] md:text-4xl">
                Decisions behind the interface.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#778496]">
              Four choices that shape how the system behaves beyond the visible dashboard.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {decisions.map((decision, index) => {
              const Icon = decision.icon;

              return (
                <motion.article
                  key={decision.index}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="group relative overflow-hidden rounded-[26px] border border-white/[.07] bg-white/[.018] p-7 transition hover:border-[#6bb6ff]/20 hover:bg-[#6bb6ff]/[.025] md:p-8"
                >
                  <div className="absolute right-5 top-4 mono text-[52px] font-semibold tracking-[-.08em] text-white/[.025]">
                    {decision.index}
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[.08] bg-white/[.025] text-[#78beff] transition group-hover:border-[#6bb6ff]/20 group-hover:bg-[#6bb6ff]/10">
                        <Icon size={17} />
                      </span>
                      <span className="mono text-[8px] tracking-[.16em] text-white/22">
                        DECISION {decision.index}
                      </span>
                    </div>

                    <h4 className="mt-8 text-2xl font-semibold tracking-[-.035em]">{decision.title}</h4>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#818ea0]">{decision.description}</p>

                    <div className="mt-7 border-t border-white/[.055] pt-5 mono text-[8px] tracking-[.15em] text-white/28">
                      {decision.meta}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureNode({
  icon: Icon,
  eyebrow,
  title,
  body,
  accent = "blue",
}: {
  icon: typeof Database;
  eyebrow: string;
  title: string;
  body: string;
  accent?: "blue" | "green" | "violet" | "amber";
}) {
  const accents = {
    blue: "text-[#79bdff] border-[#6bb6ff]/15 bg-[#6bb6ff]/[.055]",
    green: "text-[#6fddb6] border-[#55d6a7]/15 bg-[#55d6a7]/[.05]",
    violet: "text-[#a69bff] border-[#8b7cff]/15 bg-[#8b7cff]/[.05]",
    amber: "text-[#efc778] border-[#efbd67]/15 bg-[#efbd67]/[.05]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      className="rounded-[22px] border border-white/[.07] bg-white/[.018] p-5"
    >
      <div className="flex items-start gap-4">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accents[accent]}`}>
          <Icon size={17} />
        </span>
        <div>
          <p className="mono text-[7px] tracking-[.18em] text-white/28">{eyebrow}</p>
          <p className="mt-2 text-base font-semibold text-white/90">{title}</p>
          <p className="mt-2 text-xs leading-6 text-[#748194]">{body}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-white/20">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
      <div className="flex flex-col items-center gap-2">
        <ArrowRight size={15} className="text-[#6bb6ff]/60" />
        <span className="mono text-[6px] tracking-[.16em]">{label}</span>
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
    </div>
  );
}

function MobileArrow() {
  return (
    <div className="flex justify-center py-1 text-[#6bb6ff]/45">
      <ArrowDown size={15} />
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[.07] bg-black/20 px-3 py-3">
      <p className="mono text-[7px] tracking-[.17em] text-white/24">{label}</p>
      <p className="mono mt-1.5 text-[8px] font-semibold tracking-[.12em] text-white/60">{value}</p>
    </div>
  );
}
