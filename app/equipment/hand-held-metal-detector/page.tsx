import Link from "next/link";
import HandHandMetalManufacturerIdentityGrid from "@/app/components/HandHandMetalManufacturerIdentityGrid";

export const metadata = {
  title: "Hand Hand Metal Detector | Security Equipment Maintenance BD",
  description:
    "Professional handheld metal detection equipment, screening solutions, maintenance, repair and technical support.",
};

export default function HandHandMetalPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <Link
              href="/equipment"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-white/10"
            >
              ← Back to Equipment
            </Link>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Handheld Security Screening
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hand Hand Metal Detector
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Professional handheld metal detection solutions for fast,
              portable and reliable security screening across checkpoints,
              facilities and controlled-access environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/service-request"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Request Service
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Security Screening Technology
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Portable detection for professional security operations
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Handheld metal detectors provide a practical secondary screening
              layer for identifying metallic objects during security checks.
              Their portable design supports rapid inspection where mobility
              and operator control are essential.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Portable", "Compact handheld screening capability."],
              ["Fast Screening", "Designed for efficient secondary checks."],
              ["Operator Controlled", "Direct inspection at close range."],
              ["Wide Applications", "Suitable for multiple security environments."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Manufacturer Technologies
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Handheld Metal Detector Manufacturers
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              A professional manufacturer identity showcase using original
              technical visuals instead of third-party logos.
            </p>
          </div>

          <HandHandMetalManufacturerIdentityGrid />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Airports & Aviation", "Passenger and staff secondary screening."],
            ["Government & Critical Sites", "Controlled-access security inspection."],
            ["Commercial Facilities", "Portable screening for security teams."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-cyan-950/20">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Technical Support
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Installation, repair and maintenance support
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Technical assistance for equipment deployment, inspection,
            troubleshooting, preventive maintenance and corrective service.
          </p>
          <Link
            href="/service-request"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Submit Service Request
          </Link>
        </div>
      </section>
    </main>
  );
}
