export const metadata = {
  title: "About Us | Security Equipment Maintenance BD",
  description:
    "Learn about Security Equipment Maintenance BD and our security equipment supply, installation, repair, maintenance and technical support services across Bangladesh.",
};

const capabilities = [
  "Security Equipment Supply",
  "Installation & Commissioning",
  "Repair & Corrective Maintenance",
  "Preventive Maintenance & AMC",
  "Spare Parts & Technical Support",
  "Security System Technical Support",
];

const systems = [
  "Baggage Scanner",
  "Walk Through Metal Detector",
  "Hand-Held Metal Detector",
  "Explosive Trace Detection",
  "CCTV System",
  "Access Control System",
  "Road Barrier & Road Blocker",
  "Car Parking Management",
  "Bollard",
  "Gate / Flap Barrier",
  "ANPR",
];

export default function AboutUs() {
  return (
    <main className="security-page-bg min-h-screen text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020611]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="group">
            <div className="text-sm font-black tracking-[0.22em] text-cyan-300">
              SECURITY EQUIPMENT
            </div>
            <div className="text-xs font-semibold tracking-[0.42em] text-white/70">
              MAINTENANCE BD
            </div>
          </a>

          <a
            href="/"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/5 px-4 py-2 text-xs font-bold tracking-wider text-cyan-200 transition hover:bg-cyan-300/10"
          >
            BACK TO HOME
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-20 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
            COMPANY / ABOUT US
          </div>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            SECURITY
            <span className="block text-cyan-300">ENGINEERING.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
            Security Equipment Maintenance BD provides professional security
            equipment supply, installation, repair, maintenance and technical
            support solutions for organizations across Bangladesh.
          </p>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
              OUR APPROACH
            </div>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              TECHNOLOGY. PRECISION. RELIABILITY.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/45">
              Our approach is focused on keeping critical security systems
              operational, reliable and properly maintained. From initial
              technical assessment to repair, testing and preventive
              maintenance, we focus on practical engineering solutions.
            </p>

            <p className="mt-5 text-sm leading-7 text-white/45">
              We support organizations with technical assistance for security
              screening, detection, surveillance, access control and vehicle
              security systems.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <div className="text-xl font-black text-cyan-300/60">
                  0{index + 1}
                </div>
                <div className="mt-5 text-xs font-bold tracking-[0.12em] text-white/70">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
          SYSTEM CAPABILITY
        </div>

        <h2 className="mt-3 text-3xl font-black sm:text-4xl">
          SECURITY SYSTEMS WE SUPPORT
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system, index) => (
            <div
              key={system}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-4"
            >
              <span className="text-[10px] font-black text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold text-white/65">
                {system}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
                LEADERSHIP & MANAGEMENT
              </div>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                PEOPLE BEHIND THE SERVICE
              </h2>

              <p className="mt-6 text-sm leading-7 text-white/45">
                Our management and technical teams coordinate service
                requirements, field engineering, installation, maintenance and
                customer support with a focus on professional execution.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.025] p-7">
              <div className="text-[9px] tracking-[0.3em] text-cyan-300">
                ENGINEERING PRINCIPLES
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Professional Service",
                  "Technical Accuracy",
                  "System Reliability",
                  "Customer Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-xs font-semibold text-white/60"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.035] p-8 text-center sm:p-12">
          <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
            NEED TECHNICAL SUPPORT?
          </div>

          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            LET&apos;S SECURE YOUR SYSTEM.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/45">
            Contact our team for security equipment supply, repair,
            maintenance, installation or technical support.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/#request"
              className="rounded-xl bg-cyan-300 px-6 py-3 text-sm font-black tracking-wider text-[#020611] transition hover:bg-cyan-200"
            >
              REQUEST SERVICE
            </a>

            <a
              href="tel:+8801799419011"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold tracking-wider text-white transition hover:border-cyan-300/40"
            >
              CALL US
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-[#01040a]">
        <div className="mx-auto flex max-w-7xl justify-between gap-4 px-5 py-8 text-[9px] tracking-[0.18em] text-white/30 lg:px-8">
          <div>SECURITY EQUIPMENT MAINTENANCE BD</div>
          <div>© 2026 ALL RIGHTS RESERVED</div>
        </div>
      </footer>
    </main>
  );
}
