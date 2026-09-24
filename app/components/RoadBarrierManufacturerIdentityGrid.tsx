"use client";

const manufacturers = [
  "FAAC",
  "CAME",
  "BFT",
  "Nice",
  "Magnetic Autocontrol",
  "Automatic Systems",
  "Gunnebo",
  "Hörmann",
  "TIBA Parking",
  "Boon Edam",
  "ZKTeco",
  "Dahua Technology",
  "Hikvision",
  "Roger Technology",
  "SEA",
  "Benincà",
  "DITEC",
  "ELKA",
  "Fadini",
  "Genius",
  "ANPR International",
  "Parking Facilities",
];

export default function RoadBarrierManufacturerIdentityGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {manufacturers.map((manufacturer, index) => (
        <div
          key={manufacturer}
          className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/90 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
        >
          <div className="relative h-[210px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
            <div className="absolute inset-0 opacity-25">
              <div className="absolute left-8 right-8 top-1/2 h-px bg-cyan-300/30" />
              <div className="absolute bottom-8 left-1/2 top-8 w-px bg-cyan-300/20" />
              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />
            </div>

            <div className="absolute bottom-10 left-8 right-8 h-2 rounded-full bg-slate-700/90">
              <div
                className="absolute -top-8 left-0 h-8 w-3/5 origin-left rounded-full border-2 border-slate-400/70 bg-gradient-to-r from-slate-700 to-slate-500 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                style={{
                  animation: `barrierArm 3.8s ease-in-out ${index * 0.3}s infinite`,
                }}
              />
              <div className="absolute -top-3 left-0 h-5 w-5 rounded-full border border-cyan-300/60 bg-slate-950" />
            </div>

            <div
              className="absolute bottom-10 left-1/2 h-1 w-24 rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
              style={{
                animation: `barrierPulse 3.8s ease-in-out ${index * 0.3}s infinite`,
              }}
            />

            <div className="absolute bottom-4 left-5 rounded-md border border-cyan-300/20 bg-slate-950/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              AUTOMATIC VEHICLE BARRIER
            </div>
          </div>

          <div className="p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Barrier Technology
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
              {manufacturer}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Automatic boom barrier and vehicle access-control technology.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
