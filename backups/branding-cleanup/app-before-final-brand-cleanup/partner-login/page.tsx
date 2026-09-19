"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "../supabase"

export default function PartnerLoginPage() {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError("")

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error || !data.user) {
      setError("Invalid email or password.")
      setLoading(false)
      return
    }

    const { data: profile, error: profileError } = await supabase
      .from("partner_profiles")
      .select("approved")
      .eq("id", data.user.id)
      .single()

    if (profileError || !profile) {
      await supabase.auth.signOut()
      setError("Partner profile not found.")
      setLoading(false)
      return
    }

    if (!profile.approved) {
      await supabase.auth.signOut()
      setError("Your account is waiting for administrator approval.")
      setLoading(false)
      return
    }

    router.push("/partner-dashboard")
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
              Partner Login
            </h1>

            <p className="mt-3 text-sm text-slate-400">
              Sign in to access the secure partner area.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email / User ID
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Partner Login"}
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            <a
              href="/forgot-password"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Forgot Password?
            </a>
          </div>

          <div className="mt-6 text-center text-sm text-slate-400">
            New partner?{" "}
            <a
              href="/partner-signup"
              className="font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Create an Account
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
