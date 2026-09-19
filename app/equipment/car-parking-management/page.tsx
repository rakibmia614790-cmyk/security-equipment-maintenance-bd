export const metadata = {
  title: "Car Parking Management System Repair & Maintenance Bangladesh | SECURETECH BD",
  description: "Professional car parking management system supply, installation, repair and maintenance services in Bangladesh.",
};export default function CarParkingManagementPage() {
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
          SECURITY SYSTEMS
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Car Parking Management
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Professional car parking management system supply, installation,
          configuration, repair, maintenance and technical support services
          across Bangladesh.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-cyan-500/20 bg-white/[0.03] p-7">
            <h2 className="text-xl font-semibold text-cyan-400">
              System Installation
            </h2>

            <p className="mt-3 text-gray-400">
              Professional installation and commissioning of parking
              management systems for efficient vehicle entry and exit.
            </p>
          </div>

          <div className="rounded-xl border border-cyan-500/20 bg-white/[0.03] p-7">
            <h2 className="text-xl font-semibold text-cyan-400">
              Repair & Maintenance
            </h2>

            <p className="mt-3 text-gray-400">
              Troubleshooting, repair, inspection and preventive maintenance
              for parking system equipment.
            </p>
          </div>

          <div className="rounded-xl border border-cyan-500/20 bg-white/[0.03] p-7">
            <h2 className="text-xl font-semibold text-cyan-400">
              Technical Support
            </h2>

            <p className="mt-3 text-gray-400">
              Technical support for parking barriers, ticketing systems,
              payment systems, sensors and related equipment.
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
        © 2026 SECURETECH BD. All Rights Reserved.
      </footer>
    </main>
  );
}