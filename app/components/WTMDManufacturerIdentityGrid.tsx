const manufacturers = [
  "CEIA",
  "Garrett Metal Detectors",
  "Rapiscan Systems",
  "Metor",
  "AutoClear",
  "Vallon",
  "Ranger Security Detectors",
  "View Systems",
  "Westminster International",
  "ZKTeco",
  "Dahua Technology",
  "Hikvision",
];

export default function WTMDManufacturerIdentityGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {manufacturers.map((name, index) => (
        <article
          key={name}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#071421] shadow-[0_12px_35px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_18px_45px_rgba(6,182,212,0.16)]"
        >
          <div className="relative h-[175px] overflow-hidden border-b border-white/10 bg-[#020b12]">
            <div className="absolute inset-0 opacity-80">
              <svg viewBox="0 0 800 360" className="h-full w-full">
                <defs>
                  <linearGradient id={`gate-${index}`} x1="0" x2="1">
                    <stop offset="0" stopColor="#164e63" />
                    <stop offset="0.5" stopColor="#67e8f9" />
                    <stop offset="1" stopColor="#164e63" />
                  </linearGradient>
                </defs>

                <rect width="800" height="360" fill="#020b12" />
                <path d="M260 320V70h280v250" fill="none" stroke="#155e75" strokeWidth="18" />
                <path d="M275 310V82h250v228" fill="none" stroke={`url(#gate-${index})`} strokeWidth="3" />

                <circle cx="400" cy="125" r="30" fill="none" stroke="#67e8f9" strokeWidth="3" />
                <path d="M400 155v82M365 195h70M400 237l-32 58M400 237l32 58" fill="none" stroke="#67e8f9" strokeWidth="5" />

                {[110, 145, 180, 215, 250].map((x, i) => (
                  <rect
                    key={x}
                    x={x}
                    y="305"
                    width="18"
                    height="9"
                    rx="4"
                    fill="#22d3ee"
                    opacity="0.55"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.2;1;0.2"
                      dur="2.8s"
                      begin={`${(index * 0.35) + (i * 0.12)}s`}
                      repeatCount="indefinite"
                    />
                  </rect>
                ))}

                <g opacity="0.8">
                  <path d="M285 105H515M285 145H515M285 185H515M285 225H515M285 265H515" stroke="#164e63" strokeWidth="1" />
                </g>

                <rect
                  x="285"
                  y="82"
                  width="5"
                  height="228"
                  fill="#67e8f9"
                  opacity="0.8"
                >
                  <animate
                    attributeName="x"
                    values="285;510;285"
                    dur="4.6s"
                    begin={`${index * 0.42}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.9;0"
                    dur="4.6s"
                    begin={`${index * 0.42}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#071421] via-transparent to-transparent" />

            <div className="absolute left-4 top-4 rounded-md border border-cyan-300/20 bg-[#06131f]/80 px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                WALK-THROUGH METAL DETECTOR
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
                MULTI-ZONE ELECTROMAGNETIC DETECTION
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
