import type { Metadata } from "next";
import EquipmentManufacturerShowcase from "@/app/components/EquipmentManufacturerShowcase";

export const metadata: Metadata = {
  title: "Walk-Through Metal Detector | Security Equipment Maintenance BD",
  description: "Professional walk-through metal detection systems for controlled access, aviation, government, military and critical-security environments.",
};

const manufacturers = [
    { name: "CEIA", category: "Metal Detection", technology: "Multi-zone electromagnetic detection", applications: "Airports, government and critical facilities", capability: "Walk-through security screening" },
    { name: "Garrett Metal Detectors", category: "Metal Detection", technology: "Advanced multi-zone detection", applications: "Airports and secure facilities", capability: "Walk-through and handheld detection" },
    { name: "Rapiscan Systems", category: "Security Screening", technology: "Advanced people screening", applications: "Aviation and high-security facilities", capability: "Security checkpoint screening" },
    { name: "ZKTeco", category: "Security Technology", technology: "Electromagnetic detection", applications: "Access-controlled facilities", capability: "Personnel screening" },
    { name: "Dahua Technology", category: "Security Technology", technology: "Intelligent security screening", applications: "Security checkpoints", capability: "Integrated security solutions" },
    { name: "Securina Detection System", category: "Metal Detection", technology: "Walk-through detection technology", applications: "Security checkpoints", capability: "Personnel metal detection" }
];

export default function EquipmentPage() {
  return (
    <main className="equipment-master-page">
      <div className="equipment-master-grid" />

      <div className="equipment-master-shell">
        <a className="equipment-master-back" href="/">← Back to Home</a>

        <section className="equipment-master-hero">
          <div className="equipment-master-copy">
            <span>SECURITY SCREENING TECHNOLOGY</span>
            <h1>Walk-Through Metal Detector</h1>
            <p>Professional walk-through metal detection systems for controlled access, aviation, government, military and critical-security environments.</p>
          </div>

          <div className="equipment-product-visual">
            <img
              src="/wtmd-real-photo.jpg"
              alt="Professional walk-through metal detector"
              className="equipment-product-image"
            />
            <div className="equipment-visual-glow" />
            <div className="equipment-scanline" />
            <div className="equipment-visual-label">WTMD DETECTION FIELD</div>
            <div className="equipment-status">
              <i />
              SYSTEM READY
            </div>
          </div>
        </section>

        <section className="equipment-section-heading">
          <span>TECHNOLOGY PARTNERS</span>
          <h2>Manufacturer Technology Profiles</h2>
          <p>Explore relevant walk-through metal detector technologies, applications and technical capabilities.</p>
        </section>

        <EquipmentManufacturerShowcase manufacturers={manufacturers} />

        <section id="service-request" className="equipment-service-request">
          <div className="equipment-service-copy">
            <span>SERVICE REQUEST</span>
            <h2>Need technical support?</h2>
            <p>Submit your requirement and our technical team can review the request.</p>
          </div>

          <form action="/api/service-request" method="POST" className="equipment-service-form">
            <input type="hidden" name="equipment" value="Walk-Through Metal Detector" />
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
