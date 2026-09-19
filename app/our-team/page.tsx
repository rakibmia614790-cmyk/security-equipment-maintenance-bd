import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | SECURETECH BD",
  description:
    "Meet the technical professional behind SECURETECH BD, specializing in security screening systems, X-ray, ETD, WTMD, HHMD and technical maintenance.",
};

const expertise = [
  "X-Ray Baggage Screening Systems",
  "Explosive Trace Detection (ETD)",
  "IONSCAN 600",
  "Walk-Through Metal Detector (WTMD)",
  "Hand-Held Metal Detector (HHMD)",
  "Installation & Commissioning",
  "Preventive & Corrective Maintenance",
  "Fault Diagnosis & Troubleshooting",
  "Calibration & Performance Testing",
  "Technical Training & Operator Support",
];

export default function OurTeamPage() {
  return (
    <main className="security-page-bg min-h-screen text-white">
      

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-cyan-300">
            OUR TEAM
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Technical Expertise Behind
            <span className="block text-cyan-300">
              Security Technology
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Professional technical support for security screening systems,
            equipment maintenance, troubleshooting, commissioning and
            operational reliability.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-8 shadow-2xl">
            <div className="mb-8 flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-2xl font-black text-cyan-300">
                RM
              </div>

              <div>
                <h2 className="text-3xl font-bold">Rakib Mia</h2>
                <p className="mt-1 text-cyan-300">
                  Field Service Engineer & Security Screening Systems Specialist
                </p>
              </div>
            </div>

            <p className="leading-8 text-slate-300">
              Rakib Mia is a Level 1, 2 & 3 Certified Engineer with over 9
              years of professional experience in security screening
              technology and technical service. His work focuses on the
              installation, commissioning, preventive maintenance,
              troubleshooting, repair and performance support of security
              screening equipment.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              His technical focus includes X-ray baggage screening systems,
              explosive trace detection, metal detection systems and related
              security technologies used in demanding operational
              environments.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs tracking-widest text-slate-400">
                  EXPERIENCE
                </p>
                <p className="mt-2 text-2xl font-bold text-cyan-300">
                  9+ Years
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs tracking-widest text-slate-400">
                  ENGINEERING LEVEL
                </p>
                <p className="mt-2 text-2xl font-bold text-cyan-300">
                  Level 1–3
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-black/40 p-8">
            <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
              CORE EXPERTISE
            </p>

            <div className="mt-6 space-y-3">
              {expertise.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <span className="text-xs font-bold text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-3xl border border-cyan-400/15 bg-slate-950/60 p-8">
          <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
            PROFESSIONAL APPROACH
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-4">
            {[
              ["01", "INSPECT", "Understand the equipment and identify the issue."],
              ["02", "DIAGNOSE", "Trace faults systematically and accurately."],
              ["03", "REPAIR", "Restore equipment performance with controlled service."],
              ["04", "TEST", "Verify operational reliability before handover."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="text-xs text-cyan-400">{number}</span>
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/service-request"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            REQUEST TECHNICAL SERVICE
          </a>

          <a
            href="https://wa.me/8801518698236"
            className="rounded-xl border border-cyan-400/30 px-6 py-3 font-bold text-cyan-300 transition hover:bg-cyan-400/10"
          >
            WHATSAPP
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-slate-500">
        SECURETECH BD · © 2026 ALL RIGHTS RESERVED
      </footer>
    </main>
  );
}
