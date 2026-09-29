"use client";

import type { CSSProperties } from "react";

import { useState } from "react";

type Manufacturer = {
  name: string;
  category: string;
  technology: string;
  applications: string;
  capability: string;
};

export default function EquipmentManufacturerShowcase({
  manufacturers,
}: {
  manufacturers: Manufacturer[];
}) {
  const [selected, setSelected] = useState<Manufacturer | null>(null);

  return (
    <>
      <div className="baggage-manufacturer-grid">
        {manufacturers.map((item, index) => (
          <article
            className="baggage-manufacturer-card"
            key={item.name}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div
              className="real-xray-visual actual-xray-card"
              style={{ "--scan-delay": `${(index % 27) * 0.8}s` } as CSSProperties}
            >
              <img
                src="/baggage-xray-transparent.png"
                alt="Actual baggage X-ray screening image"
                className="actual-xray-image"
              />
              <div className="actual-xray-overlay" />
              <div className="actual-xray-scanline" />
              <div className="actual-xray-label">LIVE X-RAY ANALYSIS</div>
            </div>

            <div className="manufacturer-card-content">
              <p>{item.category}</p>
              <h3>{item.name}</h3>
              <button type="button" onClick={() => setSelected(item)}>
                View Details →
              </button>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div className="manufacturer-modal" role="dialog" aria-modal="true">
          <div className="manufacturer-modal-inner">
            <button
              className="manufacturer-modal-close"
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="real-xray-visual modal-real-xray">
              <img
                src="/baggage-xray-transparent.png"
                alt="Actual baggage X-ray screening image"
                className="actual-xray-image"
              />
              <div className="actual-xray-overlay" />
              <div className="actual-xray-scanline modal-scanline" />
              <div className="actual-xray-label">X-RAY SCREENING VIEW</div>
            </div>

            <p>{selected.category}</p>
            <h2>{selected.name}</h2>

            <div className="manufacturer-detail-grid">
              <div><strong>Technology</strong><span>{selected.technology}</span></div>
              <div><strong>Typical Applications</strong><span>{selected.applications}</span></div>
              <div><strong>Relevant Capability</strong><span>{selected.capability}</span></div>
            </div>

            <a href="#service-request">Request Technical Support →</a>
          </div>
        </div>
      )}
    </>
  );
}
