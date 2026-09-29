import Link from "next/link";
import RoadBlockerManufacturerIdentityGrid from "@/app/components/RoadBlockerManufacturerIdentityGrid";

export const metadata = {
  title: "Road Blocker System | Security Equipment Maintenance BD",
  description:
    "Professional hydraulic road blocker systems for high-security vehicle access control, airports, government facilities and critical infrastructure.",
};

const features = [
  ["High-Security Vehicle Control", "Heavy-duty road blocking systems for controlled vehicle access."],
  ["Hydraulic Protection", "Engineered rising barriers for demanding security environments."],
  ["Critical Infrastructure", "Suitable for airports, government facilities and sensitive sites."],
  ["Integrated Security", "Designed for integration with access control and vehicle security systems."],
  ["Preventive Maintenance", "Inspection and maintenance support for dependable operation."],
  ["Technical Support", "Installation, commissioning, troubleshooting, repair and field service."],
];

export default function RoadBlockerPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/60">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
          <div className="h-96 w-96 rounded-full border border-cyan-400/20 animate-road-blocker-pulse" />
          <div className="absolute h-64 w-64 rounded-full border border-cyan-400/30" />
          <div className="absolute bottom-[18%] left-[12%] right-[12%] h-5 rounded-t-lg bg-cyan-300/60 shadow-[0_0_25px_rgba(34,211,238,.7)] animate-road-blocker-rise" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Link href="/equipment" className="text-sm font-semibold text-cyan-300">
            ← Back to Equipment
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            High-Security Vehicle Protection
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Road Blocker System
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional hydraulic road blocker solutions for high-security
            vehicle access control, airports, government facilities and
            critical infrastructure.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/service-request" className="rounded-xl bg-cyan-400 px-7 py-3 font-bold text-slate-950">
              Request Service
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Perimeter Security
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Heavy-duty vehicle access protection
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Road blockers provide a robust physical security layer for
            controlling and restricting unauthorized vehicle movement.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/50">
              <div className="mb-5 h-1 w-12 rounded-full bg-cyan-400" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
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
            Road Blocker Manufacturers
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Professional manufacturer identity cards with dedicated hydraulic
            road-blocking visuals and product-specific animations.
          </p>

          <div className="mt-10">
            <RoadBlockerManufacturerIdentityGrid />
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
            Installation, commissioning, configuration, preventive maintenance,
            corrective repair and technical troubleshooting.
          </p>
          <Link href="/service-request" className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-3 font-bold text-slate-950">
            Submit Service Request
          </Link>
        </div>
      </section>
    </main>
  );
}
