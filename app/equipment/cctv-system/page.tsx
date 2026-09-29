"use client";

import Link from "next/link";
import { useState } from "react";

const manufacturers = [
  "Hikvision",
  "Dahua Technology",
  "Axis Communications",
  "Bosch Security Systems",
  "Hanwha Vision",
  "Avigilon",
  "Honeywell",
  "Pelco",
  "VIVOTEK",
  "Uniview",
  "MOBOTIX",
  "i-PRO",
  "Panasonic",
  "Sony",
  "Teledyne FLIR",
  "IDIS",
  "Infinova",
  "GeoVision",
  "ACTi",
  "CP PLUS",
  "Verkada",
];

export default function CCTVPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="equipment-master-page cctv-master-page">
      <section className="equipment-master-hero">
        <Link href="/" className="equipment-back-link">← Back to Home</Link>

        <div className="equipment-hero-grid">
          <div>
            <span className="equipment-eyebrow">VIDEO SURVEILLANCE TECHNOLOGY</span>
            <h1>CCTV System</h1>
            <p>
              Professional video surveillance, intelligent monitoring and
              security camera solutions for commercial, industrial and
              high-security environments.
            </p>
          </div>

          <div className="cctv-visual">
            <div className="cctv-real-frame">
              <img
                src="/cctv-real-photo.jpg"
                alt="Professional CCTV surveillance camera"
                className="cctv-real-photo"
              />
              <div className="cctv-overlay" />
              <div className="cctv-sweep" />
              <div className="cctv-live-indicator">● LIVE</div>
              <div className="cctv-crosshair" />
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-manufacturer-section">
        <div className="equipment-section-heading">
          <span>TECHNOLOGY PROFILES</span>
          <h2>Leading CCTV Manufacturers</h2>
          <p>
            Explore professional video-surveillance manufacturers and
            technology profiles.
          </p>
        </div>

        <div className="equipment-manufacturer-grid">
          {manufacturers.map((name, index) => (
            <button
              key={name}
              className="equipment-manufacturer-card cctv-card"
              style={{ "--card-delay": `${index * 65}ms` } as React.CSSProperties}
              onClick={() => setSelected(name)}
            >
              <div className="cctv-card-visual">
                <div className="mini-camera">
                  <span className="mini-lens" />
                  <span className="mini-camera-body" />
                </div>
                <div className="camera-sweep" />
              </div>

              <strong>{name}</strong>
              <small>Video Surveillance & CCTV</small>
              <em>View Details →</em>
            </button>
          ))}
        </div>
      </section>

      <section className="equipment-service-cta">
        <span>TECHNICAL SUPPORT</span>
        <h2>Need CCTV Installation, Integration or Maintenance?</h2>
        <p>
          SecureTech supports CCTV installation, commissioning, configuration,
          troubleshooting, preventive maintenance and system integration.
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
              {selected} video-surveillance technology profile covering
              professional camera systems, monitoring applications and
              technical support considerations.
            </p>

            <div className="equipment-modal-points">
              <div>
                <b>Technology</b>
                <span>Network video surveillance and CCTV</span>
              </div>
              <div>
                <b>Applications</b>
                <span>Airports, government, commercial, industrial and critical facilities</span>
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
