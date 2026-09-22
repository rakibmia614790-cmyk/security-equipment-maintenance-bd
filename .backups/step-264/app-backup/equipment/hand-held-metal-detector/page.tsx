import EquipmentBrandLogos from "../EquipmentBrandLogos";

const hhmdBrands = [
  "Garrett",
  "CEIA",
  "Smiths Detection",
  "Rapiscan Systems",
  "Nuctech",
];

const wtmdBrands = [
  "CEIA",
  "Garrett",
  "Smiths Detection",
  "Rapiscan Systems",
  "Nuctech",
];
const manufacturers = [
  ["Garrett", ""],
  ["CEIA", ""],
  ["Rapiscan Systems", ""],
  ["Smiths Detection", ""],
  ["Nuctech", ""],
  ["ZKTeco", ""],
  ["Westminster International", ""],
  ["Adani Defence", ""],
  ["Fisher Research Labs", ""],
  ["Minelab", ""],
  ["Skanray Technologies", ""],
  ["DetectaChem", ""],
  ["WIPOTEC-OCS", ""],
  ["Security Metal Detectors", ""],
  ["Autoclear", ""],
  ["VMI Security", ""],
  ["Viken Detection", ""],
  ["Metrasens", ""],
  ["Metal Detector Corporation", ""],
  ["KJB Security Products", ""],
];

export default function HandHeldMetalDetectorPage() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Security Screening Equipment
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hand-Held Metal Detector
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional hand-held metal detection solutions for security
            screening, access control, event security, aviation, critical
            infrastructure and high-security environments.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/service-request"
              className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
            >
              Service Request
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              Equipment Overview
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Portable Screening. Reliable Detection.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            Hand-held metal detectors provide rapid secondary screening and
            targeted inspection where portability, ease of operation and
            dependable detection performance are essential.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Targeted Screening", "Focused inspection of people and belongings."],
            ["Portable Operation", "Lightweight solutions for flexible deployment."],
            ["Security Checkpoints", "Suitable for entrances and controlled areas."],
            ["Technical Support", "Inspection, repair, maintenance and testing."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-7"
            >
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Applications
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Designed for Diverse Security Environments
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Airports & Aviation Facilities",
              "Government & Critical Infrastructure",
              "Ports & Transport Facilities",
              "Corporate & Commercial Security",
              "Events & Public Venues",
              "Industrial & Restricted Areas",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-[#0a1728] px-6 py-5 text-slate-200"
              >
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
          Hand-Held Metal Detection Technology
        </h2>
        <p className="mt-5 max-w-3xl leading-7 text-slate-400">
          Our technical coverage can support equipment from a broad range of
          established security-screening and metal-detection technology
          manufacturers.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {manufacturers.map(([name, logo]) => (
            <div
              key={name}
              className="flex min-h-36 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.07]"
            >
              {logo ? (
                <img
                  src={logo}
                  alt={name}
                  className="max-h-12 max-w-full object-contain"
                />
              ) : (
                <span className="text-base font-semibold text-slate-200">
                  {name}
                </span>
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
              "Inspection & Troubleshooting",
              "Preventive Maintenance",
              "Corrective Repair",
              "Performance Testing",
              "Spare Parts Support",
              "Technical Consultation",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-[#0a1728] p-7"
              >
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
          Need Technical Support for Your Metal Detector?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
          Contact our technical team for inspection, maintenance, repair,
          calibration-related support and equipment service requirements.
        </p>
        <a
          href="/service-request"
          className="mt-9 inline-flex rounded-xl bg-sky-500 px-7 py-3.5 font-semibold transition hover:bg-sky-400"
        >
          Submit Service Request
        </a>
      </section>
    
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-8">
        <EquipmentBrandLogos brands={wtmdBrands} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-8">
        <EquipmentBrandLogos brands={hhmdBrands} />
      </div>
</main>
  );
}
