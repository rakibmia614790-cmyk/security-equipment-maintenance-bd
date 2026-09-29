"use client";

import Link from "next/link";
import { useState } from "react";

const manufacturers = [
  "Smiths Detection",
  "Rapiscan Systems",
  "Autoclear",
  "Scintrex Trace",
  "NUCTECH",
  "Scanna MSC",
];

export default function ETDPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="equipment-master-page etd-master-page">
      <section className="equipment-master-hero">
        <Link href="/" className="equipment-back-link">← Back to Home</Link>

        <div className="equipment-hero-grid">
          <div>
            <span className="equipment-eyebrow">TRACE DETECTION TECHNOLOGY</span>
            <h1>Explosive Trace Detection</h1>
            <p>
              Advanced explosive trace detection systems for rapid screening,
              trace analysis and high-security inspection environments.
            </p>
          </div>

          <div className="etd-visual">
            <div className="etd-interface">
              <div className="etd-display">
                <span className="etd-spectrum" />
                <span className="etd-analysis-line" />
                <span className="etd-analysis-dot" />
              </div>
              <div className="etd-device-body">
                <i />
                <i />
                <i />
              </div>
              <div className="etd-sample-probe" />
              <div className="etd-detection-pulse" />
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-manufacturer-section">
        <div className="equipment-section-heading">
          <span>TECHNOLOGY PROFILES</span>
          <h2>Leading ETD Manufacturers</h2>
          <p>Explore explosive trace detection technology profiles.</p>
        </div>

        <div className="equipment-manufacturer-grid">
          {manufacturers.map((name, index) => (
            <button
              key={name}
              className="equipment-manufacturer-card etd-card"
              style={{ "--card-delay": `${index * 90}ms` } as React.CSSProperties}
              onClick={() => setSelected(name)}
            >
              <div className="etd-card-visual">
                <div className="mini-etd-device">
                  <span className="mini-etd-screen" />
                  <span className="mini-etd-body" />
                </div>
                <div className="etd-card-pulse" />
              </div>

              <strong>{name}</strong>
              <small>Explosive Trace Detection</small>
              <em>View Details →</em>
            </button>
          ))}
        </div>
      </section>

      <section className="equipment-service-cta">
        <span>TECHNICAL SUPPORT</span>
        <h2>Need ETD Installation, Calibration or Service?</h2>
        <p>
          SecureTech provides installation, commissioning, preventive
          maintenance, troubleshooting and technical support for ETD systems.
        </p>
        <Link href="/service-request">Request Service →</Link>
      </section>

      {selected && (
        <div className="equipment-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="equipment-modal" onClick={(e) => e.stopPropagation()}>
            <button className="equipment-modal-close" onClick={() => setSelected(null)}>×</button>
            <span>MANUFACTURER TECHNOLOGY PROFILE</span>
            <h2>{selected}</h2>
            <p>
              {selected} technology profile for explosive trace detection,
              screening applications and technical service requirements.
            </p>
            <div className="equipment-modal-points">
              <div>
                <b>Technology</b>
                <span>Explosive trace detection and trace analysis</span>
              </div>
              <div>
                <b>Applications</b>
                <span>Airports, critical infrastructure and high-security screening</span>
              </div>
              <div>
                <b>Support</b>
                <span>Installation, commissioning, calibration and maintenance</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
