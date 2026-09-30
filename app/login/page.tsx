"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [challengeId, setChallengeId] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  async function requestOtp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/secure-portal/otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "request",
          mobile,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error || "Unable to request OTP.");
        return;
      }

      setChallengeId(result.challengeId);
      setOtpSent(true);
      setMessage("SMS OTP has been requested. Please enter the verification code.");
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "verify",
          challengeId,
          code,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error || "OTP verification failed.");
        return;
      }

      setMessage(result.message);
    } catch {
      setMessage("Unable to connect to the SecureTech Portal.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section>
        <Link href="/">← Back to Home</Link>

        <h1>SecureTech Portal Login</h1>

        <p>
          Login requires Email and Mobile Number verification. OTP verification
          does not grant portal access until Admin Team authorization is completed.
        </p>

        {!otpSent ? (
          <form onSubmit={requestOtp}>
            <label>
              Email Address
              <input name="email" type="email" required />
            </label>

            <label>
              Mobile Number
              <input
                name="mobile"
                type="tel"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
                required
              />
            </label>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send SMS OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={verifyOtp}>
            <label>
              SMS OTP
              <input
                name="code"
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={code}
                onChange={(event) => setCode(event.target.value)}
                required
              />
            </label>

            <button type="submit" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        {message && <p>{message}</p>}

        <p>
          New user? <Link href="/register">Create an account</Link>
        </p>

        <p>Portal access: Admin Team · Engineer · Technician</p>
      </section>
    </main>
  );
}
