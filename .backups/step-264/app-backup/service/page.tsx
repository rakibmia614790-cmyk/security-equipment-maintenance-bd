export default function ServicePage() {
  const services = [
    ["01", "Installation & Commissioning", "Professional installation, configuration and commissioning of security equipment."],
    ["02", "Preventive Maintenance", "Scheduled inspection and preventive maintenance for reliable equipment operation."],
    ["03", "Corrective Maintenance", "Fault diagnosis, repair and corrective technical intervention for security systems."],
    ["04", "Repair & Troubleshooting", "Technical troubleshooting and repair support for equipment and system faults."],
    ["05", "Calibration & Testing", "Equipment testing, calibration support and operational performance checks."],
    ["06", "AMC & Technical Support", "Planned maintenance and ongoing technical support based on operational requirements."],
    ["07", "Spare Parts Support", "Technical assistance for identification and sourcing of required spare parts."],
    ["08", "Technical Training", "Equipment operation, maintenance and technical knowledge-transfer support."],
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            SecureTech BD
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional engineering, maintenance, repair and technical
            support services for security equipment and systems.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-blue-400/40 hover:bg-white/[0.07]"
            >
              <span className="text-sm font-bold text-blue-300">{number}</span>
              <h2 className="mt-5 text-xl font-bold">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Need Technical Support?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Submit your equipment or technical service requirement to our team.
          </p>
          <a
            href="/service-request"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-4 font-semibold hover:bg-blue-500"
          >
            Request Service
          </a>
        </div>
      </section>
    </main>
  );
}
