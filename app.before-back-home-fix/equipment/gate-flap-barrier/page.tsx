export const metadata = {
  title: "Gate & Flap Barrier Repair & Maintenance Bangladesh | Security Equipment Maintenance BD",
  description: "Professional gate and flap barrier supply, installation, repair and maintenance services in Bangladesh.",
};export default function GateFlapBarrierPage() {
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
        <div className="mb-12 overflow-hidden rounded-2xl border border-cyan-500/20">
          <img
            src="/security-hero.png"
            alt="Gate and Flap Barrier Access Control System"
            className="w-full"
          />
        </div>

        <p className="text-sm font-semibold tracking-[0.3em] text-cyan-400">
          ACCESS SECURITY SYSTEM
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Gate / Flap Barrier
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Professional gate barrier and flap barrier supply, installation,
          configuration, repair, maintenance and technical support services
          for secure pedestrian and vehicle access control across Bangladesh.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-cyan-500/20 bg-white/[0.03] p-7">
            <h2 className="text-xl font-semibold text-cyan-400">
              Installation
            </h2>

            <p className="mt-3 text-gray-400">
              Professional installation, commissioning and configuration
              of gate and flap barrier access control systems.
            </p>
          </div>

          <div className="rounded-xl border border-cyan-500/20 bg-white/[0.03] p-7">
            <h2 className="text-xl font-semibold text-cyan-400">
              Repair & Maintenance
            </h2>

            <p className="mt-3 text-gray-400">
              Troubleshooting, repair, inspection and preventive maintenance
              for gate barriers and flap barrier systems.
            </p>
          </div>

          <div className="rounded-xl border border-cyan-500/20 bg-white/[0.03] p-7">
            <h2 className="text-xl font-semibold text-cyan-400">
              Access Control Integration
            </h2>

            <p className="mt-3 text-gray-400">
              Technical support for integration with RFID, biometric,
              access control and time attendance systems.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <a
            href="/#contact"
            className="inline-block rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-black hover:bg-cyan-400"
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