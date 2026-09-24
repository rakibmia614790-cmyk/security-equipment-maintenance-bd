"use client";

const manufacturers = [
  "Frontier Pitts",
  "Heald",
  "Delta Scientific",
  "FAAC",
  "CAME",
  "BFT",
  "Nice",
  "Automatic Systems",
  "Gunnebo",
  "Magnetic Autocontrol",
  "Hormann",
  "ATG Access",
  "Jacksons Fencing",
  "Cova Security Gates",
  "Pilomat",
  "Bollards International",
  "ZKTeco",
  "Dahua Technology",
  "Hikvision",
  "TIBA Parking",
  "Roger Technology",
  "SEA",
];

export default function RoadBlockerManufacturerIdentityGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {manufacturers.map((manufacturer, index) => (
        <div
          key={manufacturer}
          className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/90 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
        >
          <div className="relative h-[210px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
            <div className="absolute inset-x-7 bottom-9 h-2 rounded-full bg-slate-700/90" />

            <div
              className="absolute bottom-10 left-1/2 h-24 w-40 -translate-x-1/2 rounded-t-xl border-2 border-slate-400/60 bg-gradient-to-b from-slate-700 to-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              style={{
                animation: `roadBlockerRise 4s ease-in-out ${index * 0.3}s infinite`,
              }}
            >
              <div className="absolute inset-x-5 top-5 h-1 rounded-full bg-cyan-300/60" />
              <div className="absolute inset-x-8 top-10 h-1 rounded-full bg-cyan-300/40" />
            </div>

            <div
              className="absolute bottom-7 left-1/2 h-1 w-48 -translate-x-1/2 rounded-full bg-cyan-300/80 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
              style={{
                animation: `roadBlockerPulse 4s ease-in-out ${index * 0.3}s infinite`,
              }}
            />

            <div className="absolute left-5 top-5 rounded-md border border-cyan-300/20 bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              HYDRAULIC ROAD BLOCKER
            </div>
          </div>

          <div className="p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Vehicle Security Technology
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
              {manufacturer}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Vehicle access protection and high-security road barrier technology.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
