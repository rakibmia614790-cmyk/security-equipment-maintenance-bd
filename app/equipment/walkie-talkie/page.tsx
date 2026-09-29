import type { Metadata } from "next";
import EquipmentManufacturerShowcase from "@/app/components/EquipmentManufacturerShowcase";

export const metadata: Metadata = {
  title: "Walkie-Talkie | Security Equipment Maintenance BD",
  description: "Professional two-way radio communication systems for security, aviation, industrial, emergency and operational teams.",
};

const manufacturers = [
    { name: "Motorola Solutions", category: "Two-Way Radio", technology: "Professional digital radio communication", applications: "Security, aviation and public safety", capability: "Mission-critical radio systems" },
    { name: "Hytera", category: "Two-Way Radio", technology: "Digital professional radio", applications: "Security and industrial operations", capability: "Professional communication systems" },
    { name: "KENWOOD", category: "Radio Communication", technology: "Professional two-way radio", applications: "Security and operational teams", capability: "Digital radio systems" },
    { name: "Tait Communications", category: "Critical Communications", technology: "Mission-critical radio", applications: "Public safety and infrastructure", capability: "Professional communication" },
    { name: "Sepura", category: "Professional Radio", technology: "Digital radio communication", applications: "Public safety and transport", capability: "Mission-critical communications" },
    { name: "Icom", category: "Radio Communication", technology: "Professional two-way radios", applications: "Security, marine and industrial", capability: "Professional radio systems" }
];

export default function EquipmentPage() {
  return (
    <main className="equipment-master-page">
      <div className="equipment-master-grid" />

      <div className="equipment-master-shell">
        <a className="equipment-master-back" href="/">← Back to Home</a>

        <section className="equipment-master-hero">
          <div className="equipment-master-copy">
            <span>PROFESSIONAL RADIO COMMUNICATION</span>
            <h1>Walkie-Talkie</h1>
            <p>Professional two-way radio communication systems for security, aviation, industrial, emergency and operational teams.</p>
          </div>

          <div className="equipment-product-visual">
            <img
              src="/walkie-talkie-real-photo.jpg"
              alt="Professional two-way radio"
              className="equipment-product-image"
            />
            <div className="equipment-visual-glow" />
            <div className="equipment-scanline" />
            <div className="equipment-visual-label">RADIO TRANSMISSION WAVES</div>
            <div className="equipment-status">
              <i />
              SYSTEM READY
            </div>
          </div>
        </section>

        <section className="equipment-section-heading">
          <span>TECHNOLOGY PARTNERS</span>
          <h2>Manufacturer Technology Profiles</h2>
          <p>Explore relevant walkie-talkie technologies, applications and technical capabilities.</p>
        </section>

        <EquipmentManufacturerShowcase manufacturers={manufacturers} />

        <section id="service-request" className="equipment-service-request">
          <div className="equipment-service-copy">
            <span>SERVICE REQUEST</span>
            <h2>Need technical support?</h2>
            <p>Submit your requirement and our technical team can review the request.</p>
          </div>

          <form action="/api/service-request" method="POST" className="equipment-service-form">
            <input type="hidden" name="equipment" value="Walkie-Talkie" />
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
