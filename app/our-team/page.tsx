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
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 -z-20">
        <Image
          src="/security-hero.png"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
      </div>

      <div className="fixed inset-0 -z-10 bg-slate-950/70" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.18),transparent_45%)]" />

      <section className="relative px-6 pb-14 pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-5 py-2 text-xs font-semibold tracking-[0.25em] text-blue-200 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
            SECURETECH EQUIPMENT
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Our Team
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Experienced professionals supporting engineering, project
            coordination and security equipment operations.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-[3px]"
            >
              <div className="absolute left-0 right-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

              <div className="relative aspect-[4/5] overflow-hidden bg-transparent">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/10 to-transparent" />

                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/35 text-xs font-bold backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="mb-3 h-1 w-12 rounded-full bg-blue-400" />
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {member.name}
                  </h2>
                </div>
              </div>

              <div className="border-t border-white/10 bg-transparent p-7">
                <p className="text-base font-medium leading-7 text-slate-300">
                  {member.designation}
                </p>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/70">
                  SecureTech Team
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
