"use client";

const manufacturers = [
  "Hikvision",
  "Dahua Technology",
  "Axis Communications",
  "Bosch Security Systems",
  "Hanwha Vision",
  "Avigilon",
  "Honeywell",
  "Pelco",
  "VIVOTEK",
  "Uniview",
  "Mobotix",
  "i-PRO",
  "Panasonic",
  "Sony",
  "Teledyne FLIR",
  "IDIS",
  "Infinova",
  "GeoVision",
  "ACTi",
  "CP PLUS",
  "Adiance",
  "Shenzhen Techgroup",
];

export default function CCTVManufacturerIdentityGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {manufacturers.map((manufacturer, index) => (
        <div
          key={manufacturer}
          className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/90 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
        >
          <div className="relative h-[210px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30" />
              <div className="absolute inset-x-6 top-1/2 h-px bg-cyan-300/20" />
              <div className="absolute inset-y-6 left-1/2 w-px bg-cyan-300/20" />
            </div>

            <div className="absolute left-1/2 top-1/2 h-24 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[45%] border-2 border-slate-400/60 bg-gradient-to-br from-slate-700 via-slate-900 to-black shadow-[0_0_35px_rgba(34,211,238,0.2)]">
              <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 bg-slate-950">
                <div
                  className="absolute left-1/2 top-1/2 h-1 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/80"
                  style={{
                    animation: `cctvScan 3.6s ease-in-out ${index * 0.35}s infinite`,
                  }}
                />
              </div>
              <div className="absolute -right-8 top-1/2 h-12 w-10 -translate-y-1/2 rounded-r-lg border border-slate-500/60 bg-slate-800" />
            </div>

            <div
              className="absolute inset-y-4 w-px bg-cyan-300/70 shadow-[0_0_18px_rgba(34,211,238,0.7)]"
              style={{
                animation: `cctvSweep 3.6s ease-in-out ${index * 0.35}s infinite`,
              }}
            />

            <div className="absolute bottom-4 left-5 rounded-md border border-cyan-300/20 bg-slate-950/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              CCTV • VIDEO SURVEILLANCE
            </div>
          </div>

          <div className="p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Surveillance Technology
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
              {manufacturer}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Professional video surveillance, network camera and security monitoring technology.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
