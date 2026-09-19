import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Service | SecureTech BD",
  description:
    "Submit a security equipment service, repair, maintenance or technical support request.",
};

export default function ServiceRequestPage() {
  return (
    <main className="security-page-bg min-h-screen text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a
          href="/"
          className="text-lg font-bold tracking-widest text-cyan-300"
        >
          SECURITY EQUIPMENT MAINTENANCE BD
        </a>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="/">HOME</a>
          <a href="/about-us">ABOUT US</a>
          <a href="/services">SERVICES</a>
          <a href="/bangladesh-clients">BANGLADESH CLIENTS</a>
          <a href="/international-projects">INTERNATIONAL PROJECTS</a>
        </nav>
      </header>

      <section className="mx-auto max-w-4xl px-6 pb-20 pt-14">
        <p className="text-sm font-semibold tracking-[0.3em] text-cyan-300">
          SERVICE REQUEST
        </p>

        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          Request Technical
          <span className="block text-cyan-300">Service & Support</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Tell us about your equipment and service requirements. Our technical
          team can review your request and provide appropriate support.
        </p>

        <form className="mt-12 space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Company / Organization
              </label>
              <input
                type="text"
                name="company"
                placeholder="Company or organization"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+880..."
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Equipment
            </label>
            <select
              name="equipment"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              defaultValue=""
            >
              <option value="" disabled>
                Select equipment
              </option>
              <option>Baggage X-Ray Scanner</option>
              <option>Explosive Trace Detection (ETD)</option>
              <option>Walk-Through Metal Detector (WTMD)</option>
              <option>Hand-Held Metal Detector (HHMD)</option>
              <option>CCTV System</option>
              <option>Access Control System</option>
              <option>Road Barrier & Road Blocker</option>
              <option>Car Parking Management</option>
              <option>Bollard</option>
              <option>Other Security Equipment</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Service Required
            </label>
            <select
              name="service"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              defaultValue=""
            >
              <option value="" disabled>
                Select service
              </option>
              <option>Repair & Troubleshooting</option>
              <option>Preventive Maintenance</option>
              <option>Corrective Maintenance</option>
              <option>AMC Services</option>
              <option>Calibration & Testing</option>
              <option>Installation & Commissioning</option>
              <option>Spare Parts Support</option>
              <option>Technical Support</option>
              <option>Operator Training</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Service Details
            </label>
            <textarea
              name="message"
              rows={6}
              placeholder="Describe the equipment problem or service requirement..."
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-cyan-400 px-7 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            SUBMIT SERVICE REQUEST
          </button>
        </form>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-slate-500">
        SECURITY EQUIPMENT MAINTENANCE BD · © 2026 ALL RIGHTS RESERVED
      </footer>
    </main>
  );
}
