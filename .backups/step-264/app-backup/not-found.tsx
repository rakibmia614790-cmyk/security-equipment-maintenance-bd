import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="w-full max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          SecureTech BD
        </p>

        <h1 className="mt-6 text-7xl font-extrabold tracking-tight">404</h1>

        <h2 className="mt-4 text-2xl font-bold">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-slate-400">
          The page you are looking for may have been moved, removed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
