"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/shared/BrandLogo";

interface LandingHeaderProps {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}

export function LandingHeader({ title, links }: LandingHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/75 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.55)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" aria-label={title} className="shrink-0">
          <BrandLogo className="w-36 sm:w-40" priority />
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-2 md:flex">
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/70 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
