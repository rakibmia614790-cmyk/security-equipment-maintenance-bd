"use client";

import Link from "next/link";
import { useState } from "react";

const manufacturers = [
  "Frontier Pitts",
  "Heald",
  "Delta Scientific",
  "FAAC",
  "CAME",
  "BFT",
  "Nice",
  "Automatic Systems",
  "Gunnebo",
  "Magnetic Autocontrol",
  "Hörmann",
  "ATG Access",
  "Jacksons Fencing",
  "Cova Security Gates",
  "Pilomat",
  "Bollards International",
  "ZKTeco",
  "Dahua Technology",
  "Hikvision",
  "TIBA Parking",
  "Roger Technology",
  "SEA",
];

export default function RoadBlockerPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="equipment-master-page road-blocker-master-page">
      <section className="equipment-master-hero">
        <Link href="/" className="equipment-back-link">← Back to Home</Link>

        <div className="equipment-hero-grid">
          <div>
            <span className="equipment-eyebrow">HIGH-SECURITY VEHICLE PROTECTION</span>
            <h1>Road Blocker</h1>
            <p>
              High-security rising road blocker systems designed to protect
              controlled vehicle entrances and critical infrastructure.
            </p>
          </div>

          <div className="road-blocker-visual">
            <div className="road-blocker-real-frame">
              <img
                src="/road-blocker-real-photo.jpg"
                alt="High-security rising road blocker"
                className="road-blocker-real-photo"
              />
              <div className="road-blocker-overlay" />
              <div className="road-blocker-hydraulic-line" />
              <div className="road-blocker-status">HYDRAULIC SECURITY</div>
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-manufacturer-section">
        <div className="equipment-section-heading">
          <span>TECHNOLOGY PROFILES</span>
          <h2>Leading Road Blocker Manufacturers</h2>
          <p>
            Explore high-security vehicle barrier and road blocker technology
            manufacturers.
          </p>
        </div>

        <div className="equipment-manufacturer-grid">
          {manufacturers.map((name, index) => (
            <button
              key={name}
              className="equipment-manufacturer-card road-blocker-card"
              style={{ "--card-delay": `${index * 65}ms` } as React.CSSProperties}
              onClick={() => setSelected(name)}
            >
              <div className="road-blocker-card-visual">
                <div className="mini-road-blocker">
                  <span className="mini-blocker-plate" />
                  <span className="mini-ground" />
                </div>
                <div className="hydraulic-pulse" />
              </div>

              <strong>{name}</strong>
              <small>High-Security Road Blocker</small>
              <em>View Details →</em>
            </button>
          ))}
        </div>
      </section>

      <section className="equipment-service-cta">
        <span>TECHNICAL SUPPORT</span>
        <h2>Need Road Blocker Installation or Maintenance?</h2>
        <p>
          SecureTech supports installation, commissioning, hydraulic-system
          inspection, troubleshooting and preventive maintenance.
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
              {selected} high-security vehicle protection technology profile
              covering rising road blockers, perimeter protection and
              technical support.
            </p>
            <div className="equipment-modal-points">
              <div>
                <b>Technology</b>
                <span>Hydraulic and electromechanical rising road blocker systems</span>
              </div>
              <div>
                <b>Applications</b>
                <span>Critical infrastructure, government, military and high-security entrances</span>
              </div>
              <div>
                <b>Support</b>
                <span>Installation, commissioning, inspection and maintenance</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
