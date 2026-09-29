import Link from "next/link";
import CarParkingManufacturerIdentityGrid from "@/app/components/CarParkingManufacturerIdentityGrid";

export const metadata = {
  title: "Car Parking Management System | Security Equipment Maintenance BD",
  description:
    "Professional car parking management, vehicle access, ANPR, parking guidance, barrier integration and technical support solutions.",
};

const features = [
  ["Smart Vehicle Access", "Controlled vehicle entry and exit with integrated parking security technologies."],
  ["ANPR Integration", "Automatic number plate recognition for efficient vehicle identification and monitoring."],
  ["Parking Barrier Integration", "Seamless integration with automatic barriers and controlled vehicle lanes."],
  ["Ticket & Credential Management", "Flexible access credentials and parking control for different user groups."],
  ["Centralized Monitoring", "Monitor parking activity, access events and system status through connected platforms."],
  ["Professional Technical Support", "Installation, commissioning, configuration, maintenance, repair and troubleshooting."],
];

export default function CarParkingManagementPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/60">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
          <div className="h-96 w-96 rounded-full border border-cyan-400/20 animate-parking-pulse" />
          <div className="absolute h-64 w-64 rounded-full border border-cyan-400/30" />
          <div className="absolute left-[18%] right-[18%] top-[48%] h-px bg-cyan-300/70 animate-parking-scan" />
          <div className="absolute bottom-[17%] left-[22%] h-5 w-56 rounded-t-lg bg-cyan-300/60 shadow-[0_0_25px_rgba(34,211,238,.7)] animate-parking-barrier" />
          <div className="absolute right-[18%] top-[34%] h-16 w-24 rounded-xl border border-cyan-300/40 bg-cyan-400/5">
            <div className="absolute left-1/2 top-1/2 h-7 w-12 -translate-x-1/2 -translate-y-1/2 rounded border border-cyan-300/50" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Link href="/equipment" className="text-sm font-semibold text-cyan-300">
            ← Back to Equipment
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            Intelligent Vehicle Management
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Car Parking Management System
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional parking management solutions combining vehicle
            identification, controlled access, ANPR, parking barriers and
            centralized monitoring.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/service-request"
              className="rounded-xl bg-cyan-400 px-7 py-3 font-bold text-slate-950"
            >
              Request Service
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Parking Security
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Intelligent control for modern parking environments
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Integrated parking technologies help organizations manage vehicle
            access, identification, parking operations and security from a
            connected platform.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="mb-5 h-1 w-12 rounded-full bg-cyan-400" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Manufacturer Technologies
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Car Parking Technology Manufacturers
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            A professional technical showcase of established parking,
            vehicle-access, ANPR and intelligent transportation technology
            manufacturers.
          </p>

          <div className="mt-10">
            <CarParkingManufacturerIdentityGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/50 to-slate-900 p-8 sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Professional Technical Services
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Installation, Integration & Maintenance
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Professional installation, commissioning, system integration,
            preventive maintenance, corrective repair and technical
            troubleshooting.
          </p>

          <Link
            href="/service-request"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-3 font-bold text-slate-950"
          >
            Submit Service Request
          </Link>
        </div>
      </section>
    </main>
  );
}
