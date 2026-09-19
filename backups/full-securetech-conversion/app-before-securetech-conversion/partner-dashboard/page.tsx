"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "../supabase"

export default function PartnerDashboardPage() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.replace("/partner-login")
        return
      }

      const { data: profile, error: profileError } = await supabase
        .from("partner_profiles")
        .select("approved")
        .eq("id", user.id)
        .single()

      if (profileError || !profile?.approved) {
        await supabase.auth.signOut()
        router.replace("/partner-login")
        return
      }

      setEmail(user.email || "")
      setLoading(false)
    }

    checkUser()
  }, [router, supabase])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.replace("/partner-login")
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-cyan-400">
        Loading...
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Secure Partner Area
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Partner Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              Logged in as: {email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl border border-red-400/40 bg-red-500/10 px-6 py-3 font-semibold text-red-300 transition hover:bg-red-500/20"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-semibold">Partner Profile</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Partner account information will appear here.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-semibold">Projects</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Partner project information can be added here.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-semibold">Documents</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Secure partner documents can be added here later.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
