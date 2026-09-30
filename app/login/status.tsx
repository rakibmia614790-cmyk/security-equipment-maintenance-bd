"use client";

type AccountStatus = "pending" | "approved" | "rejected" | "suspended";

export default function LoginStatus({
  status = "pending",
}: {
  status?: AccountStatus;
}) {
  const content = {
    pending: {
      title: "Verification Pending",
      message:
        "Your mobile number has been verified successfully. Your account is now pending Admin Team verification. Please allow up to 72 hours for account verification and authorization.",
    },
    approved: {
      title: "Account Approved",
      message:
        "Your account has been approved by the SecureTech Admin Team. You may now access the SecureTech Portal.",
    },
    rejected: {
      title: "Verification Update",
      message:
        "Your account has not been approved at this time. Please contact the SecureTech Admin Team for further information.",
    },
    suspended: {
      title: "Account Suspended",
      message:
        "Your portal access is currently suspended. Please contact the SecureTech Admin Team.",
    },
  }[status];

  return (
    <section
      aria-live="polite"
      style={{
        marginTop: 20,
        padding: 18,
        borderRadius: 12,
        border: "1px solid #e2e8f0",
        background: "#f8fafc",
      }}
    >
      <h2
        style={{
          margin: "0 0 8px",
          fontSize: 17,
          color: "#111827",
        }}
      >
        {content.title}
      </h2>

      <p
        style={{
          margin: 0,
          color: "#64748b",
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        {content.message}
      </p>
    </section>
  );
}
