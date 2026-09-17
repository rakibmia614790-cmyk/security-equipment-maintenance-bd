"use client"

import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "../supabase"

export default function ResetPasswordPage() {
  const router = useRouter()
  const supabase = createClient()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [ready, setReady] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setReady(!!data.session)
    })
  }, [supabase])

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

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setError(error.message)
      return
    }

    setMessage("Password updated successfully.")
    setTimeout(() => router.push("/partner-login"), 1500)
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Partner Portal
            </p>
            <h1 className="text-3xl font-bold">Reset Password</h1>
          </div>

          {!ready ? (
            <p className="text-center text-slate-400">
              Please open the password reset link sent to your email.
            </p>
          ) : (
            <form onSubmit={handleUpdate} className="space-y-5">
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="New password"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="password"
                required
                minLength={8}
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Confirm new password"
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
                className="w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400"
              >
                Update Password
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
