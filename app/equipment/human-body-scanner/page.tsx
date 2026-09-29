"use client";

import Link from "next/link";
import { useState } from "react";

const manufacturers = [
  "Smiths Detection",
  "Rapiscan Systems",
  "NUCTECH",
  "Tek84",
  "Rohde & Schwarz",
  "ADANI Systems",
  "OD Security",
  "Thruvision",
  "Apstec Systems",
  "Leidos Security Detection & Automation",
  "Viken Detection",
  "Evolv Technology",
  "LINEV Systems",
  "Liberty Defense",
];

export default function HumanBodyScannerPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="equipment-master-page body-scanner-master-page">
      <section className="equipment-master-hero">
        <Link href="/" className="equipment-back-link">← Back to Home</Link>

        <div className="equipment-hero-grid">
          <div>
            <span className="equipment-eyebrow">ADVANCED PEOPLE SCREENING</span>
            <h1>Human Body Scanner</h1>
            <p>
              Advanced people-screening technology for detecting concealed
              metallic and non-metallic threats in high-security environments.
            </p>
          </div>

          <div className="body-scanner-visual">
            <div className="body-scanner-real-frame">
              <img
                src="/human-body-scanner-real-photo.jpg"
                alt="Professional human body security scanner"
                className="body-scanner-real-photo"
              />
              <div className="body-scanner-overlay" />
              <div className="body-scan-silhouette">
                <span className="body-head" />
                <span className="body-torso" />
                <span className="body-leg left" />
                <span className="body-leg right" />
              </div>
              <div className="body-scan-grid" />
              <div className="body-scanline" />
              <div className="body-live-status">BODY SCREENING • ACTIVE</div>
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-manufacturer-section">
        <div className="equipment-section-heading">
          <span>TECHNOLOGY PROFILES</span>
          <h2>Leading Human Body Scanner Manufacturers</h2>
          <p>
            Advanced X-ray, millimeter-wave and people-screening technologies
            for aviation, government, correctional and critical facilities.
          </p>
        </div>

        <div className="equipment-manufacturer-grid">
          {manufacturers.map((name, index) => (
            <button
              key={name}
              className="equipment-manufacturer-card body-scanner-card"
              style={{ "--card-delay": `${index * 65}ms` } as React.CSSProperties}
              onClick={() => setSelected(name)}
            >
              <div className="body-card-visual">
                <div className="mini-body-scanner">
                  <span className="mini-scanner-arch" />
                  <span className="mini-person" />
                  <span className="mini-scan-beam" />
                </div>
              </div>

              <strong>{name}</strong>
              <small>People Screening Technology</small>
              <em>View Details →</em>
            </button>
          ))}
        </div>
      </section>

      <section className="equipment-service-cta">
        <span>TECHNICAL SUPPORT</span>
        <h2>Need Body Scanner Installation or Maintenance?</h2>
        <p>
          SecureTech supports equipment installation, commissioning,
          configuration, preventive maintenance, troubleshooting and technical
          support for security-screening systems.
        </p>
        <Link href="/service-request">Request Service →</Link>
      </section>

      {selected && (
        <div className="equipment-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="equipment-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="equipment-modal-close"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <span>MANUFACTURER TECHNOLOGY PROFILE</span>
            <h2>{selected}</h2>

            <p>
              {selected} technology profile for advanced people-screening and
              concealed-threat detection applications.
            </p>

            <div className="equipment-modal-points">
              <div>
                <b>Technology</b>
                <span>
                  Advanced imaging, millimeter-wave or X-ray people screening
                </span>
              </div>

              <div>
                <b>Applications</b>
                <span>
                  Airports, borders, government, correctional and critical infrastructure
                </span>
              </div>

              <div>
                <b>Support</b>
                <span>
                  Installation, commissioning, calibration and maintenance
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
