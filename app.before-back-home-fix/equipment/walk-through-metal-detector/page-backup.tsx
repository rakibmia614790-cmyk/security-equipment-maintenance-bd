import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Walk Through Metal Detector Repair & Maintenance Bangladesh | SecureTech BD",
  description:
    "Professional walk through metal detector supply, installation, repair, preventive maintenance, AMC, spare parts and technical support services across Bangladesh.",
};

const brands = [
  "CEIA",
  "Garrett Metal Detectors",
  "Rapiscan Systems / Metor",
  "Smiths Detection",
  "Nuctech",
  "ZKTeco",
  "AutoClear",
  "Fisher Research Laboratory",
  "Vallon",
  "Elektral / ThruScan",
  "Adani Systems",
  "Metrasens",
  "Westminster International",
  "L3 Security & Detection Systems",
  "Evolv Technology",
  "Safeway Inspection System",
  "Ranger Security Detectors",
  "Kumahira",
  "OSI Systems",
  "Unival Group",
  "SecuScan",
  "Bertin Instruments",
  "KritiKal Solutions",
  "Shanghai Eastimage",
  "Beijing Zhongdun Anmin",
];

const services = [
  "Walk Through Metal Detector Supply",
  "Installation & Commissioning",
  "Fault Diagnosis & Repair",
  "Preventive Maintenance",
  "Corrective Maintenance",
  "Sensitivity Calibration",
  "Detection Zone Configuration",
  "Alarm & Display Troubleshooting",
  "Power Supply & Electrical Troubleshooting",
  "Control Board & Electronic Repair",
  "AMC & Service Contracts",
  "Spare Parts Support",
  "System Performance Inspection",
  "Technical Consultation",
  "On-site Technical Support",
];

const applications = [
  "Airports & Aviation Facilities",
  "Government Buildings",
  "Courts & Prisons",
  "Police & Law Enforcement",
  "Military & Defense Facilities",
  "Ports & Border Control",
  "Banks & Financial Institutions",
  "Factories & Industrial Facilities",
  "Shopping Malls & Commercial Buildings",
  "Hotels & Corporate Offices",
  "Stadiums & Event Venues",
  "Schools, Colleges & Universities",
];

export default function WalkThroughMetalDetectorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-cyan-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            People Screening & Security
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            Walk Through Metal Detector
            <br />
            <span className="text-cyan-400">
              Repair & Maintenance Bangladesh
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Professional walk through metal detector supply, installation,
            repair, preventive maintenance, calibration, spare parts and
            technical support for airports, government facilities, commercial
            buildings and high-security environments across Bangladesh.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+8801799419011"
              className="rounded-xl bg-cyan-400 px-7 py-4 text-center font-bold text-black transition hover:bg-cyan-300"
            >
              Call for Service
            </a>

            <a
              href="https://wa.me/8801518698236"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-400 px-7 py-4 text-center font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* REPAIR AND MAINTENANCE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technical Services
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Repair and Maintenance
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-gray-400">
            Professional troubleshooting, repair and preventive maintenance
            services for Walk Through Metal Detector systems. Our technical
            support covers inspection, fault diagnosis, sensitivity
            configuration, detection-zone troubleshooting, electronic repair
            and ongoing maintenance.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-cyan-400">
                Repair & Troubleshooting
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Diagnosis and repair of electrical, electronic, mechanical,
                control-board, power and system-related faults.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-cyan-400">
                Preventive Maintenance
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Planned maintenance to improve detector reliability,
                sensitivity, operational stability and service life.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-cyan-400">
                Calibration & Support
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Detection-zone configuration, sensitivity adjustment,
                performance inspection and technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-y border-cyan-500/20 bg-white/[0.02] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Global Industry Coverage
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Brands / Manufacturers in the WTMD Market
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-gray-400">
            Walk Through Metal Detector systems are available from a wide
            range of international manufacturers and security technology
            companies. Our technical knowledge covers common WTMD technologies,
            system configurations and service requirements across different
            manufacturers.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <div
                key={brand}
                className="rounded-2xl border border-cyan-400/20 bg-black/50 p-6 transition hover:border-cyan-400/60"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-cyan-400" />

                <h3 className="text-lg font-semibold">{brand}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  WTMD technology, security screening and people-screening
                  applications.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            What We Provide
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Walk Through Metal Detector Services
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-gray-300 transition hover:border-cyan-400/40"
              >
                <span className="mr-3 text-cyan-400">✓</span>
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-y border-cyan-500/20 bg-white/[0.02] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Security Applications
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Where Walk Through Metal Detectors Are Used
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((application) => (
              <div
                key={application}
                className="rounded-xl border border-white/10 bg-black/50 px-5 py-4 text-gray-300"
              >
                <span className="mr-3 text-cyan-400">◆</span>
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-cyan-500/20 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technical Support
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Need Walk Through Metal Detector Service?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Contact SecureTech BD for WTMD repair,
            maintenance, calibration, spare parts, installation and technical
            support across Bangladesh.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+8801799419011"
              className="rounded-xl bg-cyan-400 px-7 py-4 font-bold text-black transition hover:bg-cyan-300"
            >
              Call for Service
            </a>

            <a
              href="https://wa.me/8801518698236"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-400 px-7 py-4 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
          <p>SecureTech BD</p>

          <p className="mt-2">
            Walk Through Metal Detector • Supply • Repair • Maintenance •
            Technical Support
          </p>
        </div>
      </footer>
    </main>
  );
}