"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { createClient } from "../supabase"

export default function ForgotPasswordPage() {
  const supabase = createClient()

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleReset(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage("")
    setError("")

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo:
        "https://se-6topprx5h-rakib-bb40.vercel.app/reset-password",
    })

    if (error) {
      setError(error.message)
    } else {
      setMessage(
        "If this email is registered, a password reset link has been sent."
      )
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-cyan-400/30 bg-slate-900 p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-cyan-400">
            Forgot Password
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            Enter your registered partner email address to receive a password
            reset link.
          </p>

          <form onSubmit={handleReset} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="partner@example.com"
              />
            </div>

            {error && (
              <div className="rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
                {error}
              </div>
            )}

            {message && (
              <div className="rounded-lg border border-green-500/40 bg-green-500/10 p-3 text-sm text-green-300">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-400">
            <Link
              href="/partner-login"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Back to Partner Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
