const pendingActions = [
  {
    title: "Pending User Authorization",
    description:
      "Review newly registered Engineer and Technician accounts before portal access is granted.",
  },
  {
    title: "Account Management",
    description:
      "Manage approved, suspended and rejected portal accounts.",
  },
  {
    title: "Document Library",
    description:
      "Create folders and manage technical documents without changing application code.",
  },
  {
    title: "Audit & Security",
    description:
      "Review authorization and important portal activity.",
  },
];

export default function AdminPortalPage() {
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
            SecureTech Administration
          </p>

          <h1 style={{ margin: 0, fontSize: 30 }}>
            Admin Team
          </h1>

          <p
            style={{
              margin: "10px 0 0",
              fontSize: 14,
              opacity: 0.8,
            }}
          >
            Account authorization, technical resources and security controls.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {pendingActions.map((item) => (
            <article
              key={item.title}
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
                {item.title}
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
