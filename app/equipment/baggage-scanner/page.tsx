import Link from "next/link";

import ManufacturerIdentityGrid from "@/app/components/ManufacturerIdentityGrid";
const manufacturers = [
  ["Smiths Detection", ""],
  ["Rapiscan Systems", ""],
  ["OSI Systems", ""],
  ["Nuctech", ""],
  ["Leidos", ""],
  ["L3Harris Technologies", ""],
  ["Analogic", ""],
  ["Astrophysics", ""],
  ["Gilardoni", ""],
  ["Adani Systems", ""],
  ["VOTI Detection", ""],
  ["Autoclear", ""],
  ["American Science and Engineering (AS&E)", ""],
  ["Westminster International", ""],
  ["Teledyne Technologies", ""],
  ["3DX-RAY", ""],
  ["Rohde & Schwarz", ""],
  ["Thales", ""],
  ["Safran / Morpho Detection", ""],
  ["Vanderlande", ""],
  ["Siemens Logistics", ""],
  ["Daifuku", ""],
  ["BEUMER Group", ""],
  ["Glidepath", ""],
  ["Scan-X Security", ""],
  ["Cobalt Light Systems", ""],
  ["Kromek", ""],
  ["Todd Research", ""],
  ["Vidisco", ""],
  ["Viken Detection", ""],
  ["Scanna MSC", ""],
  ["Mekitec", ""],
  ["LINEV Systems", ""],
  ["VJ Technologies", ""],
  ["Micro-X", ""],
  ["Optosecurity", ""],
  ["Aventura Technologies", ""],
];

const capabilities = [
  "Single-view and multi-view X-ray screening",
  "High-quality imaging for baggage and parcels",
  "Operator-focused image enhancement tools",
  "Threat detection and security screening support",
  "Conveyor-based baggage inspection solutions",
  "Installation, commissioning and technical support",
  "Preventive and corrective maintenance",
  "Spare parts and equipment troubleshooting",
];

export default function BaggageScannerPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(30,64,175,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Security Screening Equipment
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Baggage Scanner
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Advanced X-ray inspection solutions for screening baggage,
              parcels, cargo and other items in security-sensitive environments.
              SecureTech Equipment provides equipment supply, installation,
              commissioning, maintenance and technical support solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/service-request"
                className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
              >
                Service Request
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              Equipment Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              X-ray inspection for modern security operations
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Baggage scanners are designed to provide security operators with
              detailed X-ray images of the contents of bags, parcels and other
              screened items. Depending on the model and application, systems
              can support different tunnel sizes, conveyor configurations,
              image processing capabilities and operational requirements.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Our technical services can support the complete equipment
              lifecycle—from installation and commissioning to preventive
              maintenance, corrective repair, troubleshooting, calibration
              support and spare-parts coordination.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Typical Applications
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Airports and aviation facilities",
                "Government and critical infrastructure",
                "Courthouses and judicial facilities",
                "Ports and logistics facilities",
                "Corporate and commercial security",
                "Cargo and parcel screening",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-200">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Capabilities
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Screening and technical capabilities
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"
              >
                <span className="text-sm font-bold text-sky-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturers */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Manufacturer Ecosystem
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Global baggage-scanning manufacturers
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            We work with security-screening equipment knowledge spanning
            multiple international manufacturers and technologies. Equipment
            availability, model support and service scope depend on the
            specific system and project requirements.
          </p>
        </div>

        <ManufacturerIdentityGrid />
      </section>

      {/* Services */}
      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Technical Services
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Support throughout the equipment lifecycle
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Our service approach is focused on maintaining operational
                reliability and helping security teams keep their screening
                equipment available for use.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Installation & Commissioning",
                "Preventive Maintenance",
                "Corrective Maintenance",
                "Troubleshooting",
                "Spare Parts Support",
                "Technical Consultation",
              ].map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="font-semibold text-white">{service}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-sky-400/20 bg-sky-400/[0.06] p-8">
            <h3 className="text-2xl font-bold">
              Need technical assistance?
            </h3>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Submit your equipment details and service requirement. Our team
              can review the request and determine the appropriate technical
              support pathway.
            </p>

            <Link
              href="/service-request"
              className="mt-6 inline-flex rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
            >
              Submit Service Request
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            SecureTech Equipment
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Baggage Screening Support
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            From equipment deployment to ongoing maintenance and technical
            support, contact our team to discuss your baggage-scanning
            requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/service-request"
              className="rounded-xl bg-sky-500 px-7 py-3 font-semibold text-white transition hover:bg-sky-400"
            >
              Service Request
            </Link>

            <Link
              href="/equipment"
              className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Back to Equipment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
