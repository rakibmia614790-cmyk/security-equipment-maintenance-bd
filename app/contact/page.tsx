export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            SecureTech BD
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Connect with our team for security equipment, technical service,
            maintenance and project requirements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            ["Business Enquiries", "Discuss equipment supply, projects and technical requirements."],
            ["Technical Support", "Connect with our team regarding maintenance, repair and troubleshooting."],
            ["Service Requests", "Submit an equipment service or maintenance requirement online."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
            >
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="mt-4 leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Let&apos;s discuss your requirement
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-slate-400">
            For equipment supply, installation, commissioning, maintenance,
            calibration, spare parts or technical support, contact SecureTech BD.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="/service-request"
              className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold hover:bg-blue-500"
            >
              Submit Service Request
            </a>
            <a
              href="mailto:info@securetechequipment.com"
              className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold hover:bg-white/10"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
