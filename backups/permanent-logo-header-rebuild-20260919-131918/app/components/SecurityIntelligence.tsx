"use client"

import { useEffect, useState } from "react"

const systems = [
  "X-RAY SCREENING",
  "TRACE DETECTION",
  "AI THREAT ANALYSIS",
  "ACCESS CONTROL",
  "CRITICAL INFRASTRUCTURE",
  "FIELD ENGINEERING",
]

export default function SecurityIntelligence() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % systems.length)
    }, 3200)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="group hidden lg:flex min-w-[360px] max-w-[460px] flex-1 items-center justify-center px-5">
      <div className="relative w-full overflow-hidden rounded-2xl border border-indigo-300/25 bg-gradient-to-br from-indigo-950/80 via-slate-950/90 to-cyan-950/70 px-5 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_12px_35px_rgba(0,0,0,0.45),0_0_30px_rgba(99,102,241,0.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_20px_45px_rgba(0,0,0,0.55),0_0_45px_rgba(34,211,238,0.18)]">

        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-300 to-transparent animate-pulse" />
        </div>

        <div className="relative flex items-center gap-4">

          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-cyan-300/30 animate-ping" />
            <div className="absolute inset-1 rounded-full border border-indigo-300/40" />
            <div className="absolute inset-3 rounded-full border border-cyan-200/60" />
            <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,1)] animate-pulse" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.28em] text-cyan-300">
                LIVE SECURITY INTELLIGENCE
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)] animate-pulse" />
            </div>

            <div
              key={index}
              className="mt-1 text-[13px] font-bold tracking-[0.12em] text-slate-100 transition-all duration-700"
            >
              {systems[index]}
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-[9px] font-medium tracking-[0.18em] text-indigo-300">
                SYSTEM STATUS
              </span>
              <span className="text-[9px] font-bold tracking-[0.16em] text-emerald-300">
                ● ONLINE
              </span>
            </div>
          </div>

          <div className="hidden xl:flex shrink-0 flex-col items-end gap-1">
            <div className="flex gap-1">
              {[0,1,2,3,4].map((i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                    i === index % 5
                      ? "bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]"
                      : "bg-indigo-900"
                  }`}
                />
              ))}
            </div>
            <span className="text-[8px] tracking-[0.2em] text-slate-500">
              SECURETECH BD
            </span>
          </div>
        </div>

        <div className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[600px]" />
      </div>
    </div>
  )
}
