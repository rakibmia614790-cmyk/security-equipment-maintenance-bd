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
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {manufacturers.map((name, index) => (
        <article
          key={name}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#071421] shadow-[0_12px_35px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-[0_18px_45px_rgba(14,165,233,0.16)]"
        >
          <div className="relative h-[175px] overflow-hidden border-b border-white/10 bg-[#020b12]">
            <img
              src="/xray-baggage-scan.svg"
              alt=""
              className="absolute inset-0 h-full w-full object-contain opacity-75 transition duration-500 group-hover:scale-[1.03]"
            />

            <div
              className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent blur-[2px] animate-[scan_4.8s_ease-in-out_infinite]"
              style={{ animationDelay: `${index * 0.42}s` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071421] via-transparent to-transparent" />

            <div className="absolute left-4 top-4 rounded-md border border-cyan-300/20 bg-[#06131f]/80 px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                CONVENTIONAL X-RAY SYSTEM
              </span>
            </div>

            <div className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
          </div>

          <div className="px-5 py-5">
            <h3 className="text-lg font-extrabold leading-tight tracking-tight text-white sm:text-xl">
              {name}
            </h3>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-px w-8 bg-cyan-400/70" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                HIGH-ENERGY X-RAY SYSTEM
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
