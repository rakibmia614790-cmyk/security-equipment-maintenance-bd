const clientGroups = [
  {
    title: "Government & National Institutions",
    clients: [
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
    clients: [
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
    clients: [
      "Civil Aviation Authority of Bangladesh (CAAB)",
      "Government Airports & Aviation Facilities",
      "Ports & Critical Infrastructure",
      "National Telecommunication Monitoring Centre (NTMC)",
    ],
  },
  {
    title: "Judicial & Public Facilities",
    clients: [
      "Supreme Court of Bangladesh",
      "High Court Division",
      "Appellate Division",
      "Other Judicial Facilities",
      "Government-Owned & Public-Sector Organizations",
    ],
  },
  {
    title: "Education, Research & Healthcare",
    clients: [
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

          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Bangladesh Clients
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Government, defence, aviation, judicial and critical-infrastructure
            sectors supported through security-equipment and technical
            capabilities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Client Portfolio
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Organisations & Sectors
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            A structured presentation of organisations and sectors associated
            with our Bangladesh security-equipment experience.
          </p>
        </div>

        <div className="space-y-14">
          {clientGroups.map((group, groupIndex) => (
            <section key={group.title}>
              <div className="mb-7 flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-bold text-cyan-300">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>

                <h3 className="text-2xl font-bold">{group.title}</h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.clients.map((client, index) => (
                  <article
                    key={client}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300/0 via-cyan-300/50 to-cyan-300/0 opacity-0 transition group-hover:opacity-100" />

                    <div className="flex h-28 items-center justify-center rounded-xl border border-white/10 bg-slate-900/70">
                      <div className="text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-xs font-bold text-cyan-300">
                          LOGO
                        </div>
                        <p className="mt-2 text-[10px] uppercase tracking-widest text-slate-500">
                          Official Logo
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-start gap-3">
                      <span className="mt-1 text-xs font-bold text-cyan-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h4 className="text-sm font-semibold leading-6 text-slate-200">
                        {client}
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-white/[0.03] to-transparent p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Security Technology
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">
              Professional Security Equipment & Technical Support
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-slate-400">
              Our capabilities cover security screening, detection,
              inspection, access control and related security technologies,
              supported by installation, commissioning, maintenance and
              technical assistance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
