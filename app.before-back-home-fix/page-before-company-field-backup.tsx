"use client";

import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const equipment = [
    "Baggage Scanner",
    "Walk Through Metal Detector",
    "Hand Held Metal Detector",
    "Explosive Trace Detection",
    "CCTV System",
    "Access Control System",
    "Road Barrier & Road Blocker",
    "Car Parking Management",
    "Bollard",
    "Gate / Flap Barrier",
    "ANPR",
  ];

  const services = [
    "Equipment Repair",
    "Preventive Maintenance",
    "AMC & Technical Support",
    "Installation & Commissioning",
    "Spare Parts Supply",
    "System Inspection",
  ];

  const equipmentLinks: Record<string, string> = {
    "Baggage Scanner": "/equipment/baggage-scanner",
    "Walk Through Metal Detector":
      "/equipment/walk-through-metal-detector",
    "Hand Held Metal Detector":
      "/equipment/hand-held-metal-detector",
    "Explosive Trace Detection":
      "/equipment/explosive-trace-detection",
    "CCTV System": "/equipment/cctv-system",
    "Access Control System": "/equipment/access-control-system",
    "Road Barrier & Road Blocker":
      "/equipment/road-barrier-road-blocker",
    "Car Parking Management":
      "/equipment/car-parking-management",
    "Bollard": "/equipment/bollard",
    "Gate / Flap Barrier":
      "/equipment/gate-flap-barrier",
    "ANPR": "/equipment/anpr",
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/service-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        equipment: formData.get("equipment"),
        message: formData.get("message"),
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      form.reset();
    } else {
      alert(result.error || "Service request could not be submitted.");
    }
  }

  return (
    <main className="min-h-screen bg-[#05070b] text-white">

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-cyan-500/20 bg-[#05070b]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <div className="text-lg font-bold tracking-wide text-cyan-400">
              SECURITY EQUIPMENT
            </div>

            <div className="text-xs tracking-[0.25em] text-gray-400">
              MAINTENANCE BD
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">

            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>

            <a href="#equipment" className="hover:text-cyan-400">
              Equipment
            </a>

            <a href="#services" className="hover:text-cyan-400">
              Services
            </a>

            <a
              href="tel:+8801799419011"
              className="rounded-lg border border-cyan-400/40 px-4 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            >
              Call Us
            </a>

            <a
              href="https://wa.me/8801518698236"
              className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black hover:bg-cyan-400"
            >
              WhatsApp
            </a>

          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 pt-28 md:grid-cols-2"
      >

        <div>

          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-400">
            SECURITY EQUIPMENT MAINTENANCE BD
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            SECURE.
            <br />
            REPAIR.
            <br />
            <span className="text-cyan-400">PROTECT.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-400">
  Security equipment supply, installation, repair and maintenance
  services across Bangladesh, with professional technical support,
  spare parts and AMC solutions.
          </p>

          <div className="mt-8 flex gap-4">

            <a
              href="#contact"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400"
            >
              Request Service
            </a>

            <a
              href="#equipment"
              className="rounded-lg border border-cyan-500/40 px-6 py-3 font-semibold hover:border-cyan-400"
            >
              View Equipment
            </a>

          </div>

        </div>

        <div className="overflow-hidden rounded-2xl border border-cyan-500/20">
          <img
            src="/security-hero.png"
            alt="Security Equipment"
            className="w-full"
          />
        </div>

      </section>

      {/* Equipment */}
      <section
        id="equipment"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <h2 className="text-4xl font-bold">
          Security <span className="text-cyan-400">Equipment</span>
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {equipment.map((item) => (

            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/50"
            >

              <h3 className="font-semibold">
                {item}
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Supply, installation, repair, preventive maintenance, AMC and technical support across Bangladesh.
              </p>

              <a
                href={equipmentLinks[item]}
                className="mt-5 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                View Details →
              </a>

            </div>

          ))}

        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-y border-white/10 bg-white/[0.02] px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-bold">
            Our <span className="text-cyan-400">Security Equipment Services</span>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {services.map((service) => (

              <div
                key={service}
                className="rounded-xl border border-cyan-500/20 p-7"
              >

                <h3 className="text-xl font-semibold">
                  {service}
                </h3>

                <p className="mt-3 text-gray-400">
                  Reliable professional service by experienced technical
                  personnel.
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-4xl font-bold">
          About <span className="text-cyan-400">Us</span>
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-400">
          SecureTech BD provides professional security
          equipment supply, installation, repair, preventive maintenance and
          technical support services across Bangladesh.
        </p>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-400">
          Our experienced technical team supports X-Ray baggage scanners,
          metal detectors, ETD systems, CCTV, access control, vehicle
          security systems and other critical security equipment.
        </p>

      </section>

      {/* Why Choose Us */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-bold">
            Why <span className="text-cyan-400">Choose Us</span>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {[
              "Experienced Technical Team",
              "Professional Repair & Maintenance",
              "Genuine Spare Parts Support",
              "Nationwide Service Coverage",
              "Fast Technical Response",
              "Security Equipment Expertise",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border border-cyan-500/20 bg-white/[0.03] p-7"
              >

                <h3 className="text-xl font-semibold">
                  {item}
                </h3>

                <p className="mt-3 text-gray-400">
                  Reliable service focused on safety, performance and
                  long-term equipment reliability.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] p-8 md:p-12">

          <h2 className="text-4xl font-bold">
            Request <span className="text-cyan-400">Service</span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Tell us about your equipment and service requirement.
            Our technical team will contact you.
          </p>

          {submitted && (
            <div className="mt-6 rounded-lg border border-green-400/30 bg-green-400/10 p-4 text-green-300">
              Your service request has been submitted successfully.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-10 grid gap-5 md:grid-cols-2"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
            />

            <select
              name="equipment"
              defaultValue=""
              required
              className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
            >

              <option value="" disabled>
                Select Equipment
              </option>

              {equipment.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}

            </select>

            <textarea
              name="message"
              placeholder="Describe your problem or service requirement"
              rows={5}
              required
              className="md:col-span-2 rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
            />

            <button
              type="submit"
              className="md:col-span-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400"
            >
              Submit Service Request
            </button>

          </form>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 SecureTech BD. All Rights Reserved.
      </footer>

    </main>
  );
}