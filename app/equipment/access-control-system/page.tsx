import type { Metadata } from "next";
import EquipmentManufacturerShowcase from "@/app/components/EquipmentManufacturerShowcase";

export const metadata: Metadata = {
  title: "Access Control System | Security Equipment Maintenance BD",
  description: "Integrated access control solutions using biometric authentication, cards, credentials and secure identity verification technologies.",
};

const manufacturers = [
    { name: "HID Global", category: "Access Control", technology: "Credential and identity technology", applications: "Enterprise and critical facilities", capability: "Secure access control" },
    { name: "Suprema", category: "Biometric Security", technology: "Fingerprint and facial recognition", applications: "Corporate and high-security facilities", capability: "Biometric access control" },
    { name: "ZKTeco", category: "Biometric Security", technology: "Biometric access technology", applications: "Government and commercial facilities", capability: "Identity verification" },
    { name: "ASSA ABLOY", category: "Access Security", technology: "Electronic access solutions", applications: "Commercial and critical infrastructure", capability: "Integrated access control" },
    { name: "Gallagher Security", category: "Access Control", technology: "Integrated security management", applications: "Critical infrastructure", capability: "Enterprise access control" },
    { name: "Johnson Controls", category: "Security Systems", technology: "Integrated access and security", applications: "Commercial and critical facilities", capability: "Security management platforms" }
];

export default function EquipmentPage() {
  return (
    <main className="equipment-master-page">
      <div className="equipment-master-grid" />

      <div className="equipment-master-shell">
        <a className="equipment-master-back" href="/">← Back to Home</a>

        <section className="equipment-master-hero">
          <div className="equipment-master-copy">
            <span>IDENTITY & ACCESS SECURITY</span>
            <h1>Access Control System</h1>
            <p>Integrated access control solutions using biometric authentication, cards, credentials and secure identity verification technologies.</p>
          </div>

          <div className="equipment-product-visual">
            <img
              src="/access-control-real-photo.jpg"
              alt="Professional access control terminal"
              className="equipment-product-image"
            />
            <div className="equipment-visual-glow" />
            <div className="equipment-scanline" />
            <div className="equipment-visual-label">CREDENTIAL VERIFICATION</div>
            <div className="equipment-status">
              <i />
              SYSTEM READY
            </div>
          </div>
        </section>

        <section className="equipment-section-heading">
          <span>TECHNOLOGY PARTNERS</span>
          <h2>Manufacturer Technology Profiles</h2>
          <p>Explore relevant access control system technologies, applications and technical capabilities.</p>
        </section>

        <EquipmentManufacturerShowcase manufacturers={manufacturers} />

        <section id="service-request" className="equipment-service-request">
          <div className="equipment-service-copy">
            <span>SERVICE REQUEST</span>
            <h2>Need technical support?</h2>
            <p>Submit your requirement and our technical team can review the request.</p>
          </div>

          <form action="/api/service-request" method="POST" className="equipment-service-form">
            <input type="hidden" name="equipment" value="Access Control System" />
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
