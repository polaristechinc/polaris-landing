import { ArrowRight, Building2, FileText, MessageCircleMore, ShieldCheck } from "lucide-react";
import { MarketingReveal } from "@/components/marketing/MarketingReveal";

interface LandingWorkflowProps {
  eyebrow: string;
  title: string;
  description: string;
  steps: {
    title: string;
    description: string;
  }[];
}

const icons = [FileText, Building2, MessageCircleMore, ShieldCheck];

export function LandingWorkflow({
  eyebrow,
  title,
  description,
  steps,
}: LandingWorkflowProps) {
  return (
    <section id="workflow" className="px-6 py-20 sm:py-24">
      <MarketingReveal className="mx-auto max-w-7xl rounded-[2.25rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,252,246,0.98),rgba(255,255,255,0.96))] px-8 py-10 shadow-[0_32px_90px_-60px_rgba(217,119,6,0.45)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(16,20,29,0.98),rgba(12,16,24,0.98))] dark:shadow-[0_36px_90px_-56px_rgba(0,0,0,0.72)] sm:px-10 sm:py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/85">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-slate-50 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground dark:text-slate-300">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={step.title}
                className="relative rounded-[2rem] border border-border/70 bg-white/80 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.18)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/8 dark:bg-white/[0.04] dark:shadow-[0_28px_60px_-46px_rgba(0,0,0,0.48)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/12">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground dark:text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground dark:text-slate-50">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground dark:text-slate-300">
                  {step.description}
                </p>
                {index < steps.length - 1 ? (
                  <div className="mt-6 hidden justify-end lg:flex">
                    <div className="inline-flex size-8 items-center justify-center rounded-full border border-primary/15 bg-primary/5 text-primary/70">
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </MarketingReveal>
    </section>
  );
}
