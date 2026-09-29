"use client";

import Link from "next/link";
import { useState } from "react";

const manufacturers = [
  "HID Global",
  "Suprema",
  "ZKTeco",
  "ASSA ABLOY",
  "Gallagher Security",
  "Johnson Controls",
  "Honeywell",
  "Bosch Security Systems",
  "dormakaba",
  "Nedap",
  "Axis Communications",
  "Allegion",
  "SALTO Systems",
  "IDEMIA",
  "Vanderbilt",
  "Matrix Comsec",
  "eSSL Security",
  "Anviz",
  "Invixium",
  "Rosslare Security",
];

export default function AccessControlPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="equipment-master-page access-control-master-page">
      <section className="equipment-master-hero">
        <Link href="/" className="equipment-back-link">← Back to Home</Link>

        <div className="equipment-hero-grid">
          <div>
            <span className="equipment-eyebrow">IDENTITY & ENTRY SECURITY</span>
            <h1>Access Control System</h1>
            <p>
              Intelligent access control, biometric authentication, credential
              management and secure entry solutions for modern facilities.
            </p>
          </div>

          <div className="access-control-visual">
            <div className="access-real-frame">
              <img
                src="/access-control-real-photo.jpg"
                alt="Professional access control reader"
                className="access-real-photo"
              />
              <div className="access-photo-overlay" />
              <div className="access-verification-ring" />
              <div className="access-scanline" />
              <div className="access-status">VERIFYING CREDENTIAL</div>
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-manufacturer-section">
        <div className="equipment-section-heading">
          <span>TECHNOLOGY PROFILES</span>
          <h2>Leading Access Control Manufacturers</h2>
          <p>
            Explore biometric, credential, reader and integrated access-control
            technology manufacturers.
          </p>
        </div>

        <div className="equipment-manufacturer-grid">
          {manufacturers.map((name, index) => (
            <button
              key={name}
              className="equipment-manufacturer-card access-control-card"
              style={{ "--card-delay": `${index * 65}ms` } as React.CSSProperties}
              onClick={() => setSelected(name)}
            >
              <div className="access-card-visual">
                <div className="mini-access-reader">
                  <span className="reader-screen" />
                  <span className="reader-lens" />
                  <span className="reader-signal" />
                </div>
                <div className="access-wave" />
              </div>

              <strong>{name}</strong>
              <small>Access Control & Identity</small>
              <em>View Details →</em>
            </button>
          ))}
        </div>
      </section>

      <section className="equipment-service-cta">
        <span>TECHNICAL SUPPORT</span>
        <h2>Need Access Control Installation or Integration?</h2>
        <p>
          SecureTech supports reader installation, biometric configuration,
          controller integration, commissioning, troubleshooting and maintenance.
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
              {selected} access-control technology profile covering identity
              verification, secure entry and integrated access management.
            </p>

            <div className="equipment-modal-points">
              <div>
                <b>Technology</b>
                <span>Biometric, credential, reader and electronic access control</span>
              </div>
              <div>
                <b>Applications</b>
                <span>Government, airports, banks, offices, industry and critical infrastructure</span>
              </div>
              <div>
                <b>Support</b>
                <span>Installation, configuration, integration and maintenance</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
