import { LandingCapabilities } from "@/components/marketing/LandingCapabilities";
import { LandingFinalCta } from "@/components/marketing/LandingFinalCta";
import { LandingFooter } from "@/components/marketing/LandingFooter";
import { LandingHeader } from "@/components/marketing/LandingHeader";
import { LandingHero } from "@/components/marketing/LandingHero";
import { LandingStoryBand } from "@/components/marketing/LandingStoryBand";
import { LandingTrust } from "@/components/marketing/LandingTrust";
import { LandingUseCases } from "@/components/marketing/LandingUseCases";
import { LandingWorkflow } from "@/components/marketing/LandingWorkflow";

const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#workflow", label: "Workflow" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#security", label: "Security" },
  { href: "#footer", label: "Support" },
];

const workflowSteps = [
  {
    title: "Start the request",
    description:
      "Describe the work you need, choose the right request type, and attach the context that matters up front.",
  },
  {
    title: "Add company and filing context",
    description:
      "Pull in company details, SEC filings, and saved profile information so drafting starts with better inputs.",
  },
  {
    title: "Draft and collaborate",
    description:
      "Use AI for first-pass drafting, then continue with comments, request chat, or live lawyer support when human review is needed.",
  },
  {
    title: "Deliver and track",
    description:
      "Manage versions, share documents securely, and keep status, payments, and follow-up visible in one place.",
  },
];

const capabilityItems = [
  {
    title: "Request intake and tracking",
    description:
      "Create structured requests, capture requirements clearly, assign work, and keep every status update visible without chasing email threads.",
  },
  {
    title: "AI drafting workspace",
    description:
      "Generate structured drafts, continue document-aware AI conversations, and keep legal context attached while the matter evolves.",
  },
  {
    title: "Live lawyer collaboration",
    description:
      "Start a real-time conversation when the matter needs human judgment, faster answers, or direct back-and-forth.",
  },
  {
    title: "Document library and sharing",
    description:
      "Store uploaded and shared files separately, manage access intentionally, and keep document review inside a protected workspace.",
  },
  {
    title: "Company and SEC research",
    description:
      "Search public company data, review filings, and prefill request context from market and issuer information already available in Polaris.",
  },
  {
    title: "Payments and operational visibility",
    description:
      "Handle request-linked payments and keep the business side of legal work visible alongside the matter itself.",
  },
];

const useCaseItems = [
  {
    title: "Businesses and clients",
    description:
      "Start requests faster, keep document work organized, and always know what is waiting, active, or complete.",
  },
  {
    title: "Lawyers and legal professionals",
    description:
      "Review incoming matters, manage live conversations, draft efficiently, and keep client context close to the work.",
  },
  {
    title: "Internal operations teams",
    description:
      "Stay on top of workflow health, support needs, payments, and account-level controls without jumping between tools.",
  },
];

const trustPoints = [
  "Controlled document access and sharing",
  "Separate owned and shared file views",
  "Account and password security controls",
  "Centralized request, chat, and support history",
  "Clear status visibility across matters and conversations",
];

const trustBadges = [
  "Secure document handling",
  "Role-aware workspace behavior",
  "Trackable request progress",
  "Protected account access",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <LandingHeader
        title="Polaris"
        links={navLinks}
      />

      <LandingHero
        eyebrow="Legal workflow platform"
        headline="From request to draft to review, Polaris keeps legal work moving."
        description="Polaris is currently preparing its public web presence. This temporary site highlights the platform direction and company information while the full product website is being completed."
        primaryCta="See how it works"
        primaryCtaHref="#workflow"
        secondaryCta="Security overview"
        secondaryCtaHref="#security"
        stats={[
          {
            value: "Requests",
            label: "Track intake, status updates, and delivery in one place.",
          },
          {
            value: "Drafts",
            label: "Move from AI-assisted drafting into structured review.",
          },
          {
            value: "Workspace",
            label: "Keep chat, documents, and payments attached to the matter.",
          },
        ]}
        preview={{
          requestKicker: "Request status",
          requestTitle: "Board consent package",
          requestStatus: "In progress",
          requestMeta: "Updated 2h ago",
          shellTitle: "Workspace Overview",
          shellSubtitle: "Request Pipeline",
          navOverview: "Dashboard",
          navRequests: "Requests",
          navDocuments: "Documents",
          navAi: "AI Agent",
          queueTitle: "Waiting Queue",
          queueCount: "3 active matters",
          activityTitle: "Live collaboration",
          activityMeta: "Lawyer joined 4m ago",
          railTitle: "Shared Access",
          railMeta: "2 protected files ready",
          editorKicker: "Draft workspace",
          editorTitle: "First-pass draft ready for review",
          editorBody:
            "Summaries, clause edits, and versioned drafting stay in the same workspace as the request.",
          chatKicker: "Live collaboration",
          chatTitle: "Lawyer joined the session",
          chatBody:
            "I reviewed the request context. Let's confirm the filing deadline before finalizing.",
          libraryKicker: "Document access",
          libraryTitle: "Shared files managed securely",
          libraryBody:
            "Owned files and shared files stay clearly separated so access stays intentional.",
          editorPoints: ["Request summary", "Clause revisions", "Reviewer notes"],
          libraryPoints: ["Controlled access", "Matter context attached"],
        }}
      />

      <LandingWorkflow
        eyebrow="How it works"
        title="A legal workflow built to stay organized from day one"
        description="Polaris connects intake, drafting, collaboration, and delivery so legal work does not get scattered across email, chat, and disconnected files."
        steps={workflowSteps}
      />

      <LandingCapabilities
        eyebrow="Core capabilities"
        title="Everything needed to move legal work forward"
        description="Polaris is not just a request form or a drafting tool. It is the shared workspace around the whole matter lifecycle."
        items={capabilityItems}
      />

      <LandingStoryBand
        eyebrow="Why it works"
        title="One workspace instead of five disconnected tools"
        description="Polaris brings together request intake, drafting, lawyer collaboration, document access, and payment tracking so the legal process feels coordinated instead of fragmented."
      />

      <LandingUseCases
        eyebrow="Built for"
        title="Designed for the people on both sides of legal work"
        items={useCaseItems}
      />

      <LandingTrust
        eyebrow="Security and control"
        title="Built for sensitive work, not casual file sharing"
        description="Legal workflows need more than convenience. Polaris keeps access, visibility, and collaboration structured so sensitive work stays manageable."
        points={trustPoints}
        badges={trustBadges}
      />

      <LandingFinalCta
        title="The full Polaris web experience is still in progress"
        description="This landing page is serving as a temporary company presence while the full product website and application experience are finalized."
      />

      <LandingFooter
        title="Submit requests, add company context, draft faster with AI, collaborate with legal professionals, and keep every document, conversation, and payment in one secure workspace. "
        copyright="Polaris. All rights reserved."
        productTitle="Product"
        companyTitle="Company"
        productLinks={[
          { href: "#workflow", label: "Workflow" },
          { href: "#product", label: "AI drafting" },
          { href: "#use-cases", label: "Collaboration" },
          { href: "#product", label: "Documents" },
        ]}
        companyLinks={[
          { href: "#security", label: "Security" },
          { href: "#footer", label: "Support" },
          { href: "#use-cases", label: "Use cases" },
          { href: "#product", label: "Overview" },
        ]}
      />
    </main>
  );
}
