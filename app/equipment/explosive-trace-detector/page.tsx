import Link from "next/link";
import ETDManufacturerIdentityGrid from "@/app/components/ETDManufacturerIdentityGrid";

export const metadata = {
  title: "Explosive Trace Detection System | Security Equipment Maintenance BD",
  description:
    "Explosive Trace Detection systems for aviation, critical infrastructure, government and high-security screening environments.",
};

export default function ETDPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 animate-etd-pulse" />
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Link href="/equipment" className="text-sm font-medium text-cyan-300">
            ← Back to Equipment
          </Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Explosive Trace Detection
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Explosive Trace Detection System
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Advanced trace-detection technology for identifying microscopic
            traces of explosives and related threats in professional security
            screening environments.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/service-request" className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950">
              Request Service
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Trace Analysis", "Detection of minute traces collected from surfaces and objects."],
            ["Rapid Screening", "Designed for fast analysis at demanding security checkpoints."],
            ["Professional Deployment", "Suitable for aviation and high-security environments."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
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
            Explosive Trace Detection Manufacturers
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Original technical identity cards representing established ETD
            technology manufacturers without using third-party logos.
          </p>
          <div className="mt-10">
            <ETDManufacturerIdentityGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/15 bg-cyan-950/20 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold">ETD Technical Support</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Installation, commissioning, preventive maintenance, corrective
            repair, calibration support and technical assistance.
          </p>
          <Link href="/service-request" className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950">
            Submit Service Request
          </Link>
        </div>
      </section>
    </main>
  );
}
