import Link from "next/link";
import HandHandMetalManufacturerIdentityGrid from "@/app/components/HandHandMetalManufacturerIdentityGrid";

export const metadata = {
  title: "Hand Hand Metal Detector | Security Equipment Maintenance BD",
  description:
    "Professional handheld metal detection equipment, security screening solutions, maintenance, repair and technical support.",
};

const features = [
  {
    title: "Portable Screening",
    text: "Compact handheld detection for rapid secondary screening at controlled security checkpoints.",
  },
  {
    title: "High Sensitivity",
    text: "Reliable detection of concealed metallic objects with clear operator alerts.",
  },
  {
    title: "Audio & Visual Alerts",
    text: "Immediate alarm indication supports fast and consistent operator response.",
  },
  {
    title: "Targeted Inspection",
    text: "Designed for focused screening of personnel, bags, packages and restricted areas.",
  },
  {
    title: "Field Ready",
    text: "Rugged handheld equipment suited to demanding security and inspection environments.",
  },
  {
    title: "Technical Support",
    text: "Inspection, troubleshooting, preventive maintenance, repair and technical assistance.",
  },
];

export default function HandHandMetalPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 animate-hand-metal-pulse" />
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30 animate-hand-metal-ring" />
          <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-cyan-300/60 shadow-[0_0_28px_rgba(34,211,238,.8)] animate-hand-metal-scan" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Link href="/" className="text-sm font-semibold text-cyan-300">
            ← Back to Home
          </Link>

          <div className="mt-14 max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Handheld Detection Technology
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Hand Hand Metal
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Professional handheld metal detection solutions for secondary
              screening, targeted inspection and controlled security
              environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Portable", "Sensitive", "Rapid Screening", "Field Ready"].map(
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
            <div className="absolute h-60 w-60 rounded-full border border-cyan-400/10" />
            <div className="absolute h-44 w-44 rounded-full border border-cyan-400/20" />

            <div className="relative h-52 w-24 rotate-[-12deg] rounded-[2rem] border border-cyan-200/30 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-[0_0_60px_rgba(34,211,238,.22)]">
              <div className="absolute left-1/2 top-4 h-10 w-10 -translate-x-1/2 rounded-full border border-cyan-300/50 bg-cyan-300/10 shadow-[0_0_25px_rgba(34,211,238,.5)]" />
              <div className="absolute left-1/2 top-20 h-20 w-2 -translate-x-1/2 rounded-full bg-cyan-300/70 shadow-[0_0_22px_rgba(34,211,238,.9)]" />
              <div className="absolute bottom-5 left-1/2 h-3 w-14 -translate-x-1/2 rounded-full bg-cyan-300/20" />
            </div>

            <div className="absolute bottom-4 h-1 w-72 rounded-full bg-cyan-300/30 blur-sm animate-hand-metal-beam" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Core Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Handheld Detection for Professional Security Screening
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/30"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Manufacturer Technologies
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Global Handheld Detection Technology
            </h2>
            <p className="mt-4 text-slate-400">
              Original manufacturer identity cards representing professional
              handheld metal-detection technology.
            </p>
          </div>

          <HandHandMetalManufacturerIdentityGrid />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-slate-900 p-8 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Technical Support
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black sm:text-4xl">
            Maintenance, Repair & Technical Assistance
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Professional inspection, troubleshooting, preventive maintenance,
            corrective repair and technical support for handheld screening
            equipment.
          </p>

          <Link
            href="/service-request"
            className="mt-8 inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Request Technical Service →
          </Link>
        </div>
      </section>
    </main>
  );
}
