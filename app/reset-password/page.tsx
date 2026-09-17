"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { createClient } from "../supabase"

export default function ResetPasswordPage() {
  const supabase = createClient()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleUpdate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    setMessage("")

    if (password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.updateUser({
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setMessage("Password updated successfully. You can now log in.")
    setPassword("")
    setConfirmPassword("")
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-cyan-400/30 bg-slate-900 p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-cyan-400">
            Reset Password
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            Enter your new partner account password below.
          </p>

          <form onSubmit={handleUpdate} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                New Password
              </label>

              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="Minimum 8 characters"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                required
                minLength={8}
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="Repeat your password"
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
              {loading ? "Updating..." : "Update Password"}
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
