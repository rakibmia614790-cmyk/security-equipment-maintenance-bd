import Link from "next/link";
import BollardManufacturerIdentityGrid from "@/app/components/BollardManufacturerIdentityGrid";

export const metadata = {
  title: "Security Bollard System | Security Equipment Maintenance BD",
  description:
    "Professional fixed, automatic and hydraulic security bollard systems for vehicle access control, perimeter protection and critical infrastructure.",
};

const features = [
  ["High-Security Vehicle Protection", "Robust physical protection for controlling unauthorized vehicle access."],
  ["Automatic & Hydraulic Operation", "Engineered rising bollard solutions for controlled vehicle entry and exit."],
  ["Perimeter Security", "Suitable for entrances, restricted zones, government facilities and critical infrastructure."],
  ["Access Control Integration", "Designed to work with access control, ANPR, barriers and other security systems."],
  ["Durable Security Infrastructure", "Heavy-duty solutions designed for demanding outdoor security environments."],
  ["Professional Technical Support", "Installation, commissioning, preventive maintenance, repair and troubleshooting."],
];

export default function BollardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/60">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
          <div className="h-96 w-96 rounded-full border border-cyan-400/20 animate-bollard-pulse" />
          <div className="absolute h-64 w-64 rounded-full border border-cyan-400/30" />
          <div className="absolute bottom-[15%] left-1/2 h-32 w-14 -translate-x-1/2 rounded-t-xl border border-cyan-300/50 bg-cyan-400/10 animate-bollard-rise">
            <div className="absolute inset-x-2 top-2 h-2 rounded-full bg-cyan-300/70 shadow-[0_0_18px_rgba(103,232,249,.8)]" />
          </div>
          <div className="absolute bottom-[12%] left-[24%] right-[24%] h-2 rounded-full bg-cyan-400/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Link href="/equipment" className="text-sm font-semibold text-cyan-300">
            ← Back to Equipment
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            Perimeter & Vehicle Protection
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Security Bollard System
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional security bollard solutions for controlled vehicle
            access, perimeter protection, restricted entrances and critical
            infrastructure.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/service-request"
              className="rounded-xl bg-cyan-400 px-7 py-3 font-bold text-slate-950"
            >
              Request Service
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Physical Security
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Intelligent perimeter protection
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Security bollards provide a strong physical security layer for
            protecting entrances, pedestrian areas and controlled vehicle
            access points.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="mb-5 h-1 w-12 rounded-full bg-cyan-400" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Manufacturer Technologies
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Security Bollard Manufacturers
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            A professional technical showcase of established security
            bollard, perimeter protection and vehicle access-control
            manufacturers.
          </p>

          <div className="mt-10">
            <BollardManufacturerIdentityGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/50 to-slate-900 p-8 sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Professional Technical Services
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Installation, Maintenance & Technical Support
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Professional installation, commissioning, configuration,
            preventive maintenance, corrective repair and technical
            troubleshooting.
          </p>

          <Link
            href="/service-request"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-3 font-bold text-slate-950"
          >
            Submit Service Request
          </Link>
        </div>
      </section>
    </main>
  );
}
