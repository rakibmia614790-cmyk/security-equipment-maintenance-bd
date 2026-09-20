const projects = [
  {
    country: "Saudi Arabia",
    title: "Airport Security Equipment Support",
    scope: "Security screening • Technical support • Maintenance",
    description:
      "Technical support for airport security screening environments, including equipment maintenance, troubleshooting and operational assistance.",
  },
  {
    country: "United Arab Emirates",
    title: "Aviation Security Technology",
    scope: "Screening systems • Inspection equipment • Technical assistance",
    description:
      "Technical capability supporting security screening and inspection requirements within demanding aviation environments.",
  },
  {
    country: "International Operations",
    title: "Security Equipment Engineering Support",
    scope: "Installation • Commissioning • Troubleshooting • Maintenance",
    description:
      "International engineering support covering security screening, detection and integrated security technologies.",
  },
];

export default function InternationalProjectsPage() {
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
            International Clients & Projects
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            International technical experience in security screening,
            detection, inspection and security-equipment support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            International Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Selected Projects & Capabilities
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Our international experience is presented by operating environment
            and technical scope, providing a clear view of our field capability.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-sm transition hover:border-cyan-300/30 hover:bg-white/[0.06] md:p-9"
            >
              <div className="grid gap-8 md:grid-cols-[100px_1fr]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-xl font-bold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {project.country}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-slate-300">
                    {project.scope}
                  </p>

                  <p className="mt-5 max-w-4xl leading-7 text-slate-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Technical Expertise",
                text: "Field-focused engineering and security-equipment support.",
              },
              {
                title: "Operational Reliability",
                text: "Maintenance and troubleshooting focused on continuity.",
              },
              {
                title: "International Capability",
                text: "Experience supporting demanding security environments.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-7"
              >
                <span className="text-sm font-bold text-cyan-300">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-white/[0.03] to-transparent p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Global Security Technology
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">
            Engineering Support Beyond Borders
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-400">
            SecureTech provides practical technical support for installation,
            commissioning, troubleshooting, preventive maintenance and
            security-equipment operations.
          </p>
        </div>
      </section>
    </main>
  );
}
