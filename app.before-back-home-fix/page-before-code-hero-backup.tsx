"use client";

import { FormEvent, useState } from "react";

const equipment = [
  {
    title: "Baggage Scanner",
    description:
      "X-Ray baggage inspection systems for airports, government facilities and high-security environments.",
    link: "/equipment/baggage-scanner",
  },
  {
    title: "Walk Through Metal Detector",
    description:
      "Reliable people screening systems for airports, government facilities, events and critical infrastructure.",
    link: "/equipment/walk-through-metal-detector",
  },
  {
    title: "Hand-Held Metal Detector",
    description:
      "Portable security screening devices for fast and accurate personnel inspection.",
    link: "/equipment/hand-held-metal-detector",
  },
  {
    title: "Explosive Trace Detection",
    description:
      "ETD solutions for explosive trace screening, airport security and high-security applications.",
    link: "/equipment/explosive-trace-detection",
  },
  {
    title: "CCTV System",
    description:
      "Professional surveillance solutions including IP cameras, monitoring and security integration.",
    link: "/equipment/cctv-system",
  },
  {
    title: "Access Control System",
    description:
      "Modern access control solutions for secure entry, employee management and restricted areas.",
    link: "/equipment/access-control-system",
  },
  {
    title: "Road Barrier & Road Blocker",
    description:
      "Vehicle access protection systems for airports, government facilities and critical infrastructure.",
    link: "/equipment/road-barrier-road-blocker",
  },
  {
    title: "Car Parking Management",
    description:
      "Integrated parking management and vehicle access control solutions.",
    link: "/equipment/car-parking-management",
  },
  {
    title: "Bollard",
    description:
      "Security bollards designed for vehicle control and perimeter protection.",
    link: "/equipment/bollard",
  },
  {
    title: "Gate / Flap Barrier",
    description:
      "Pedestrian access control systems for offices, airports and secure facilities.",
    link: "/equipment/gate-flap-barrier",
  },
  {
    title: "ANPR System",
    description:
      "Automatic Number Plate Recognition solutions for vehicle identification and security.",
    link: "/equipment/anpr",
  },
];

const services = [
  "New Equipment Supply",
  "Installation & Commissioning",
  "Equipment Repair",
  "Preventive Maintenance",
  "Annual Maintenance Contract (AMC)",
  "Spare Parts Supply",
  "Technical Support",
  "Inspection & Troubleshooting",
];

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    authority_company: "",
    phone: "",
    email: "",
    equipment: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  function updateField(
    field: keyof typeof formData,
    value: string
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/service-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to submit your service request."
        );
      }

      setStatus("success");

      setFormData({
        name: "",
        authority_company: "",
        phone: "",
        email: "",
        equipment: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="/"
            className="text-lg font-black tracking-tight text-white sm:text-xl"
          >
            Security Equipment
            <span className="text-cyan-400"> Maintenance BD</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="/" className="text-cyan-400">
              Home
            </a>
            <a
              href="#equipment"
              className="text-gray-300 transition hover:text-cyan-400"
            >
              Equipment
            </a>
            <a
              href="#services"
              className="text-gray-300 transition hover:text-cyan-400"
            >
              Services
            </a>
            <a
              href="#service-request"
              className="text-gray-300 transition hover:text-cyan-400"
            >
              Service Request
            </a>
            <a
              href="#contact"
              className="text-gray-300 transition hover:text-cyan-400"
            >
              Contact
            </a>

            <a
              href="/our-team"
              className="text-gray-300 transition hover:text-cyan-400"
            >
              Our Team
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
  src="/security-hero.png"
  alt="SecureTech BD"
  className="w-full h-auto object-cover rounded-2xl"
/>
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/60 via-[#030712]/80 to-[#030712]" />
        </div>

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Security Technology • Repair • Maintenance
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              SECURE.
              <br />
              <span className="text-cyan-400">REPAIR.</span>
              <br />
              PROTECT.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Security equipment supply, installation, repair and maintenance
              services across Bangladesh, with professional technical support,
              spare parts and AMC solutions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#service-request"
                className="rounded-xl bg-cyan-400 px-7 py-4 text-center font-bold text-black transition hover:bg-cyan-300"
              >
                Request Service
              </a>

              <a
                href="https://wa.me/8801518698236"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-center font-bold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <div className="mb-4 text-3xl">⚙️</div>
            <h2 className="text-xl font-bold">Technical Expertise</h2>
            <p className="mt-3 leading-7 text-gray-400">
              Professional technical support for security screening,
              detection, surveillance and access control systems.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <div className="mb-4 text-3xl">🛠️</div>
            <h2 className="text-xl font-bold">Repair & Maintenance</h2>
            <p className="mt-3 leading-7 text-gray-400">
              Troubleshooting, preventive maintenance, repair and AMC services
              for security equipment.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <div className="mb-4 text-3xl">🇧🇩</div>
            <h2 className="text-xl font-bold">Bangladesh Coverage</h2>
            <p className="mt-3 leading-7 text-gray-400">
              Supporting customers with equipment supply and technical
              services across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section
        id="equipment"
        className="border-y border-white/10 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Equipment
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Security Equipment
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Supply, installation, repair, preventive maintenance, AMC and
              technical support across Bangladesh.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col rounded-2xl border border-white/10 bg-black/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl">
                  ◈
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  className="mt-6 inline-flex items-center font-bold text-cyan-400 transition group-hover:text-cyan-300"
                >
                  View Details
                  <span className="ml-2">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              What We Do
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Security Equipment Services
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              From new equipment supply to long-term maintenance, our services
              are designed to keep your security systems operational.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 font-semibold text-gray-200"
              >
                <span className="mr-3 text-cyan-400">✓</span>
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE REQUEST */}
      <section
        id="service-request"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Get Technical Support
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Submit Service Request
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
              Tell us about your equipment and technical requirement. Our team
              will review your request and contact you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-2xl sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Your Name *
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              {/* AUTHORITY / COMPANY */}
              <div>
                <label
                  htmlFor="authority_company"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Authority / Company Name
                </label>

                <input
                  id="authority_company"
                  type="text"
                  value={formData.authority_company}
                  onChange={(e) =>
                    updateField("authority_company", e.target.value)
                  }
                  placeholder="Enter authority or company name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="Enter email address"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              {/* EQUIPMENT */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="equipment"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Equipment / System *
                </label>

                <select
                  id="equipment"
                  required
                  value={formData.equipment}
                  onChange={(e) => updateField("equipment", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-cyan-400"
                >
                  <option value="" className="bg-gray-900">
                    Select equipment
                  </option>

                  {equipment.map((item) => (
                    <option
                      key={item.title}
                      value={item.title}
                      className="bg-gray-900"
                    >
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* MESSAGE */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Message / Problem Description *
                </label>

                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Describe your equipment, problem or service requirement..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>
            </div>

            {/* STATUS */}
            {status === "success" && (
              <div className="mt-6 rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-4 text-sm font-semibold text-green-300">
                ✓ Your service request has been submitted successfully. We
                will contact you soon.
              </div>
            )}

            {status === "error" && (
              <div className="mt-6 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-4 text-sm font-semibold text-red-300">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-7 w-full rounded-xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending"
                ? "Submitting..."
                : "Submit Service Request"}
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Contact
              </div>

              <h2 className="text-4xl font-black">
                Let&apos;s secure your operation.
              </h2>

              <p className="mt-5 leading-8 text-gray-400">
                Contact us for equipment supply, installation, repair,
                maintenance, spare parts and technical support.
              </p>
            </div>

            <a
              href="tel:+8801799419011"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/40"
            >
              <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                Call
              </div>
              <div className="mt-3 text-xl font-bold">
                01799-419011
              </div>
            </a>

            <a
              href="mailto:rakibmia614790@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/40"
            >
              <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                Email
              </div>
              <div className="mt-3 break-all text-lg font-bold">
                rakibmia614790@gmail.com
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            © {new Date().getFullYear()} SecureTech BD.
            All rights reserved.
          </div>

          <a
            href="https://wa.me/8801518698236"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            WhatsApp: 01518-698236
          </a>
        </div>
      </footer>
    </main>
  );
}
