export default function PartnerLoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            SecureTech BD
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Login
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Secure access portal for selected partners, engineers, technicians
            and authorized associates.
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-white/10 bg-white/[0.05] p-8 text-left shadow-2xl">
            <label className="text-sm font-medium text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
            />

            <label className="mt-5 block text-sm font-medium text-slate-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
            />

            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold hover:bg-blue-500"
            >
              Sign In
            </button>

            <p className="mt-5 text-center text-xs leading-5 text-slate-500">
              Access is restricted to authorized users.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
