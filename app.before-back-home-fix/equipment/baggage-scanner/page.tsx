import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Baggage Scanner Repair & Maintenance Bangladesh | SecureTech BD",
  description:
    "Baggage scanner supply, installation, repair, preventive maintenance, AMC, spare parts and technical support across Bangladesh.",
};

const brands = [
  {
    name: "Smiths Detection",
    short: "SD",
    logo: "smiths-detection.png",
  },
  {
    name: "Rapiscan Systems",
    short: "RS",
    logo: "rapiscan-systems.png",
  },
  {
    name: "Astrophysics Inc.",
    short: "AI",
    logo: "astrophysics.png",
  },
  {
    name: "Leidos",
    short: "LE",
    logo: "leidos.png",
  },
  {
    name: "Gilardoni",
    short: "GI",
    logo: "gilardoni.png",
  },
  {
    name: "Nuctech",
    short: "NT",
    logo: "nuctech.svg",
  },
  {
    name: "L3Harris",
    short: "L3",
    logo: "l3harris.png",
  },
  {
    name: "Analogic",
    short: "AN",
    logo: "analogic.com.png",
  },
  {
    name: "VOTI Detection",
    short: "VD",
    logo: "voti-detection.png",
  },
  {
    name: "CEIA",
    short: "CE",
    logo: "ceia.png",
  },
  {
    name: "Adani Systems",
    short: "AS",
    logo: "adani.svg",
  },
  {
    name: "Safeway Inspection Systems",
    short: "SI",
    logo: "safeway.png",
  },
  {
    name: "Vanderlande",
    short: "VA",
    logo: "vanderlande.png",
  },
  {
    name: "LINEV Systems",
    short: "LS",
    logo: "linev.svg",
  },
  {
    name: "Westminster International",
    short: "WI",
    logo: "westminster.svg",
  },
  {
    name: "Autoclear",
    short: "AC",
    logo: "autoclear.png",
  },
  {
    name: "Micro-X",
    short: "MX",
    logo: "micro-x.png",
  },
];

const services = [
  "Baggage Scanner Fault Diagnosis",
  "X-Ray Image Quality Troubleshooting",
  "X-Ray Generator Inspection",
  "Detector System Inspection",
  "Conveyor System Repair",
  "Motor and Belt Troubleshooting",
  "Control Board and Electronic Repair",
  "Preventive Maintenance",
  "Corrective Maintenance",
  "AMC and Technical Support",
  "Spare Parts Arrangement",
  "On-Site Technical Service",
];

const applications = [
  "Airports",
  "Government Facilities",
  "Ports and Seaports",
  "Banks and Financial Institutions",
  "Courts and Prisons",
  "Military and Defence Facilities",
  "Corporate Offices",
  "Factories and Industrial Facilities",
  "Shopping Malls",
  "Hotels",
  "Stadiums and Event Venues",
  "Critical Infrastructure",
];

function BrandLogo({
  name,
  short,
  logo,
}: {
  name: string;
  short: string;
  logo: string;
}) {
  return (
    <div className="flex h-24 w-full items-center justify-center rounded-xl border border-white/10 bg-black/60 px-4">
      <img
        src={`/brands/baggage-scanner/${logo}`}
        alt={`${name} logo`}
        className="max-h-14 max-w-[80%] object-contain"
      />
    </div>
  );
}

export default function BaggageScannerPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-cyan-400/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-cyan-400">
              SecureTech BD
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Baggage Scanner
              <span className="block text-cyan-400">
                Repair & Maintenance
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Professional baggage scanner supply, installation, troubleshooting,
              repair, preventive maintenance, spare parts arrangement and
              technical support services across Bangladesh.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+8801799419011"
                className="rounded-xl bg-cyan-400 px-7 py-4 text-center font-black text-slate-950 transition hover:bg-cyan-300"
              >
                Call for Technical Support
              </a>

              <a
                href="https://wa.me/8801518698236"
                className="rounded-xl border border-cyan-400/40 bg-cyan-400/5 px-7 py-4 text-center font-black text-cyan-300 transition hover:bg-cyan-400/10"
              >
                WhatsApp Service Request
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-400">
              Technical Service
            </p>

            <h2 className="text-3xl font-black">
              Baggage Scanner Repair
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              We provide technical troubleshooting and maintenance support for
              baggage and X-ray inspection systems. Our service approach covers
              electrical, electronic, mechanical, imaging and operational
              problems.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-400">
              Preventive Care
            </p>

            <h2 className="text-3xl font-black">
              Maintenance & AMC Support
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Preventive maintenance helps reduce unexpected equipment
              downtime. We can provide inspection, cleaning, testing,
              troubleshooting, corrective maintenance, spare parts arrangement
              and ongoing technical support.
            </p>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              Market Coverage
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Brands / Manufacturers in the Baggage Scanner Market
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Examples of baggage scanner and X-ray inspection equipment
              manufacturers found in the international security screening
              market.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
              >
                <BrandLogo
                  name={brand.name}
                  short={brand.short}
                  logo={brand.logo}
                />

                <h3 className="mt-4 text-center text-sm font-bold text-white">
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/5 p-5 text-sm leading-7 text-slate-300">
            <strong className="text-amber-300">Important:</strong> Brand names
            and logos are shown for equipment identification and market
            reference only. No authorized dealership, official partnership or
            manufacturer authorization is claimed by this website.
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            What We Provide
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Baggage Scanner Services
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 font-black text-cyan-400">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="font-bold text-white">{service}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Professional technical support for inspection and maintenance
                requirements.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              Applications
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Where Baggage Scanners Are Used
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {applications.map((application) => (
              <div
                key={application}
                className="rounded-xl border border-white/10 bg-black/30 p-5 text-sm font-bold text-slate-200"
              >
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Need Technical Assistance?
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">
            Baggage Scanner Repair, Maintenance & Technical Support
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            Contact SecureTech BD for equipment
            troubleshooting, repair, preventive maintenance, spare parts
            arrangement and technical support.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+8801799419011"
              className="rounded-xl bg-cyan-400 px-7 py-4 text-center font-black text-slate-950"
            >
              +880 1799-419011
            </a>

            <a
              href="https://wa.me/8801518698236"
              className="rounded-xl border border-white/15 px-7 py-4 text-center font-black text-white"
            >
              WhatsApp: 01518-698236
            </a>

            <a
              href="mailto:rakibmia614790@gmail.com"
              className="rounded-xl border border-white/15 px-7 py-4 text-center font-black text-white"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SecureTech BD. All
        rights reserved.
      </footer>
    </main>
  );
}