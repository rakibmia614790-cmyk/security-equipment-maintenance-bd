const equipment = [
  ["Baggage Scanner", "/equipment/baggage-scanner"],
  ["Walk-Through Metal Detector", "/equipment/walk-through-metal-detector"],
  ["Hand-Held Metal Detector", "/equipment/hand-held-metal-detector"],
  ["Explosive Trace Detector", "/equipment/explosive-trace-detector"],
  ["CCTV", "/equipment/cctv"],
  ["Road Barrier", "/equipment/road-barrier"],
  ["Road Blocker", "/equipment/road-blocker"],
  ["Access Control System", "/equipment/access-control"],
  ["Car Parking Management System", "/equipment/car-parking-management"],
  ["Bollard", "/equipment/bollard"],
  ["Human Body Scanner", "/equipment/human-body-scanner"],
  ["Walkie-Talkie", "/equipment/walkie-talkie"],
];

export default function EquipmentPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            SecureTech BD
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Security Equipment
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Security screening, detection, surveillance, access control and
            perimeter security equipment with professional technical support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map(([name, href], index) => (
            <a
              key={href}
              href={href}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-blue-400/40 hover:bg-white/[0.07]"
            >
              <span className="text-sm font-bold text-blue-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-5 text-xl font-bold group-hover:text-blue-300">
                {name}
              </h2>
              <p className="mt-4 text-sm text-slate-400">
                View equipment details and technical service information.
              </p>
              <span className="mt-6 inline-block text-sm font-semibold text-blue-300">
                View Details →
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
