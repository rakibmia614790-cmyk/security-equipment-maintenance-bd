import Link from "next/link";
import CCTVManufacturerIdentityGrid from "@/app/components/CCTVManufacturerIdentityGrid";

export const metadata = {
  title: "CCTV System | Security Equipment Maintenance BD",
  description:
    "Professional CCTV surveillance systems, installation, commissioning, maintenance and technical support.",
};

const features = [
  ["Advanced Surveillance", "Professional video monitoring for security and situational awareness."],
  ["IP & Network Systems", "Scalable network video solutions for modern facilities."],
  ["24/7 Monitoring", "Continuous surveillance and recording for critical environments."],
  ["System Integration", "Cameras, recording, monitoring and security infrastructure integration."],
  ["Preventive Maintenance", "Planned inspection and maintenance for dependable operation."],
  ["Technical Support", "Troubleshooting, repair, configuration and system assistance."],
];

export default function CCTVPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/50">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="h-80 w-80 rounded-full border border-cyan-400/30 animate-cctv-sweep" />
          <div className="absolute h-52 w-52 rounded-full border border-cyan-400/20" />
          <div className="absolute h-2 w-72 bg-cyan-400/60 animate-cctv-scan" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Link href="/equipment" className="text-sm font-semibold text-cyan-300">
            ← Back to Equipment
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Video Surveillance Technology
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl">
            CCTV System
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional CCTV surveillance solutions for airports, government
            facilities, commercial buildings, critical infrastructure and
            high-security environments.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/service-request" className="rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950">
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
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Security Infrastructure
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Intelligent video surveillance
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            From individual cameras to integrated surveillance networks, CCTV
            systems provide visual monitoring, recording and security awareness
            across demanding operational environments.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="mb-5 h-1 w-12 rounded-full bg-cyan-400" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Manufacturer Technologies
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            CCTV & Video Surveillance Manufacturers
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Professional manufacturer identity cards with original
            surveillance-themed technical visuals.
          </p>
          <div className="mt-10">
            <CCTVManufacturerIdentityGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-950/40 to-slate-900 p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Professional Technical Services
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Installation, maintenance & technical support
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Installation, commissioning, configuration, preventive maintenance,
            corrective repair and technical troubleshooting.
          </p>
          <Link href="/service-request" className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950">
            Submit Service Request
          </Link>
        </div>
      </section>
    </main>
  );
}
