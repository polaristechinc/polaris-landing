import { PublicInfoPage } from "@/components/shared/PublicInfoPage";

export default function TermsPage() {
  return (
    <PublicInfoPage
      eyebrow="Terms"
      title="Terms of Service"
      intro="These terms provide a simple public-facing outline for access to the Polaris website and related information while the broader product experience is still being finalized."
    >
      <section>
        <h2 className="text-2xl font-semibold text-foreground">Website Use</h2>
        <p className="mt-3">
          By accessing this website, visitors agree to use it lawfully and in a
          way that does not interfere with the site, its security, or other
          users.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">Informational Content</h2>
        <p className="mt-3">
          The content currently available on this website is provided for
          general informational purposes regarding Polaris Technology Inc. and
          the Polaris platform. It may be updated, expanded, or revised over
          time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
        <p className="mt-3">
          Unless otherwise stated, the Polaris name, branding, website content,
          and related materials are owned by Polaris Technology Inc. and may not
          be copied or used without permission.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">Informational Use</h2>
        <p className="mt-3">
          The content on this website is provided for general informational
          purposes about Polaris Technology Inc. and the Polaris platform.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p className="mt-3">
          Questions about these terms can be directed to{" "}
          <a
            href="mailto:dev@polaristechco.com"
            className="text-foreground underline underline-offset-4"
          >
            dev@polaristechco.com
          </a>
          .
        </p>
      </section>
    </PublicInfoPage>
  );
}
