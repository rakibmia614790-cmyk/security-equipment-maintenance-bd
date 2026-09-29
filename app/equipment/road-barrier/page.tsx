import Link from "next/link";
import RoadBarrierManufacturerIdentityGrid from "@/app/components/RoadBarrierManufacturerIdentityGrid";

export const metadata = {
  title: "Road Barrier System | Security Equipment Maintenance BD",
  description:
    "Professional automatic road barrier systems for vehicle access control, security facilities, airports, parking and critical infrastructure.",
};

const features = [
  ["Automatic Vehicle Control", "Reliable boom barrier systems for controlled vehicle entry and exit."],
  ["High-Security Access", "Designed for airports, government facilities, commercial sites and critical infrastructure."],
  ["Integrated Operation", "Compatible with access control, RFID, ANPR and parking management systems."],
  ["Fast & Reliable", "Efficient barrier operation for demanding traffic-control environments."],
  ["Preventive Maintenance", "Scheduled inspection and maintenance for dependable operation."],
  ["Technical Support", "Installation, commissioning, troubleshooting, repair and field support."],
];

export default function RoadBarrierPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/60">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
          <div className="h-80 w-80 rounded-full border border-cyan-400/20 animate-barrier-pulse" />
          <div className="absolute h-48 w-48 rounded-full border border-cyan-400/30" />
          <div className="absolute left-[15%] right-[15%] top-1/2 h-1 origin-left bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,.8)] animate-barrier-arm" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Link href="/equipment" className="text-sm font-semibold text-cyan-300">
            ← Back to Equipment
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            Vehicle Access Control
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Road Barrier System
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional automatic road barrier solutions for secure vehicle
            access, traffic control, parking facilities, airports and critical
            infrastructure.
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
            Vehicle Security Infrastructure
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Intelligent vehicle access control
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Automated boom barriers provide controlled vehicle movement while
            supporting integrated security and parking infrastructure.
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
            Road Barrier Manufacturers
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Professional manufacturer identity cards with dedicated automatic
            barrier visuals and product-specific motion effects.
          </p>

          <div className="mt-10">
            <RoadBarrierManufacturerIdentityGrid />
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
