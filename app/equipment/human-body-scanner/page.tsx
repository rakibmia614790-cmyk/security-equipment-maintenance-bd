import type { Metadata } from "next";
import EquipmentManufacturerShowcase from "@/app/components/EquipmentManufacturerShowcase";

export const metadata: Metadata = {
  title: "Human Body Scanner | Security Equipment Maintenance BD",
  description: "Advanced security screening systems for detecting concealed threats and prohibited items in controlled, aviation and high-security environments.",
};

const manufacturers = [
    { name: "Tek84", category: "Personnel Screening", technology: "Low-dose X-ray body scanning", applications: "Correctional, government and security facilities", capability: "Advanced personnel screening" },
    { name: "Rapiscan Systems", category: "Security Screening", technology: "Advanced body screening", applications: "Aviation and high-security facilities", capability: "People screening technology" },
    { name: "NUCTECH", category: "Security Inspection", technology: "Personnel security inspection", applications: "Airports and customs", capability: "Advanced screening systems" },
    { name: "Smiths Detection", category: "Security Screening", technology: "Advanced people screening", applications: "Aviation and critical facilities", capability: "Security screening technology" },
    { name: "ADANI Systems", category: "Security Screening", technology: "X-ray personnel screening", applications: "Government and security facilities", capability: "People inspection systems" },
    { name: "Thruvision", category: "Security Screening", technology: "Passive concealed-object detection", applications: "Transport and public security", capability: "Personnel screening technology" }
];

export default function EquipmentPage() {
  return (
    <main className="equipment-master-page">
      <div className="equipment-master-grid" />

      <div className="equipment-master-shell">
        <a className="equipment-master-back" href="/">← Back to Home</a>

        <section className="equipment-master-hero">
          <div className="equipment-master-copy">
            <span>ADVANCED PERSONNEL SCREENING</span>
            <h1>Human Body Scanner</h1>
            <p>Advanced security screening systems for detecting concealed threats and prohibited items in controlled, aviation and high-security environments.</p>
          </div>

          <div className="equipment-product-visual">
            <img
              src="/human-body-scanner-real-photo.jpg"
              alt="Human body security scanner"
              className="equipment-product-image"
            />
            <div className="equipment-visual-glow" />
            <div className="equipment-scanline" />
            <div className="equipment-visual-label">HUMAN SCREENING SCAN</div>
            <div className="equipment-status">
              <i />
              SYSTEM READY
            </div>
          </div>
        </section>

        <section className="equipment-section-heading">
          <span>TECHNOLOGY PARTNERS</span>
          <h2>Manufacturer Technology Profiles</h2>
          <p>Explore relevant human body scanner technologies, applications and technical capabilities.</p>
        </section>

        <EquipmentManufacturerShowcase manufacturers={manufacturers} />

        <section id="service-request" className="equipment-service-request">
          <div className="equipment-service-copy">
            <span>SERVICE REQUEST</span>
            <h2>Need technical support?</h2>
            <p>Submit your requirement and our technical team can review the request.</p>
          </div>

          <form action="/api/service-request" method="POST" className="equipment-service-form">
            <input type="hidden" name="equipment" value="Human Body Scanner" />
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
