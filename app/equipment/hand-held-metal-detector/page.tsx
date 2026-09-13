import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hand Held Metal Detector Repair & Maintenance Bangladesh | Security Equipment Maintenance BD",
  description:
    "Professional hand held metal detector supply, installation, repair, maintenance, testing, spare parts and technical support services across Bangladesh.",
};

const brands = [
  "Garrett Metal Detectors",
  "CEIA",
  "Rapiscan Systems",
  "Smiths Detection",
  "Fisher Research Laboratory",
  "Vallon",
  "ZKTeco",
  "Nuctech",
  "Adani Systems",
  "Elektral",
  "Metrasens",
  "Westminster International",
  "Safeway Inspection System",
  "Kumahira",
  "Shanghai Eastimage",
  "Beijing Zhongdun Anmin",
  "Fujian Security Technology",
  "Securina",
  "TSS",
  "L3 Security & Detection Systems",
];

const services = [
  "Hand Held Metal Detector Supply",
  "Installation & Setup",
  "Fault Diagnosis & Repair",
  "Preventive Maintenance",
  "Corrective Maintenance",
  "Sensitivity Testing",
  "Detection Performance Testing",
  "Battery & Power System Inspection",
  "Control Circuit & Electronic Repair",
  "Alarm & Indicator Troubleshooting",
  "Charging System Inspection",
  "Spare Parts Support",
  "AMC & Service Contracts",
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
  "Shopping Malls",
  "Hotels & Corporate Offices",
  "Stadiums & Event Venues",
  "Schools, Colleges & Universities",
];

export default function HandHeldMetalDetectorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-cyan-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            People Screening & Security
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            Hand Held Metal Detector
            <br />
            <span className="text-cyan-400">
              Repair & Maintenance Bangladesh
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Professional hand held metal detector supply, installation,
            troubleshooting, repair, preventive maintenance, performance
            testing, spare parts and technical support for security screening
            operations across Bangladesh.
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

      {/* REPAIR */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technical Services
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Repair and Maintenance
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-gray-400">
            Troubleshooting, repair and preventive maintenance for Hand Held
            Metal Detector systems. Our technical service includes inspection,
            sensitivity testing, electronic troubleshooting, power-system
            inspection and performance verification.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-cyan-400">
                Repair & Troubleshooting
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Diagnosis and repair of electronic, electrical, charging,
                control and detector-related faults.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-cyan-400">
                Preventive Maintenance
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Planned inspection and maintenance to improve reliability,
                operational stability and service life.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-cyan-400">
                Testing & Performance
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Sensitivity testing, detection performance checks, alarm
                verification and operational inspection.
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
            Brands / Manufacturers in the Hand Held Metal Detector Market
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-gray-400">
            Hand held metal detectors are manufactured by a wide range of
            international security screening and detection technology
            companies. The following list represents brands and manufacturers
            associated with this product category and security screening
            market.
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
                  Security screening, metal detection and people-screening
                  technology.
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
            Hand Held Metal Detector Services
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
            Where Hand Held Metal Detectors Are Used
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
            Need Hand Held Metal Detector Service?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Contact Security Equipment Maintenance BD for hand held metal
            detector repair, maintenance, testing, spare parts and technical
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
          <p>Security Equipment Maintenance BD</p>

          <p className="mt-2">
            Hand Held Metal Detector • Supply • Repair • Maintenance •
            Technical Support
          </p>
        </div>
      </footer>
    </main>
  );
}