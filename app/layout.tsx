import SecureTechBranding from "@/components/SecureTechBranding";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SECURETECH BD",
    template: "%s | SECURETECH BD",
  },
  description:
    "Security Equipment Supply, Installation & Maintenance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><div className="border-b border-cyan-400/20 bg-slate-950/95 px-6 py-4">
  <div className="mx-auto max-w-7xl">
    <SecureTechBranding />
  </div>
</div>
{children}</body>
    </html>
  );
}