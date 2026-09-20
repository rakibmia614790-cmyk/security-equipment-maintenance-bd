"use client";

import Link from "next/link";
import MobileNavigation from "./MobileNavigation";

export default function SecureTechGlobalHeader() {
  return (
    <>
      <div className="hidden md:block">
        <header className="w-full border-b border-cyan-400/20 bg-slate-950">
          <div className="mx-auto flex min-h-[110px] max-w-7xl items-center justify-between px-6">
            <Link href="/" className="group">
              <div className="text-3xl font-extrabold tracking-wide text-white group-hover:text-cyan-300">
                SecureTech BD
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-300">
                Security Technology Engineering
              </div>
            </Link>
          </div>
        </header>
      </div>

      <MobileNavigation />
    </>
  );
}
