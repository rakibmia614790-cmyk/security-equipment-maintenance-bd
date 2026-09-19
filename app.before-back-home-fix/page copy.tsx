const equipment = [
  "Baggage Scanner",
  "Walk Through Metal Detector",
  "Hand-Held Metal Detector",
  "Explosive Detection System",
  "Explosive Trace Detection",
  "CCTV System",
  "Road Barrier",
  "Road Blocker",
  "Access Control System",
  "Car Parking Management",
  "Bollard",
  "ANPR System",
];

const services = [
  {
    number: "01",
    title: "Supply & Installation",
    text: "Professional supply, installation and commissioning of security equipment.",
  },
  {
    number: "02",
    title: "Repair & Maintenance",
    text: "Expert troubleshooting, repair and preventive maintenance for security systems.",
  },
  {
    number: "03",
    title: "AMC & Technical Support",
    text: "Reliable annual maintenance contracts and technical support for critical systems.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#05070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-lg font-bold tracking-widest text-cyan-400">
              SecureTech BD
            </div>
            <div className="text-[10px] tracking-[0.25em] text-gray-400">
              SECURITY EQUIPMENT MAINTENANCE BD
            </div>
          </div>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#equipment" className="hover:text-cyan-400">
              Equipment
            </a>
            <a href="#services" className="hover:text-cyan-400">
              Services
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/50 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            Request Service
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(6,182,212,0.16),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.12),transparent_30%)]" />

        <div className="absolute right-[-120px] top-32 h-[500px] w-[500px] rounded-full border border-cyan-400/10 md:right-10">
          <div className="absolute inset-12 rounded-full border border-cyan-400/10" />
          <div className="absolute inset-24 rounded-full border border-cyan-400/10" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-cyan-400/10" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-cyan-400/10" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs tracking-widest text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              SECURITY TECHNOLOGY & TECHNICAL SERVICES
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              SECURE.
              <br />
              <span className="text-cyan-400">REPAIR.</span>
              <br />
              PROTECT.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              Professional security equipment supply, installation, repair and
              maintenance solutions for airports, government organizations,
              commercial facilities and critical infrastructure.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-cyan-400 px-7 py-4 font-bold text-black transition hover:bg-cyan-300"
              >
                Request a Service
              </a>

              <a
                href="#equipment"
                className="rounded-lg border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/5"
              >
                Explore Equipment
              </a>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-7">
              <div>
                <div className="text-2xl font-bold text-cyan-400">10+</div>
                <div className="mt-1 text-xs text-gray-500">
                  Equipment Categories
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                <div className="mt-1 text-xs text-gray-500">
                  Technical Support
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-cyan-400">BD</div>
                <div className="mt-1 text-xs text-gray-500">
                  Nationwide Service
                </div>
              </div>
            </div>
          </div>

          {/* Security Scanner Visual */}
          <div className="relative mx-auto flex h-[430px] w-full max-w-[520px] items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full border border-cyan-400/20 shadow-[0_0_100px_rgba(34,211,238,0.08)]">
              <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom -rotate-45 bg-cyan-400/60" />
            </div>

            <div className="relative h-64 w-80 rounded-2xl border border-cyan-400/30 bg-white/[0.03] p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs tracking-widest text-cyan-300">
                  SYSTEM MONITOR
                </span>
                <span className="text-xs text-green-400">● ONLINE</span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="h-2 rounded bg-cyan-400/20">
                  <div className="h-2 w-4/5 rounded bg-cyan-400" />
                </div>
                <div className="h-2 rounded bg-cyan-400/20">
                  <div className="h-2 w-3/5 rounded bg-cyan-400" />
                </div>
                <div className="h-2 rounded bg-cyan-400/20">
                  <div className="h-2 w-11/12 rounded bg-cyan-400" />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2 text-center text-[10px] text-gray-500">
                <div className="rounded border border-white/10 p-3">
                  X-RAY
                </div>
                <div className="rounded border border-white/10 p-3">
                  ETD
                </div>
                <div className="rounded border border-white/10 p-3">
                  CCTV
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section id="equipment" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <div className="text-sm font-semibold tracking-[0.25em] text-cyan-400">
              SECURITY SYSTEMS
            </div>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Equipment We Support
            </h2>

            <p className="mt-5 text-gray-400">
              Supply, installation, troubleshooting, repair and maintenance
              support for a wide range of security technologies.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {equipment.map((item, index) => (
              <div
                key={item}
                className="group rounded-xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
              >
                <div className="mb-8 text-xs tracking-widest text-cyan-500">
                  0{index + 1}
                </div>

                <div className="text-lg font-semibold text-white transition group-hover:text-cyan-300">
                  {item}
                </div>

                <div className="mt-3 text-sm text-gray-500">
                  Supply • Installation • Repair
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-t border-white/10 bg-white/[0.02] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="text-sm font-semibold tracking-[0.25em] text-cyan-400">
              OUR SERVICES
            </div>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Complete Technical Support
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="rounded-2xl border border-white/10 p-8 transition hover:border-cyan-400/30"
              >
                <div className="text-sm font-bold text-cyan-400">
                  {service.number}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 text-center sm:p-14">
          <div className="text-sm tracking-[0.25em] text-cyan-400">
            NEED TECHNICAL SUPPORT?
          </div>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let&apos;s Secure Your System.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Tell us about your equipment, problem or project requirement. Our
            technical team will get back to you.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+8801000000000"
              className="rounded-lg bg-cyan-400 px-7 py-4 font-bold text-black"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/8801000000000"
              className="rounded-lg border border-white/15 px-7 py-4 font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <div>© 2026 SecureTech BD</div>
          <div>Security • Technology • Reliability</div>
        </div>
      </footer>
    </main>
  );
}