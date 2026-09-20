import Image from "next/image";

const team = [
  {
    name: "Rakib Mia",
    title: "Product Specialist",
    department: "Head of Self-Service Department",
    image:
      "/team/Rakib Mia (Product Specialist | Progressed to Head of Self-Service Department).jpg",
  },
  {
    name: "Md. Ismail Hossain",
    title: "Project Coordinator",
    department: "",
    image: "/team/Md. Ismail Hossain (Project Coordinator) .jpeg",
  },
  {
    name: "S.M. Rayhan",
    title: "Head of Engineering Department",
    department: "",
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

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_15%,rgba(37,99,235,0.18),transparent_45%)]" />

      <section className="relative px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-[3px]"
            >
              <div className="absolute left-0 right-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/10 to-transparent" />

                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/40 text-xs font-bold backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="mb-3 h-1 w-12 rounded-full bg-blue-400" />

                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    {member.name}
                  </h2>
                </div>
              </div>

              <div className="border-t border-white/10 bg-white/[0.015] px-7 py-8">
                <div className="border-l-2 border-blue-400/80 pl-5">
                  <p className="text-xl font-bold uppercase leading-tight tracking-[0.08em] text-white sm:text-2xl">
                    {member.title}
                  </p>

                  {member.department && (
                    <p className="mt-4 text-lg font-bold uppercase leading-tight tracking-[0.06em] text-blue-300 sm:text-xl">
                      {member.department}
                    </p>
                  )}
                </div>

                <div className="mt-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/70">
                  <span className="h-px w-8 bg-blue-400/60" />
                  SecureTech BD Team
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
