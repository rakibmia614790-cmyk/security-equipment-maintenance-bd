import type { Metadata } from "next";
import EquipmentManufacturerShowcase from "@/app/components/EquipmentManufacturerShowcase";

export const metadata: Metadata = {
  title: "Explosive Trace Detector (ETD) | Security Equipment Maintenance BD",
  description: "Advanced explosive and narcotics trace detection systems for aviation, government, military, customs and critical-security environments.",
};

const manufacturers = [
    { name: "Smiths Detection", category: "Trace Detection", technology: "Explosives and narcotics trace analysis", applications: "Airports, customs and critical facilities", capability: "IONSCAN trace detection technology" },
    { name: "Rapiscan Systems", category: "Trace Detection", technology: "Explosive trace detection", applications: "Aviation and security facilities", capability: "Advanced trace screening" },
    { name: "Autoclear", category: "Security Detection", technology: "Trace and X-ray detection", applications: "Airports and security facilities", capability: "Integrated detection systems" },
    { name: "Scanna MSC", category: "Trace Detection", technology: "Portable trace detection", applications: "Security and inspection environments", capability: "Explosive trace screening" },
    { name: "NUCTECH", category: "Security Inspection", technology: "Trace and security inspection", applications: "Airports and customs", capability: "Advanced security inspection" },
    { name: "Scintrex Trace", category: "Trace Detection", technology: "Chemical trace detection", applications: "Security and critical facilities", capability: "Trace detection technology" }
];

export default function EquipmentPage() {
  return (
    <main className="equipment-master-page">
      <div className="equipment-master-grid" />

      <div className="equipment-master-shell">
        <a className="equipment-master-back" href="/">← Back to Home</a>

        <section className="equipment-master-hero">
          <div className="equipment-master-copy">
            <span>TRACE DETECTION TECHNOLOGY</span>
            <h1>Explosive Trace Detector (ETD)</h1>
            <p>Advanced explosive and narcotics trace detection systems for aviation, government, military, customs and critical-security environments.</p>
          </div>

          <div className="equipment-product-visual">
            <img
              src="/etd-real-photo.jpg"
              alt="Explosive trace detector"
              className="equipment-product-image"
            />
            <div className="equipment-visual-glow" />
            <div className="equipment-scanline" />
            <div className="equipment-visual-label">TRACE-ANALYSIS PULSE</div>
            <div className="equipment-status">
              <i />
              SYSTEM READY
            </div>
          </div>
        </section>

        <section className="equipment-section-heading">
          <span>TECHNOLOGY PARTNERS</span>
          <h2>Manufacturer Technology Profiles</h2>
          <p>Explore relevant explosive trace detector (etd) technologies, applications and technical capabilities.</p>
        </section>

        <EquipmentManufacturerShowcase manufacturers={manufacturers} />

        <section id="service-request" className="equipment-service-request">
          <div className="equipment-service-copy">
            <span>SERVICE REQUEST</span>
            <h2>Need technical support?</h2>
            <p>Submit your requirement and our technical team can review the request.</p>
          </div>

          <form action="/api/service-request" method="POST" className="equipment-service-form">
            <input type="hidden" name="equipment" value="Explosive Trace Detector (ETD)" />
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

        <a className="equipment-master-back equipment-master-bottom" href="/">← Back to Home</a>
      </div>
    </main>
  );
}
