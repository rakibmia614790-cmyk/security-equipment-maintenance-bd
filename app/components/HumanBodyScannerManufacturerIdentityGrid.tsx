"use client";

const manufacturers = [
  "Smiths Detection",
  "Rapiscan Systems",
  "NUCTECH",
  "Rohde & Schwarz",
  "LINEV Systems",
  "Adani Systems",
  "Leidos",
  "Viken Detection",
  "Tek84",
  "ODSecurity",
  "Evolv Technology",
  "Liberty Defense",
];

export default function HumanBodyScannerManufacturerIdentityGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {manufacturers.map((manufacturer, index) => (
        <div
          key={manufacturer}
          className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl"
          style={{ animationDelay: `${index * 180}ms` }}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/50" />
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40" />
            <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30" />
          </div>

          <div
            className="absolute left-0 right-0 h-px bg-cyan-300/70 shadow-[0_0_14px_rgba(103,232,249,0.8)]"
            style={{
              animation: "bodyScannerSweep 3.8s ease-in-out infinite",
              animationDelay: `${index * 260}ms`,
            }}
          />

          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  People Screening
                </span>
                <span className="rounded-full border border-cyan-300/20 px-2 py-1 text-[9px] uppercase tracking-widest text-slate-400">
                  OEM
                </span>
              </div>

              <div className="mx-auto mb-6 flex h-24 w-20 items-center justify-center rounded-xl border border-cyan-300/20 bg-slate-900/80">
                <div className="relative h-16 w-10">
                  <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full border border-cyan-300/60" />
                  <div className="absolute left-1/2 top-5 h-9 w-7 -translate-x-1/2 rounded-[45%] border border-cyan-300/50" />
                  <div className="absolute bottom-0 left-1/2 h-6 w-8 -translate-x-1/2 border-x border-cyan-300/40" />
                </div>
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-white">
                {manufacturer}
              </h3>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.18em] text-slate-500">
              <span>Security Screening</span>
              <span>Technical Identity</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
