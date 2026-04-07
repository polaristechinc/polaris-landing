import { CheckCircle2 } from "lucide-react";
import { MarketingReveal } from "@/components/marketing/MarketingReveal";

interface LandingTrustProps {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  badges: string[];
}

export function LandingTrust({
  eyebrow,
  title,
  description,
  points,
  badges,
}: LandingTrustProps) {
  return (
    <section id="security" className="px-6 py-20 sm:py-24">
      <MarketingReveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-slate-900/10 bg-slate-950 px-8 py-10 text-slate-50 shadow-[0_32px_90px_-48px_rgba(15,23,42,0.8)] dark:border-amber-400/10 dark:bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.12),transparent_25%),linear-gradient(180deg,rgba(4,8,20,1),rgba(5,10,24,1))] sm:px-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300/90">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-slate-200 dark:bg-white/[0.045]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div
                key={point}
                className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5 dark:bg-white/[0.045]"
              >
                <CheckCircle2 className="size-5 text-amber-300" />
                <p className="mt-4 text-sm leading-7 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </MarketingReveal>
    </section>
  );
}
