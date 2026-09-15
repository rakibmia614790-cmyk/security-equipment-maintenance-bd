export const metadata = {
  title: "Road Barrier & Road Blocker Repair & Maintenance Bangladesh | Security Equipment Maintenance BD",
  description: "Professional road barrier and road blocker supply, installation, repair and maintenance services in Bangladesh.",
};export default function RoadBarrierRoadBlockerPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <header className="border-b border-cyan-500/20 bg-[#05070b] px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <a
            href="/"
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            ← Back to Home
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold tracking-[0.3em] text-cyan-400">
          SECURITY EQUIPMENT
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Road Barrier & Road Blocker
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Professional road barrier and road blocker supply, installation,
          repair, maintenance and technical support services across Bangladesh.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-cyan-500/20 bg-white/[0.03] p-7">
            <h2 className="text-xl font-semibold text-cyan-400">
              Installation
            </h2>

            <p className="mt-3 text-gray-400">
              Professional installation, commissioning and system
              configuration for vehicle access security.
            </p>
          </div>

          <div className="rounded-xl border border-cyan-500/20 bg-white/[0.03] p-7">
            <h2 className="text-xl font-semibold text-cyan-400">
              Repair & Maintenance
            </h2>

            <p className="mt-3 text-gray-400">
              Troubleshooting, repair, inspection and preventive maintenance
              for road barriers and road blockers.
            </p>
          </div>

          <div className="rounded-xl border border-cyan-500/20 bg-white/[0.03] p-7">
            <h2 className="text-xl font-semibold text-cyan-400">
              Technical Support
            </h2>

            <p className="mt-3 text-gray-400">
              Technical inspection, spare parts support and professional
              assistance for vehicle access control systems.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-xl border-2 border-cyan-400 bg-cyan-500 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-500/30 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/40"
          >
            Request Service
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Security Equipment Maintenance BD. All Rights Reserved.
      </footer>
    </main>
  );
}