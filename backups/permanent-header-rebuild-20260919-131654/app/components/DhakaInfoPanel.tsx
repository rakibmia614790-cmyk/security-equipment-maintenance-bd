"use client"

import { useEffect, useState } from "react"

export default function DhakaInfoPanel() {
  const [now, setNow] = useState<Date | null>(null)
  const [weather, setWeather] = useState("Loading weather...")

  useEffect(() => {
    const update = () => setNow(new Date())
    update()

    const timer = setInterval(update, 1000)

    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=23.8103&longitude=90.4125&current=temperature_2m,weather_code&timezone=Asia%2FDhaka"
    )
      .then((r) => r.json())
      .then((d) => {
        const temp = d?.current?.temperature_2m
        const code = d?.current?.weather_code
        const text =
          code === 0 ? "Clear sky" :
          code <= 3 ? "Cloudy" :
          code <= 67 ? "Rain" :
          code <= 82 ? "Showers" : "Thunderstorm"
        setWeather(`${temp}°C • ${text}`)
      })
      .catch(() => setWeather("Weather unavailable"))

    return () => clearInterval(timer)
  }, [])

  if (!now) {
    return (
      <div className="hidden lg:flex w-[430px] h-[150px] -translate-y-8 rounded-2xl border border-cyan-300/30 bg-slate-950/80" />
    )
  }

  const dhaka = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
  )

  const englishDate = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(now)

  const banglaMonths = [
    "বৈশাখ","জ্যৈষ্ঠ","আষাঢ়","শ্রাবণ","ভাদ্র","আশ্বিন",
    "কার্তিক","অগ্রহায়ণ","পৌষ","মাঘ","ফাল্গুন","চৈত্র"
  ]

  const banglaWeekdays = [
    "রবিবার","সোমবার","মঙ্গলবার","বুধবার",
    "বৃহস্পতিবার","শুক্রবার","শনিবার"
  ]

  const gy = dhaka.getFullYear()
  const gm = dhaka.getMonth()
  const gd = dhaka.getDate()

  const leap = gy % 4 === 0 && (gy % 100 !== 0 || gy % 400 === 0)

  const startYear = (gm > 3 || (gm === 3 && gd >= 14)) ? gy : gy - 1
  const banglaYear = startYear - 593
  const start = new Date(startYear, 3, 14)
  const current = new Date(gy, gm, gd)
  let diff = Math.floor((current.getTime() - start.getTime()) / 86400000)

  const lengths = [31,31,31,31,31,30,30,30,30,30,leap ? 30 : 29,30]
  let banglaMonth = 0

  while (diff >= lengths[banglaMonth]) {
    diff -= lengths[banglaMonth]
    banglaMonth++
  }

  const banglaDate = diff + 1
  const banglaText =
    `${banglaWeekdays[dhaka.getDay()]} • ${banglaDate} ${banglaMonths[banglaMonth]} ${banglaYear}`

  const hijriParts = new Intl.DateTimeFormat(
    "en-u-ca-islamic-umalqura",
    {
      timeZone: "Asia/Dhaka",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  ).formatToParts(now)

  const hDay = hijriParts.find(x => x.type === "day")?.value || ""
  const hMonth = hijriParts.find(x => x.type === "month")?.value || ""
  const hYear = hijriParts.find(x => x.type === "year")?.value || ""
  const hWeekday = hijriParts.find(x => x.type === "weekday")?.value || ""

  const time = now.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Dhaka",
    hour12: false
  })

  const hours = Number(time.slice(0,2))
  const minutes = Number(time.slice(3,5))
  const seconds = Number(time.slice(6,8))

  const hourAngle = (hours % 12) * 30 + minutes * 0.5
  const minuteAngle = minutes * 6 + seconds * 0.1
  const secondAngle = seconds * 6

  return (
    <div className="group hidden lg:flex w-[430px] h-[150px] -translate-y-8 items-center gap-4 rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-950/95 px-5 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_12px_35px_rgba(0,0,0,0.45),0_0_25px_rgba(34,211,238,0.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-10 hover:scale-[1.015] hover:border-cyan-300/50 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_20px_45px_rgba(0,0,0,0.55),0_0_40px_rgba(34,211,238,0.18)]">
      
      <div className="relative h-24 w-24 shrink-0 rounded-full border border-cyan-300/40 bg-slate-900 shadow-[inset_0_0_18px_rgba(34,211,238,0.12),0_0_20px_rgba(34,211,238,0.12)]">
        <svg viewBox="0 0 100 100" className="h-full w-full text-cyan-200">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeOpacity=".18" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = i * 30
            const r = Math.PI * a / 180
            const x1 = 50 + Math.sin(r) * 39
            const y1 = 50 - Math.cos(r) * 39
            const x2 = 50 + Math.sin(r) * 35
            const y2 = 50 - Math.cos(r) * 35
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeOpacity=".6" strokeWidth="1.5"/>
          })}
          <line x1="50" y1="50" x2="50" y2="25" stroke="currentColor" strokeWidth="3" transform={`rotate(${hourAngle} 50 50)`}/>
          <line x1="50" y1="50" x2="50" y2="17" stroke="currentColor" strokeWidth="2" transform={`rotate(${minuteAngle} 50 50)`}/>
          <line x1="50" y1="50" x2="50" y2="12" stroke="currentColor" strokeWidth="1" transform={`rotate(${secondAngle} 50 50)`}/>
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
        </svg>
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-bold tracking-[0.25em] text-cyan-300">
          DHAKA • BANGLADESH
        </div>

        <div className="mt-1 text-2xl font-black tracking-wider text-white">
          {time} <span className="text-[10px] text-cyan-300">UTC+6</span>
        </div>

        <div className="mt-1 space-y-0.5 text-[10px] leading-tight text-slate-300">
          <div><span className="text-cyan-300">GREGORIAN</span> • {englishDate}</div>
          <div><span className="text-cyan-300">BANGLA</span> • {banglaText}</div>
          <div><span className="text-cyan-300">ISLAMIC / HIJRI</span> • {hDay} {hMonth} {hYear} AH</div>
        </div>

        <div className="mt-1 text-[9px] text-slate-500">
          {hMonth} • Dhaka Islamic Calendar
        </div>

        <div className="mt-1 text-[10px] font-semibold text-cyan-200">
          {weather}
        </div>
      </div>
    </div>
  )
}
