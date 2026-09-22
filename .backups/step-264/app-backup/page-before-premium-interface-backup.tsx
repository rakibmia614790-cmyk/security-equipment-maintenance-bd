"use client";

import { FormEvent, useState } from "react";

const equipment = [
  ["Baggage Scanner", "/equipment/baggage-scanner"],
  ["Walk Through Metal Detector", "/equipment/walk-through-metal-detector"],
  ["Hand-Held Metal Detector", "/equipment/hand-held-metal-detector"],
  ["Explosive Trace Detection", "/equipment/explosive-trace-detection"],
  ["CCTV System", "/equipment/cctv-system"],
  ["Access Control System", "/equipment/access-control-system"],
  ["Road Barrier & Road Blocker", "/equipment/road-barrier-road-blocker"],
  ["Car Parking Management", "/equipment/car-parking-management"],
  ["Bollard", "/equipment/bollard"],
  ["Gate & Flap Barrier", "/equipment/gate-flap-barrier"],
  ["ANPR System", "/equipment/anpr"],
];

const services = [
  "New Equipment Supply",
  "Installation & Commissioning",
  "Repair & Troubleshooting",
  "Preventive Maintenance",
  "Annual Maintenance Contract (AMC)",
  "Spare Parts Support",
  "Technical Inspection",
  "System Upgrade & Modernization",
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    const form = new FormData(e.currentTarget);

    const data = {
      name: String(form.get("name") || ""),
      authority_company: String(form.get("authority_company") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      equipment: String(form.get("equipment") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const response = await fetch("/api/service-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
      e.currentTarget.reset();
    } catch {
      alert("Service request could not be submitted. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* HEADER */}
      

      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden border-b border-cyan-400/10">
        {/* Technology grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow */}
        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute left-0 top-40 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-3xl" />

        {/* Code-based security graphic */}
        <div className="absolute right-[5%] top-1/2 hidden h-[430px] w-[430px] -translate-y-1/2 md:block">
          <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
          <div className="absolute inset-8 rounded-full border border-cyan-300/20" />
          <div className="absolute inset-16 rounded-full border border-cyan-300/20" />

          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_30px_10px_rgba(34,211,238,.5)]" />

          <div className="absolute left-1/2 top-1/2 h-[2px] w-[185px] origin-left -translate-y-1/2 bg-gradient-to-r from-cyan-300/80 to-transparent" />

          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200" />

          <div className="absolute left-8 top-20 rounded-lg border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-xs text-cyan-200 backdrop-blur">
            X-RAY SCANNING
          </div>

          <div className="absolute bottom-20 right-2 rounded-lg border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-xs text-cyan-200 backdrop-blur">
            THREAT DETECTION
          </div>

          <div className="absolute bottom-8 left-20 rounded-lg border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-xs text-cyan-200 backdrop-blur">
            SECURITY NETWORK
          </div>

          {[0, 1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_5px_rgba(34,211,238,.35)]"
              style={{
                left: `${20 + ((n * 31) % 65)}%`,
                top: `${15 + ((n * 43) % 70)}%`,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs tracking-[0.25em] text-cyan-300">
              SECURITY TECHNOLOGY • ENGINEERING • SUPPORT
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              SECURE.
              <br />
              <span className="text-cyan-300">REPAIR.</span>
              <br />
              PROTECT.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Security equipment supply, installation, repair and maintenance
              services across Bangladesh, with professional technical support,
              spare parts and AMC solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#service-request"
                className="rounded-xl bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Request Service
              </a>

              <a
                href="tel:+8801799419011"
                className="rounded-xl border border-cyan-300/30 px-6 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-300/10"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section id="equipment" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-[0.3em] text-cyan-300">
            SECURITY SOLUTIONS
          </p>
          <h2 className="mt-3 text-4xl font-bold">Security Equipment</h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Supply, installation, repair, preventive maintenance, AMC and
            technical support across Bangladesh.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map(([name, link]) => (
            <article
              key={name}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                ◈
              </div>

              <h3 className="text-xl font-bold">{name}</h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                Professional supply, installation, repair and maintenance
                support for critical security applications.
              </p>

              <a
                href={link}
                className="mt-5 inline-flex text-sm font-bold text-cyan-300 transition group-hover:text-cyan-200"
              >
                View Details →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-cyan-400/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <p className="text-sm font-semibold tracking-[0.3em] text-cyan-300">
            ENGINEERING SERVICES
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Security Equipment Services
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-xl border border-white/10 bg-[#030712]/70 p-5"
              >
                <div className="mb-4 text-2xl text-cyan-300">✓</div>
                <h3 className="font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE REQUEST */}
      <section id="service-request" className="mx-auto max-w-7xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.3em] text-cyan-300">
            TECHNICAL SUPPORT
          </p>

          <h2 className="mt-3 text-4xl font-bold">Request a Service</h2>

          <p className="mt-4 text-slate-400">
            Tell us about your equipment, problem or maintenance requirement.
            Our technical team can review your request.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="name"
              required
              placeholder="Your Name"
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300/50"
            />

            <input
              name="authority_company"
              required
              placeholder="Authority / Company"
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300/50"
            />

            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300/50"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300/50"
            />

            <select
              name="equipment"
              required
              defaultValue=""
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-slate-200 outline-none focus:border-cyan-300/50 md:col-span-2"
            >
              <option value="" disabled>
                Select Equipment
              </option>
              {equipment.map(([name]) => (
                <option key={name} value={name} className="bg-slate-900">
                  {name}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="message"
            required
            rows={6}
            placeholder="Describe your requirement or equipment problem..."
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300/50"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-200 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit Service Request"}
          </button>

          {submitted && (
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-center text-emerald-300">
              Your service request has been submitted successfully.
            </div>
          )}
        </form>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-cyan-400/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <p className="text-sm font-semibold tracking-[0.3em] text-cyan-300">
            CONTACT
          </p>

          <h2 className="mt-3 text-4xl font-bold">Contact Us</h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Need security equipment supply, repair, maintenance or technical
            support? Contact us directly.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <a
              href="tel:+8801799419011"
              className="rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:border-cyan-300/40"
            >
              <div className="text-sm text-cyan-300">CALL US</div>
              <div className="mt-3 text-xl font-bold">01799419011</div>
            </a>

            <a
              href="https://wa.me/8801518698236"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:border-cyan-300/40"
            >
              <div className="text-sm text-cyan-300">WHATSAPP</div>
              <div className="mt-3 text-xl font-bold">01518698236</div>
            </a>

            <a
              href="mailto:rakibmia614790@gmail.com"
              className="rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:border-cyan-300/40"
            >
              <div className="text-sm text-cyan-300">EMAIL</div>
              <div className="mt-3 break-all text-lg font-bold">
                rakibmia614790@gmail.com
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>SECURETECH BD</div>
          <div>© 2026 SECURETECH BD. All Rights Reserved.</div>
        </div>
      </footer>
    </main>
  );
}
