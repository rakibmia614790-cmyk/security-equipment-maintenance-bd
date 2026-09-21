import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-[70vh] bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
          SecureTech BD
        </div>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Secure Login
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
          Secure access for authorized partners, engineers, technicians,
          employees, and approved associates.
        </p>

        <div className="mt-10">
          <Link
            href="/partner-login"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_8px_30px_rgba(6,182,212,0.22)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 hover:bg-cyan-400 hover:shadow-[0_12px_38px_rgba(6,182,212,0.34)]"
          >
            Continue to Login
          </Link>
        </div>

        <Link
          href="/"
          className="mt-6 inline-block text-sm text-slate-400 transition hover:text-cyan-300"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
