"use client";

import { FormEvent, useState } from "react";
import DhakaInfoPanel from "./components/DhakaInfoPanel"
import SecurityIntelligence from "./components/SecurityIntelligence"

const equipment = [
  ["Baggage Scanner", "/equipment/baggage-scanner", "X-RAY / INSPECTION", "BAG"],
  ["Walk Through Metal Detector", "/equipment/walk-through-metal-detector", "PEOPLE SCREENING", "WTMD"],
  ["Hand-Held Metal Detector", "/equipment/hand-held-metal-detector", "HAND SCREENING", "HHMD"],
  ["Explosive Trace Detection", "/equipment/explosive-trace-detection", "TRACE DETECTION", "ETD"],
  ["CCTV System", "/equipment/cctv-system", "VIDEO SECURITY", "CCTV"],
  ["Access Control System", "/equipment/access-control-system", "ENTRY SECURITY", "ACS"],
  ["Road Barrier / Road Blocker", "/equipment/road-barrier-road-blocker", "VEHICLE SECURITY", "RBR"],
  ["Car Parking Management", "/equipment/car-parking-management", "PARKING CONTROL", "CPM"],
  ["Bollard", "/equipment/bollard", "PERIMETER SECURITY", "BLD"],
  ["Gate / Flap Barrier", "/equipment/gate-flap-barrier", "ACCESS CONTROL", "GFB"],
  ["ANPR", "/equipment/anpr", "VEHICLE IDENTIFICATION", "ANPR"],
];

const services = [
  ["01", "INSPECT", "Equipment condition assessment and technical inspection."],
  ["02", "DIAGNOSE", "Systematic fault identification and technical diagnosis."],
  ["03", "REPAIR", "Professional repair, replacement and corrective maintenance."],
  ["04", "TEST", "Functional testing, calibration and performance verification."],
  ["05", "MAINTAIN", "Preventive maintenance, AMC and ongoing technical support."],
];

const capabilities = [
  "X-RAY SCREENING",
  "EXPLOSIVE TRACE DETECTION",
  "METAL DETECTION",
  "CCTV & SURVEILLANCE",
  "ACCESS CONTROL",
  "VEHICLE SECURITY",
];

export default function Home() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          authority_company: data.get("authority_company"),
          phone: data.get("phone"),
          email: data.get("email"),
          equipment: data.get("equipment"),
          message: data.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Request failed");
      }

      setStatus("SERVICE REQUEST RECEIVED — OUR TEAM WILL CONTACT YOU.");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? `REQUEST ERROR — ${error.message}`
          : "REQUEST ERROR — PLEASE TRY AGAIN."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="security-page-bg min-h-screen text-white">
      {/* TECHNOLOGY ATMOSPHERE */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full border border-cyan-400/10" />
        <div className="absolute left-[12%] top-[22%] h-56 w-56 rounded-full border border-cyan-400/5" />
        <div className="absolute right-[8%] top-[12%] h-96 w-96 rounded-full border border-blue-400/10" />
        <div className="absolute right-[13%] top-[17%] h-72 w-72 rounded-full border border-blue-400/5" />
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-cyan-400/25 bg-slate-950/95 shadow-[0_12px_45px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
  <div className="mx-auto max-w-[1750px] px-4 sm:px-6 lg:px-8">

    <div className="flex min-h-[175px] items-center justify-between gap-8 py-5">

      <a href="/" className="group flex shrink-0 items-center">
        <div className="relative">
          
          <img
            src="/branding/securetech-logo.svg"
            alt="SecureTech BD"
            className="relative h-40 w-auto max-w-[560px] object-contain drop-shadow-[0_0_32px_rgba(34,211,238,0.5)] transition duration-500 group-hover:scale-[1.025]"
          />
        </div>
      </a>

      <div className="hidden items-center gap-3 lg:flex">
        
        
      </div>
    </div>

    
<div className="flex justify-end items-start w-full px-6 -mt-36"><div className="flex-1 flex justify-center items-center [transform:translateX(200px)]"><SecurityIntelligence /></div>
<DhakaInfoPanel /></div>
<nav className="border-t border-cyan-400/15 py-4">

  <div className="mx-auto flex max-w-6xl flex-col gap-2">

    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      <a href="/" className="nav-premium">HOME</a>
      <a href="/equipment" className="nav-premium">EQUIPMENT</a>

      <details className="group relative">
        <summary className="nav-premium cursor-pointer list-none">
          OUR PROJECT & CLIENTS <span className="ml-1 text-cyan-300">▾</span>
        </summary>

        <div className="absolute left-1/2 top-full z-[100] mt-2 w-80 -translate-x-1/2 rounded-2xl border border-cyan-400/30 bg-slate-950/98 p-2 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl">
          <a href="/bangladesh-clients" className="block rounded-xl px-5 py-4 text-sm font-bold tracking-wide text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-300">
            BANGLADESH CLIENTS
          </a>
          <a href="/international-projects" className="block rounded-xl px-5 py-4 text-sm font-bold tracking-wide text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-300">
            INTERNATIONAL CLIENTS & PROJECTS
          </a>
        </div>
      </details>

      <a href="/services" className="nav-premium">SERVICES</a>
    </div>

    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      <a href="/service-request" className="nav-premium nav-featured">SERVICE REQUEST</a>
      <a href="/our-team" className="nav-premium">OUR TEAM</a>
      <a href="/about-us" className="nav-premium">ABOUT US</a>
      <a href="/contact" className="nav-premium">CONTACT</a>
    </div>

    <div className="mt-2 flex justify-center">
      <div className="flex items-center gap-2 rounded-2xl border border-cyan-400/25 bg-slate-900/70 p-2 shadow-[0_0_25px_rgba(34,211,238,0.08)] backdrop-blur-xl">
        

        
      </div>
    </div>

  </div>

<div className="mt-3 flex justify-center">
  <div className="flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-slate-900/90 p-2 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
    
    
  </div>
</div>

<div className="mt-3 flex justify-center">
  <div className="flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-slate-900/90 p-2 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
    <a href="/partner-login" className="nav-premium rounded-xl border border-cyan-400/30 px-6 py-3 text-cyan-200 hover:bg-cyan-400/10">
      LOGIN <span className="ml-2 text-[9px] tracking-[0.12em] text-slate-400">(Restricted — Only for SecureTech BD)</span>
    </a>
    <a href="#contact" className="nav-call rounded-xl border border-cyan-400/30 px-6 py-3 text-cyan-200 hover:bg-cyan-400/10">
      CALL US
    </a>
  </div>
</div>
</nav>
  </div>
</header>
<style>{`
  .nav-premium {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: 0.72rem 1.15rem;
    border: 1px solid rgba(34,211,238,0.18);
    border-radius: 0.8rem;
    color: rgb(226 232 240);
    background: linear-gradient(180deg, rgba(15,23,42,0.72), rgba(15,23,42,0.38));
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-shadow: 0 1px 8px rgba(34,211,238,0.22);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 14px rgba(0,0,0,0.16);
    transition: all 220ms ease;
  }

  .nav-premium:hover {
    color: rgb(103 232 249);
    border-color: rgba(34,211,238,0.55);
    background: linear-gradient(180deg, rgba(34,211,238,0.12), rgba(30,64,175,0.12));
    transform: translateY(-2px);
    text-shadow: 0 0 12px rgba(34,211,238,0.55);
    box-shadow: 0 7px 22px rgba(34,211,238,0.13), inset 0 1px 0 rgba(255,255,255,0.08);
  }

  .nav-featured {
    color: rgb(103 232 249);
    border-color: rgba(34,211,238,0.42);
    background: linear-gradient(180deg, rgba(34,211,238,0.14), rgba(30,64,175,0.12));
    box-shadow: 0 0 20px rgba(34,211,238,0.08), inset 0 1px 0 rgba(255,255,255,0.07);
  }

  .nav-call {
    display: inline-flex;
    align-items: center;
    min-height: 46px;
    padding: 0.72rem 1.15rem;
    border-radius: 0.8rem;
    background: linear-gradient(180deg, rgb(103 232 249), rgb(34 211 238));
    color: rgb(2 6 23);
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    box-shadow: 0 5px 0 rgb(8 47 73), 0 0 18px rgba(34,211,238,0.25);
  }
`}</style>


      {/* HERO */}
      

      

      {/* CAPABILITY STRIP */}
      <section className="relative z-10 border-y border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-5 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {capabilities.map((item) => (
            <div
              key={item}
              className="border-white/10 px-4 py-3 text-center text-[9px] font-bold tracking-[0.16em] text-white/45 sm:border-r"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-20">
  <div className="mb-12 text-center">
    <p className="mb-3 text-sm font-bold tracking-[0.35em] text-cyan-300">
      SECURITY EQUIPMENT
    </p>
    <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
      Advanced Security Solutions
    </h2>
    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400">
      Professional security screening, detection, surveillance, access,
      communication, and perimeter protection solutions.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {[
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
    ].map(([name, shortName, description, href, image]) => (
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
            <span className="text-[11px] font-black tracking-wider">{shortName}</span>
          </div>

          <h3 className="text-lg font-extrabold leading-7 text-white transition-colors duration-300 group-hover:text-cyan-300">
            {name}
          </h3>

          <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-200">
            {description}
          </p>

          <a
            href={href}
            className="mt-auto inline-flex w-fit rounded-lg border border-cyan-400/50 bg-slate-950/65 px-4 py-2 text-xs font-bold tracking-[0.16em] text-cyan-300 backdrop-blur-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 hover:border-cyan-200 hover:bg-cyan-950/80 hover:text-white"
          >
            VIEW DETAILS
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* SERVICES */}
      <section id="services" className="relative z-10 border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
            02 / ENGINEERING PROCESS
          </div>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            SECURITY EQUIPMENT SERVICES
          </h2>

          <div className="mt-12 grid gap-3 lg:grid-cols-5">
            {services.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <div className="text-3xl font-black text-cyan-300/60">
                  {number}
                </div>
                <div className="mt-8 text-sm font-black tracking-[0.2em]">
                  {title}
                </div>
                <p className="mt-3 text-xs leading-5 text-white/40">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST */}
      

      <section id="request" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
              03 / FIELD REQUEST
            </div>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              REQUEST A SERVICE
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/45">
              Tell us about your equipment, system or technical requirement.
              Our service team can review the request and coordinate the next
              technical step.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Repair & Corrective Maintenance",
                "Preventive Maintenance & AMC",
                "Installation & Commissioning",
                "Spare Parts & Technical Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 text-xs text-white/60"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={submitRequest}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <div className="mb-7 flex items-center justify-between">
              <div>
                <div className="text-xs font-black tracking-[0.2em] text-cyan-300">
                  SERVICE REQUEST
                </div>
                <div className="mt-1 text-[9px] tracking-widest text-white/30">
                  TECHNICAL INTAKE FORM
                </div>
              </div>
              <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/40"
              />
              <input
                name="authority_company"
                placeholder="Company / Authority"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/40"
              />
              <input
                name="phone"
                required
                placeholder="Phone Number"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/40"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/40"
              />
            </div>

            <select
              name="equipment"
              required
              defaultValue=""
              className="mt-4 w-full rounded-xl border border-white/10 bg-[#050a14] px-4 py-3 text-sm text-white/70 outline-none focus:border-cyan-300/40"
            >
              <option value="" disabled>Select Equipment / System</option>
              {equipment.map(([name]) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>

            <textarea
              name="message"
              required
              rows={6}
              placeholder="Describe the equipment, fault, maintenance requirement or project..."
              className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/40"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full rounded-xl bg-cyan-300 px-5 py-3.5 text-sm font-black tracking-wider text-[#020611] transition hover:bg-cyan-200 disabled:opacity-50"
            >
              {loading ? "TRANSMITTING REQUEST..." : "SUBMIT SERVICE REQUEST →"}
            </button>

            {status && (
              <div className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-xs leading-5 text-cyan-200">
                {status}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="text-[10px] font-bold tracking-[0.35em] text-cyan-300">
            04 / COMMUNICATION
          </div>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            CONTACT US
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="tel:+8801799419011"
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-300/30"
            >
              <div className="text-[9px] tracking-[0.25em] text-white/30">CALL US</div>
              <div className="mt-3 text-lg font-black text-cyan-300">01799 419011</div>
            </a>

            <a
              href="https://wa.me/8801518698236"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-300/30"
            >
              <div className="text-[9px] tracking-[0.25em] text-white/30">WHATSAPP</div>
              <div className="mt-3 text-lg font-black text-cyan-300">01518 698236</div>
            </a>

            <a
              href="mailto:rakibmia614790@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-300/30"
            >
              <div className="text-[9px] tracking-[0.25em] text-white/30">EMAIL</div>
              <div className="mt-3 break-all text-sm font-black text-cyan-300">
                rakibmia614790@gmail.com
              </div>
            </a>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <div className="text-[9px] tracking-[0.25em] text-white/30">SERVICE AREA</div>
              <div className="mt-3 text-lg font-black text-cyan-300">
                BANGLADESH
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      
<footer className="relative z-10 border-t border-white/10 bg-[#01040a]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-[9px] tracking-[0.18em] text-white/30 sm:flex-row lg:px-8">
          
          <div>© 2026 ALL RIGHTS RESERVED</div>
        </div>
      </footer>
    </main>
  );
}
