"use client";

const manufacturers = [
  "HID Global",
  "Suprema",
  "ZKTeco",
  "Johnson Controls",
  "Honeywell",
  "Bosch Security Systems",
  "ASSA ABLOY",
  "dormakaba",
  "Gallagher Security",
  "Nedap",
  "Axis Communications",
  "Allegion",
  "SALTO Systems",
  "NICE",
  "IDEMIA",
  "Vanderbilt",
  "HID Mobile Access",
  "Matrix Comsec",
  "eSSL Security",
  "Anviz",
  "Invixium",
  "Rosslare Security",
];

export default function AccessControlManufacturerIdentityGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {manufacturers.map((manufacturer, index) => (
        <div
          key={manufacturer}
          className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/90 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
        >
          <div className="relative h-[210px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
            <div className="absolute left-1/2 top-1/2 h-36 w-52 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-cyan-300/20 bg-slate-950/70" />

            <div className="absolute left-1/2 top-1/2 h-28 w-20 -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-slate-400/70 bg-gradient-to-b from-slate-700 to-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.15)]">
              <div className="absolute left-1/2 top-7 h-8 w-8 -translate-x-1/2 rounded-full border border-cyan-300/50 bg-slate-950" />
              <div className="absolute left-1/2 top-20 h-1 w-10 -translate-x-1/2 rounded-full bg-cyan-300/70" />
            </div>

            <div
              className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/50"
              style={{
                animation: `accessPulse 3.8s ease-in-out ${index * 0.3}s infinite`,
              }}
            />

            <div
              className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
              style={{
                animation: `accessPulse 3.8s ease-in-out ${index * 0.3 + 0.4}s infinite`,
              }}
            />

            <div className="absolute bottom-4 left-5 rounded-md border border-cyan-300/20 bg-slate-950/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              SECURE ACCESS • AUTHENTICATION
            </div>
          </div>

          <div className="p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Access Control Technology
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
              {manufacturer}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Secure access, credential management, biometric and door-control technology.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
