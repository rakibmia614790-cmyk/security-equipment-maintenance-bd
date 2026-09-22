"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { createClient } from "../supabase"

export default function PartnerSignupPage() {
  const supabase = createClient()

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  async function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage("")
    setError("")

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setMessage(
      "Registration successful. Your account is waiting for administrator approval."
    )
    setFullName("")
    setEmail("")
    setPassword("")
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Partner Portal
            </p>

            <h1 className="text-3xl font-bold">
              Create Partner Account
            </h1>

            <p className="mt-3 text-sm text-slate-400">
              Register your account for administrator approval.
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                required
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="partner@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="Minimum 8 characters"
              />
            </div>

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
              className="w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Partner Account"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              href="/partner-login"
              className="font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
