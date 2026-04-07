"use client";

import { motion } from "framer-motion";
import { Scale, Sparkles, ShieldCheck } from "lucide-react";

interface BentoFeatureGridProps {
  features: {
    title: string;
    description: string;
  }[];
}

const icons = [Scale, Sparkles, ShieldCheck];

export function BentoFeatureGrid({ features }: BentoFeatureGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 md:grid-cols-3"
      >
        {features.map((feature, i) => {
          const Icon = icons[i % icons.length];
          // First item might span 2 columns in a bento layout if we had more items.
          // For now, standard 3-col grid is extremely clean.
          return (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-border"
            >
              <div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/10" />
              
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary shadow-inner">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
