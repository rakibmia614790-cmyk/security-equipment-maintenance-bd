import type { Metadata } from "next";
import EquipmentManufacturerShowcase from "@/app/components/EquipmentManufacturerShowcase";

export const metadata: Metadata = {
  title: "Bollard | Security Equipment Maintenance BD",
  description: "Security and traffic bollard systems for perimeter protection, vehicle control, pedestrian areas and controlled-access environments.",
};

const manufacturers = [
    { name: "FAAC", category: "Security Bollards", technology: "High-security retractable bollards", applications: "Critical infrastructure and public spaces", capability: "Vehicle perimeter protection" },
    { name: "CAME", category: "Access Security", technology: "Automatic bollard systems", applications: "Commercial and public facilities", capability: "Vehicle access control" },
    { name: "Frontier Pitts", category: "Perimeter Security", technology: "High-security bollards", applications: "Government and critical infrastructure", capability: "Hostile vehicle mitigation" },
    { name: "ATG Access", category: "Perimeter Security", technology: "Security bollard technology", applications: "Critical facilities", capability: "Vehicle protection" },
    { name: "Pilomat", category: "Security Bollards", technology: "Automatic and fixed bollards", applications: "Urban and high-security sites", capability: "Perimeter protection" },
    { name: "Delta Scientific", category: "Vehicle Security", technology: "Crash-rated bollard systems", applications: "Government and critical infrastructure", capability: "High-security vehicle protection" }
];

export default function EquipmentPage() {
  return (
    <main className="equipment-master-page">
      <div className="equipment-master-grid" />

      <div className="equipment-master-shell">
        <a className="equipment-master-back" href="/">← Back to Home</a>

        <section className="equipment-master-hero">
          <div className="equipment-master-copy">
            <span>PERIMETER & VEHICLE SECURITY</span>
            <h1>Bollard</h1>
            <p>Security and traffic bollard systems for perimeter protection, vehicle control, pedestrian areas and controlled-access environments.</p>
          </div>

          <div className="equipment-product-visual">
            <img
              src="/bollard-real-photo.jpg"
              alt="Security bollard system"
              className="equipment-product-image"
            />
            <div className="equipment-visual-glow" />
            <div className="equipment-scanline" />
            <div className="equipment-visual-label">RETRACTABLE BOLLARD MOVEMENT</div>
            <div className="equipment-status">
              <i />
              SYSTEM READY
            </div>
          </div>
        </section>

        <section className="equipment-section-heading">
          <span>TECHNOLOGY PARTNERS</span>
          <h2>Manufacturer Technology Profiles</h2>
          <p>Explore relevant bollard technologies, applications and technical capabilities.</p>
        </section>

        <EquipmentManufacturerShowcase manufacturers={manufacturers} />

        <section id="service-request" className="equipment-service-request">
          <div className="equipment-service-copy">
            <span>SERVICE REQUEST</span>
            <h2>Need technical support?</h2>
            <p>Submit your requirement and our technical team can review the request.</p>
          </div>

          <form action="/api/service-request" method="POST" className="equipment-service-form">
            <input type="hidden" name="equipment" value="Bollard" />
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
