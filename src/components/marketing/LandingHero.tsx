"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileStack,
  LayoutDashboard,
  MessageSquareMore,
  ShieldCheck,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LandingHeroProps {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
  stats: {
    value: string;
    label: string;
  }[];
  preview: {
    requestKicker: string;
    requestTitle: string;
    requestStatus: string;
    requestMeta: string;
    shellTitle: string;
    shellSubtitle: string;
    navOverview: string;
    navRequests: string;
    navDocuments: string;
    navAi: string;
    queueTitle: string;
    queueCount: string;
    activityTitle: string;
    activityMeta: string;
    railTitle: string;
    railMeta: string;
    editorKicker: string;
    editorTitle: string;
    editorBody: string;
    chatKicker: string;
    chatTitle: string;
    chatBody: string;
    libraryKicker: string;
    libraryTitle: string;
    libraryBody: string;
    editorPoints: string[];
    libraryPoints: string[];
  };
}

export function LandingHero({
  eyebrow,
  headline,
  description,
  primaryCta,
  primaryCtaHref,
  secondaryCta,
  secondaryCtaHref,
  stats,
  preview,
}: LandingHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-18 pt-16 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.16),transparent_35%),radial-gradient(circle_at_82%_18%,rgba(15,23,42,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.85))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-40 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] top-16 h-64 w-64 rounded-full bg-slate-200/80 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center xl:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[35rem] xl:max-w-[38rem]"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-primary shadow-sm">
            <span className="size-2 rounded-full bg-primary" />
            {eyebrow}
          </div>

          <h1 className="mt-7 max-w-[10.5ch] text-5xl font-semibold leading-[0.94] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[4.2rem] xl:text-[4.9rem]">
            {headline}
          </h1>

          <p className="mt-8 max-w-[31rem] text-lg leading-8 text-muted-foreground dark:text-slate-200 sm:text-[1.15rem]">
            {description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryCtaHref}
              className={cn(
                buttonVariants({ size: "lg" }),
                "group rounded-full px-7 shadow-[0_24px_60px_-28px_rgba(217,119,6,0.9)]"
              )}
            >
              {primaryCta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={secondaryCtaHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-border/70 bg-background/80 px-7 shadow-sm"
              )}
            >
              {secondaryCta}
            </Link>
          </div>

          <div className="mt-10 grid max-w-[34rem] gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-[1.7rem] border border-border/70 bg-white/84 px-4 py-4 shadow-[0_18px_35px_-28px_rgba(15,23,42,0.35)] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 dark:border-white/10 dark:bg-[rgba(247,245,240,0.96)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/85 dark:text-amber-700">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground dark:text-slate-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative min-w-0 lg:-ml-6 xl:-ml-3"
        >
          <div className="absolute left-12 top-10 h-44 w-44 rounded-full bg-primary/16 blur-3xl" />
          <div className="absolute bottom-10 right-8 h-40 w-40 rounded-full bg-slate-900/10 blur-3xl" />

          <div className="relative rounded-[1.95rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,246,249,0.95))] p-4 shadow-[0_40px_110px_-58px_rgba(15,23,42,0.65)] sm:p-5 xl:p-5">
            <div className="grid gap-4 lg:hidden">
              <div className="rounded-[1.8rem] border border-slate-900/8 bg-slate-950 p-5 text-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-amber-300/80">
                      {preview.requestKicker}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold leading-tight">
                      {preview.requestTitle}
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">{preview.requestMeta}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-200">
                    <CheckCircle2 className="size-4" />
                    {preview.requestStatus}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {preview.editorPoints.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3 text-sm text-slate-200"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span>{item}</span>
                        <span
                          className={cn(
                            "shrink-0 rounded-full px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]",
                            index === 0
                              ? "bg-emerald-400/15 text-emerald-200"
                              : index === 1
                                ? "bg-amber-300/15 text-amber-100"
                                : "bg-white/10 text-slate-300"
                          )}
                        >
                          {index === 0 ? "Ready" : index === 1 ? "Review" : "Notes"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.6rem] border border-border/70 bg-white/86 p-5 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.4)] dark:border-white/10 dark:bg-[rgba(247,245,240,0.96)]">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground dark:text-slate-600">
                    <MessageSquareMore className="size-4 text-primary" />
                    {preview.activityTitle}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-tight text-foreground dark:text-slate-900">
                    {preview.chatTitle}
                  </h3>
                  <div className="mt-4 space-y-2">
                    <div className="rounded-xl border border-border/70 bg-muted/70 px-3 py-2 text-sm text-foreground dark:border-slate-300 dark:bg-white dark:text-slate-900">
                      Deadline confirmed
                    </div>
                    <div className="rounded-xl border border-border/70 bg-muted/70 px-3 py-2 text-sm text-foreground dark:border-slate-300 dark:bg-white dark:text-slate-900">
                      Counsel review active
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-border/70 bg-white/86 p-5 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.4)] dark:border-white/10 dark:bg-[rgba(247,245,240,0.96)]">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground dark:text-slate-600">
                    <Bot className="size-4 text-primary" />
                    {preview.editorKicker}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-tight text-foreground dark:text-slate-900">
                    {preview.editorTitle}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-border/70 bg-muted/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground dark:border-slate-300 dark:bg-white dark:text-slate-700">
                      Clause edits
                    </span>
                    <span className="rounded-full border border-border/70 bg-muted/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground dark:border-slate-300 dark:bg-white dark:text-slate-700">
                      Versioned notes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden min-h-[35rem] lg:block">
              <div className="absolute inset-x-0 top-9 rounded-[1.7rem] border border-slate-900/8 bg-slate-950 p-5 pr-24 text-slate-50 shadow-[0_40px_80px_-50px_rgba(15,23,42,0.8)]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-rose-400/80" />
                      <span className="size-2.5 rounded-full bg-amber-300/80" />
                      <span className="size-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        {preview.shellTitle}
                      </p>
                      <p className="text-sm text-slate-300">{preview.shellSubtitle}</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-200">
                    <CheckCircle2 className="size-4" />
                    {preview.requestStatus}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-[9.5rem_minmax(0,1fr)] gap-5">
                  <aside className="rounded-[1.4rem] border border-white/8 bg-white/6 p-4">
                    <div className="space-y-2">
                      {[
                        { icon: FileStack, label: preview.navRequests, active: true },
                        { icon: LayoutDashboard, label: preview.navOverview, active: false },
                        { icon: ShieldCheck, label: preview.navDocuments, active: false },
                        { icon: Bot, label: preview.navAi, active: false },
                      ].map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.label}
                            className={cn(
                              "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm",
                              item.active
                                ? "bg-amber-300/14 text-amber-100 ring-1 ring-amber-300/30"
                                : "text-slate-300"
                            )}
                          >
                            <Icon className="size-4" />
                            {item.label}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/8 bg-black/15 p-3.5">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        {preview.queueTitle}
                      </p>
                      <p className="mt-3 text-3xl font-semibold leading-none text-slate-50">3</p>
                      <p className="mt-2 text-sm text-slate-300">{preview.queueCount}</p>
                    </div>
                  </aside>

                  <div className="space-y-5">
                    <div className="rounded-[1.55rem] border border-white/8 bg-white/6 p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-amber-300/80">
                            {preview.requestKicker}
                          </p>
                          <h2 className="mt-2 max-w-[12ch] text-[1.7rem] font-semibold leading-[1.02] text-balance">
                            {preview.requestTitle}
                          </h2>
                          <p className="mt-2 text-sm text-slate-300">{preview.requestMeta}</p>
                        </div>
                        <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                          8 sections
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-3">
                        {preview.editorPoints.map((item, index) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/8 bg-black/15 px-4 py-3.5"
                          >
                            <p className="text-sm text-slate-100">{item}</p>
                            <span
                              className={cn(
                                "mt-4 inline-flex rounded-full px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]",
                                index === 0
                                  ? "bg-emerald-400/15 text-emerald-200"
                                  : index === 1
                                    ? "bg-amber-300/15 text-amber-100"
                                    : "bg-white/10 text-slate-300"
                              )}
                            >
                              {index === 0 ? "Ready" : index === 1 ? "Review" : "Notes"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.8rem] border border-white/8 bg-white/6 p-6">
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        <Bot className="size-4 text-amber-300" />
                        {preview.editorKicker}
                      </div>
                      <div className="mt-4 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="max-w-sm text-[2rem] font-semibold leading-[1.02] text-balance">
                            {preview.editorTitle}
                          </h3>
                          <div className="mt-5 flex flex-wrap gap-2">
                            <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-slate-300">
                              Clause edits
                            </span>
                            <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-slate-300">
                              Versioned notes
                            </span>
                          </div>
                        </div>
                        <div className="rounded-full border border-amber-300/25 bg-amber-300/12 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-amber-100">
                          AI + human review
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-5 top-8 w-44 rounded-[1.3rem] border border-border/70 bg-white/96 p-4 shadow-[0_22px_50px_-36px_rgba(15,23,42,0.36)] backdrop-blur-sm dark:border-white/10 dark:bg-[rgba(247,245,240,0.98)]">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground dark:text-slate-600">
                  <MessageSquareMore className="size-4 text-primary" />
                  {preview.activityTitle}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-tight text-foreground dark:text-slate-900">
                  Lawyer joined
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground dark:text-slate-500">
                  {preview.activityMeta}
                </p>
                <div className="mt-5 space-y-2">
                  <div className="rounded-xl border border-border/70 bg-muted/70 px-3 py-2 text-sm text-foreground dark:border-slate-300 dark:bg-white dark:text-slate-900">
                    Deadline confirmed
                  </div>
                  <div className="rounded-xl border border-border/70 bg-muted/70 px-3 py-2 text-sm text-foreground dark:border-slate-300 dark:bg-white dark:text-slate-900">
                    Counsel review active
                  </div>
                </div>
              </div>

              <div className="absolute right-5 top-[15.25rem] w-44 rounded-[1.3rem] border border-border/70 bg-white/96 p-4 shadow-[0_22px_50px_-36px_rgba(15,23,42,0.36)] backdrop-blur-sm dark:border-white/10 dark:bg-[rgba(247,245,240,0.98)]">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground dark:text-slate-600">
                  <ShieldCheck className="size-4 text-primary" />
                  {preview.railTitle}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-tight text-foreground dark:text-slate-900">
                  2 files ready
                </h3>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-muted/70 px-3 py-2 text-sm text-foreground dark:border-slate-300 dark:bg-white dark:text-slate-900">
                    <FileStack className="size-4 text-primary" />
                    Controlled access
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-muted/70 px-3 py-2 text-sm text-foreground dark:border-slate-300 dark:bg-white dark:text-slate-900">
                    <Bot className="size-4 text-primary" />
                    Matter context
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
