const documentTypes = [
  "Software",
  "Manual",
  "SOP",
  "Datasheet",
  "Troubleshooting",
  "Training",
  "Certificate",
  "Technical Documents",
];

export default function AdminLibraryPage() {
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
            color: "#ffffff",
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
            SecureTech Admin Team
          </p>

          <h1 style={{ margin: 0, fontSize: 30 }}>
            Document Library
          </h1>

          <p
            style={{
              margin: "10px 0 0",
              fontSize: 14,
              opacity: 0.8,
            }}
          >
            Organize and manage technical resources from the portal.
          </p>
        </header>

        <section
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 16,
            padding: 24,
            marginBottom: 20,
          }}
        >
          <h2
            style={{
              margin: "0 0 16px",
              fontSize: 19,
              color: "#111827",
            }}
          >
            Document Categories
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(210px, 1fr))",
              gap: 12,
            }}
          >
            {documentTypes.map((type) => (
              <div
                key={type}
                style={{
                  padding: "15px 16px",
                  border: "1px solid #e5e7eb",
                  borderRadius: 10,
                  color: "#334155",
                  fontSize: 14,
                  fontWeight: 700,
                  background: "#f8fafc",
                }}
              >
                {type}
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            style={{
              padding: "12px 18px",
              border: 0,
              borderRadius: 10,
              background: "#111827",
              color: "#ffffff",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Create Folder
          </button>

          <button
            type="button"
            style={{
              padding: "12px 18px",
              border: "1px solid #cbd5e1",
              borderRadius: 10,
              background: "#ffffff",
              color: "#334155",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Add Document
          </button>
        </section>
      </section>
    </main>
  );
}
