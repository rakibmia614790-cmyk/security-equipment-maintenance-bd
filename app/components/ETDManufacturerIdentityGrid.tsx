const manufacturers = [
  "Smiths Detection",
  "Rapiscan Systems",
  "Autoclear",
  "Scintrex Trace",
  "NUCTECH",
  "Scanna MSC",
];

export default function ETDManufacturerIdentityGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {manufacturers.map((name, index) => (
        <div
          key={name}
          className="group relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-slate-950 p-6"
          style={{ animationDelay: `${index * 140}ms` }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-etd-scan" />
          <div className="relative h-36 overflow-hidden rounded-xl border border-white/10 bg-slate-900">
            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30 animate-etd-pulse" />
            <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/50" />
            <div className="absolute bottom-5 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-cyan-400 animate-etd-beam" />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-white">{name}</h3>
          <p className="mt-2 text-sm text-slate-400">
            Explosive and trace-detection technology manufacturer.
          </p>
        </div>
      ))}
    </div>
  );
}
