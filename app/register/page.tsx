"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type RegistrationData = {
  name: string;
  email: string;
  mobile: string;
  role: "engineer" | "technician";
};

export default function RegisterPage() {
  const [data, setData] = useState<RegistrationData>({
    name: "",
    email: "",
    mobile: "",
    role: "engineer",
  });
  const [challengeId, setChallengeId] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function register(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/secure-portal/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(
          result.errors?.join(", ") || "Registration could not be completed."
        );
        return;
      }

      const otpResponse = await fetch("/api/secure-portal/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "request",
          mobile: data.mobile,
        }),
      });

      const otpResult = await otpResponse.json();

      if (!otpResponse.ok) {
        setMessage(
          "Account created as Pending, but SMS OTP could not be requested."
        );
        return;
      }

      setChallengeId(otpResult.challengeId);
      setOtpSent(true);
      setMessage(
        "Account created successfully. Your account is Pending. Please verify your mobile number with the SMS OTP."
      );
    } catch {
      setMessage("Unable to connect to the SecureTech Portal.");
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/secure-portal/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "verify",
          challengeId,
          code: otp,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error || "OTP verification failed.");
        return;
      }

      setMessage(
        "Mobile number verified successfully. Your account remains Pending. Admin Team verification and authorization will be completed within up to 72 hours. Portal access is available only after approval."
      );
      setOtpSent(false);
      setOtp("");
      setChallengeId("");
    } catch {
      setMessage("Unable to connect to the SecureTech Portal.");
    } finally {
      setLoading(false);
    }
  }

  function updateField(
    field: keyof RegistrationData,
    value: string
  ) {
    setData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  return (
    <main>
      <section>
        <Link href="/">← Back to Home</Link>

        <h1>SecureTech Portal Registration</h1>

        <p>
          Register with your Email and Mobile Number. New accounts remain
          Pending until mobile verification and Admin Team authorization.
        </p>

        {!otpSent ? (
          <form onSubmit={register}>
            <label>
              Full Name
              <input
                name="name"
                type="text"
                value={data.name}
                onChange={(event) =>
                  updateField("name", event.target.value)
                }
                required
              />
            </label>

            <label>
              Email Address
              <input
                name="email"
                type="email"
                value={data.email}
                onChange={(event) =>
                  updateField("email", event.target.value)
                }
                required
              />
            </label>

            <label>
              Mobile Number
              <input
                name="mobile"
                type="tel"
                value={data.mobile}
                onChange={(event) =>
                  updateField("mobile", event.target.value)
                }
                required
              />
            </label>

            <label>
              Requested Role
              <select
                name="role"
                value={data.role}
                onChange={(event) =>
                  updateField(
                    "role",
                    event.target.value
                  )
                }
                required
              >
                <option value="engineer">Engineer</option>
                <option value="technician">Technician</option>
              </select>
            </label>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Create Account"}
            </button>
          </form>
        ) : (
          <form onSubmit={verifyOtp}>
            <p>Enter the SMS OTP sent to your mobile number.</p>

            <label>
              SMS OTP
              <input
                name="otp"
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
                required
              />
            </label>

            <button type="submit" disabled={loading}>
              {loading ? "Verifying..." : "Verify Mobile OTP"}
            </button>
          </form>
        )}

        {message && <p>{message}</p>}

        <p>
          Already registered? <Link href="/login">Sign in</Link>
        </p>

        <p>Portal access: Admin Team · Engineer · Technician</p>
      </section>
    </main>
  );
}
