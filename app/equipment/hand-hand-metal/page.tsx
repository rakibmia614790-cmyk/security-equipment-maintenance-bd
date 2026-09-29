import type { Metadata } from "next";
import EquipmentManufacturerShowcase from "@/app/components/EquipmentManufacturerShowcase";

export const metadata: Metadata = {
  title: "Hand Hand Metal | Security Equipment Maintenance BD",
  description: "Professional handheld metal detectors for secondary inspection, checkpoint screening, personnel search and controlled-access security operations.",
};

const manufacturers = [
    { name: "Garrett Metal Detectors", category: "Handheld Detection", technology: "Portable electromagnetic detection", applications: "Airports, checkpoints and secure facilities", capability: "Professional handheld metal detection" },
    { name: "CEIA", category: "Metal Detection", technology: "High-sensitivity detection technology", applications: "Security checkpoints", capability: "Handheld screening systems" },
    { name: "Rapiscan Systems", category: "Security Screening", technology: "Portable security inspection", applications: "Aviation and critical facilities", capability: "Security screening equipment" },
    { name: "ZKTeco", category: "Security Technology", technology: "Handheld detection systems", applications: "Security checkpoints", capability: "Personnel screening" },
    { name: "Fisher Research Labs", category: "Metal Detection", technology: "Portable metal detection", applications: "Security and inspection", capability: "Handheld detection technology" },
    { name: "Metrasens", category: "Security Detection", technology: "Magnetic detection technology", applications: "Security and healthcare environments", capability: "Personnel and object screening" }
];

export default function EquipmentPage() {
  return (
    <main className="equipment-master-page">
      <div className="equipment-master-grid" />

      <div className="equipment-master-shell">
        <a className="equipment-master-back" href="/">← Back to Home</a>

        <section className="equipment-master-hero">
          <div className="equipment-master-copy">
            <span>HANDHELD SECURITY SCREENING</span>
            <h1>Hand Hand Metal</h1>
            <p>Professional handheld metal detectors for secondary inspection, checkpoint screening, personnel search and controlled-access security operations.</p>
          </div>

          <div className="equipment-product-visual">
            <img
              src="/hand-metal-real-photo.jpg"
              alt="Professional handheld metal detector"
              className="equipment-product-image"
            />
            <div className="equipment-visual-glow" />
            <div className="equipment-scanline" />
            <div className="equipment-visual-label">HANDHELD DETECTION SWEEP</div>
            <div className="equipment-status">
              <i />
              SYSTEM READY
            </div>
          </div>
        </section>

        <section className="equipment-section-heading">
          <span>TECHNOLOGY PARTNERS</span>
          <h2>Manufacturer Technology Profiles</h2>
          <p>Explore relevant hand hand metal technologies, applications and technical capabilities.</p>
        </section>

        <EquipmentManufacturerShowcase manufacturers={manufacturers} />

        <section id="service-request" className="equipment-service-request">
          <div className="equipment-service-copy">
            <span>SERVICE REQUEST</span>
            <h2>Need technical support?</h2>
            <p>Submit your requirement and our technical team can review the request.</p>
          </div>

          <form action="/api/service-request" method="POST" className="equipment-service-form">
            <input type="hidden" name="equipment" value="Hand Hand Metal" />
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
