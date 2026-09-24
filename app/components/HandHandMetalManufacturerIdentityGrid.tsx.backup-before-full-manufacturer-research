"use client";

const manufacturers = [
  "Novus Automation",
  "CEIA",
  "Garrett Metal Detectors",
  "ZKTeco",
  "Reliance Electronics",
  "Siddhi Equipments",
  "PM Global Equipments",
  "Qualifina Systems",
];

export default function HandHandMetalManufacturerIdentityGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {manufacturers.map((manufacturer, index) => (
        <div
          key={manufacturer}
          className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/90 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
        >
          <div className="relative h-[210px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute inset-x-6 top-1/2 h-px bg-cyan-300/30" />
              <div className="absolute inset-y-6 left-1/2 w-px bg-cyan-300/20" />
              <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-cyan-300/10" />
              <div className="absolute bottom-6 right-8 h-20 w-20 rounded-full border border-cyan-300/10" />
            </div>

            <div
              className="absolute left-[42%] top-8 h-[155px] w-12 -rotate-6 rounded-[22px] border border-cyan-200/50 bg-gradient-to-b from-slate-500 via-slate-800 to-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.18)]"
              style={{
                animation: `hhmdScan 3.8s ease-in-out ${index * 0.42}s infinite`,
              }}
            >
              <div className="absolute left-1/2 top-3 h-5 w-5 -translate-x-1/2 rounded-full border border-cyan-200/60 bg-cyan-300/20" />
              <div className="absolute bottom-8 left-1/2 h-12 w-3 -translate-x-1/2 rounded-full bg-slate-950/80" />
              <div className="absolute -right-7 top-10 h-24 w-1 rounded-full bg-cyan-300/20 shadow-[0_0_18px_rgba(34,211,238,0.5)]" />
            </div>

            <div
              className="absolute left-1/2 top-1/2 h-1 w-[75%] -translate-x-1/2 bg-cyan-300/70 blur-[1px]"
              style={{
                animation: `hhmdPulse 3.8s ease-in-out ${index * 0.42}s infinite`,
              }}
            />

            <div className="absolute bottom-4 left-5 rounded-md border border-cyan-300/20 bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              HAND-HELD METAL DETECTOR
            </div>
          </div>

          <div className="p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Security Screening Technology
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
              {manufacturer}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Hand-held metal detection technology for personnel screening and secondary security inspection.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
