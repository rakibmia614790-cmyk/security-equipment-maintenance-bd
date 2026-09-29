import Link from "next/link";
import ETDManufacturerIdentityGrid from "@/app/components/ETDManufacturerIdentityGrid";

export const metadata = {
  title: "Explosive Trace Detection (ETD) | Security Equipment Maintenance BD",
  description:
    "Professional explosive trace detection equipment, screening solutions, maintenance, repair and technical support.",
};

const features = [
  {
    title: "Trace Analysis",
    text: "Professional screening technology for detecting and analysing trace-level target substances.",
  },
  {
    title: "Rapid Screening",
    text: "Fast sampling and analysis support efficient security screening workflows.",
  },
  {
    title: "High-Sensitivity Detection",
    text: "Designed for sensitive trace detection across demanding security environments.",
  },
  {
    title: "Portable Deployment",
    text: "Flexible solutions suitable for checkpoints, aviation, transport and controlled facilities.",
  },
  {
    title: "Operator Alerts",
    text: "Clear system indications support rapid interpretation and consistent screening decisions.",
  },
  {
    title: "Technical Support",
    text: "Inspection, troubleshooting, preventive maintenance, repair and technical assistance.",
  },
];

export default function ETDPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/30">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/20 animate-etd-pulse" />
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/30 animate-etd-ring" />
          <div className="absolute left-1/2 top-1/2 h-1 w-64 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_35px_rgba(167,139,250,.9)] animate-etd-beam" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Link href="/" className="text-sm font-semibold text-violet-300">
            ← Back to Home
          </Link>

          <div className="mt-14 max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
              Explosive Trace Detection Technology
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Explosive Trace Detection
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Professional ETD solutions for trace-level screening, security
              inspection and high-security operational environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Trace Analysis", "Rapid Screening", "High Sensitivity", "Portable"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative mx-auto mt-16 flex h-72 max-w-xl items-center justify-center">
            <div className="absolute h-60 w-60 rounded-full border border-violet-400/10" />
            <div className="absolute h-44 w-44 rounded-full border border-violet-400/20" />
            <div className="absolute h-28 w-28 rounded-full border border-violet-300/30 animate-etd-ring" />

            <div className="relative h-44 w-32 rounded-3xl border border-violet-200/25 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-[0_0_70px_rgba(139,92,246,.25)]">
              <div className="absolute left-1/2 top-5 h-14 w-20 -translate-x-1/2 rounded-xl border border-violet-300/30 bg-violet-300/10">
                <div className="absolute left-3 right-3 top-4 h-1 rounded-full bg-violet-300/60 animate-etd-line" />
                <div className="absolute left-3 right-8 top-8 h-1 rounded-full bg-violet-300/30" />
              </div>
              <div className="absolute bottom-6 left-1/2 h-8 w-16 -translate-x-1/2 rounded-xl border border-violet-300/20 bg-violet-300/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
            Core Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Professional Trace Detection for Security Screening
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 transition duration-500 hover:-translate-y-1 hover:border-violet-300/30"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-300/10 text-violet-200">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
              Manufacturer Technologies
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Global ETD Technology
            </h2>
            <p className="mt-4 text-slate-400">
              Original manufacturer identity cards representing professional
              explosive trace detection technology.
            </p>
          </div>

          <ETDManufacturerIdentityGrid />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-violet-300/15 bg-gradient-to-r from-violet-400/10 via-slate-900 to-slate-900 p-8 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
            Technical Support
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black sm:text-4xl">
            ETD Maintenance, Repair & Technical Support
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Professional inspection, troubleshooting, preventive maintenance,
            corrective repair and technical support for trace detection systems.
          </p>

          <Link
            href="/service-request"
            className="mt-8 inline-flex rounded-xl border border-violet-300/30 bg-violet-300/10 px-6 py-3 text-sm font-bold text-violet-100 transition hover:bg-violet-300/20"
          >
            Request Technical Service →
          </Link>
        </div>
      </section>
    </main>
  );
}
