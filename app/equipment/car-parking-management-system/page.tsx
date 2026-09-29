"use client";

import Link from "next/link";
import { useState } from "react";

const manufacturers = [
  "SKIDATA",
  "DESIGNA",
  "Kapsch TrafficCom",
  "TIBA Parking",
  "Nedap",
  "Hikvision",
  "Dahua Technology",
  "ZKTeco",
  "FAAC",
  "CAME",
  "Magnetic Autocontrol",
  "SWARCO",
  "TKH Security",
  "Amano McGann",
  "WPS Parking Solutions",
  "Hub Parking Technology",
  "Scheidt & Bachmann",
  "Flowbird",
  "Conduent Transportation",
  "Q-Free",
];

export default function CarParkingPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="equipment-master-page car-parking-master-page">
      <section className="equipment-master-hero">
        <Link href="/" className="equipment-back-link">← Back to Home</Link>

        <div className="equipment-hero-grid">
          <div>
            <span className="equipment-eyebrow">SMART VEHICLE ACCESS</span>
            <h1>Car Parking Management System</h1>
            <p>
              Intelligent parking access, ticketless operation, ANPR/LPR,
              payment, occupancy monitoring and centralized parking management.
            </p>
          </div>

          <div className="parking-visual">
            <div className="parking-real-frame">
              <img
                src="/car-parking-real-photo.jpg"
                alt="Professional car parking management system"
                className="parking-real-photo"
              />
              <div className="parking-photo-overlay" />
              <div className="parking-lpr-box">
                <span>LICENSE PLATE</span>
                <strong>SCAN</strong>
              </div>
              <div className="parking-lpr-line" />
              <div className="parking-live-status">ANPR SYSTEM • ONLINE</div>
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-manufacturer-section">
        <div className="equipment-section-heading">
          <span>TECHNOLOGY PROFILES</span>
          <h2>Leading Parking Technology Manufacturers</h2>
          <p>
            Parking access, ANPR/LPR, payment, guidance and centralized
            management technologies from established manufacturers.
          </p>
        </div>

        <div className="equipment-manufacturer-grid">
          {manufacturers.map((name, index) => (
            <button
              key={name}
              className="equipment-manufacturer-card parking-card"
              style={{ "--card-delay": `${index * 65}ms` } as React.CSSProperties}
              onClick={() => setSelected(name)}
            >
              <div className="parking-card-visual">
                <div className="mini-parking-terminal">
                  <span className="terminal-display" />
                  <span className="terminal-slot" />
                  <span className="terminal-status" />
                </div>
                <div className="parking-car-scan">
                  <span />
                </div>
              </div>

              <strong>{name}</strong>
              <small>Parking Management Technology</small>
              <em>View Details →</em>
            </button>
          ))}
        </div>
      </section>

      <section className="equipment-service-cta">
        <span>TECHNICAL SUPPORT</span>
        <h2>Need Parking System Installation or Maintenance?</h2>
        <p>
          SecureTech supports parking-system installation, ANPR/LPR,
          barrier integration, payment systems, commissioning and maintenance.
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
              {selected} technology profile for parking access, vehicle
              identification, payment and parking-management applications.
            </p>

            <div className="equipment-modal-points">
              <div>
                <b>Technology</b>
                <span>Parking access, ANPR/LPR, payment and management systems</span>
              </div>
              <div>
                <b>Applications</b>
                <span>Airports, shopping malls, hospitals, offices and urban facilities</span>
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
