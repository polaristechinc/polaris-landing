import { BriefcaseBusiness, Scale, Settings2 } from "lucide-react";
import { MarketingReveal } from "@/components/marketing/MarketingReveal";

interface LandingUseCasesProps {
  eyebrow: string;
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}

const icons = [BriefcaseBusiness, Scale, Settings2];

export function LandingUseCases({
  eyebrow,
  title,
  items,
}: LandingUseCasesProps) {
  return (
    <section id="use-cases" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <MarketingReveal className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/85">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-slate-50 sm:text-4xl">
          {title}
        </h2>
      </MarketingReveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <article
              key={item.title}
              className="rounded-[2rem] border border-border/70 bg-card/95 p-8 shadow-[0_24px_60px_-46px_rgba(15,23,42,0.4)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/8 dark:bg-white/[0.035] dark:shadow-[0_28px_70px_-56px_rgba(0,0,0,0.5)]"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors hover:bg-primary hover:text-primary-foreground dark:bg-primary/10">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground dark:text-slate-50">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground dark:text-slate-300">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
