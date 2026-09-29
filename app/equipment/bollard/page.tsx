"use client";

import Link from "next/link";
import { useState } from "react";

const manufacturers = [
  "FAAC",
  "CAME",
  "BFT",
  "Nice",
  "Frontier Pitts",
  "ATG Access",
  "Pilomat",
  "Automatic Systems",
  "Gunnebo",
  "Delta Scientific",
  "Heald",
  "Bollards International",
  "Roger Technology",
  "SEA",
  "FADINI",
  "Benincà",
  "DITEC",
  "ELKA",
  "ZKTeco",
  "Hikvision",
  "Dahua Technology",
  "Perimeter Protection Systems",
];

export default function BollardPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="equipment-master-page bollard-master-page">
      <section className="equipment-master-hero">
        <Link href="/" className="equipment-back-link">← Back to Home</Link>

        <div className="equipment-hero-grid">
          <div>
            <span className="equipment-eyebrow">PERIMETER SECURITY TECHNOLOGY</span>
            <h1>Bollard</h1>
            <p>
              Automatic, semi-automatic and fixed security bollard solutions
              for controlled vehicle access and perimeter protection.
            </p>
          </div>

          <div className="bollard-visual">
            <div className="bollard-real-frame">
              <img
                src="/bollard-real-photo.jpg"
                alt="Retractable security bollard"
                className="bollard-real-photo"
              />
              <div className="bollard-overlay" />
              <div className="bollard-scanline" />
              <div className="bollard-status">PERIMETER SECURITY</div>
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-manufacturer-section">
        <div className="equipment-section-heading">
          <span>TECHNOLOGY PROFILES</span>
          <h2>Leading Bollard Manufacturers</h2>
          <p>
            Explore traffic, automatic and high-security perimeter bollard
            manufacturers.
          </p>
        </div>

        <div className="equipment-manufacturer-grid">
          {manufacturers.map((name, index) => (
            <button
              key={name}
              className="equipment-manufacturer-card bollard-card"
              style={{ "--card-delay": `${index * 65}ms` } as React.CSSProperties}
              onClick={() => setSelected(name)}
            >
              <div className="bollard-card-visual">
                <div className="mini-bollard">
                  <span />
                </div>
                <div className="bollard-rise-ring" />
              </div>

              <strong>{name}</strong>
              <small>Traffic & Security Bollards</small>
              <em>View Details →</em>
            </button>
          ))}
        </div>
      </section>

      <section className="equipment-service-cta">
        <span>TECHNICAL SUPPORT</span>
        <h2>Need Bollard Installation or Maintenance?</h2>
        <p>
          SecureTech supports bollard installation, commissioning, access
          integration, inspection, troubleshooting and preventive maintenance.
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
              {selected} bollard technology profile covering vehicle access
              control, perimeter protection and technical support.
            </p>

            <div className="equipment-modal-points">
              <div>
                <b>Technology</b>
                <span>Automatic, semi-automatic and fixed bollard systems</span>
              </div>
              <div>
                <b>Applications</b>
                <span>Government, commercial, industrial and high-security sites</span>
              </div>
              <div>
                <b>Support</b>
                <span>Installation, integration, commissioning and maintenance</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
