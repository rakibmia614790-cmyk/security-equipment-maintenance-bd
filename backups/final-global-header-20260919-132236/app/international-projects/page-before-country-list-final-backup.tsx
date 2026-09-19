import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Projects | SECURETECH BD",
  description:
    "International security equipment projects, technical services, maintenance and support by SECURETECH BD.",
};

const projectCategories = [
  {
    title: "Airport Security Projects",
    text: "Security screening equipment installation, commissioning, maintenance, troubleshooting and technical support for aviation security environments.",
    items: ["X-Ray Baggage Scanners", "ETD Systems", "WTMD & HHMD", "Technical Support"],
  },
  {
    title: "Security Screening Projects",
    text: "Technical service support for security screening systems used in high-security and critical operational environments.",
    items: ["Inspection Systems", "Metal Detection", "Trace Detection", "Preventive Maintenance"],
  },
  {
    title: "Integrated Security Projects",
    text: "Support for integrated security technology combining screening, surveillance, access control and related systems.",
    items: ["CCTV Systems", "Access Control", "Barrier Systems", "System Maintenance"],
  },
];

export default function InternationalProjectsPage() {
  return (
    <main className="security-page-bg min-h-screen text-white">
      

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-14">
        <p className="text-sm font-semibold tracking-[0.3em] text-cyan-300">
          INTERNATIONAL PROJECTS
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">
          International Security Technology
          <span className="block text-cyan-300">Projects & Technical Services</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          A professional project reference section for international security
          equipment supply, installation, commissioning, maintenance,
          troubleshooting and technical support.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projectCategories.map((project, index) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-7"
            >
              <span className="text-sm font-bold text-cyan-400">
                PROJECT AREA {String(index + 1).padStart(2, "0")}
              </span>

              <h2 className="mt-4 text-2xl font-bold">{project.title}</h2>

              <p className="mt-4 leading-7 text-slate-400">
                {project.text}
              </p>

              <div className="mt-6 space-y-3">
                {project.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-white/10 bg-slate-950/70 p-8">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300">
            INTERNATIONAL COVERAGE
          </p>
          <h2 className="mt-3 text-5xl font-bold">
            Countries & International Markets
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Malaysia", "🇲🇾"],
              ["United Arab Emirates (Dubai)", "🇦🇪"],
              ["Singapore", "🇸🇬"],
              ["Saudi Arabia", "🇸🇦"],
              ["Egypt", "🇪🇬"],
              ["Sudan", "🇸🇩"],
              ["South Africa", "🇿🇦"],
            ].map(([country, flag]) => (
              <div key={country} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-5xl">{flag}</div>
                <p className="mt-3 font-semibold text-slate-200">{country}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            International markets and regions relevant to our security
            equipment, technical service and maintenance capabilities.
            Specific client and completed-project references are published
            only after verification.
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8">
          <h2 className="text-2xl font-bold">Project Reference Policy</h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Specific international client names, project names, locations and
            completed-project claims will be published only after the relevant
            project information has been verified and is appropriate for public
            reference.
          </p>
        </section>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-slate-500">
        SECURETECH BD · © 2026 ALL RIGHTS RESERVED
      </footer>
    </main>
  );
}
