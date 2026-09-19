import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "SecureTech BD | Security Equipment Repair and Maintenance",
  description:
    "SecureTech BD provides security equipment supply, installation, repair, preventive maintenance, AMC, spare parts and technical support across Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}