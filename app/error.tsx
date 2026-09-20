"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Keep production error details out of the public interface.
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="w-full max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          SecureTech BD
        </p>

        <h1 className="mt-6 text-4xl font-extrabold">
          Something Went Wrong
        </h1>

        <p className="mx-auto mt-4 max-w-md text-slate-400">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-lg border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
