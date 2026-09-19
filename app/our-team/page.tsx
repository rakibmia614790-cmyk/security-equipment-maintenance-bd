import Image from "next/image";

const team = [
  {
    name: "Rakib Mia",
    designation: "Product Specialist | Progressed to Head of Self-Service Department",
    image: "/team/Rakib Mia (Product Specialist | Progressed to Head of Self-Service Department).jpg",
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
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            SecureTech Equipment
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our Team
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Meet the professionals supporting our security equipment,
            engineering, project coordination and technical operations.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <article
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority={index === 0}
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-slate-950/85 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="p-7">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {member.name}
                  </h2>

                  <div className="mt-3 h-px w-12 bg-blue-600" />

                  <p className="mt-4 text-base font-medium leading-7 text-slate-600">
                    {member.designation}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
