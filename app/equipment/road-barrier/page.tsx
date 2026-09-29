import type { Metadata } from "next";
import EquipmentManufacturerShowcase from "@/app/components/EquipmentManufacturerShowcase";

export const metadata: Metadata = {
  title: "Road Barrier | Security Equipment Maintenance BD",
  description: "Automatic vehicle barriers for controlled entry, parking facilities, perimeter security, airports and high-security locations.",
};

const manufacturers = [
    { name: "FAAC", category: "Automatic Barriers", technology: "Automatic vehicle access control", applications: "Parking, airports and facilities", capability: "Traffic barrier systems" },
    { name: "CAME", category: "Access Automation", technology: "Automatic barrier technology", applications: "Commercial and critical sites", capability: "Vehicle access control" },
    { name: "BFT", category: "Automation", technology: "Automatic road barriers", applications: "Parking and controlled access", capability: "Vehicle entry management" },
    { name: "Nice", category: "Access Automation", technology: "Barrier automation", applications: "Commercial and security facilities", capability: "Automatic access systems" },
    { name: "Magnetic Autocontrol", category: "Vehicle Access", technology: "High-performance barriers", applications: "Airports and parking facilities", capability: "Automatic vehicle access" },
    { name: "Automatic Systems", category: "Access Control", technology: "Vehicle and pedestrian control", applications: "Transport and secure facilities", capability: "Access automation" }
];

export default function EquipmentPage() {
  return (
    <main className="equipment-master-page">
      <div className="equipment-master-grid" />

      <div className="equipment-master-shell">
        <a className="equipment-master-back" href="/">← Back to Home</a>

        <section className="equipment-master-hero">
          <div className="equipment-master-copy">
            <span>VEHICLE ACCESS CONTROL</span>
            <h1>Road Barrier</h1>
            <p>Automatic vehicle barriers for controlled entry, parking facilities, perimeter security, airports and high-security locations.</p>
          </div>

          <div className="equipment-product-visual">
            <img
              src="/road-barrier-real-photo.jpg"
              alt="Automatic road barrier"
              className="equipment-product-image"
            />
            <div className="equipment-visual-glow" />
            <div className="equipment-scanline" />
            <div className="equipment-visual-label">BARRIER MOVEMENT</div>
            <div className="equipment-status">
              <i />
              SYSTEM READY
            </div>
          </div>
        </section>

        <section className="equipment-section-heading">
          <span>TECHNOLOGY PARTNERS</span>
          <h2>Manufacturer Technology Profiles</h2>
          <p>Explore relevant road barrier technologies, applications and technical capabilities.</p>
        </section>

        <EquipmentManufacturerShowcase manufacturers={manufacturers} />

        <section id="service-request" className="equipment-service-request">
          <div className="equipment-service-copy">
            <span>SERVICE REQUEST</span>
            <h2>Need technical support?</h2>
            <p>Submit your requirement and our technical team can review the request.</p>
          </div>

          <form action="/api/service-request" method="POST" className="equipment-service-form">
            <input type="hidden" name="equipment" value="Road Barrier" />
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
