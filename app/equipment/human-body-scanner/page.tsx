import Link from "next/link";
import HumanBodyScannerManufacturerIdentityGrid from "@/app/components/HumanBodyScannerManufacturerIdentityGrid";

export const metadata = {
  title: "Human Body Scanner | Security Equipment Maintenance BD",
  description:
    "Professional human body security scanners for concealed threat detection, aviation, government, correctional and critical infrastructure security.",
};

const features = [
  ["Advanced People Screening", "Security screening technology for detecting concealed objects and potential threats on the human body."],
  ["Non-Intrusive Screening", "Advanced imaging technologies designed for efficient passenger and personnel screening."],
  ["High-Resolution Detection", "Modern screening platforms designed to identify metallic and non-metallic concealed objects."],
  ["Security Checkpoint Integration", "Suitable for aviation, government, correctional and critical infrastructure screening environments."],
  ["Operational Efficiency", "Designed for rapid screening workflows and controlled security checkpoints."],
  ["Professional Technical Support", "Installation, commissioning, preventive maintenance, repair and technical troubleshooting."],
];

export default function HumanBodyScannerPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/60">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
          <div className="h-96 w-96 rounded-full border border-cyan-400/20 animate-body-scanner-pulse" />
          <div className="absolute h-72 w-72 rounded-full border border-cyan-400/30" />
          <div className="absolute h-56 w-28 rounded-[45%] border border-cyan-300/50 bg-cyan-400/5 animate-body-scanner-scan">
            <div className="absolute left-1/2 top-1/2 h-44 w-10 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-300/30" />
          </div>
          <div className="absolute left-[20%] right-[20%] top-1/2 h-px bg-cyan-300/80 animate-body-scanner-sweep" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Link href="/equipment" className="text-sm font-semibold text-cyan-300">
            ← Back to Equipment
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            Advanced People Screening
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Human Body Scanner
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional people-screening solutions for detecting concealed
            objects and threats in aviation, government, correctional and
            critical infrastructure environments.
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
            People Screening Technology
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Advanced screening for high-security environments
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Modern human body screening technologies provide security teams
            with efficient methods for identifying concealed objects while
            supporting controlled checkpoint operations.
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
            Human Body Scanner Manufacturers
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            A professional technical showcase of established people-screening
            and security-scanner manufacturers, presented with original
            product-specific visual interfaces.
          </p>

          <div className="mt-10">
            <HumanBodyScannerManufacturerIdentityGrid />
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
            troubleshooting for people-screening systems.
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
