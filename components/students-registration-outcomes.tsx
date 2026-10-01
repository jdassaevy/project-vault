"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  DatabaseZap,
  Layers3,
  MessageSquareMore,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

const challenges = [
  {
    index: "01",
    title: "Keeping tenant data isolated",
    body:
      "The platform had to support multiple academies without mixing students, classes, payments or settings between workspaces. That made academy context a product constraint, not just a UI filter.",
    icon: Layers3,
  },
  {
    index: "02",
    title: "Making automations trustworthy",
    body:
      "Payment confirmations and reminder flows only create value when the financial state, automation queue and WhatsApp delivery stay in sync. Reliability became more important than adding more automation types.",
    icon: MessageSquareMore,
  },
  {
    index: "03",
    title: "Changing a live product safely",
    body:
      "The system already contained academy and student data while new features were still being shipped. Updates had to preserve existing records and avoid breaking onboarding, payments or active users.",
    icon: ShieldCheck,
  },
] as const;

const learnings = [
  {
    title: "Product state crosses screens",
    body:
      "A payment is not just a finance event. It can change dashboards, receipts, automation history and communication behavior at the same time.",
    icon: DatabaseZap,
  },
  {
    title: "Reliability beats feature count",
    body:
      "A smaller flow that consistently updates the database, UI and external integrations is more valuable than a larger feature set with uncertain state.",
    icon: CheckCircle2,
  },
  {
    title: "Operational UX matters",
    body:
      "The best interface decisions were the ones that reduced repeated work for the academy: central views, connected records, clear payment state and automation feedback.",
    icon: Sparkles,
  },
] as const;

const impact = [
  "Student, class and payment information can be managed from one product instead of separate workflows.",
  "Financial views focus on confirmed receipts and preserve an auditable payment history.",
  "WhatsApp reminders and payment confirmations can run from the same operational context as the academy data.",
  "The platform evolved into a production SaaS while preserving existing academy and student records.",
] as const;

export function StudentsRegistrationOutcomes() {
  return (
    <section className="relative overflow-hidden border-b border-white/[.06] bg-[#05070a]">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute right-[8%] top-24 h-[420px] w-[420px] rounded-full bg-[#8b7cff]/[.055] blur-[110px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-9 md:py-32">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mono text-[9px] tracking-[.22em] text-[#6bb6ff]">
              BUILD LOG // LESSONS FROM PRODUCTION
            </p>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.055em] md:text-6xl">
              The hard part wasn&apos;t
              <br />
              <span className="text-gradient">building the screens.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#7f8b9c] lg:justify-self-end">
            The project became most valuable when the focus shifted from adding pages to keeping
            data, payments and external integrations consistent while the product was already in use.
          </p>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#efbd67]/15 bg-[#efbd67]/[.06] text-[#efc778]">
              <TriangleAlert size={16} />
            </span>
            <div>
              <p className="mono text-[8px] tracking-[.18em] text-white/28">01 // CHALLENGES</p>
              <p className="mt-1 text-sm font-medium text-white/78">Problems that shaped the architecture.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.article
                  key={challenge.index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.07, duration: 0.45 }}
                  className="relative overflow-hidden rounded-[26px] border border-white/[.07] bg-white/[.018] p-7"
                >
                  <div className="absolute -right-3 -top-5 mono text-[72px] font-semibold tracking-[-.08em] text-white/[.022]">
                    {challenge.index}
                  </div>

                  <div className="relative">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#efbd67]/15 bg-[#efbd67]/[.055] text-[#efc778]">
                      <Icon size={17} />
                    </span>
                    <h3 className="mt-8 text-2xl font-semibold tracking-[-.035em]">{challenge.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#818ea0]">{challenge.body}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-[.92fr_1.08fr]">
          <div className="rounded-[30px] border border-white/[.07] bg-[#0a0e14] p-7 md:p-9">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="mono text-[8px] tracking-[.18em] text-[#8f83ff]">02 // WHAT I LEARNED</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-.04em]">
                  Engineering lessons that stayed.
                </h3>
              </div>
              <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/[.07] text-white/28 sm:flex">
                <ArrowRight size={17} />
              </span>
            </div>

            <div className="mt-9 space-y-4">
              {learnings.map((learning, index) => {
                const Icon = learning.icon;

                return (
                  <motion.div
                    key={learning.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: index * 0.06, duration: 0.4 }}
                    className="grid gap-4 rounded-[20px] border border-white/[.055] bg-white/[.014] p-5 sm:grid-cols-[42px_1fr]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8b7cff]/15 bg-[#8b7cff]/[.06] text-[#a69bff]">
                      <Icon size={17} />
                    </span>
                    <div>
                      <p className="font-semibold text-white/88">{learning.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[#788597]">{learning.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-[#55d6a7]/10 bg-[#08100e] p-7 md:p-9">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#55d6a7]/[.07] blur-[75px]" />

            <div className="relative">
              <p className="mono text-[8px] tracking-[.18em] text-[#6fddb6]">03 // PRACTICAL IMPACT</p>
              <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-.04em]">
                What changed because the system exists.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#7d8c8a]">
                No vanity metrics here. These are concrete product outcomes visible in the workflows
                the platform now supports.
              </p>

              <div className="mt-9 space-y-3">
                {impact.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: index * 0.06, duration: 0.38 }}
                    className="flex gap-4 rounded-[20px] border border-white/[.055] bg-black/15 p-5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#55d6a7]/15 bg-[#55d6a7]/[.07] text-[#6fddb6]">
                      <CheckCircle2 size={13} />
                    </span>
                    <p className="text-sm leading-7 text-[#9aa7a4]">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-[24px] border border-white/[.06] bg-white/[.015] px-6 py-5">
          <div>
            <p className="mono text-[7px] tracking-[.17em] text-white/24">CURRENT STATE</p>
            <p className="mt-2 text-sm font-medium text-white/72">
              Production SaaS // actively refined around reliability, UX and automation.
            </p>
          </div>
          <div className="flex items-center gap-2 mono text-[8px] tracking-[.15em] text-[#6fddb6]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#55d6a7]" />
            BUILD CONTINUES
          </div>
        </div>
      </div>
    </section>
  );
}
