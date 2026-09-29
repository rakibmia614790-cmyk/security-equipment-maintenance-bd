"use client";

import Link from "next/link";
import { useState } from "react";

const manufacturers = [
  "FAAC",
  "CAME",
  "BFT",
  "Nice",
  "Magnetic Autocontrol",
  "Automatic Systems",
  "Gunnebo",
  "Hörmann",
  "TIBA Parking",
  "Boon Edam",
  "ZKTeco",
  "Dahua Technology",
  "Hikvision",
  "Roger Technology",
  "SEA",
  "Benincà",
  "DITEC",
  "ELKA",
  "Fadini",
  "Genius",
  "Parklio",
  "LiftMaster",
];

export default function RoadBarrierPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="equipment-master-page road-barrier-master-page">
      <section className="equipment-master-hero">
        <Link href="/" className="equipment-back-link">← Back to Home</Link>

        <div className="equipment-hero-grid">
          <div>
            <span className="equipment-eyebrow">VEHICLE ACCESS CONTROL</span>
            <h1>Road Barrier</h1>
            <p>
              Automatic boom barrier systems for controlled vehicle entry,
              parking facilities, industrial sites and secure access points.
            </p>
          </div>

          <div className="road-barrier-visual">
            <div className="barrier-real-frame">
              <img
                src="/road-barrier-real-photo.jpg"
                alt="Automatic road barrier system"
                className="barrier-real-photo"
              />
              <div className="barrier-photo-overlay" />
              <div className="barrier-motion-line" />
              <div className="barrier-status">ACCESS CONTROL</div>
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-manufacturer-section">
        <div className="equipment-section-heading">
          <span>TECHNOLOGY PROFILES</span>
          <h2>Leading Road Barrier Manufacturers</h2>
          <p>
            Explore automatic barrier, vehicle access and parking-control
            technology manufacturers.
          </p>
        </div>

        <div className="equipment-manufacturer-grid">
          {manufacturers.map((name, index) => (
            <button
              key={name}
              className="equipment-manufacturer-card road-barrier-card"
              style={{ "--card-delay": `${index * 65}ms` } as React.CSSProperties}
              onClick={() => setSelected(name)}
            >
              <div className="road-barrier-card-visual">
                <div className="mini-barrier">
                  <span className="mini-barrier-arm" />
                  <span className="mini-barrier-base" />
                </div>
                <div className="barrier-motion-pulse" />
              </div>

              <strong>{name}</strong>
              <small>Automatic Road Barrier</small>
              <em>View Details →</em>
            </button>
          ))}
        </div>
      </section>

      <section className="equipment-service-cta">
        <span>TECHNICAL SUPPORT</span>
        <h2>Need Road Barrier Installation or Maintenance?</h2>
        <p>
          SecureTech supports installation, commissioning, access-control
          integration, troubleshooting and preventive maintenance.
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
              {selected} automatic vehicle-access technology profile covering
              barrier systems, controlled entry applications and technical
              support requirements.
            </p>
            <div className="equipment-modal-points">
              <div>
                <b>Technology</b>
                <span>Automatic boom and vehicle access barrier systems</span>
              </div>
              <div>
                <b>Applications</b>
                <span>Parking, industrial, commercial and controlled-access facilities</span>
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
