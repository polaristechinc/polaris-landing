import {
  BanknoteArrowUp,
  Bot,
  Building2,
  FileLock2,
  MessageSquareText,
  Workflow,
} from "lucide-react";
import { MarketingReveal } from "@/components/marketing/MarketingReveal";

interface LandingCapabilitiesProps {
  eyebrow: string;
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
}

const icons = [
  Workflow,
  Bot,
  MessageSquareText,
  FileLock2,
  Building2,
  BanknoteArrowUp,
];

export function LandingCapabilities({
  eyebrow,
  title,
  description,
  items,
}: LandingCapabilitiesProps) {
  return (
    <section id="product" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <MarketingReveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/85">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-slate-50 sm:text-4xl">
            {title}
          </h2>
        </div>
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground dark:text-slate-300">
          {description}
        </p>
      </MarketingReveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          const featured = index === 0 || index === 1;

          return (
            <article
              key={item.title}
              className={
                featured
                  ? "group rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,251,244,1),rgba(255,255,255,1))] p-7 shadow-[0_30px_90px_-58px_rgba(217,119,6,0.5)] transition-transform duration-300 hover:-translate-y-1 dark:border-amber-400/18 dark:bg-[linear-gradient(180deg,rgba(24,29,40,1),rgba(17,22,31,1))] dark:shadow-[0_36px_90px_-60px_rgba(217,119,6,0.22)]"
                  : "group rounded-[2rem] border border-border/70 bg-card/95 p-7 shadow-[0_22px_60px_-48px_rgba(15,23,42,0.4)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/8 dark:bg-white/[0.035] dark:shadow-[0_28px_70px_-56px_rgba(0,0,0,0.5)]"
              }
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground dark:bg-primary/12">
                <Icon className="size-5" />
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
