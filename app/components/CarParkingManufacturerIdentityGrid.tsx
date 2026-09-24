"use client";

const manufacturers = [
  "SKIDATA",
  "DESIGNA",
  "Kapsch TrafficCom",
  "TIBA Parking",
  "Nedap",
  "Hikvision",
  "Dahua Technology",
  "ZKTeco",
  "FAAC",
  "CAME",
  "Magnetic Autocontrol",
  "SWARCO",
  "TKH Security",
  "Amano McGann",
  "WPS Parking Systems",
  "Hub Parking Technology",
  "Scheidt & Bachmann",
  "ParkingEye",
  "Parkeon",
  "Flowbird",
  "Conduent Transportation",
  "Q-Free",
];

export default function CarParkingManufacturerIdentityGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {manufacturers.map((manufacturer, index) => (
        <div
          key={manufacturer}
          className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/90 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
        >
          <div className="relative h-[210px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
            <div className="absolute inset-x-7 top-1/2 h-px bg-cyan-300/20" />

            <div className="absolute left-8 top-1/2 h-20 w-28 -translate-y-1/2 rounded-lg border border-slate-500/70 bg-slate-800 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
              <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/50 bg-slate-950" />
              <div
                className="absolute left-1/2 top-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-cyan-300/80"
                style={{
                  animation: `parkingScan 3.8s ease-in-out ${index * 0.3}s infinite`,
                }}
              />
            </div>

            <div className="absolute right-8 top-1/2 h-4 w-28 -translate-y-1/2 rounded-full bg-slate-700">
              <div
                className="absolute bottom-0 left-0 h-12 w-2 origin-bottom rounded-full bg-slate-400 shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                style={{
                  animation: `parkingBarrier 3.8s ease-in-out ${index * 0.3}s infinite`,
                }}
              />
            </div>

            <div
              className="absolute bottom-5 left-1/2 h-1 w-36 -translate-x-1/2 rounded-full bg-cyan-300/70"
              style={{
                animation: `parkingPulse 3.8s ease-in-out ${index * 0.3}s infinite`,
              }}
            />

            <div className="absolute bottom-4 left-5 rounded-md border border-cyan-300/20 bg-slate-950/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              SMART PARKING • ANPR • ACCESS
            </div>
          </div>

          <div className="p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Parking Technology
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
              {manufacturer}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Parking access, vehicle identification, payment and parking-management technology.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
