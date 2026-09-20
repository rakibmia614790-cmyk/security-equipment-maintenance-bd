const projects = [
  {
    title: "International Security Equipment Projects",
    description:
      "Our international experience includes security screening equipment supply, installation, commissioning, maintenance and technical support.",
  },
  {
    title: "Airport Security Projects",
    description:
      "Security screening solutions and technical services for aviation and airport security environments.",
  },
  {
    title: "Security Screening & Detection Systems",
    description:
      "Professional support for X-ray screening, explosive trace detection, metal detection and related security technologies.",
  },
]

export default function InternationalProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Our Project & Clients
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            International Clients & Projects
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-slate-300">
            Explore our international project experience, security technology
            solutions and technical services.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl">
                🌍
              </div>

              <h2 className="text-2xl font-semibold text-white">
                {project.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-7 h-px bg-white/10" />

              <p className="mt-4 text-xs uppercase tracking-wider text-cyan-400">
                International Experience
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
