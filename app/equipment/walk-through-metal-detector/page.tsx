import WTMDManufacturerIdentityGrid from "@/app/components/WTMDManufacturerIdentityGrid";
import Link from "next/link";

const manufacturers = [
  ["CEIA", ""],
  ["Garrett", ""],
  ["Rapiscan Systems", ""],
  ["Smiths Detection", ""],
  ["Nuctech", ""],
  ["Leidos", ""],
  ["ZKTeco", ""],
  ["Evolv Technology", ""],
  ["Westminster International", ""],
  ["Autoclear", ""],
  ["Metor", ""],
  ["Adani Defence", ""],
  ["Safeway Inspection System", ""],
  ["Beijing Zhongdun Anmin", ""],
  ["OSI Systems", ""],
  ["Bosch", ""],
  ["Rohde & Schwarz", ""],
  ["Thales", ""],
  ["VMI Security", ""],
  ["Astrophysics", ""],
  ["Digital Barriers", ""],
  ["C.E.I.A. USA", ""],
  ["2M Technology", ""],
  ["Wanzl", ""],
  ["DetectaChem", ""],
];

const applications = [
  "Airports and aviation facilities",
  "Government and critical infrastructure",
  "Courts and judicial facilities",
  "Military and defence establishments",
  "Corporate and commercial facilities",
  "Events and high-security venues",
];

const capabilities = [
  "Multi-zone metal detection",
  "Adjustable detection sensitivity",
  "Target-zone indication",
  "High-throughput screening",
  "Walk-through operation",
  "Alarm and security monitoring",
];

export default function WalkThroughMetalDetectorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('/security-hero.png')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/70" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Security Screening Equipment
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Walk-Through Metal Detector
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Professional walk-through screening solutions for controlled
              access, people screening and high-security environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/service-request"
                className="rounded-lg bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Service Request
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Equipment Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Reliable people-screening technology
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Walk-through metal detectors are designed to screen individuals
              for metallic objects at controlled entry points. They are widely
              used where efficient passenger or visitor screening must be
              combined with reliable alarm indication and operational
              flexibility.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              SecureTech Equipment provides technical support covering
              installation, commissioning, inspection, preventive maintenance,
              corrective maintenance, troubleshooting and operational support
              for walk-through screening systems.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Service Coverage
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Installation & Commissioning",
                "Preventive Maintenance",
                "Corrective Maintenance",
                "Troubleshooting",
                "Performance Inspection",
                "Technical Support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-4 text-sm font-medium text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Applications
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Built for controlled access environments
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <span className="text-sm font-bold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Key Capabilities
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Screening features that support security operations
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-5 h-2 w-10 rounded-full bg-cyan-400" />
              <h3 className="text-lg font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Manufacturer Ecosystem
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Supporting multiple technology platforms
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Our technical capability is designed to support equipment from
              different manufacturers and technology platforms, subject to
              equipment model, configuration and available technical
              documentation.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {manufacturers.map(([name, logo]) => (
              <div
                key={name}
                className="flex min-h-32 items-center justify-center rounded-2xl border border-white/10 bg-white p-6"
              >
                <img
                  src={logo}
                  alt={name}
                  className="max-h-16 max-w-[150px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Preventive Maintenance",
              text: "Routine inspection and maintenance support designed to help keep screening equipment operational.",
            },
            {
              title: "Corrective Support",
              text: "Technical troubleshooting and corrective maintenance for operational faults and equipment issues.",
            },
            {
              title: "Technical Training",
              text: "Operational and maintenance-oriented training support for relevant security screening equipment.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-white/[0.04] p-8 sm:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Need Technical Support?
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Request service for your walk-through metal detector.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Share your equipment details and service requirement with our
              technical team.
            </p>

            <Link
              href="/service-request"
              className="mt-8 inline-flex rounded-lg bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Submit Service Request
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
