export default function HumanBodyScannerPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-300">
          SECURETECH BD
        </p>
        <h1 className="text-4xl font-black tracking-tight md:text-6xl">
          Human Body Scanner
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Advanced personnel screening technology for security checkpoints,
          critical infrastructure, transportation facilities, and controlled
          access environments.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex rounded-xl border border-cyan-400/40 px-6 py-3 font-bold text-cyan-300 transition hover:border-cyan-200 hover:text-white"
        >
          BACK TO HOME
        </a>
      </div>
    </main>
  )
}
