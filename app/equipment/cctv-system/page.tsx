import Link from "next/link";
import CCTVManufacturerIdentityGrid from "@/app/components/CCTVManufacturerIdentityGrid";

export const metadata = {
  title: "CCTV System | Security Equipment Maintenance BD",
  description:
    "Professional CCTV surveillance systems, installation, commissioning, maintenance, repair and technical support.",
};

const features = [
  ["Video Surveillance", "Professional monitoring and recording for security-critical environments."],
  ["IP Camera Systems", "Scalable network-based surveillance for modern facilities."],
  ["24/7 Monitoring", "Continuous visual security coverage and operational awareness."],
  ["System Integration", "Integrated cameras, recording, monitoring and security infrastructure."],
  ["Preventive Maintenance", "Planned inspection, configuration and maintenance support."],
  ["Technical Support", "Troubleshooting, repair, configuration and field engineering support."],
];

export default function CCTVPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/60">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
          <div className="h-96 w-96 rounded-full border border-cyan-400/20 animate-cctv-sweep" />
          <div className="absolute h-64 w-64 rounded-full border border-cyan-400/25" />
          <div className="absolute h-40 w-40 rounded-full border border-cyan-400/40 animate-cctv-pulse" />
          <div className="absolute left-0 right-0 h-px bg-cyan-300 animate-cctv-scan" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Link href="/equipment" className="text-sm font-semibold text-cyan-300">
            ← Back to Equipment
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
              Video Surveillance Technology
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
              CCTV System
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Professional CCTV surveillance solutions for airports, government
              facilities, commercial buildings, critical infrastructure and
              high-security environments.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/service-request"
                className="rounded-xl bg-cyan-400 px-7 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Request Service
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 font-semibold hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Security Infrastructure
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Intelligent video surveillance
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Complete surveillance technology for professional security,
            monitoring, recording and facility protection.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, description], index) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/40"
              style={{ animationDelay: `${index * 120}ms` }}
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
            CCTV Manufacturer Technologies
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Original manufacturer identity cards with dedicated CCTV camera,
            lens, scanning and live-monitoring visual effects.
          </p>

          <div className="mt-10">
            <CCTVManufacturerIdentityGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/50 to-slate-900 p-8 sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Technical Services
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Installation, maintenance & technical support
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Installation, commissioning, configuration, preventive maintenance,
            corrective repair and technical troubleshooting.
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
