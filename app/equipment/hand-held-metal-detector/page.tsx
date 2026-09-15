import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hand Held Metal Detector Repair & Maintenance Bangladesh | Security Equipment Maintenance BD",
  description:
    "Hand Held Metal Detector supply, installation, repair, preventive maintenance, sensitivity testing, spare parts and technical support across Bangladesh.",
};

const brands = [
  { name: "Garrett Metal Detectors", file: "garrett.png" },
  { name: "CEIA", file: "ceia.png" },
  { name: "Rapiscan Systems", file: "rapiscan.png" },
  { name: "Smiths Detection", file: "smiths-detection.png" },
  { name: "Nuctech", file: "nuctech.svg" },
  { name: "ZKTeco", file: "zkteco.svg" },
  { name: "Vallon", file: "vallon.svg" },
  { name: "Metrasens", file: "metrasens.png" },
  { name: "Adani Systems", file: "adani-systems.png" },
  { name: "Elektral", file: "elektral.png" },
  { name: "Westminster International", file: "westminster.svg" },
  { name: "Autoclear", file: "autoclear.png" },
  { name: "Fisher Research Laboratory", file: "fisher.svg" },
  { name: "Kumahira", file: "kumahira.svg" },
  { name: "Shanghai Eastimage", file: "eastimage.png" },
];

const services = [
  "Hand Held Metal Detector fault diagnosis",
  "Electronic circuit and control troubleshooting",
  "Detection sensitivity testing",
  "Alarm and audio inspection",
  "LED indicator troubleshooting",
  "Battery and charging system inspection",
  "Power supply inspection",
  "Sensor and detection coil inspection",
  "Sensitivity adjustment and performance testing",
  "Preventive and corrective maintenance",
  "Spare parts arrangement",
  "On-site technical support",
  "Equipment inspection and commissioning",
  "Annual Maintenance Contract (AMC)",
];

const applications = [
  "Airports",
  "Government Facilities",
  "Defence & Military",
  "Police & Law Enforcement",
  "Courts & Prisons",
  "Banks & Financial Institutions",
  "Ports & Critical Infrastructure",
  "Factories & Industrial Facilities",
  "Shopping Malls",
  "Hotels",
  "Corporate Offices",
  "Schools & Universities",
  "Hospitals",
  "Stadiums & Events",
];

function BrandCard({
  name,
  file,
}: {
  name: string;
  file: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]">
      <div className="flex h-24 items-center justify-center rounded-xl border border-white/10 bg-black/50 px-4">
        <img
          src={`/brands/hhmd/${file}`}
          alt={`${name} brand mark`}
          className="max-h-14 max-w-[82%] object-contain"
        />
      </div>

      <p className="mt-3 text-center text-sm font-medium text-slate-300">
        {name}
      </p>
    </div>
  );
}

export default function HandHeldMetalDetectorPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Security Equipment Maintenance BD
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hand Held Metal Detector
            <span className="block text-cyan-400">
              Repair & Maintenance
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional supply, installation, repair, preventive
            maintenance, sensitivity testing, spare parts and technical
            support for Hand Held Metal Detectors across Bangladesh.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            HHMD Technical Services
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Reliable Hand Held Metal Detector Support
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Hand Held Metal Detectors are widely used for secondary
            screening and personal inspection. Our technical service
            covers equipment diagnosis, performance testing, sensitivity
            adjustment, preventive maintenance and corrective repair.
          </p>
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Brands We Work With
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Hand Held Metal Detector Brands
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              We provide technical support for a wide range of security
              screening equipment brands and models.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {brands.map((brand) => (
              <BrandCard
                key={brand.name}
                name={brand.name}
                file={brand.file}
              />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="text-xs leading-6 text-slate-500">
              Brand names and marks are shown for equipment identification
              and market reference only. Their display does not imply
              dealership, manufacturer authorization, endorsement or
              official partnership unless separately confirmed.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            HHMD Repair & Maintenance Services
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-sm font-bold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="leading-6 text-slate-300">
                  {service}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* APPLICATIONS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Applications
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Where HHMDs Are Used
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {applications.map((application) => (
              <div
                key={application}
                className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-slate-300"
              >
                {application}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8 text-center sm:p-12">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technical Support
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Need HHMD Repair or Maintenance?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Contact Security Equipment Maintenance BD for supply,
            installation, repair, preventive maintenance, AMC and
            technical support.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="tel:+8801799419011"
              className="rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/8801518698236"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Security Equipment Maintenance BD.
        All rights reserved.
      </footer>

    </main>
  );
}
