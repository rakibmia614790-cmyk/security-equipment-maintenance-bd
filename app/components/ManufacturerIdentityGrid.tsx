const manufacturers = [
  "Smiths Detection",
  "Rapiscan Systems",
  "NUCTECH",
  "Leidos",
  "L3Harris Technologies",
  "Analogic",
  "Astrophysics",
  "Gilardoni",
  "VOTI Detection",
  "Autoclear",
  "CEIA",
  "Westminster International",
  "VMI Security",
  "Adani Systems",
  "Micro-X",
  "Teledyne ICM",
  "Todd Research",
  "Scanna MSC",
  "3DX-RAY",
  "LINEV Systems",
  "Safeway Inspection Systems",
  "Vehant Technologies",
  "FISCAN",
  "Shanghai Eastimage",
  "ZKTeco",
  "Aventura Technologies",
  "Kromek",
  "Viken Detection",
  "Rohde & Schwarz",
  "Thales",
  "Vanderlande",
  "Daifuku",
  "Siemens Logistics",
  "Beumer Group",
  "American Science & Engineering",
  "Morpho Detection",
  "Optosecurity",
  "Vidisco",
  "Tudor Scan Tech",
  "Varex Imaging",
];

export default function ManufacturerIdentityGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {manufacturers.map((name, index) => (
        <article
          key={name}
          className="group relative min-h-[118px] overflow-hidden rounded-xl border border-white/10 bg-[#091827] p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-[#0c2034]"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px), radial-gradient(circle at ${20 + (index % 5) * 18}% ${25 + (index % 4) * 15}%, rgba(14,165,233,0.18), transparent 42%)`,
              backgroundSize: "18px 18px, 18px 18px, 100% 100%",
            }}
          />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-sky-400/80">
                X-RAY / CT
              </span>
              <span className="h-2 w-2 rounded-full bg-sky-400/70 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
            </div>
            <div className="mt-5">
              <h3 className="text-sm font-bold leading-tight text-white">
                {name}
              </h3>
              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-slate-500">
                Security Screening
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
