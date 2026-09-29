import Link from "next/link";
import WalkieTalkieManufacturerIdentityGrid from "@/app/components/WalkieTalkieManufacturerIdentityGrid";

export const metadata = {
  title: "Walkie-Talkie Communication System | Security Equipment Maintenance BD",
  description:
    "Professional two-way radio and walkie-talkie communication systems for security, aviation, industrial, government and critical infrastructure operations.",
};

const features = [
  ["Reliable Two-Way Communication", "Professional radio communication for coordinated security and operational teams."],
  ["Clear Voice Communication", "Designed for dependable voice communication across demanding operational environments."],
  ["Rugged Field Operation", "Professional handheld radio solutions for security, industrial and field-service applications."],
  ["Team Coordination", "Support for rapid communication between mobile teams, control rooms and field personnel."],
  ["Expandable Communication", "Suitable for organizations requiring scalable radio communication infrastructure."],
  ["Professional Technical Support", "Installation, programming, configuration, preventive maintenance, repair and troubleshooting."],
];

export default function WalkieTalkiePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/60">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
          <div className="absolute h-96 w-96 rounded-full border border-cyan-400/20 animate-radio-pulse" />
          <div className="absolute h-72 w-72 rounded-full border border-cyan-400/30 animate-radio-pulse" />
          <div className="relative h-64 w-32 rounded-2xl border border-cyan-300/50 bg-cyan-400/5 shadow-[0_0_35px_rgba(34,211,238,.18)]">
            <div className="absolute -top-16 left-1/2 h-16 w-2 -translate-x-1/2 rounded-full bg-cyan-300/60" />
            <div className="absolute left-5 right-5 top-7 h-10 rounded-lg border border-cyan-300/40 bg-cyan-400/10" />
            <div className="absolute left-8 right-8 top-12 h-px bg-cyan-300/80 animate-radio-scan" />
            <div className="absolute bottom-10 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-cyan-300/60" />
          </div>
          <div className="absolute h-48 w-48 rounded-full border border-cyan-300/30 animate-radio-signal" />
          <div className="absolute h-72 w-72 rounded-full border border-cyan-300/20 animate-radio-signal" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Link href="/equipment" className="text-sm font-semibold text-cyan-300">
            ← Back to Equipment
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            Professional Radio Communication
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Walkie-Talkie Communication System
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional two-way radio communication solutions for security,
            aviation, industrial, government and critical infrastructure
            operations.
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
            Mission-Critical Communication
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Reliable communication for field operations
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Two-way radio systems enable coordinated communication between
            security teams, field engineers, operational staff and control
            centers.
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
            Walkie-Talkie Manufacturers
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            A professional technical showcase of established two-way radio
            communication manufacturers, presented with original
            product-specific visual interfaces.
          </p>

          <div className="mt-10">
            <WalkieTalkieManufacturerIdentityGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/50 to-slate-900 p-8 sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Professional Technical Services
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Installation, Programming & Maintenance
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Professional installation, radio programming, configuration,
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
