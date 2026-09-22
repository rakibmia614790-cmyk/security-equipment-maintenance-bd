"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg border border-cyan-400/40 px-3 py-2 text-xl text-cyan-400"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {open && (
        <div className="absolute right-6 top-20 w-56 rounded-xl border border-cyan-500/20 bg-[#05070b] p-4 shadow-xl">
          <div className="flex flex-col gap-4">

            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#equipment"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400"
            >
              Equipment
            </a>

            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400"
            >
              Services
            </a>

            <a
              href="tel:+8801799419011"
              className="rounded-lg border border-cyan-400/40 px-4 py-2 text-center text-cyan-400"
            >
              Call Us
            </a>

            <a
              href="https://wa.me/8801518698236"
              className="rounded-lg bg-cyan-500 px-4 py-2 text-center font-semibold text-black"
            >
              WhatsApp
            </a>

          </div>
        </div>
      )}
    </div>
  );
}