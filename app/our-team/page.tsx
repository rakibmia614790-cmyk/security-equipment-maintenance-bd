import Image from "next/image";

const team = [
  {
    name: "Rakib Mia",
    designation:
      "Product Specialist | Progressed to Head of Self-Service Department",
    image:
      "/team/Rakib Mia (Product Specialist | Progressed to Head of Self-Service Department).jpg",
  },
  {
    name: "Md. Ismail Hossain",
    designation: "Project Coordinator",
    image: "/team/Md. Ismail Hossain (Project Coordinator) .jpeg",
  },
  {
    name: "S.M. Rayhan",
    designation: "Head of Engineering Department",
    image: "/team/S.M Rayhan (Head of Engineering Department) .jpeg",
  },
];

export default function OurTeamPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate px-6 py-24 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.22),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.16),transparent_28%),linear-gradient(135deg,#020617,#0f172a_50%,#020617)]" />

        <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.5)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 text-sm font-semibold tracking-[0.22em] text-blue-200 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" />
              SECURETECH EQUIPMENT
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Our Team
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Experienced professionals supporting security equipment,
              engineering, project coordination and technical operations.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <article
                key={member.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.085]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority={index === 0}
                    className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/50 text-sm font-bold text-white backdrop-blur-xl">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="mb-3 h-1 w-12 rounded-full bg-blue-400" />

                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {member.name}
                    </h2>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-white/[0.025] p-7">
                  <p className="text-base font-medium leading-7 text-slate-300">
                    {member.designation}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/80">
                    <span className="h-px w-7 bg-blue-400/60" />
                    SecureTech Team
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
