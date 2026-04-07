import { MarketingReveal } from "@/components/marketing/MarketingReveal";

interface LandingStoryBandProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function LandingStoryBand({
  eyebrow,
  title,
  description,
}: LandingStoryBandProps) {
  return (
    <section className="px-6 py-10 sm:py-14">
      <MarketingReveal className="mx-auto max-w-7xl rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,rgba(255,248,237,0.95),rgba(255,255,255,0.95))] px-8 py-10 shadow-[0_24px_60px_-42px_rgba(217,119,6,0.45)] dark:border-amber-400/12 dark:bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.12),transparent_28%),linear-gradient(135deg,rgba(18,22,31,1),rgba(12,16,24,1))] dark:shadow-[0_32px_80px_-56px_rgba(217,119,6,0.16)] sm:px-10 sm:py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/85">
          {eyebrow}
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground dark:text-slate-50 sm:text-4xl">
            {title}
          </h2>
          <p className="text-lg leading-8 text-muted-foreground dark:text-slate-300">{description}</p>
        </div>
      </MarketingReveal>
    </section>
  );
}
