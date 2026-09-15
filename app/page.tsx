"use client";

import { FormEvent, useState } from "react";

const equipment = [
  ["Baggage Scanner", "/equipment/baggage-scanner", "X-RAY / INSPECTION", "BAG"],
  ["Walk Through Metal Detector", "/equipment/walk-through-metal-detector", "PEOPLE SCREENING", "WTMD"],
  ["Hand-Held Metal Detector", "/equipment/hand-held-metal-detector", "HAND SCREENING", "HHMD"],
  ["Explosive Trace Detection", "/equipment/explosive-trace-detection", "TRACE DETECTION", "ETD"],
  ["CCTV System", "/equipment/cctv-system", "VIDEO SECURITY", "CCTV"],
  ["Access Control System", "/equipment/access-control-system", "ENTRY SECURITY", "ACS"],
  ["Road Barrier / Road Blocker", "/equipment/road-barrier-road-blocker", "VEHICLE SECURITY", "RBR"],
  ["Car Parking Management", "/equipment/car-parking-management", "PARKING CONTROL", "CPM"],
  ["Bollard", "/equipment/bollard", "PERIMETER SECURITY", "BLD"],
  ["Gate / Flap Barrier", "/equipment/gate-flap-barrier", "ACCESS CONTROL", "GFB"],
  ["ANPR", "/equipment/anpr", "VEHICLE IDENTIFICATION", "ANPR"],
];

const services = [
  ["01", "INSPECT", "Equipment condition assessment and technical inspection."],
  ["02", "DIAGNOSE", "Systematic fault identification and technical diagnosis."],
  ["03", "REPAIR", "Professional repair, replacement and corrective maintenance."],
  ["04", "TEST", "Functional testing, calibration and performance verification."],
  ["05", "MAINTAIN", "Preventive maintenance, AMC and ongoing technical support."],
];

const capabilities = [
  "X-RAY SCREENING",
  "EXPLOSIVE TRACE DETECTION",
  "METAL DETECTION",
  "CCTV & SURVEILLANCE",
  "ACCESS CONTROL",
  "VEHICLE SECURITY",
];

export default function Home() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          authority_company: data.get("authority_company"),
          phone: data.get("phone"),
          email: data.get("email"),
          equipment: data.get("equipment"),
          message: data.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Request failed");
      }

      setStatus("SERVICE REQUEST RECEIVED — OUR TEAM WILL CONTACT YOU.");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? `REQUEST ERROR — ${error.message}`
          : "REQUEST ERROR — PLEASE TRY AGAIN."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="security-page-bg min-h-screen text-white">
      {/* TECHNOLOGY ATMOSPHERE */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full border border-cyan-400/10" />
        <div className="absolute left-[12%] top-[22%] h-56 w-56 rounded-full border border-cyan-400/5" />
        <div className="absolute right-[8%] top-[12%] h-96 w-96 rounded-full border border-blue-400/10" />
        <div className="absolute right-[13%] top-[17%] h-72 w-72 rounded-full border border-blue-400/5" />
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
      </div>

      {/* HEADER */}
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

          <nav className="hidden items-center gap-7 text-xs font-semibold tracking-wider text-white/70 lg:flex">
            <a href="/" className="transition hover:text-cyan-300">HOME</a>
            <a href="#equipment" className="transition hover:text-cyan-300">EQUIPMENT</a>
            <a href="#services" className="transition hover:text-cyan-300">SERVICES</a>
            <a href="#request" className="transition hover:text-cyan-300">SERVICE REQUEST</a>
            <a href="/our-team" className="transition hover:text-cyan-300">OUR TEAM</a>
              <a href="/about-us" className="transition hover:text-cyan-300">ABOUT US</a>
              <details className="relative">
  <summary className="cursor-pointer list-none text-sm font-medium text-slate-300 hover:text-white transition-colors">
    OUR PROJECT & CLIENTS ▾
  </summary>
  <div className="absolute left-0 top-full z-50 mt-3 w-80 rounded-2xl border border-cyan-400/40 bg-slate-900 border-2 border-cyan-400/60 p-4 shadow-2xl shadow-cyan-500/30 backdrop-blur-xl">
    <a href="/bangladesh-clients" className="block rounded-xl border border-transparent bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-400/50 hover:bg-cyan-500/15 hover:text-white hover:shadow-lg hover:shadow-cyan-500/10">
      BANGLADESH CLIENTS
    </a>
    <a href="/international-projects" className="block rounded-xl border border-transparent bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-400/50 hover:bg-cyan-500/15 hover:text-white hover:shadow-lg hover:shadow-cyan-500/10">
      OUR INTERNATIONAL CLIENTS & PROJECTS
    </a>
  </div>
</details>
            <a href="#contact" className="transition hover:text-cyan-300">CONTACT</a>
          </nav>

          <a
            href="tel:+8801799419011"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/5 px-4 py-2 text-xs font-bold tracking-wider text-cyan-200 transition hover:bg-cyan-300/10"
          >
            CALL US
          </a>
        </div>
      </header>

      {/* HERO */}
      

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-16 lg:px-8 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.35em] text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              SECURITY TECHNOLOGY / FIELD ENGINEERING
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              <span className="block">SECURE.</span>
              <span className="block text-white/70">REPAIR.</span>
              <span className="block text-cyan-300">PROTECT.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Security equipment supply, installation, repair and maintenance
              services across Bangladesh, with professional technical support,
              spare parts and AMC solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#request"
                className="rounded-xl bg-cyan-300 px-6 py-3 text-sm font-black tracking-wider text-[#020611] transition hover:bg-cyan-200"
              >
                REQUEST SERVICE
              </a>
              <a
                href="#equipment"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold tracking-wider text-white transition hover:border-cyan-300/40"
              >
                EXPLORE SYSTEMS
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
              <div>
                <div className="text-xl font-black text-cyan-300">01</div>
                <div className="mt-1 text-[9px] tracking-[0.2em] text-white/40">FIELD SERVICE</div>
              </div>
              <div className="border-l border-white/10 pl-5">
                <div className="text-xl font-black text-cyan-300">24/7</div>
                <div className="mt-1 text-[9px] tracking-[0.2em] text-white/40">TECHNICAL SUPPORT</div>
              </div>
              <div className="border-l border-white/10 pl-5">
                <div className="text-xl font-black text-cyan-300">BD</div>
                <div className="mt-1 text-[9px] tracking-[0.2em] text-white/40">SERVICE COVERAGE</div>
              </div>
            </div>
          </div>

          {/* HERO TECH CONSOLE */}
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="absolute inset-[8%] rounded-full border border-cyan-300/15" />
            <div className="absolute inset-[18%] rounded-full border border-cyan-300/10" />
            <div className="absolute inset-[29%] rounded-full border border-cyan-300/10" />

            <div className="absolute inset-[8%] animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-cyan-300/15" />

            <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30 bg-cyan-300/5 shadow-[0_0_80px_rgba(34,211,238,0.12)]">
              <div className="absolute inset-5 rounded-full border border-cyan-300/30" />
              <div className="absolute inset-12 rounded-full bg-cyan-300/20 shadow-[0_0_35px_rgba(34,211,238,0.45)]" />
            </div>

            <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent" />
            <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

            <div className="absolute left-[7%] top-[25%] rounded-lg border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md">
              <div className="text-[9px] tracking-[0.22em] text-cyan-300">X-RAY SCREENING</div>
              <div className="mt-1 text-[8px] text-white/40">SYSTEM READY</div>
            </div>

            <div className="absolute bottom-[24%] right-[4%] rounded-lg border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md">
              <div className="text-[9px] tracking-[0.22em] text-cyan-300">THREAT DETECTION</div>
              <div className="mt-1 text-[8px] text-white/40">MONITORING ACTIVE</div>
            </div>

            <div className="absolute right-[8%] top-[9%] rounded-lg border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md">
              <div className="text-[9px] tracking-[0.22em] text-cyan-300">SECURITY NETWORK</div>
              <div className="mt-1 text-[8px] text-white/40">CONNECTED</div>
            </div>

            <div className="absolute bottom-[8%] left-[14%] text-[8px] tracking-[0.3em] text-white/25">
              SYSTEM // DIAGNOSTIC // FIELD ENGINEERING
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY STRIP */}
      <section className="relative z-10 border-y border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-5 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {capabilities.map((item) => (
            <div
              key={item}
              className="border-white/10 px-4 py-3 text-center text-[9px] font-bold tracking-[0.16em] text-white/45 sm:border-r"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPMENT */}
      <section id="equipment" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
              01 / SECURITY SYSTEMS
            </div>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              SECURITY EQUIPMENT
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/45">
            Supply, installation, repair, preventive maintenance, AMC and
            technical support for critical security systems.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map(([name, link, type, code]) => (
            <a
              href={link}
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.035]"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full border-b border-l border-cyan-300/10" />

              <div className="flex items-start justify-between">
                <span className="rounded-md border border-cyan-300/15 bg-cyan-300/5 px-2 py-1 text-[9px] font-bold tracking-widest text-cyan-300">
                  {code}
                </span>
                <span className="text-[8px] tracking-[0.2em] text-white/25">
                  SYSTEM
                </span>
              </div>

              <div className="mt-12 h-px w-16 bg-cyan-300/40 transition-all group-hover:w-28" />

              <div className="mt-5 text-xs font-bold tracking-[0.18em] text-cyan-300/70">
                {type}
              </div>
              <h3 className="mt-2 text-xl font-black text-white">
                {name}
              </h3>

              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[9px] tracking-[0.2em] text-white/35">
                  TECHNICAL DETAILS
                </span>
                <span className="text-sm text-cyan-300 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative z-10 border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
            02 / ENGINEERING PROCESS
          </div>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            SECURITY EQUIPMENT SERVICES
          </h2>

          <div className="mt-12 grid gap-3 lg:grid-cols-5">
            {services.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <div className="text-3xl font-black text-cyan-300/60">
                  {number}
                </div>
                <div className="mt-8 text-sm font-black tracking-[0.2em]">
                  {title}
                </div>
                <p className="mt-3 text-xs leading-5 text-white/40">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST */}
      

      <section id="request" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
              03 / FIELD REQUEST
            </div>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              REQUEST A SERVICE
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/45">
              Tell us about your equipment, system or technical requirement.
              Our service team can review the request and coordinate the next
              technical step.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Repair & Corrective Maintenance",
                "Preventive Maintenance & AMC",
                "Installation & Commissioning",
                "Spare Parts & Technical Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 text-xs text-white/60"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={submitRequest}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <div className="mb-7 flex items-center justify-between">
              <div>
                <div className="text-xs font-black tracking-[0.2em] text-cyan-300">
                  SERVICE REQUEST
                </div>
                <div className="mt-1 text-[9px] tracking-widest text-white/30">
                  TECHNICAL INTAKE FORM
                </div>
              </div>
              <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/40"
              />
              <input
                name="authority_company"
                placeholder="Company / Authority"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/40"
              />
              <input
                name="phone"
                required
                placeholder="Phone Number"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/40"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/40"
              />
            </div>

            <select
              name="equipment"
              required
              defaultValue=""
              className="mt-4 w-full rounded-xl border border-white/10 bg-[#050a14] px-4 py-3 text-sm text-white/70 outline-none focus:border-cyan-300/40"
            >
              <option value="" disabled>Select Equipment / System</option>
              {equipment.map(([name]) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>

            <textarea
              name="message"
              required
              rows={6}
              placeholder="Describe the equipment, fault, maintenance requirement or project..."
              className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/40"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full rounded-xl bg-cyan-300 px-5 py-3.5 text-sm font-black tracking-wider text-[#020611] transition hover:bg-cyan-200 disabled:opacity-50"
            >
              {loading ? "TRANSMITTING REQUEST..." : "SUBMIT SERVICE REQUEST →"}
            </button>

            {status && (
              <div className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-xs leading-5 text-cyan-200">
                {status}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
            04 / COMMUNICATION
          </div>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            CONTACT US
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="tel:+8801799419011"
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-300/30"
            >
              <div className="text-[9px] tracking-[0.25em] text-white/30">CALL US</div>
              <div className="mt-3 text-lg font-black text-cyan-300">01799 419011</div>
            </a>

            <a
              href="https://wa.me/8801518698236"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-300/30"
            >
              <div className="text-[9px] tracking-[0.25em] text-white/30">WHATSAPP</div>
              <div className="mt-3 text-lg font-black text-cyan-300">01518 698236</div>
            </a>

            <a
              href="mailto:rakibmia614790@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-300/30"
            >
              <div className="text-[9px] tracking-[0.25em] text-white/30">EMAIL</div>
              <div className="mt-3 break-all text-sm font-black text-cyan-300">
                rakibmia614790@gmail.com
              </div>
            </a>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <div className="text-[9px] tracking-[0.25em] text-white/30">SERVICE AREA</div>
              <div className="mt-3 text-lg font-black text-cyan-300">
                BANGLADESH
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-[#01040a]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-[9px] tracking-[0.18em] text-white/30 sm:flex-row lg:px-8">
          <div>SECURITY EQUIPMENT MAINTENANCE BD</div>
          <div>© 2026 ALL RIGHTS RESERVED</div>
        </div>
      </footer>
    </main>
  );
}
