const manufacturers = [
  "Hikvision","Dahua Technology","Axis Communications","Bosch Security Systems",
  "Hanwha Vision","Avigilon","Honeywell","Pelco","VIVOTEK","Uniview",
  "Mobotix","i-PRO","Panasonic","Sony","Teledyne FLIR","IDIS",
  "Infinova","GeoVision","ACTi","CP PLUS",
];

export default function CCTVManufacturerIdentityGrid() {
  return (
    <>
      <style>{`
        @keyframes cctvLensPulse {
          0%,100% { transform: scale(.9); opacity:.55; }
          50% { transform: scale(1.08); opacity:1; }
        }
        @keyframes cctvScanLine {
          0% { transform: translateY(-38px); opacity:0; }
          15% { opacity:1; }
          85% { opacity:1; }
          100% { transform: translateY(38px); opacity:0; }
        }
        @keyframes cctvRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cctvSignal {
          0%,100% { width:20%; opacity:.3; }
          50% { width:85%; opacity:1; }
        }
      `}</style>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {manufacturers.map((manufacturer, index) => (
          <article
            key={manufacturer}
            className="group relative overflow-hidden rounded-2xl border border-cyan-400/25 bg-slate-950 shadow-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/70"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-blue-500/[0.06]" />

            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                  CCTV OEM
                </span>
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>

              <div className="relative mt-6 flex h-40 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/20 bg-black">
                <div
                  className="absolute h-28 w-28 rounded-full border border-cyan-400/30"
                  style={{ animation: "cctvRotate 8s linear infinite" }}
                />
                <div className="absolute h-20 w-20 rounded-full border border-cyan-300/50" />
                <div
                  className="absolute h-12 w-12 rounded-full border-4 border-cyan-300/70 bg-cyan-400/10 shadow-[0_0_35px_rgba(34,211,238,.55)]"
                  style={{ animation: "cctvLensPulse 2s ease-in-out infinite" }}
                />
                <div className="absolute h-5 w-5 rounded-full bg-cyan-200 shadow-[0_0_25px_rgba(103,232,249,.95)]" />

                <div
                  className="absolute left-4 right-4 h-px bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.9)]"
                  style={{ animation: "cctvScanLine 2.2s ease-in-out infinite" }}
                />

                <div
                  className="absolute bottom-3 left-1/2 h-px -translate-x-1/2 bg-cyan-400"
                  style={{
                    width: "20%",
                    animation: "cctvSignal 1.8s ease-in-out infinite",
                    animationDelay: `${index * 120}ms`,
                  }}
                />
              </div>

              <div className="mt-6 border-l-2 border-cyan-400 pl-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Manufacturer Identity
                </p>
                <h3 className="mt-2 text-xl font-black tracking-tight text-white">
                  {manufacturer}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Professional video surveillance technology and security
                monitoring solutions.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Technical Technology Profile
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
