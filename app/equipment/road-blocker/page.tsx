import type { Metadata } from "next";
import EquipmentManufacturerShowcase from "@/app/components/EquipmentManufacturerShowcase";

export const metadata: Metadata = {
  title: "Road Blocker | Security Equipment Maintenance BD",
  description: "High-security road blocker systems designed to restrict unauthorized vehicle access at critical facilities, perimeter entrances and protected sites.",
};

const manufacturers = [
    { name: "Frontier Pitts", category: "High-Security Barriers", technology: "HVM road blocker technology", applications: "Critical infrastructure and government", capability: "High-security vehicle protection" },
    { name: "Heald", category: "High-Security Barriers", technology: "Crash-rated hostile vehicle mitigation", applications: "Government and critical facilities", capability: "Road blocker systems" },
    { name: "Delta Scientific", category: "Vehicle Security", technology: "High-security vehicle barriers", applications: "Government and critical infrastructure", capability: "Hostile vehicle mitigation" },
    { name: "FAAC", category: "Access Security", technology: "Automatic security barriers", applications: "High-security facilities", capability: "Vehicle access protection" },
    { name: "Automatic Systems", category: "Vehicle Security", technology: "High-security access control", applications: "Transport and critical facilities", capability: "Vehicle barrier systems" },
    { name: "ATG Access", category: "Perimeter Security", technology: "Hostile vehicle mitigation", applications: "Critical infrastructure", capability: "Road blocker technology" }
];

export default function EquipmentPage() {
  return (
    <main className="equipment-master-page">
      <div className="equipment-master-grid" />

      <div className="equipment-master-shell">
        <a className="equipment-master-back" href="/">← Back to Home</a>

        <section className="equipment-master-hero">
          <div className="equipment-master-copy">
            <span>HIGH-SECURITY VEHICLE PROTECTION</span>
            <h1>Road Blocker</h1>
            <p>High-security road blocker systems designed to restrict unauthorized vehicle access at critical facilities, perimeter entrances and protected sites.</p>
          </div>

          <div className="equipment-product-visual">
            <img
              src="/road-blocker-real-photo.jpg"
              alt="High security road blocker"
              className="equipment-product-image"
            />
            <div className="equipment-visual-glow" />
            <div className="equipment-scanline" />
            <div className="equipment-visual-label">HYDRAULIC BLOCKER MOVEMENT</div>
            <div className="equipment-status">
              <i />
              SYSTEM READY
            </div>
          </div>
        </section>

        <section className="equipment-section-heading">
          <span>TECHNOLOGY PARTNERS</span>
          <h2>Manufacturer Technology Profiles</h2>
          <p>Explore relevant road blocker technologies, applications and technical capabilities.</p>
        </section>

        <EquipmentManufacturerShowcase manufacturers={manufacturers} />

        <section id="service-request" className="equipment-service-request">
          <div className="equipment-service-copy">
            <span>SERVICE REQUEST</span>
            <h2>Need technical support?</h2>
            <p>Submit your requirement and our technical team can review the request.</p>
          </div>

          <form action="/api/service-request" method="POST" className="equipment-service-form">
            <input type="hidden" name="equipment" value="Road Blocker" />
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
