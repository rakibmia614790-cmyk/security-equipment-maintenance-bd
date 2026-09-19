import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | SecureTech BD",
  description:
    "Meet the technical, engineering, installation, maintenance and support team of SecureTech BD.",
};

const teamAreas = [
  {
    title: "Technical & Service Engineers",
    description:
      "Experienced technical professionals focused on security equipment troubleshooting, repair, preventive maintenance and technical support.",
    icon: "⚙️",
  },
  {
    title: "Field Service Team",
    description:
      "On-site technical support for inspection, troubleshooting, repair, maintenance and equipment commissioning.",
    icon: "🛠️",
  },
  {
    title: "Installation & Commissioning",
    description:
      "Professional installation, configuration, testing and commissioning of security screening and protection systems.",
    icon: "◈",
  },
  {
    title: "Security Systems Specialists",
    description:
      "Technical support across X-Ray screening, ETD, metal detection, CCTV, access control and vehicle security systems.",
    icon: "🛡️",
  },
  {
    title: "Training & Technical Support",
    description:
      "Operator guidance, technical training and practical support to help customers maintain reliable security operations.",
    icon: "🎓",
  },
  {
    title: "Management & Coordination",
    description:
      "Project coordination, customer communication, service planning and technical operations management.",
    icon: "📋",
  },
];

const expertise = [
  "Baggage Scanner / X-Ray Systems",
  "Explosive Trace Detection (ETD)",
  "Walk Through Metal Detector",
  "Hand-Held Metal Detector",
  "CCTV & Video Surveillance",
  "Access Control Systems",
  "Road Barrier & Road Blocker",
  "Car Parking Management",
  "Bollard & Vehicle Security",
  "Gate / Flap Barrier",
  "ANPR Systems",
  "Preventive Maintenance & AMC",
];

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="/"
            className="text-lg font-black tracking-tight sm:text-xl"
          >
            Security Equipment
            <span className="text-cyan-400"> Maintenance BD</span>
          </a>

          <a
            href="/"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
          >
            ← Back to Home
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              People Behind The Technology
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl">
              OUR
              <br />
              <span className="text-cyan-400">TEAM.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Our team brings together technical expertise, field experience
              and security-system knowledge to support customers with reliable
              equipment supply, installation, repair and maintenance services.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Our Approach
              </div>

              <h2 className="text-3xl font-black sm:text-4xl">
                Technical people. Practical solutions.
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-gray-400">
                Security equipment requires more than simply supplying a
                machine. Reliable operation depends on correct installation,
                commissioning, preventive maintenance, troubleshooting and
                timely technical support.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                Our team structure is designed around these technical
                requirements, helping customers keep critical security systems
                operational and dependable.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Core Focus
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Technical Excellence",
                  "Fast Troubleshooting",
                  "Reliable Maintenance",
                  "Professional Installation",
                  "Customer Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                      ✓
                    </span>
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM AREAS */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Team Structure
            </div>

            <h2 className="text-4xl font-black sm:text-5xl">
              Our Technical Capabilities
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Different technical functions work together to deliver complete
              security equipment support.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-white/10 bg-black/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl">
                  {area.icon}
                </div>

                <h3 className="text-xl font-bold">{area.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-12">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Technical Expertise
            </div>

            <h2 className="text-4xl font-black sm:text-5xl">
              Systems We Support
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 font-semibold text-gray-200"
              >
                <span className="mr-3 text-cyan-400">◆</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL VALUES */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-7">
              <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                01
              </div>
              <h3 className="mt-4 text-xl font-bold">
                Technical Responsibility
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                A strong focus on equipment reliability, proper diagnosis and
                technically sound solutions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-7">
              <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                02
              </div>
              <h3 className="mt-4 text-xl font-bold">
                Customer Support
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                Clear communication and practical technical support throughout
                the service lifecycle.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-7">
              <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                03
              </div>
              <h3 className="mt-4 text-xl font-bold">
                Continuous Learning
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                Continuous development of technical knowledge, equipment
                expertise and field-service capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-24 text-center lg:px-8">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 sm:p-12">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Need Technical Support?
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Talk to our technical team.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
              Contact us for security equipment supply, installation, repair,
              maintenance, spare parts or technical support.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/#service-request"
                className="rounded-xl bg-cyan-400 px-7 py-4 font-bold text-black transition hover:bg-cyan-300"
              >
                Request Service
              </a>

              <a
                href="tel:+8801799419011"
                className="rounded-xl border border-white/15 px-7 py-4 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Call 01799-419011
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            © {new Date().getFullYear()} SecureTech BD.
            All rights reserved.
          </div>

          <a
            href="/"
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            SecureTech BD
          </a>
        </div>
      </footer>
    </main>
  );
}
