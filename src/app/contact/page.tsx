import { PublicInfoPage } from "@/components/shared/PublicInfoPage";

export default function ContactPage() {
  return (
    <PublicInfoPage
      eyebrow="Contact"
      title="Contact Polaris"
      intro="This page provides direct business contact information for Polaris Technology Inc. while the broader public website and product experience continue to develop."
    >
      <section>
        <h2 className="text-2xl font-semibold text-foreground">Business Contact</h2>
        <p className="mt-3">
          Polaris Technology Inc.
          <br />
          16192 Coastal Highway, Lewes, DE 19958
          <br />
          <a
            href="mailto:dev@polaristechco.com"
            className="text-foreground underline underline-offset-4"
          >
            dev@polaristechco.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">Inquiry Types</h2>
        <p className="mt-3">
          Please use the email above for general business inquiries, product
          questions, partnership requests, or company verification-related
          communication.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">Response Timing</h2>
        <p className="mt-3">
          Polaris will review inbound messages and respond as appropriate based
          on the nature of the inquiry.
        </p>
      </section>
    </PublicInfoPage>
  );
}
