import EquipmentBrandLogos from "../EquipmentBrandLogos";

const humanBodyScannerBrands = [
  "Rohde & Schwarz",
  "Nuctech",
  "Smiths Detection",
  "L3Harris",
];

const baggageScannerBrands = [
  "Smiths Detection",
  "Rapiscan Systems",
  "Nuctech",
  "L3Harris",
  "Analogic",
  "Astrophysics",
  "Gilardoni",
  "Scanna MSC",
];
const manufacturers = [
  ["Smiths Detection", ""],
  ["Rapiscan Systems", ""],
  ["Leidos", ""],
  ["Nuctech", ""],
  ["L3Harris Technologies", ""],
  ["Tek84", ""],
  ["Liberty Defense", ""],
  ["Rohde & Schwarz", ""],
  ["ThruVision", ""],
  ["ODSecurity", ""],
  ["Adani Systems", ""],
  ["Viken Detection", ""],
  ["LINEV Systems", ""],
  ["Westminster International", ""],
  ["Astrophysics", ""],
  ["Camero-Tech", ""],
  ["Xoran Technologies", ""],
  ["Micro-X", ""],
  ["VOTI Detection", ""],
  ["Autoclear", ""],
];

export default function HumanBodyScannerPage() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Advanced Security Screening
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Human Body Scanner
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Advanced personnel screening solutions for detecting concealed
            objects and supporting efficient, controlled security operations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/service-request" className="rounded-xl bg-sky-500 px-6 py-3 font-semibold transition hover:bg-sky-400">
              Service Request
            </a>
            <a href="/contact" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">System Overview</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Advanced Personnel Screening
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            Human body screening technologies can provide rapid non-contact
            inspection and help security teams identify concealed items while
            maintaining controlled passenger and personnel throughput.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Security Screening", "Non-contact personnel inspection."],
            ["Concealed Object Detection", "Screening support for hidden items."],
            ["High Throughput", "Designed for controlled screening environments."],
            ["Operational Integration", "Integration with broader security procedures."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-7">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Applications</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Personnel Screening Applications
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Airports & Aviation Facilities",
              "Government & Critical Infrastructure",
              "Correctional & Detention Facilities",
              "Courts & Judicial Facilities",
              "Ports & Border Control",
              "High-Security Commercial Facilities",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-[#0a1728] px-6 py-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          Manufacturer Ecosystem
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
          Personnel Screening Technology
        </h2>
        <p className="mt-5 max-w-3xl leading-7 text-slate-400">
          Our technical coverage is structured around a broad ecosystem of
          personnel-screening and security-inspection technologies.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {manufacturers.map(([name, logo]) => (
            <div
              key={name}
              className="flex min-h-36 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.07]"
            >
              {logo ? (
                <img src={logo} alt={name} className="max-h-12 max-w-full object-contain" />
              ) : (
                <span className="text-lg font-semibold tracking-tight text-slate-100">{name}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Technical Services
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Installation & Commissioning",
              "Preventive Maintenance",
              "Corrective Repair",
              "System Diagnostics",
              "Calibration & Performance Checks",
              "Spare Parts & Technical Support",
            ].map((service) => (
              <div key={service} className="rounded-2xl border border-white/10 bg-[#0a1728] p-7">
                <h3 className="font-bold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          SecureTech Equipment
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Need Human Body Scanner Support?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
          Contact our technical team for installation, maintenance,
          troubleshooting, repair and security-screening system support.
        </p>
        <a
          href="/service-request"
          className="mt-9 inline-flex rounded-xl bg-sky-500 px-7 py-3.5 font-semibold transition hover:bg-sky-400"
        >
          Submit Service Request
        </a>
      </section>
    

      <EquipmentBrandLogos brands={baggageScannerBrands} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-8">
        <EquipmentBrandLogos brands={humanBodyScannerBrands} />
      </div>
</main>
  );
}
