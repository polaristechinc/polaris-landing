import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polaris — Legal Workflow Platform",
  description:
    "Polaris is a legal workflow platform by Polaris Technology Inc. Connect intake, AI drafting, lawyer collaboration, and document delivery in one structured workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
