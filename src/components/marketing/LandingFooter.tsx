import Link from "next/link";
import { MarketingReveal } from "@/components/marketing/MarketingReveal";
import { BrandLogo } from "@/components/shared/BrandLogo";

interface LandingFooterProps {
  title: string;
  copyright: string;
  productTitle: string;
  companyTitle: string;
  productLinks: {
    href: string;
    label: string;
  }[];
  companyLinks: {
    href: string;
    label: string;
  }[];
}

export function LandingFooter({
  title,
  copyright,
  productTitle,
  companyTitle,
  productLinks,
  companyLinks,
}: LandingFooterProps) {
  return (
    <footer id="footer" className="border-t border-border/70 bg-card/70 px-6 py-12">
      <MarketingReveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-sm">
          <BrandLogo className="w-36" />
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {title}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {copyright}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80">
            {productTitle}
          </h3>
          <div className="mt-4 space-y-3">
            {productLinks.map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80">
            {companyTitle}
          </h3>
          <div className="mt-4 space-y-3">
            {companyLinks.map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </MarketingReveal>
    </footer>
  );
}
