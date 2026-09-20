const clientGroups = [
  {
    title: "Government & National Institutions",
    items: [
      "Office of the Prime Minister",
      "Office of the President",
      "Cabinet Division",
      "Bangladesh Parliament (Jatiya Sangsad)",
      "Bangladesh Bank",
      "Ministry of Defence",
      "Armed Forces Division",
      "Military Engineer Services (MES)",
    ],
  },
  {
    title: "Defence & Intelligence",
    items: [
      "Bangladesh Army",
      "Bangladesh Navy",
      "Bangladesh Air Force",
      "National Security Intelligence (NSI)",
      "Directorate General of Forces Intelligence (DGFI)",
      "Bangladesh Police",
      "Special Branch",
      "Armed Police Battalion (APBn)",
    ],
  },
  {
    title: "Aviation & Critical Infrastructure",
    items: [
      "Civil Aviation Authority of Bangladesh (CAAB)",
      "Government Airports & Aviation Facilities",
      "Ports & Critical Infrastructure",
      "National Telecommunication Monitoring Centre (NTMC)",
    ],
  },
  {
    title: "Judicial & Public Facilities",
    items: [
      "Supreme Court of Bangladesh",
      "High Court Division",
      "Appellate Division",
      "Other Judicial Facilities",
      "Government-Owned & Public-Sector Organizations",
    ],
  },
  {
    title: "Education, Research & Healthcare",
    items: [
      "Government Educational Institutions",
      "Research & Technical Institutions",
      "Public Healthcare Facilities",
    ],
  },
];

export default function BangladeshClientsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('/security-hero.png')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-slate-950/90" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            SecureTech BD
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Bangladesh Clients
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Security equipment, technical services and engineering support
            across government, defence, aviation, judicial and critical
            infrastructure environments in Bangladesh.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Client Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Government & Institutional Sectors
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            Our experience encompasses security screening, detection,
            inspection, access control and related security technologies.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {clientGroups.map((group, index) => (
            <article
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-sm transition hover:border-cyan-300/30 hover:bg-white/[0.06] md:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-lg font-bold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold md:text-2xl">
                  {group.title}
                </h3>
              </div>

              <div className="mt-7 grid gap-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-xl border border-white/5 bg-black/20 px-4 py-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <span className="text-sm leading-6 text-slate-300 md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                Defence
              </p>
              <p className="mt-3 text-slate-400">
                Screening and detection technologies for high-security
                environments.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                Aviation
              </p>
              <p className="mt-3 text-slate-400">
                Security screening and inspection support for aviation
                environments.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                Critical Infrastructure
              </p>
              <p className="mt-3 text-slate-400">
                Security technology support for important public facilities
                and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-white/[0.03] to-transparent p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            SecureTech Equipment
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">
            Trusted Technical Capability for Security-Critical Operations
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-400">
            From screening and detection equipment to integrated security
            systems, our technical capability is built around installation,
            commissioning, maintenance, troubleshooting and operational
            support.
          </p>
        </div>
      </section>
    </main>
  );
}
