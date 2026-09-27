import Link from "next/link";
import CCTVManufacturerIdentityGrid from "@/app/components/CCTVManufacturerIdentityGrid";

export const metadata = {
  title: "CCTV System | Security Equipment Maintenance BD",
  description:
    "Professional CCTV surveillance systems, installation, commissioning, maintenance and technical support.",
};

export default function CCTVPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 animate-cctv-sweep" />
          <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Link href="/equipment" className="text-sm font-medium text-cyan-300">
            ← Back to Equipment
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Video Surveillance Technology
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            CCTV System
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional video surveillance solutions for security monitoring,
            situational awareness, critical infrastructure and controlled
            environments.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/service-request"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
              Request Service
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["IP & Network Surveillance", "Modern network-based video monitoring and recording solutions."],
            ["Monitoring & Recording", "Centralized observation, recording and security event review."],
            ["System Integration", "Professional deployment across demanding security environments."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
            >
              <h2 className="text-xl font-semibold">{title}</h2>
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

          <p className="mt-4 max-w-3xl text-slate-300">
            A professional technology showcase using original surveillance
            interface visuals instead of third-party logos.
          </p>

          <div className="mt-10">
            <CCTVManufacturerIdentityGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/15 bg-cyan-950/20 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold">CCTV Technical Support</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Installation, commissioning, troubleshooting, preventive
            maintenance, corrective repair and system support.
          </p>

          <Link
            href="/service-request"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950"
          >
            Submit Service Request
          </Link>
        </div>
      </section>
    </main>
  );
}
