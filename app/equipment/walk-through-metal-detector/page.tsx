"use client";

import Link from "next/link";
import { useState } from "react";

const manufacturers = [
  "CEIA",
  "Garrett Metal Detectors",
  "Rapiscan Systems",
  "ZKTeco",
  "Dahua Technology",
  "Securina Detection System",
  "PEACENTURY",
  "Shenzhen Security Electronic Equipment",
  "Smart Check Security Equipment",
  "Aoyodi Electronic",
  "CETC",
  "Dongguan Viking Technology",
  "Safeway Inspection System",
  "Juzheng",
  "Mama Security",
];

export default function WTMDPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="equipment-master-page wtmd-master-page">
      <section className="equipment-master-hero">
        <Link href="/" className="equipment-back-link">← Back to Home</Link>

        <div className="equipment-hero-grid">
          <div>
            <span className="equipment-eyebrow">SECURITY SCREENING TECHNOLOGY</span>
            <h1>Walk-Through Metal Detector</h1>
            <p>
              Professional walk-through metal detection solutions for controlled
              access, passenger screening and high-security environments.
            </p>
          </div>

          <div className="wtmd-visual" aria-label="Walk-Through Metal Detector visualization">
            <div className="wtmd-gate">
              <div className="wtmd-side left" />
              <div className="wtmd-top" />
              <div className="wtmd-side right" />
              <div className="wtmd-person">
                <div className="wtmd-head" />
                <div className="wtmd-body" />
                <div className="wtmd-leg left-leg" />
                <div className="wtmd-leg right-leg" />
              </div>
              <div className="wtmd-scan-field" />
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-manufacturer-section">
        <div className="equipment-section-heading">
          <span>TECHNOLOGY PROFILES</span>
          <h2>Leading WTMD Manufacturers</h2>
          <p>Explore manufacturers and their metal detection technology profiles.</p>
        </div>

        <div className="equipment-manufacturer-grid">
          {manufacturers.map((name, index) => (
            <button
              key={name}
              className="equipment-manufacturer-card wtmd-card"
              style={{ "--card-delay": `${index * 70}ms` } as React.CSSProperties}
              onClick={() => setSelected(name)}
            >
              <div className="wtmd-card-visual">
                <div className="mini-gate">
                  <span />
                  <span />
                  <i />
                </div>
                <div className="mini-scan-line" />
              </div>
              <strong>{name}</strong>
              <small>Walk-Through Metal Detection</small>
              <em>View Details →</em>
            </button>
          ))}
        </div>
      </section>

      <section className="equipment-service-cta">
        <span>TECHNICAL SUPPORT</span>
        <h2>Need WTMD Installation, Service or Maintenance?</h2>
        <p>Contact SecureTech for installation, commissioning, troubleshooting, preventive maintenance and technical support.</p>
        <Link href="/service-request">Request Service →</Link>
      </section>

      {selected && (
        <div className="equipment-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="equipment-modal" onClick={(e) => e.stopPropagation()}>
            <button className="equipment-modal-close" onClick={() => setSelected(null)}>×</button>
            <span>MANUFACTURER TECHNOLOGY PROFILE</span>
            <h2>{selected}</h2>
            <p>
              {selected} technology profile for walk-through metal detection,
              including screening applications, deployment environments and
              technical service considerations.
            </p>
            <div className="equipment-modal-points">
              <div><b>Technology</b><span>Walk-through metal detection</span></div>
              <div><b>Applications</b><span>Airports, government, commercial and high-security facilities</span></div>
              <div><b>Support</b><span>Installation, commissioning, maintenance and technical assistance</span></div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
