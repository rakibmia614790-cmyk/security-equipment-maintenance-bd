const clients = [
  "Office of the Prime Minister",
  "Office of the President",
  "Cabinet Division",
  "Bangladesh Parliament / Jatiya Sangsad",
  "Bangladesh Bank",
  "Bangladesh Army",
  "Bangladesh Navy",
  "Bangladesh Air Force",
  "Armed Forces Division",
  "Ministry of Defence",
  "Military Engineer Services (MES)",
  "National Security Intelligence (NSI)",
  "Directorate General of Forces Intelligence (DGFI)",
  "Bangladesh Police",
  "Special Branch",
  "Armed Police Battalion (APBn)",
  "Civil Aviation Authority of Bangladesh (CAAB)",
  "Government Airports & Aviation Facilities",
  "Supreme Court of Bangladesh",
  "High Court Division",
  "Appellate Division",
  "Other Judicial Facilities",
  "Ports & Critical Infrastructure",
  "Government-owned / Public-sector Organizations",
  "Education & Research Institutions",
  "Healthcare Institutions",
  "Local Government & Public Facilities",
]

const logos: Record<string, string> = {
  "Bangladesh Navy": "/client-logos/bangladesh-navy.svg",
  "Bangladesh Army": "/client-logos/bangladesh-army.svg",
  "Bangladesh Air Force": "/client-logos/bangladesh-air-force.svg",
  "Bangladesh Bank": "/client-logos/bangladesh-bank.svg",
  "Bangladesh Parliament / Jatiya Sangsad": "/client-logos/bangladesh-parliament.svg",
  "Armed Forces Division": "/client-logos/armed-forces-division.svg",
  "National Security Intelligence (NSI)": "/client-logos/nsi.svg",
  "Directorate General of Forces Intelligence (DGFI)": "/client-logos/dgfi.svg",
  "Bangladesh Police": "/client-logos/bangladesh-police.svg",
  "Military Engineer Services (MES)": "/client-logos/mes.svg",
  "Civil Aviation Authority of Bangladesh (CAAB)": "/client-logos/caab.svg",
}

export default function BangladeshClientsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Bangladesh Clients
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Our Bangladesh Clients & Projects
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400">
            Security equipment supply, installation, maintenance and technical
            support for government, defence, aviation and critical
            infrastructure organizations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <div
              key={client}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-xl border border-cyan-400/20 bg-white p-2">
                {logos[client] ? (
                  <img
                    src={logos[client]}
                    alt={`${client} logo`}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-2xl">🏛️</span>
                )}
              </div>

              <h2 className="text-lg font-semibold leading-snug text-white">
                {client}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Security Equipment Supply • Installation • Maintenance •
                Technical Support
              </p>

              <div className="mt-5 h-px w-12 bg-cyan-400/60 transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
