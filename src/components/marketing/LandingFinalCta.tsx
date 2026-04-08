import { MarketingReveal } from "@/components/marketing/MarketingReveal";

interface LandingFinalCtaProps {
  title: string;
  description: string;
}

export function LandingFinalCta({ title, description }: LandingFinalCtaProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <MarketingReveal className="rounded-[2.25rem] border border-border/70 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(37,44,58,0.96))] px-8 py-10 text-slate-50 shadow-[0_32px_100px_-56px_rgba(15,23,42,0.72)] dark:border-amber-400/10 dark:bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.12),transparent_24%),linear-gradient(135deg,rgba(20,28,46,1),rgba(26,33,52,0.96))] sm:px-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300 dark:text-slate-200">
              {description}
            </p>
          </div>
          <div className="rounded-[1.6rem] border border-white/12 bg-white/6 px-5 py-4 text-sm text-slate-200 dark:bg-white/[0.045]">
            polaristechco.com
          </div>
        </div>
      </MarketingReveal>
    </section>
  );
}
