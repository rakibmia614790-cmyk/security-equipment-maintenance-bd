"use client";

import { usePathname } from "next/navigation";

export default function SecureTechBranding() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="w-full bg-slate-950 border-b border-cyan-400/20">
      <div className="mx-auto flex min-h-[118px] w-full max-w-7xl items-center justify-center px-6">
        <img
          src="/security-hero.png"
          alt="SecureTech BD"
          className="h-24 w-auto max-w-[520px] object-contain"
        />
      </div>
    </div>
  );
}
