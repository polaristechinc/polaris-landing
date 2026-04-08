import Link from "next/link";
import { BrandLogo } from "@/components/shared/BrandLogo";

interface PublicInfoPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}

export function PublicInfoPage({
  eyebrow,
  title,
  intro,
  children,
}: PublicInfoPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-10 text-foreground sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.88))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:4.75rem_4.75rem] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="Polaris home" className="shrink-0">
            <BrandLogo className="w-36 sm:w-40" priority />
          </Link>
          <Link
            href="/"
            className="rounded-full border border-border/70 bg-card/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-foreground"
          >
            Back to home
          </Link>
        </div>

        <section className="mt-10 rounded-[2.2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,252,246,0.96),rgba(255,255,255,0.96))] p-8 shadow-[0_34px_90px_-56px_rgba(15,23,42,0.42)] sm:p-10">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-medium text-primary shadow-sm">
                <span className="size-2 rounded-full bg-primary" />
                Public Information
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-primary/85">
                {eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                {intro}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                These pages are intended to provide clear public-facing company,
                legal, and contact information in a format that is easy to
                review.
              </p>

              <div className="mt-10 space-y-6 [&>section]:rounded-[1.7rem] [&>section]:border [&>section]:border-border/70 [&>section]:bg-white/82 [&>section]:p-6 [&>section]:shadow-[0_20px_50px_-42px_rgba(15,23,42,0.28)] sm:[&>section]:p-7 [&>section_h2]:text-balance [&>section_p]:max-w-3xl">
                {children}
              </div>
            </div>

            <aside className="xl:sticky xl:top-28">
              <div className="rounded-[1.4rem] border border-border/70 bg-white/68 px-5 py-5 shadow-[0_18px_40px_-36px_rgba(15,23,42,0.16)] backdrop-blur">
                <div className="space-y-1">
                  <Link
                    href="/privacy"
                    className="block rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-[rgba(255,248,237,0.8)] hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="block rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-[rgba(255,248,237,0.8)] hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/contact"
                    className="block rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-[rgba(255,248,237,0.8)] hover:text-primary"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
