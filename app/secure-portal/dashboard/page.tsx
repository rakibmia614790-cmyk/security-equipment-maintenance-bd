import Link from "next/link";

const modules = [
  {
    title: "Technical Resources",
    description: "Access manuals, SOPs, datasheets and technical resources.",
  },
  {
    title: "Service & Maintenance",
    description: "Manage equipment service and maintenance activities.",
  },
  {
    title: "Training",
    description: "Access approved training and technical learning materials.",
  },
  {
    title: "Troubleshooting",
    description: "Access approved troubleshooting and diagnostic resources.",
  },
];

export default function SecurePortalDashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "32px 20px",
      }}
    >
      <section style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            background: "#111827",
            color: "#ffffff",
            borderRadius: 18,
            padding: "30px",
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
            SecureTech Internal Portal
          </p>

          <h1 style={{ margin: 0, fontSize: 30 }}>
            Technical Dashboard
          </h1>

          <p
            style={{
              margin: "10px 0 0",
              fontSize: 14,
              opacity: 0.8,
            }}
          >
            Authorized technical resources and service operations.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {modules.map((module) => (
            <article
              key={module.title}
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: 16,
                padding: 24,
                minHeight: 150,
              }}
            >
              <h2
                style={{
                  margin: "0 0 10px",
                  fontSize: 18,
                  color: "#111827",
                }}
              >
                {module.title}
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                {module.description}
              </p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <Link
            href="/"
            style={{
              color: "#334155",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            ← Back to SecureTech website
          </Link>
        </div>
      </section>
    </main>
  );
}
