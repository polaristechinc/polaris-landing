import { PublicInfoPage } from "@/components/shared/PublicInfoPage";

export default function PrivacyPage() {
  return (
    <PublicInfoPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This page explains, at a high level, how Polaris Technology Inc. may collect, use, and protect information when visitors interact with the Polaris website and related services."
    >
      <section>
        <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
        <p className="mt-3">
          Polaris Technology Inc. may collect information that users provide
          directly, such as contact details submitted through inquiries, as
          well as basic technical information automatically generated through
          normal website usage.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">Information We May Collect</h2>
        <p className="mt-3">
          This may include names, email addresses, company details, support
          messages, browser information, device information, and usage data
          relevant to operating, securing, and improving the website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">How Information May Be Used</h2>
        <p className="mt-3">
          Information may be used to respond to inquiries, operate the website,
          improve product and service quality, maintain security, and support
          business operations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">Data Sharing</h2>
        <p className="mt-3">
          Polaris Technology Inc. does not sell personal information. Data may
          be shared with service providers or professional advisors when
          reasonably necessary to operate the business, support the website, or
          comply with legal obligations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p className="mt-3">
          Privacy questions can be sent to{" "}
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
