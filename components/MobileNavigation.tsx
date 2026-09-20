"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between border-b border-cyan-400/20 bg-slate-950 px-4 py-4">
        <Link href="/" onClick={close} className="min-w-0">
          <div className="truncate text-xl font-extrabold tracking-wide text-white">
            SecureTech BD
          </div>
          <div className="mt-1 truncate text-[9px] font-medium uppercase tracking-[0.18em] text-cyan-300">
            Security Technology Engineering
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile navigation"
          aria-expanded={open}
          className="ml-3 shrink-0 rounded-lg border border-cyan-400/40 px-3 py-2 text-xl text-cyan-300"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-b border-cyan-400/20 bg-slate-950 px-4 pb-5 pt-2 shadow-xl">
          <div className="flex flex-col gap-1">
            <Link href="/" onClick={close} className="rounded-lg px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-400/10">
              Home
            </Link>

            <Link href="/equipment" onClick={close} className="rounded-lg px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-400/10">
              Equipment
            </Link>

            <Link href="/service" onClick={close} className="rounded-lg px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-400/10">
              Service
            </Link>

            <Link href="/bangladesh-clients" onClick={close} className="rounded-lg px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-400/10">
              Bangladesh Clients
            </Link>

            <Link href="/international-projects" onClick={close} className="rounded-lg px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-400/10">
              International Clients & Projects
            </Link>

            <Link href="/service-request" onClick={close} className="rounded-lg px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-400/10">
              Service Request
            </Link>

            <Link href="/our-team" onClick={close} className="rounded-lg px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-400/10">
              Our Team
            </Link>

            <Link href="/about-us" onClick={close} className="rounded-lg px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-400/10">
              About Us
            </Link>

            <Link href="/contact" onClick={close} className="rounded-lg px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-400/10">
              Contact
            </Link>

            <Link href="/partner-login" onClick={close} className="rounded-lg px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-400/10">
              Login
            </Link>

            <a
              href="tel:+8801799419011"
              onClick={close}
              className="mt-2 rounded-lg border border-cyan-400/40 px-4 py-3 text-center text-sm font-bold text-cyan-300"
            >
              Call Us
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
