"use client";

import { usePathname } from "next/navigation";

export default function SecureTechBranding() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="w-full border-b border-cyan-400/15 bg-slate-950/95 py-5">
      <div className="flex flex-col items-center justify-center">
        <img
          src="/security-hero.png"
          alt="SecureTech BD"
          className="h-20 w-auto object-contain"
        />
        <div className="mt-2 text-xs tracking-[0.28em] text-cyan-300 uppercase">
          Security Technology Engineering
        </div>
      </div>
    </div>
  );
}
