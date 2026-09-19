export const metadata = {
  title: "Bangladesh Clients | SECURETECH BD",
  description:
    "Organizations and institutions supported by SECURETECH BD in Bangladesh.",
};

const clients = [
  ["Civil Aviation Authority of Bangladesh", "CAAB", "CIVIL AVIATION"],
  ["Bangladesh Army", "ARMY", "DEFENCE"],
  ["Bangladesh Navy", "NAVY", "DEFENCE"],
  ["Bangladesh Police", "POLICE", "LAW ENFORCEMENT"],
  ["Special Branch, Bangladesh Police", "SB", "SECURITY"],
  ["National Security Intelligence", "NSI", "NATIONAL SECURITY"],
  ["Directorate General of Forces Intelligence", "DGFI", "NATIONAL SECURITY"],
  ["Bangladesh Parliament", "JS", "GOVERNMENT"],
  ["Bangladesh Bank", "BB", "FINANCIAL INSTITUTION"],
  ["Supreme Court of Bangladesh", "SCB", "JUDICIARY"],
  ["Prime Minister’s Office", "PMO", "GOVERNMENT"],
];

export default function BangladeshClients() {
  return (
    <main className="security-page-bg min-h-screen text-white">
      

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-20 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
            BANGLADESH / CLIENT NETWORK
          </div>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            BANGLADESH
            <span className="block text-cyan-300">CLIENTS.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
            A professional reference of organizations and institutions that
            have been identified for our service and project portfolio.
          </p>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map(([name, short, category], index) => (
              <div
                key={name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.035]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full border-b border-l border-cyan-300/10" />

                <div className="flex items-start justify-between">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-md border border-cyan-300/15 bg-cyan-300/5 px-2 py-1 text-[8px] font-bold tracking-widest text-cyan-300">
                    {short}
                  </span>
                </div>

                <div className="mt-10 h-px w-12 bg-cyan-300/40 transition-all group-hover:w-24" />

                <div className="mt-5 text-[9px] font-bold tracking-[0.2em] text-cyan-300/65">
                  {category}
                </div>

                <h2 className="mt-3 text-lg font-black leading-6 text-white">
                  {name}
                </h2>

                <div className="mt-6 border-t border-white/10 pt-4 text-[8px] tracking-[0.18em] text-white/30">
                  SECURITY TECHNOLOGY / TECHNICAL SUPPORT
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-xs leading-6 text-white/35">
            Client names and project references should be presented only where
            the underlying work or relationship has been confirmed. Official
            institutional logos, emblems and detailed project information can
            be added separately when appropriate.
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.035] p-8 text-center sm:p-12">
          <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
            SECURITY TECHNOLOGY SUPPORT
          </div>

          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            NEED TECHNICAL SERVICE?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/45">
            Contact us for security equipment supply, installation, repair,
            maintenance and technical support.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/#request"
              className="rounded-xl bg-cyan-300 px-6 py-3 text-sm font-black tracking-wider text-[#020611] transition hover:bg-cyan-200"
            >
              REQUEST SERVICE
            </a>

            <a
              href="tel:+8801799419011"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold tracking-wider text-white transition hover:border-cyan-300/40"
            >
              CALL US
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-[#01040a]">
        <div className="mx-auto flex max-w-7xl justify-between gap-4 px-5 py-8 text-[9px] tracking-[0.18em] text-white/30 lg:px-8">
          <div>SECURETECH BD</div>
          <div>© 2026 ALL RIGHTS RESERVED</div>
        </div>
      </footer>
    </main>
  );
}
