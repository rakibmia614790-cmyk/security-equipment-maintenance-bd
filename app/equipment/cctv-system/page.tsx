import type { Metadata } from "next";
import EquipmentManufacturerShowcase from "@/app/components/EquipmentManufacturerShowcase";

export const metadata: Metadata = {
  title: "CCTV System | Security Equipment Maintenance BD",
  description: "Professional IP video surveillance systems for continuous monitoring, intelligent detection, security operations and critical infrastructure protection.",
};

const manufacturers = [
    { name: "Hikvision", category: "Video Surveillance", technology: "Network video and intelligent analytics", applications: "Airports, cities and critical facilities", capability: "IP surveillance systems" },
    { name: "Dahua Technology", category: "Video Surveillance", technology: "AI-enabled video surveillance", applications: "Security and infrastructure", capability: "Network camera systems" },
    { name: "Axis Communications", category: "Network Video", technology: "Enterprise IP video", applications: "Critical infrastructure and commercial facilities", capability: "Professional network surveillance" },
    { name: "Bosch Security Systems", category: "Video Security", technology: "Intelligent video security", applications: "Government and critical infrastructure", capability: "Integrated surveillance" },
    { name: "Hanwha Vision", category: "Video Surveillance", technology: "AI video analytics", applications: "Enterprise and infrastructure", capability: "Professional IP cameras" },
    { name: "Avigilon", category: "Video Security", technology: "AI-powered video intelligence", applications: "High-security facilities", capability: "Advanced surveillance platforms" }
];

export default function EquipmentPage() {
  return (
    <main className="equipment-master-page">
      <div className="equipment-master-grid" />

      <div className="equipment-master-shell">
        <a className="equipment-master-back" href="/">← Back to Home</a>

        <section className="equipment-master-hero">
          <div className="equipment-master-copy">
            <span>VIDEO SURVEILLANCE TECHNOLOGY</span>
            <h1>CCTV System</h1>
            <p>Professional IP video surveillance systems for continuous monitoring, intelligent detection, security operations and critical infrastructure protection.</p>
          </div>

          <div className="equipment-product-visual">
            <img
              src="/cctv-real-photo.jpg"
              alt="Professional CCTV surveillance camera"
              className="equipment-product-image"
            />
            <div className="equipment-visual-glow" />
            <div className="equipment-scanline" />
            <div className="equipment-visual-label">LIVE SURVEILLANCE SWEEP</div>
            <div className="equipment-status">
              <i />
              SYSTEM READY
            </div>
          </div>
        </section>

        <section className="equipment-section-heading">
          <span>TECHNOLOGY PARTNERS</span>
          <h2>Manufacturer Technology Profiles</h2>
          <p>Explore relevant cctv system technologies, applications and technical capabilities.</p>
        </section>

        <EquipmentManufacturerShowcase manufacturers={manufacturers} />

        <section id="service-request" className="equipment-service-request">
          <div className="equipment-service-copy">
            <span>SERVICE REQUEST</span>
            <h2>Need technical support?</h2>
            <p>Submit your requirement and our technical team can review the request.</p>
          </div>

          <form action="/api/service-request" method="POST" className="equipment-service-form">
            <input type="hidden" name="equipment" value="CCTV System" />
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
