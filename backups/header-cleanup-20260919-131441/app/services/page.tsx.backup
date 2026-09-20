import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Equipment Services | SECURETECH BD",
  description:
    "Professional security equipment supply, installation, commissioning, repair, preventive maintenance, AMC, calibration, spare parts and technical support across Bangladesh.",
};

const services = [
  ["01", "New Equipment Supply", "Security screening and integrated security equipment supply based on operational requirements."],
  ["02", "Installation & Commissioning", "Professional installation, configuration, testing and commissioning of security systems."],
  ["03", "Repair & Troubleshooting", "Systematic fault diagnosis, troubleshooting and corrective repair for security equipment."],
  ["04", "Preventive Maintenance", "Scheduled inspection, cleaning, calibration and performance checks to reduce downtime."],
  ["05", "Corrective Maintenance", "Technical intervention to restore equipment after faults, failures or performance issues."],
  ["06", "AMC Services", "Annual Maintenance Contract support for planned service, inspection and technical assistance."],
  ["07", "Calibration & Testing", "Performance verification, calibration and functional testing using appropriate test procedures."],
  ["08", "Spare Parts Support", "Technical assistance with identification and supply of suitable equipment spare parts."],
  ["09", "Technical Support", "Professional technical guidance for equipment operation, maintenance and troubleshooting."],
  ["10", "Operator Training", "Equipment operation, basic maintenance awareness and technical user support."],
];

const equipment = [
  "Baggage X-Ray Scanner",
  "Explosive Trace Detection (ETD)",
  "Walk-Through Metal Detector (WTMD)",
  "Hand-Held Metal Detector (HHMD)",
  "CCTV System",
  "Access Control System",
  "Road Barrier & Road Blocker",
  "Car Parking Management",
  "Bollard",
  "Gate & Flap Barrier",
  "ANPR System",
];

export default function ServicesPage() {
  return (
    <main className="security-page-bg min-h-screen text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="text-lg font-bold tracking-widest text-cyan-300">
          SECURETECH BD
        </a>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="/">HOME</a>
          <a href="/about-us">ABOUT US</a>
          <a href="/our-team">OUR TEAM</a>
          <a href="/bangladesh-clients">BANGLADESH CLIENTS</a>
          <a href="/international-projects">INTERNATIONAL PROJECTS</a>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-14">
        <p className="text-sm font-semibold tracking-[0.3em] text-cyan-300">
          SECURITY EQUIPMENT SERVICES
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">
          Complete Technical
          <span className="block text-cyan-300">Service & Maintenance Solutions</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          From new equipment supply and installation to repair, preventive
          maintenance, calibration, AMC and technical support, we provide
          professional security equipment services for demanding operational
          environments.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map(([number, title, text]) => (
            <article
              key={number}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 transition hover:border-cyan-400/30"
            >
              <span className="text-sm font-bold text-cyan-400">{number}</span>
              <h2 className="mt-3 text-xl font-bold">{title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300">
            EQUIPMENT WE SUPPORT
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-slate-950/70 p-8">
          <h2 className="text-3xl font-bold">
            Need Security Equipment Service?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Submit your equipment details and service requirements. Our
            technical team can review the request and provide appropriate
            service support.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="/service-request"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950"
            >
              REQUEST SERVICE
            </a>

            <a
              href="tel:+8801799419011"
              className="rounded-xl border border-cyan-400/30 px-6 py-3 font-bold text-cyan-300"
            >
              CALL TECHNICAL SUPPORT
            </a>

            <a
              href="https://wa.me/8801518698236"
              className="rounded-xl border border-white/10 px-6 py-3 font-bold text-slate-200"
            >
              WHATSAPP
            </a>
          </div>
        </section>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-slate-500">
        SECURETECH BD · © 2026 ALL RIGHTS RESERVED
      </footer>
    </main>
  );
}
