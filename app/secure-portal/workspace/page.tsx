const sections = [
  ["Equipment Resources", "Equipment manuals, specifications and technical references."],
  ["Service & Maintenance", "Service records, maintenance procedures and technical activities."],
  ["Troubleshooting", "Approved diagnostic procedures and troubleshooting resources."],
  ["Training & Certification", "Training materials and approved certification resources."],
];

export default function TechnicalWorkspacePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "32px 20px",
      }}
    >
      <section style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header
          style={{
            background: "#111827",
            color: "#fff",
            borderRadius: 18,
            padding: 30,
            marginBottom: 24,
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              opacity: 0.75,
            }}
          >
            SecureTech Technical Portal
          </p>

          <h1 style={{ margin: 0, fontSize: 30 }}>
            Technical Workspace
          </h1>

          <p
            style={{
              margin: "10px 0 0",
              fontSize: 14,
              opacity: 0.8,
            }}
          >
            Engineer & Technician resources
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {sections.map(([title, description]) => (
            <article
              key={title}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 16,
                padding: 24,
                minHeight: 145,
              }}
            >
              <h2
                style={{
                  margin: "0 0 10px",
                  fontSize: 18,
                  color: "#111827",
                }}
              >
                {title}
              </h2>

              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "#64748b",
                }}
              >
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
