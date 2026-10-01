"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Activity,
  BarChart3,
  CreditCard,
  LayoutDashboard,
  Users,
  Workflow,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const screens = [
  {
    id: "overview",
    kicker: "01 // COMMAND CENTER",
    title: "Centralized academy overview",
    description:
      "Receivables, students, active classes and pending items are surfaced in one operational dashboard, so the academy can understand its current state without jumping between tools.",
    detail: "Overview · Receivables · Pending items",
    icon: LayoutDashboard,
  },
  {
    id: "students",
    kicker: "02 // STUDENTS & PAYMENTS",
    title: "Student management tied directly to billing",
    description:
      "Registrations, couples, enrollment status and monthly payments live in the same workflow, keeping operational and financial context connected to each student.",
    detail: "Registrations · Monthly fees · DOCX export",
    icon: Users,
  },
  {
    id: "classes",
    kicker: "03 // CLASS STRUCTURE",
    title: "Classes organized without duplicate work",
    description:
      "Locations, schedules and linked students can be organized from one place while keeping the same records available to the rest of the platform.",
    detail: "Locations · Schedules · Student allocation",
    icon: Activity,
  },
  {
    id: "finance",
    kicker: "04 // FINANCIAL CONTROL",
    title: "Confirmed revenue with an auditable history",
    description:
      "The financial view focuses on received payments and keeps a receipt history available for review, making operational totals easier to trust and verify.",
    detail: "Received totals · Receipt history · Audit trail",
    icon: CreditCard,
  },
  {
    id: "reports",
    kicker: "05 // REPORTING",
    title: "Performance data that connects money and classes",
    description:
      "Revenue, open balances, payment completion and class performance are brought together in visual reports designed for fast operational decisions.",
    detail: "Revenue · Pending balance · Class performance",
    icon: BarChart3,
  },
  {
    id: "automations",
    kicker: "06 // AUTOMATION CENTER",
    title: "Communication triggered by real academy events",
    description:
      "WhatsApp integration supports reminders, payment confirmations and receipt flows while preserving the academy's financial rules and activity history.",
    detail: "Meta API · Confirmations · Receipts",
    icon: Workflow,
  },
] as const;

export function StudentsRegistrationWalkthrough() {
  const root = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".walkthrough-step");

      const triggers = cards.map((card, index) =>
        ScrollTrigger.create({
          trigger: card,
          start: "top 52%",
          end: "bottom 48%",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        }),
      );

      return () => triggers.forEach((trigger) => trigger.kill());
    },
    { scope: root },
  );

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#product-walkthrough") {
        requestAnimationFrame(() => {
          root.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };

    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <section
      ref={root}
      id="product-walkthrough"
      className="relative border-y border-white/[.06] bg-[#05070a]"
    >
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[700px] opacity-55" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-9 md:py-32">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mono text-[9px] tracking-[.22em] text-[#6bb6ff]">
              PRODUCT WALKTHROUGH // 06 SCREENS
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.055em] md:text-6xl">
              One system.
              <br />
              <span className="text-gradient">Six operational layers.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#7f8b9c] lg:justify-self-end">
            Follow the product from the academy overview to student management, finance,
            reporting and automated communication. Product captures use sanitized demo data.
          </p>
        </div>

        <div className="mt-16 hidden gap-14 lg:grid lg:grid-cols-[1.12fr_.88fr]">
          <div className="sticky top-24 h-fit">
            <BrowserFrame active={active} />

            <div className="mt-5 flex items-center justify-between">
              <div className="mono text-[8px] tracking-[.2em] text-white/30">
                LIVE PRODUCT CAPTURE // SANITIZED
              </div>
              <div className="mono text-[8px] tracking-[.2em] text-white/30">
                {String(active + 1).padStart(2, "0")} / {String(screens.length).padStart(2, "0")}
              </div>
            </div>

            <div className="mt-4 flex gap-1.5">
              {screens.map((screen, index) => (
                <div
                  key={screen.id}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-white/[.06]"
                >
                  <motion.div
                    animate={{ scaleX: index <= active ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full origin-left rounded-full bg-gradient-to-r from-[#6bb6ff] to-[#8b7cff]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            {screens.map((screen, index) => {
              const Icon = screen.icon;
              const isActive = active === index;

              return (
                <article
                  key={screen.id}
                  className="walkthrough-step flex min-h-[68vh] items-center border-b border-white/[.06] py-16 last:border-0"
                >
                  <div
                    className={`w-full rounded-[28px] border p-7 transition duration-500 md:p-9 ${
                      isActive
                        ? "border-[#6bb6ff]/25 bg-[#6bb6ff]/[.045]"
                        : "border-white/[.05] bg-white/[.012]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                            isActive
                              ? "border-[#6bb6ff]/25 bg-[#6bb6ff]/10 text-[#78beff]"
                              : "border-white/[.07] bg-white/[.025] text-white/35"
                          }`}
                        >
                          <Icon size={17} />
                        </span>
                        <p
                          className={`mono text-[8px] tracking-[.2em] transition ${
                            isActive ? "text-[#72baff]" : "text-white/28"
                          }`}
                        >
                          {screen.kicker}
                        </p>
                      </div>
                      <span className="mono text-[9px] text-white/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-8 text-3xl font-semibold tracking-[-.04em] md:text-4xl">
                      {screen.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#8793a5]">
                      {screen.description}
                    </p>

                    <div className="mt-8 border-t border-white/[.06] pt-5 mono text-[8px] tracking-[.15em] text-white/35">
                      {screen.detail}
                    </div>

                    <div className="mt-7 lg:hidden">
                      <BrowserFrame active={index} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 space-y-8 lg:hidden">
          {screens.map((screen, index) => {
            const Icon = screen.icon;
            return (
              <article
                key={screen.id}
                className="rounded-[26px] border border-white/[.07] bg-white/[.018] p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#6bb6ff]/20 bg-[#6bb6ff]/10 text-[#78beff]">
                    <Icon size={16} />
                  </span>
                  <p className="mono text-[8px] tracking-[.18em] text-[#72baff]">
                    {screen.kicker}
                  </p>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-.035em]">
                  {screen.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#8793a5]">{screen.description}</p>
                <div className="mt-6">
                  <BrowserFrame active={index} compact />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BrowserFrame({ active, compact = false }: { active: number; compact?: boolean }) {
  return (
    <div
      className={`overflow-hidden rounded-[26px] border border-white/[.09] bg-[#0a0d12] shadow-[0_30px_100px_rgba(0,0,0,.42)] ${
        compact ? "" : "accent-glow"
      }`}
    >
      <div className="flex h-11 items-center gap-2 border-b border-white/[.07] bg-white/[.025] px-4">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <div className="ml-3 flex-1 rounded-md border border-white/[.05] bg-black/20 px-3 py-1.5 mono text-[7px] tracking-[.08em] text-white/22">
          app.dassaevylabs.com.br
        </div>
      </div>

      <div className="relative aspect-[1280/674] overflow-hidden bg-[#050505]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.035, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.985, filter: "blur(3px)" }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage:
                "url('/projects/students-registration/walkthrough.webp')",
              backgroundSize: "100% 600%",
              backgroundPosition: `center ${active * 20}%`,
            }}
          />
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[.035]" />
      </div>
    </div>
  );
}
