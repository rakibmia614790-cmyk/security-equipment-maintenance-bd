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
      redirectTo: "https://se-6topprx5h-rakib-bb40.vercel.app/reset-password",
    })

    if (error) {
      setError(error.message)
    } else {
      setMessage("If this email is registered, a password reset link has been sent.")
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Partner Portal
            </p>
            <h1 className="text-3xl font-bold">Forgot Password</h1>
            <p className="mt-3 text-sm text-slate-400">
              Enter your registered email to receive a password reset link.
            </p>
          </div>

          <form onSubmit={handleReset} className="space-y-5">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="partner@example.com"
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />

            {error && (
              <div className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            {message && (
              <div className="rounded-xl border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-400">
            <Link href="/partner-login" className="text-cyan-400 hover:text-cyan-300">
              Back to Partner Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
