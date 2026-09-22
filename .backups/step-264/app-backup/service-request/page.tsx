"use client";

import { createClient } from "@/app/supabase";

import { useState } from "react";

const equipmentOptions = [
  "Baggage Scanner",
  "Walk-Through Metal Detector (WTMD)",
  "Hand-Held Metal Detector (HHMD)",
  "Explosive Trace Detector (ETD)",
  "CCTV",
  "Road Barrier",
  "Road Blocker",
  "Access Control System",
  "Car Parking Management System",
  "Bollard",
  "Human Body Scanner",
  "Walkie-Talkie",
  "Other",
];

export default function ServiceRequestPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            SecureTech BD
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Service Request
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Submit your security equipment service, maintenance, technical
            support or project requirement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Technical Support
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Tell us what you need
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Share your equipment and service requirement. Our technical team
              can review the request and coordinate the appropriate support.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Preventive & Corrective Maintenance",
                "Repair & Troubleshooting",
                "Installation & Commissioning",
                "Calibration & Technical Support",
                "AMC & Service Support",
                "Spare Parts & Equipment Support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur sm:p-8">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-2xl text-emerald-300">
                  ✓
                </div>
                <h2 className="mt-6 text-2xl font-bold">
                  Request Ready for Submission
                </h2>
                <p className="mx-auto mt-3 max-w-md text-slate-400">
                  The form structure is ready. Database and email submission
                  will be connected during the integration phase.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/10"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const inputs = form.querySelectorAll("input");
                  const select = form.querySelector("select");
                  const textarea = form.querySelector("textarea");

                  const { error } = await createClient()
                    .from("service_requests")
                    .insert({
                      Name: inputs[0]?.value || "",
                      Phone: inputs[1]?.value || "",
                      Email: inputs[2]?.value || "",
                      Company: inputs[3]?.value || "",
                      Authority: inputs[4]?.value || "",
                      Equipments: select?.value || "",
                      Message: textarea?.value || "",
                    });

                  if (!error) {
                    setSubmitted(true);
                  } else {
                    alert("Unable to submit the service request. Please try again.");
                  }
                }}
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-600 focus:border-blue-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-600 focus:border-blue-400"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-600 focus:border-blue-400"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-600 focus:border-blue-400"
                      placeholder="Organization name"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Authority / Sector
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-600 focus:border-blue-400"
                      placeholder="Authority or sector"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Equipment *
                    </label>
                    <select
                      required
                      className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-slate-300 outline-none focus:border-blue-400"
                    >
                      <option value="">Select equipment</option>
                      {equipmentOptions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Service Requirement *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-600 focus:border-blue-400"
                    placeholder="Describe the equipment, problem or service requirement..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500"
                >
                  Submit Service Request
                </button>

                <p className="text-center text-xs text-slate-500">
                  Your information will be handled for service coordination.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
