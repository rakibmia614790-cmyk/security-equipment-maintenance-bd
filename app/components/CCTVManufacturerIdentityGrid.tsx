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
];

export default function CCTVManufacturerIdentityGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {manufacturers.map((manufacturer, index) => (
        <article
          key={manufacturer}
          className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950 p-6 shadow-lg transition duration-500 hover:-translate-y-2 hover:border-cyan-300/50"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40" />
            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30" />
            <div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-400/40 animate-cctv-scan" />
          </div>

          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                CCTV Technology
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
            </div>

            <div className="mt-7 flex h-28 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80">
              <div className="relative h-16 w-24">
                <div className="absolute left-2 top-5 h-9 w-16 rounded-lg border-2 border-cyan-300/70" />
                <div className="absolute left-16 top-7 h-5 w-5 rounded-full border-2 border-cyan-300" />
                <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)]" />
                <div className="absolute left-8 top-14 h-1 w-10 bg-cyan-300/50" />
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              {manufacturer}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Video surveillance and security monitoring technology.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-cyan-300">
              <span className="h-px w-8 bg-cyan-400/60" />
              Manufacturer Identity
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
