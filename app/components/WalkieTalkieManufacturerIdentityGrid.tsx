"use client";

const manufacturers = [
  "Motorola Solutions",
  "Hytera",
  "KENWOOD",
  "Tait Communications",
  "Sepura",
];

export default function WalkieTalkieManufacturerIdentityGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {manufacturers.map((manufacturer, index) => (
        <div
          key={manufacturer}
          className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl"
          style={{ animationDelay: `${index * 180}ms` }}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/50" />
            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40" />
            <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30" />
          </div>

          <div
            className="absolute left-1/2 top-1/2 h-px w-20 -translate-y-1/2 bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
            style={{
              animation: "radioSignalPulse 2.8s ease-in-out infinite",
              animationDelay: `${index * 520}ms`,
            }}
          />

          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Radio Communications
                </span>
                <span className="rounded-full border border-cyan-300/20 px-2 py-1 text-[9px] uppercase tracking-widest text-slate-400">
                  OEM
                </span>
              </div>

              <div className="mx-auto mb-6 flex h-24 w-16 items-center justify-center rounded-xl border border-cyan-300/25 bg-slate-900/90">
                <div className="relative h-16 w-9 rounded-md border border-cyan-300/50 bg-slate-950">
                  <div className="absolute -top-5 left-1/2 h-5 w-px -translate-x-1/2 bg-cyan-300/60" />
                  <div className="absolute left-1/2 top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300/70 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                  <div className="absolute bottom-3 left-1/2 h-1 w-5 -translate-x-1/2 rounded-full bg-cyan-300/30" />
                </div>
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-white">
                {manufacturer}
              </h3>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.18em] text-slate-500">
              <span>Two-Way Radio</span>
              <span>Technical Identity</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
