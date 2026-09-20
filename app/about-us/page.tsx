export default function AboutUsPage() {
  const capabilities = [
    "Security Screening Systems",
    "Installation & Commissioning",
    "Preventive & Corrective Maintenance",
    "Repair & Troubleshooting",
    "Calibration & Technical Support",
    "Spare Parts & Equipment Support",
    "AMC & Field Service",
    "Technical Training & Knowledge Transfer",
  ];

  const leadership = [
    ["01", "Chairman", "Strategic Leadership & Corporate Direction"],
    ["02", "Director", "Business Development & Operations"],
    ["03", "Chief Executive Officer", "Executive Management & Client Relations"],
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            SecureTech BD
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional security equipment engineering, technical services
            and lifecycle support for demanding security environments.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Company Profile
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Security Technology & Engineering
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              SecureTech BD focuses on security screening equipment,
              installation, commissioning, maintenance, repair, calibration,
              spare parts and technical support.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              Our approach combines field engineering, equipment knowledge and
              practical technical support to help organizations maintain
              reliable security operations throughout the equipment lifecycle.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Our Approach
            </p>
            <div className="mt-6 space-y-5">
              {[
                ["Reliability", "Focus on dependable equipment performance."],
                ["Technical Excellence", "Structured engineering and field support."],
                ["Lifecycle Support", "Support from installation through maintenance."],
                ["Professional Service", "Clear, responsive and project-focused execution."],
              ].map(([title, text]) => (
                <div key={title} className="border-b border-white/10 pb-5 last:border-0">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Leadership
          </p>
          <h2 className="mt-3 text-3xl font-bold">Management</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {leadership.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-7"
              >
                <span className="text-sm font-bold text-blue-300">{number}</span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
          Core Capabilities
        </p>
        <h2 className="mt-3 text-3xl font-bold">What We Do</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="text-xs font-bold text-blue-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-semibold leading-6">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-r from-blue-950/30 to-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Our Vision
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Building dependable security technology support
          </h2>
          <p className="mt-5 leading-8 text-slate-400">
            To develop a trusted professional platform for security equipment
            supply, engineering, maintenance and technical support across
            Bangladesh and international markets.
          </p>
        </div>
      </section>
    </main>
  );
}
