import Link from "next/link";
import WTMDManufacturerIdentityGrid from "@/app/components/WTMDManufacturerIdentityGrid";

export const metadata = {
  title: "Walk-Through Metal Detector | Security Equipment Maintenance BD",
  description:
    "Professional walk-through metal detector systems for aviation, government, critical infrastructure and high-security screening environments.",
};

const features = [
  ["Advanced Metal Detection", "Professional electromagnetic screening technology for detecting metallic objects at controlled checkpoints."],
  ["Multi-Zone Screening", "Multi-zone detection supports more precise identification of potential metal threats."],
  ["High-Throughput Screening", "Designed for efficient personnel screening in demanding security environments."],
  ["Adjustable Sensitivity", "Configurable detection sensitivity for different checkpoint requirements and operating conditions."],
  ["Security Checkpoint Integration", "Suitable for airports, government facilities, critical infrastructure and controlled access areas."],
  ["Professional Technical Support", "Installation, commissioning, calibration support, preventive maintenance, repair and troubleshooting."],
];

export default function WalkThroughMetalDetectorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/60">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
          <div className="absolute h-96 w-96 rounded-full border border-cyan-400/20 animate-wtmd-pulse" />
          <div className="absolute h-72 w-72 rounded-full border border-cyan-400/30" />
          <div className="relative h-64 w-44 rounded-t-3xl border-x-4 border-t-4 border-cyan-300/50 bg-cyan-400/5">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cyan-300/20" />
            <div className="absolute inset-x-3 top-1/2 h-px bg-cyan-300/80 animate-wtmd-sweep" />
            <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,1)]" />
            <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,1)]" />
          </div>
          <div className="absolute h-44 w-44 rounded-full border border-cyan-300/20 animate-wtmd-field" />
          <div className="absolute h-56 w-56 rounded-full border border-cyan-300/15 animate-wtmd-field" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Link href="/" className="text-sm font-semibold text-cyan-300">
            ← Back to Home
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            Personnel Security Screening
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Walk-Through Metal Detector
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional walk-through metal detection systems for aviation,
            government facilities, critical infrastructure and high-security
            screening environments.
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
            Electromagnetic Screening
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Intelligent personnel screening
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Modern walk-through metal detectors provide efficient personnel
            screening with configurable sensitivity and zone-based detection
            for controlled security checkpoints.
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
            Walk-Through Metal Detector Manufacturers
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            A professional technical showcase of established personnel metal
            detection manufacturers, presented with original product-specific
            visual identity cards.
          </p>

          <div className="mt-10">
            <WTMDManufacturerIdentityGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/50 to-slate-900 p-8 sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Professional Technical Services
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Installation, Calibration & Maintenance
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Professional installation, commissioning, configuration,
            calibration support, preventive maintenance, corrective repair and
            technical troubleshooting.
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
