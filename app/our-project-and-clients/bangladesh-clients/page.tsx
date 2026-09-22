export const metadata = {
  title: "Bangladesh Clients | Security Equipment Maintenance BD",
  description:
    "Organizations and sectors served through security equipment supply, installation, commissioning, maintenance, calibration, and technical support in Bangladesh.",
};

const clientGroups = [
  {
    title: "Government & National Institutions",
    clients: [
      "Prime Minister’s Office",
      "Office of the President",
      "Cabinet Division",
      "Bangladesh Parliament (Jatiya Sangsad)",
      "Bangladesh Bank",
    ],
  },
  {
    title: "Defence & Security",
    clients: [
      "Bangladesh Army",
      "Bangladesh Navy",
      "Bangladesh Air Force",
      "Armed Forces Division",
      "Ministry of Defence",
      "Military Engineer Services",
      "National Security Intelligence",
      "Directorate General of Forces Intelligence",
    ],
  },
  {
    title: "Law Enforcement & Public Safety",
    clients: [
      "Bangladesh Police",
      "Special Branch",
      "Armed Police Battalion",
      "National Telecommunication Monitoring Centre",
    ],
  },
  {
    title: "Aviation & Critical Infrastructure",
    clients: [
      "Civil Aviation Authority of Bangladesh",
      "Government Airports & Aviation Facilities",
      "Ports & Critical Infrastructure",
    ],
  },
  {
    title: "Judiciary, Education & Public Sector",
    clients: [
      "Supreme Court of Bangladesh",
      "High Court Division",
      "Appellate Division",
      "Government-Owned & Public-Sector Organizations",
      "Education & Research Institutions",
      "Healthcare Institutions",
    ],
  },
];

export default function BangladeshClientsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              Our Project & Clients
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Bangladesh Clients
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Supporting organizations across Bangladesh with security
              screening systems, detection technologies, surveillance,
              access-control solutions, and professional technical services.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Selected Sectors & Organizations
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Bangladesh Security & Infrastructure Experience
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            A structured overview of public-sector, security, defence,
            aviation and critical-infrastructure sectors associated with our
            professional security-equipment activities.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {clientGroups.map((group) => (
            <article
              key={group.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.05]"
            >
              <div className="mb-6 h-1 w-14 rounded-full bg-sky-400" />

              <h2 className="text-xl font-semibold text-white">
                {group.title}
              </h2>

              <ul className="mt-6 space-y-3">
                {group.clients.map((client) => (
                  <li
                    key={client}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>{client}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Client Recognition
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Organizations We Have Served
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Official logos will be displayed here only when suitable,
              publicly available and appropriately verified.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clientGroups.flatMap((group) => group.clients).map((client) => (
              <div
                key={client}
                className="flex min-h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-6 text-center text-sm font-medium text-slate-300 transition hover:border-sky-400/30 hover:bg-white/[0.06]"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Security Technology & Technical Support
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Our experience spans security screening, explosive and narcotics
            trace detection, access control, surveillance, and related
            security infrastructure.
          </p>
        </div>
      </section>
    </main>
  );
}
