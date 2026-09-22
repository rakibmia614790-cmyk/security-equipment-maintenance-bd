import EquipmentBrandLogos from "./EquipmentBrandLogos";

const equipment = [
  ["Baggage Scanner","BS","Advanced X-ray screening systems for baggage and parcel inspection.","/equipment/baggage-scanner","https://image.made-in-china.com/2f0j00bRvYCdPlrAkD/High-Conveyor-600-400mm-Tunnel-Mobile-X-ray-Small-Baggage-and-Parcel-Scanner.jpg"],
  ["Walk Through Metal Detector","WTMD","High-performance personnel screening for controlled access points.","/equipment/walk-through-metal-detector","https://www.nicepng.com/png/detail/421-4219023_security-scan-walk-through-metal-detector-security-turnstile.png"],
  ["Hand-Held Metal Detector","HHMD","Portable metal detection for rapid and flexible security screening.","/equipment/hand-held-metal-detector","https://thietbibuudien.vn/uploads/images/images/may-do-garrett-1165180.jpg"],
  ["Explosive Detection System / ETD","ETD","Trace detection technology for explosive and security threat screening.","/equipment/explosive-trace-detector","https://www.tsatrace.com/assets/images/Itemiser-DX.jpg"],
  ["CCTV System","CCTV","Professional video surveillance and security monitoring solutions.","/equipment/cctv","https://spsecuritycamerashouston.com/assets/product-16cam-4mp-CBD2G-TT.webp"],
  ["Road Barrier","RB","Automated vehicle access control for secure facilities and checkpoints.","/equipment/road-barrier","https://yotechno.in/wp-content/uploads/2021/06/Parking-Barrier-CMP200-800x800.png"],
  ["Road Blocker","RBL","Heavy-duty vehicle mitigation and high-security perimeter protection.","/equipment/road-blocker","https://www.madoors.com.tr/storage/photos/May2018/road-blocker.jpeg"],
  ["Access Control System","ACS","Secure identity, entry, and restricted-area management solutions.","/equipment/access-control","https://s.alicdn.com/%40sc04/kf/Hccf96541295d4a39b1170fd5796719c7g/Stable-Performance-Use-Low-Operation-Cost-Full-Height-Turnstile-for-Outdoor-High-security-Areas.jpg"],
  ["Car Parking Management System","CPMS","Integrated parking access, control, and management technology.","/equipment/car-parking-management","https://yotechno.in/wp-content/uploads/2021/06/Parking-Barrier-CMP200-800x800.png"],
  ["Bollard","BOL","Security bollards for controlled vehicle access and perimeter protection.","/equipment/bollard","https://perimeter-automation.co.uk/wp-content/uploads/2023/01/Perimeter-Solutions-Automation-Security-Bollard-Kent-5.jpg"],
  ["Human Body Scanner","HBS","Advanced personnel screening technology for detecting concealed security threats.","/equipment/human-body-scanner","https://unival-group.com/media/3816/download/R%26S%C2%AEQPS201-02.jpg?v=1"],
  ["Walkie-Talkie","WT","Reliable two-way communication for security teams and field operations.","/equipment/walkie-talkie","https://www.nhatthuc.com.vn/images_upload/bo-dam-motorola-apx-1000i-4.jpg"],
];

const brandMap: Record<string, string[]> = {
  "Baggage Scanner": ["Smiths Detection","Rapiscan Systems","Nuctech","L3Harris","Analogic","Astrophysics","Gilardoni","Scanna MSC"],
  "Walk Through Metal Detector": ["CEIA","Garrett","Smiths Detection","Rapiscan Systems","Nuctech"],
  "Hand-Held Metal Detector": ["Garrett","CEIA","Smiths Detection","Rapiscan Systems","Nuctech"],
  "Explosive Detection System / ETD": ["Smiths Detection","Rapiscan Systems","Nuctech"],
  "CCTV System": ["Hikvision","Dahua Technology","Axis Communications","Bosch","Hanwha Vision","UNV"],
  "Road Barrier": ["FAAC","CAME","BFT","Magnetic Autocontrol"],
  "Road Blocker": ["FAAC","CAME","BFT","Magnetic Autocontrol"],
  "Access Control System": ["HID","Suprema","ZKTeco","Hikvision","Dahua Technology"],
  "Car Parking Management System": ["SKIDATA","DESIGNA","Amano","FAAC"],
  "Bollard": ["FAAC","CAME","BFT","Pilomat"],
  "Human Body Scanner": ["Rohde & Schwarz","Nuctech","Smiths Detection","L3Harris"],
  "Walkie-Talkie": ["Motorola Solutions","Hytera","Kenwood","Icom","Tait"],
};

export default function EquipmentPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative mx-auto w-full max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.35em] text-cyan-300">
            SECURITY EQUIPMENT
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Advanced Security Solutions
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400">
            Professional security screening, detection, surveillance, access,
            communication, and perimeter protection solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {equipment.map(([name, shortName, description, href, image]) => (
            <div
              key={name}
              className="group relative min-h-[330px] overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/90 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.45),0_0_30px_rgba(34,211,238,0.12)]"
            >
              <div
                className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-[0.30] grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-[0.42]"
                style={{ backgroundImage: `url("${image}")` }}
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/35 via-slate-950/65 to-slate-950/90" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-70" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/40 bg-slate-950/65 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)] backdrop-blur-sm">
                  <span className="text-[11px] font-black tracking-wider">
                    {shortName}
                  </span>
                </div>

                <h2 className="text-lg font-extrabold leading-7 text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {name}
                </h2>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-200">
                  {description}
                </p>

                <EquipmentBrandLogos brands={brandMap[name] ?? []} />

                <a
                  href={href}
                  className="mt-auto inline-flex w-fit rounded-lg border border-cyan-400/50 bg-slate-950/65 px-4 py-2 text-xs font-bold tracking-[0.16em] text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-950/80 hover:text-white"
                >
                  VIEW DETAILS →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
