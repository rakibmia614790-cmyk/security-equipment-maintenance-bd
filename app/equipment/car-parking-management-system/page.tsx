import type { Metadata } from "next";
import EquipmentManufacturerShowcase from "@/app/components/EquipmentManufacturerShowcase";

export const metadata: Metadata = {
  title: "Car Parking Management System | Security Equipment Maintenance BD",
  description: "Intelligent parking management systems integrating vehicle identification, access control, occupancy management and automated parking operations.",
};

const manufacturers = [
    { name: "SKIDATA", category: "Parking Technology", technology: "Intelligent parking access", applications: "Airports, malls and facilities", capability: "Parking management systems" },
    { name: "DESIGNA", category: "Parking Technology", technology: "Automated parking systems", applications: "Commercial and transport facilities", capability: "Parking access management" },
    { name: "Kapsch TrafficCom", category: "Intelligent Mobility", technology: "Traffic and parking technology", applications: "Transport infrastructure", capability: "Smart mobility systems" },
    { name: "TIBA Parking", category: "Parking Technology", technology: "Parking access and revenue control", applications: "Commercial and public facilities", capability: "Parking management" },
    { name: "Nedap", category: "Vehicle Identification", technology: "ANPR and vehicle recognition", applications: "Parking and access control", capability: "Vehicle identification technology" },
    { name: "Scheidt & Bachmann", category: "Parking Systems", technology: "Parking management technology", applications: "Transport and commercial facilities", capability: "Automated parking solutions" }
];

export default function EquipmentPage() {
  return (
    <main className="equipment-master-page">
      <div className="equipment-master-grid" />

      <div className="equipment-master-shell">
        <a className="equipment-master-back" href="/">← Back to Home</a>

        <section className="equipment-master-hero">
          <div className="equipment-master-copy">
            <span>SMART PARKING TECHNOLOGY</span>
            <h1>Car Parking Management System</h1>
            <p>Intelligent parking management systems integrating vehicle identification, access control, occupancy management and automated parking operations.</p>
          </div>

          <div className="equipment-product-visual">
            <img
              src="/car-parking-real-photo.jpg"
              alt="Professional parking management system"
              className="equipment-product-image"
            />
            <div className="equipment-visual-glow" />
            <div className="equipment-scanline" />
            <div className="equipment-visual-label">VEHICLE RECOGNITION</div>
            <div className="equipment-status">
              <i />
              SYSTEM READY
            </div>
          </div>
        </section>

        <section className="equipment-section-heading">
          <span>TECHNOLOGY PARTNERS</span>
          <h2>Manufacturer Technology Profiles</h2>
          <p>Explore relevant car parking management system technologies, applications and technical capabilities.</p>
        </section>

        <EquipmentManufacturerShowcase manufacturers={manufacturers} />

        <section id="service-request" className="equipment-service-request">
          <div className="equipment-service-copy">
            <span>SERVICE REQUEST</span>
            <h2>Need technical support?</h2>
            <p>Submit your requirement and our technical team can review the request.</p>
          </div>

          <form action="/api/service-request" method="POST" className="equipment-service-form">
            <input type="hidden" name="equipment" value="Car Parking Management System" />
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
