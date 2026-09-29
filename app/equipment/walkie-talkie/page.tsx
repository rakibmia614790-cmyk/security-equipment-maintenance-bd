"use client";

import Link from "next/link";
import { useState } from "react";

const manufacturers = [
  "Motorola Solutions",
  "Hytera",
  "KENWOOD",
  "Tait Communications",
  "Sepura",
  "Icom",
  "Vertex Standard",
  "JVCKENWOOD",
  "EF Johnson Technologies",
  "BK Technologies",
  "RugGear",
  "Simoco Wireless Solutions",
  "Entel",
  "Codan",
  "Barrett Communications",
  "Rohill",
  "DAMM Cellular Systems",
  "Teltronic",
  "Telo Systems",
  "Bittium",
];

export default function WalkieTalkiePage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="equipment-master-page walkie-talkie-master-page">
      <section className="equipment-master-hero">
        <Link href="/" className="equipment-back-link">← Back to Home</Link>

        <div className="equipment-hero-grid">
          <div>
            <span className="equipment-eyebrow">CRITICAL COMMUNICATIONS</span>
            <h1>Walkie-Talkie</h1>
            <p>
              Professional two-way radio communication systems for secure,
              reliable voice communication across security, aviation,
              industrial and emergency-response environments.
            </p>
          </div>

          <div className="walkie-visual">
            <div className="walkie-real-frame">
              <img
                src="/walkie-talkie-real-photo.jpg"
                alt="Professional two-way radio"
                className="walkie-real-photo"
              />
              <div className="walkie-photo-overlay" />
              <div className="walkie-signal-ring ring-one" />
              <div className="walkie-signal-ring ring-two" />
              <div className="walkie-signal-ring ring-three" />
              <div className="walkie-live-status">
                RADIO LINK • TRANSMITTING
              </div>
              <div className="walkie-wave-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-manufacturer-section">
        <div className="equipment-section-heading">
          <span>TECHNOLOGY PROFILES</span>
          <h2>Leading Two-Way Radio Manufacturers</h2>
          <p>
            Professional portable-radio, mobile-radio, DMR, TETRA, P25 and
            mission-critical communication technologies.
          </p>
        </div>

        <div className="equipment-manufacturer-grid">
          {manufacturers.map((name, index) => (
            <button
              key={name}
              className="equipment-manufacturer-card walkie-card"
              style={{ "--card-delay": `${index * 65}ms` } as React.CSSProperties}
              onClick={() => setSelected(name)}
            >
              <div className="walkie-card-visual">
                <div className="mini-radio">
                  <span className="radio-antenna" />
                  <span className="radio-display" />
                  <span className="radio-knob" />
                  <span className="radio-speaker" />
                  <span className="radio-button" />
                </div>

                <div className="mini-radio-wave wave-a" />
                <div className="mini-radio-wave wave-b" />
              </div>

              <strong>{name}</strong>
              <small>Professional Two-Way Radio</small>
              <em>View Details →</em>
            </button>
          ))}
        </div>
      </section>

      <section className="equipment-service-cta">
        <span>TECHNICAL SUPPORT</span>
        <h2>Need Radio Programming or Maintenance?</h2>
        <p>
          SecureTech supports radio installation, programming, configuration,
          system commissioning, troubleshooting and preventive maintenance.
        </p>
        <Link href="/service-request">Request Service →</Link>
      </section>

      {selected && (
        <div
          className="equipment-modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="equipment-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="equipment-modal-close"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <span>MANUFACTURER TECHNOLOGY PROFILE</span>
            <h2>{selected}</h2>

            <p>
              {selected} professional radio technology profile for reliable
              two-way communication and mission-critical operations.
            </p>

            <div className="equipment-modal-points">
              <div>
                <b>Technology</b>
                <span>
                  DMR, TETRA, P25, analog and professional two-way radio
                  communication
                </span>
              </div>

              <div>
                <b>Applications</b>
                <span>
                  Airports, security, industrial sites, emergency response,
                  logistics and critical infrastructure
                </span>
              </div>

              <div>
                <b>Support</b>
                <span>
                  Programming, configuration, commissioning and maintenance
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
