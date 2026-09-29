import type { Metadata } from "next";
import EquipmentManufacturerShowcase from "@/app/components/EquipmentManufacturerShowcase";

export const metadata: Metadata = {
  title: "Baggage / Luggage Scanner | Security Equipment Maintenance BD",
  description:
    "Baggage scanner supply, installation, commissioning, maintenance, repair and technical support.",
};

const manufacturers = [
  ["Smiths Detection","Security Screening","Dual-energy X-ray screening","Airports, aviation and critical facilities","Baggage inspection and screening systems"],
  ["Rapiscan Systems","Security Screening","X-ray inspection technology","Airports, ports and high-security facilities","Baggage and parcel screening"],
  ["NUCTECH","Security Inspection","X-ray inspection systems","Airports, customs and security facilities","Security inspection technology"],
  ["Astrophysics Inc.","X-ray Screening","Advanced X-ray imaging","Airports and security checkpoints","Baggage screening equipment"],
  ["Leidos","Security Screening","Advanced detection systems","Aviation and government facilities","Integrated security screening"],
  ["VMI Security","X-ray Inspection","Security X-ray technology","Airports and infrastructure","Baggage and parcel inspection"],
  ["Gilardoni","X-ray Inspection","Industrial and security X-ray imaging","Aviation and inspection environments","X-ray inspection technology"],
  ["LINEV Systems","X-ray Screening","X-ray security inspection","Airports and public facilities","Security screening solutions"],
  ["Adani Systems","Security Screening","X-ray inspection technology","Airports and customs","Baggage and cargo screening"],
  ["Safeway Inspection Systems","X-ray Screening","Security inspection imaging","Airports and checkpoints","X-ray screening systems"],
  ["Shanghai Eastimage","Security Inspection","X-ray inspection systems","Airports, customs and transportation","Security screening equipment"],
  ["3DX-RAY","X-ray Screening","X-ray security imaging","Security and inspection environments","X-ray screening technology"],
  ["FISCAN","Security Inspection","X-ray inspection systems","Airports and customs","Baggage inspection solutions"],
  ["VOTI Detection","X-ray Screening","3D X-ray inspection","Airports and transportation","Advanced security screening"],
  ["Autoclear","Security Screening","X-ray inspection and detection","Airports and security facilities","Automated screening solutions"],
  ["Teledyne ICM","X-ray Technology","Portable and specialized X-ray","Security and inspection","X-ray inspection technology"],
  ["Kromek","Detection Technology","X-ray and radiation detection","Security and critical infrastructure","Detection technologies"],
  ["Analogic","Security Technology","Computed tomography screening","Aviation and security","Advanced screening technology"],
  ["L3Harris Technologies","Security Screening","Computed tomography and detection","Aviation and government","Security screening technologies"],
  ["Vanderlande","Airport Systems","Automated baggage handling","Airports and logistics","Integrated baggage systems"],
  ["BEUMER Group","Airport Logistics","Baggage handling technology","Airports and logistics","Automated baggage systems"],
  ["Daifuku","Airport Systems","Automated material handling","Airports and transportation","Baggage handling solutions"],
  ["Siemens Logistics","Airport Logistics","Baggage handling systems","Airports and aviation","Airport logistics technology"],
  ["Thales","Security Technology","Integrated security systems","Airports and critical infrastructure","Security and identity technologies"],
  ["Leonardo","Security Technology","Security and detection systems","Airports and critical infrastructure","Integrated security solutions"],
  ["Todd Research","Security Screening","X-ray screening technology","Security and inspection","Baggage and parcel screening"],
  ["Westminster International","Security Screening","Security inspection solutions","Airports and security facilities","Screening and security equipment"],
];

export default function BaggageScannerPage() {
  return (
    <main className="baggage-final-page">
      <div className="baggage-background-grid" />

      <div className="baggage-page-shell">
        <a className="baggage-back-home" href="/">← Back to Home</a>

        <section className="baggage-hero">
          <div className="baggage-hero-copy">
            <span>SECURITY SCREENING TECHNOLOGY</span>
            <h1>Baggage / Luggage Scanner</h1>
            <p>
              Professional baggage X-ray screening equipment, installation,
              commissioning, repair, preventive maintenance and technical support.
            </p>
          </div>

          <div className="real-xray-visual real-xray-hero actual-xray-card">
            <img
              src="/baggage-xray-transparent.png"
              alt="Color baggage X-ray screening image"
              className="actual-xray-image"
            />
            <div className="actual-xray-overlay" />
            <div className="actual-xray-scanline hero-scanline" />
            <div className="actual-xray-label">LIVE BAGGAGE X-RAY ANALYSIS</div>
          </div>
        </section>

        <section className="baggage-section-heading">
          <span>TECHNOLOGY PARTNERS</span>
          <h2>Manufacturer Technology Profiles</h2>
          <p>Explore relevant baggage screening technologies and applications.</p>
        </section>

        <EquipmentManufacturerShowcase manufacturers={manufacturers.map(([name, category, technology, applications, capability]) => ({ name, category, technology, applications, capability }))} />

        <section id="service-request" className="service-request-section">
          <div>
            <span>SERVICE REQUEST</span>
            <h2>Need technical support?</h2>
            <p>Submit your requirement and our technical team can review the request.</p>
          </div>

          <form action="/api/service-request" method="POST" className="service-request-form">
            <input type="hidden" name="equipment" value="Baggage / Luggage Scanner" />
            <input name="name" placeholder="Full Name" required />
            <input name="company" placeholder="Company / Organization" />
            <input name="phone" placeholder="Phone" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="model" placeholder="Equipment / Model" />
            <select name="serviceType" defaultValue="Maintenance">
              <option>Maintenance</option>
              <option>Repair</option>
              <option>Installation</option>
              <option>Commissioning</option>
              <option>Technical Support</option>
              <option>AMC</option>
            </select>
            <textarea name="message" placeholder="Service Requirement" required />
            <button type="submit">Submit Service Request →</button>
          </form>
        </section>

        <a className="baggage-back-home baggage-back-home-bottom" href="/">← Back to Home</a>
      </div>
    </main>
  );
}
