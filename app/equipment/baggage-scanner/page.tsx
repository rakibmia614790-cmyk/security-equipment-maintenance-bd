"use client"

import Link from "next/link"

const capabilities = [
  "High-resolution X-ray image inspection",
  "Baggage and parcel security screening",
  "Threat and prohibited-item identification support",
  "Advanced image enhancement for operator analysis",
  "Conveyor-based continuous inspection",
  "Operator workstation and monitoring",
]

const applications = [
  "Airports & Aviation Facilities",
  "Government & Public Facilities",
  "Ports & Critical Infrastructure",
  "Courts & Judicial Facilities",
  "Corporate & Industrial Security",
  "Cargo, Parcel & Logistics Screening",
]

const services = [
  "Supply & Installation",
  "Installation & Commissioning",
  "Preventive Maintenance",
  "Corrective Maintenance",
  "Troubleshooting & Technical Support",
  "Calibration & Performance Checks",
  "Spare Parts & Replacement",
  "AMC & Service Support",
]

const RAPISCAN_DIRECT_ASSET = "/branding/baggage-brands/transparent/rapiscan-systems.png";

const manufacturers = [
  {
    name: "Smiths Detection",
    category: "X-Ray & CT Baggage Screening",
    logo: "/branding/baggage-brands/smiths-detection.png",
  },
  {
    name: "Rapiscan Systems", website: "https://www.rapiscansystems.com/",
    category: "Baggage, Parcel & Hold Baggage Screening",
    logo: "/branding/baggage-brands/rapiscan.svg",
  },
  {
    name: "NUCTECH", website: "https://www.nuctech.com/?lang=en_US",
    category: "Security Inspection & X-Ray Screening",
    logo: "/branding/baggage-brands/transparent/nuctech.png",
  },
  {
    name: "Leidos",
    category: "Aviation Security & CT Screening",
    logo: "/branding/baggage-brands/leidos.svg",
  },
  {
    name: "Analogic",
    category: "CT & Checked-Baggage Screening",
    logo: "/branding/baggage-brands/analogic.png",
  },
  {
    name: "Astrophysics",
    category: "X-Ray Inspection Systems",
    logo: "/branding/baggage-brands/astrophysics.png",
  },
  {
    name: "Gilardoni",
    category: "Baggage & X-Ray Screening",
    logo: "/branding/baggage-brands/gilardoni.png",
  },
  {
    name: "SureScan",
    category: "Security X-Ray Inspection",
    logo: "/branding/baggage-brands/surescan.png",
  },
  {
    name: "L3Harris",
    category: "Security Screening Technology",
    logo: "/branding/baggage-brands/l3harris.svg",
  },
  {
    name: "VMI Security",
    category: "X-Ray Inspection & Baggage Screening",
    logo: "/branding/baggage-brands/vmi-security.png",
  },
  {
    name: "XRC", website: "https://x-raycenter.com/en/main-page",
    category: "X-Ray Baggage & Security Screening",
    logo: "/branding/baggage-brands/transparent/xrc.png",
  },
  {
    name: "Scanna MSC", website: "https://www.scanna-msc.com/",
    category: "Security X-Ray Inspection Systems",
    logo: "/branding/baggage-brands/transparent/msc.png",
  },
]

export default function BaggageScannerPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat grayscale"
          style={{
            backgroundImage: 'url("/branding/baggage-xray-watermark.jpg")',
            opacity: 0.32,
            mixBlendMode: "screen",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.10),transparent_55%)]" />
      </div>

      <div className="relative z-10">

        <section className="border-b border-cyan-400/10 bg-slate-950/25">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-bold tracking-[0.35em] text-cyan-300">
                SECURITY EQUIPMENT
              </p>

              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                Baggage Scanner
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Advanced X-ray screening solutions for the inspection of
                baggage, parcels, cargo and other items at security-sensitive
                facilities.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/service-request"
                  className="rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-6 py-3 text-sm font-bold tracking-[0.16em] text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/20"
                >
                  REQUEST SERVICE
                </Link>

                <Link
                  href="/#equipment"
                  className="rounded-xl border border-slate-600/70 bg-slate-900/60 px-6 py-3 text-sm font-bold tracking-[0.16em] text-slate-200 transition hover:border-cyan-300/40"
                >
                  BACK TO EQUIPMENT
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-slate-700/50 bg-slate-950/55 p-8 backdrop-blur-[2px] md:p-12">
            <p className="text-sm font-bold tracking-[0.3em] text-cyan-300">
              EQUIPMENT OVERVIEW
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Intelligent X-Ray Security Screening
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              Baggage scanners provide non-intrusive inspection of baggage,
              parcels, cargo and personal belongings using X-ray imaging.
              Modern systems can combine high-resolution imaging, multi-view
              inspection, automated threat recognition and advanced image
              analysis to support security operators.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="mb-10">
            <p className="text-sm font-bold tracking-[0.3em] text-cyan-300">
              CORE CAPABILITIES
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Professional Screening Capabilities
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-700/50 bg-slate-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/75"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-slate-100">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-slate-700/50 bg-slate-950/60 p-8">
              <p className="text-sm font-bold tracking-[0.3em] text-cyan-300">
                APPLICATIONS
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Where Baggage Screening Matters
              </h2>

              <div className="mt-8 grid gap-3">
                {applications.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-700/50 bg-slate-900/60 px-5 py-4 text-slate-200"
                  >
                    <span className="mr-3 text-cyan-300">◆</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-300/15 bg-slate-950/60 p-8">
              <p className="text-sm font-bold tracking-[0.3em] text-cyan-300">
                TECHNICAL SERVICE
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Complete Equipment Support
              </h2>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {services.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-700/50 bg-slate-900/60 px-4 py-4 text-sm font-semibold text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-[2rem] border border-cyan-300/15 bg-slate-950/65 p-8 shadow-[0_0_50px_rgba(34,211,238,0.06)] backdrop-blur-sm md:p-12">

            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold tracking-[0.35em] text-cyan-300">
                GLOBAL MANUFACTURERS
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Global Baggage & X-Ray Screening Brands
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                A professional reference of international manufacturers and
                technology providers associated with X-ray, CT, baggage,
                parcel and security screening systems.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {manufacturers.map((brand) => (
                <div
                  key={brand.name}
                  className="group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/75 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-slate-900"
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-center bg-cover bg-no-repeat grayscale opacity-[0.10] mix-blend-screen transition duration-500 group-hover:opacity-[0.16]"
                    style={{
                      backgroundImage:
                        'url("/branding/baggage-xray-watermark.jpg")',
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-slate-950/35" />

                  <div className="relative z-10">
                    <div className="flex h-32 items-center justify-center rounded-xl bg-transparent px-6 py-4">
                      <img
                        src={brand.logo} loading="eager"
                        alt={`${brand.name} logo`}
                        className="h-28 w-auto max-w-[90%] object-contain"
                      />
                      <div className="mt-2 text-center text-base font-black tracking-tight text-slate-900">
                        {brand.name}
                      </div>
                    </div>

                    <div className="mt-5">
                      <h3 className="text-lg font-black text-white group-hover:text-cyan-200">
                        {brand.name}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        {brand.category}
                      </p>

                      <Link
                        href="/service-request"
                        className="mt-5 inline-flex rounded-lg border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-[10px] font-black tracking-[0.18em] text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/20"
                      >
                        SERVICE REQUEST
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-amber-300/15 bg-amber-300/5 p-5 text-sm leading-6 text-slate-400">
              <span className="font-bold text-amber-200">
                Certification & approval note:
              </span>{" "}
              Regulatory approvals and certifications apply to specific
              equipment models, configurations, standards and jurisdictions.
              They are therefore not presented here as a blanket certification
              claim for every product from every manufacturer.
            </div>

          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-700/50 bg-slate-950/60 p-8 md:p-12">
            <p className="text-sm font-bold tracking-[0.3em] text-cyan-300">
              TECHNICAL SUPPORT
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              SecureTech BD & Engineering Support
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              Technical support can be arranged according to equipment model,
              configuration, site requirements and service scope. Our
              maintenance approach covers installation, commissioning,
              troubleshooting, preventive and corrective maintenance,
              calibration, spare parts and AMC support.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-28">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-950/50 via-slate-950/80 to-indigo-950/50 p-10 text-center md:p-16">
            <p className="text-sm font-bold tracking-[0.3em] text-cyan-300">
              SERVICE & ENGINEERING
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Need Baggage Scanner Support?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-300">
              Contact SecureTech BD for professional security equipment
              maintenance, technical support and service requirements.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/service-request"
                className="rounded-xl border border-cyan-200/50 bg-cyan-300/10 px-7 py-3 text-sm font-black tracking-[0.16em] text-cyan-100 transition hover:bg-cyan-300/20"
              >
                REQUEST SERVICE
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-slate-600 bg-slate-900/70 px-7 py-3 text-sm font-black tracking-[0.16em] text-slate-100 transition hover:border-cyan-300/40"
              >
                CONTACT TEAM
              </Link>
            </div>
          </div>
        </section>

      </div>
    


</main>
  )
}
