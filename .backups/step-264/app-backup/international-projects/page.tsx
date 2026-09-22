export default function InternationalProjectsPage() {
  const regions = [
    {
      name: "South Asia",
      countries: [
        ["🇦🇫", "Afghanistan"], ["🇧🇩", "Bangladesh"], ["🇧🇹", "Bhutan"],
        ["🇮🇳", "India"], ["🇲🇻", "Maldives"], ["🇳🇵", "Nepal"],
        ["🇵🇰", "Pakistan"], ["🇱🇰", "Sri Lanka"]
      ]
    },
    {
      name: "Southeast Asia",
      countries: [
        ["🇧🇳", "Brunei"], ["🇰🇭", "Cambodia"], ["🇮🇩", "Indonesia"],
        ["🇱🇦", "Laos"], ["🇲🇾", "Malaysia"], ["🇲🇲", "Myanmar"],
        ["🇵🇭", "Philippines"], ["🇸🇬", "Singapore"], ["🇹🇭", "Thailand"],
        ["🇹🇱", "Timor-Leste"], ["🇻🇳", "Vietnam"]
      ]
    },
    {
      name: "East Asia",
      countries: [
        ["🇨🇳", "China"], ["🇯🇵", "Japan"], ["🇰🇵", "North Korea"],
        ["🇰🇷", "South Korea"], ["🇲🇳", "Mongolia"]
      ]
    },
    {
      name: "Central Asia",
      countries: [
        ["🇰🇿", "Kazakhstan"], ["🇰🇬", "Kyrgyzstan"], ["🇹🇯", "Tajikistan"],
        ["🇹🇲", "Turkmenistan"], ["🇺🇿", "Uzbekistan"]
      ]
    },
    {
      name: "West Asia",
      countries: [
        ["🇦🇲", "Armenia"], ["🇦🇿", "Azerbaijan"], ["🇧🇭", "Bahrain"],
        ["🇨🇾", "Cyprus"], ["🇬🇪", "Georgia"], ["🇮🇶", "Iraq"],
        ["🇮🇱", "Israel"], ["🇯🇴", "Jordan"], ["🇰🇼", "Kuwait"],
        ["🇱🇧", "Lebanon"], ["🇴🇲", "Oman"], ["🇶🇦", "Qatar"],
        ["🇸🇦", "Saudi Arabia"], ["🇵🇸", "Palestine"], ["🇸🇾", "Syria"],
        ["🇹🇷", "Türkiye"], ["🇦🇪", "United Arab Emirates"], ["🇾🇪", "Yemen"]
      ]
    },
    {
      name: "North Asia",
      countries: [
        ["🇷🇺", "Russia"]
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            International Clients & Projects
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Asia International Coverage
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Exploring security technology, equipment engineering and technical
            service opportunities across the Asian region.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Asian Market Coverage</h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            Country coverage across South Asia, Southeast Asia, East Asia,
            Central Asia, West Asia and North Asia.
          </p>
        </div>

        <div className="space-y-14">
          {regions.map((region) => (
            <div key={region.name}>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <h3 className="text-xl font-bold uppercase tracking-wider text-blue-300">
                  {region.name}
                </h3>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {region.countries.map(([flag, country]) => (
                  <div
                    key={country}
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:border-blue-400/40 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl leading-none">{flag}</span>
                      <div>
                        <h4 className="font-semibold text-white">{country}</h4>
                        <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                          International Coverage
                        </p>
                        <div className="mt-3 border-t border-white/10 pt-3">
                          <span className="text-xs text-slate-500">
                            Projects & Clients
                          </span>
                          <p className="mt-1 text-sm text-slate-400">
                            Project portfolio to be added
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Project Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              International Projects
            </h2>
            <p className="mt-3 max-w-3xl text-slate-400">
              Selected international projects and technical engagements will be
              presented here with verified project information.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Saudi Arabia", "Airport & Aviation Security"],
              ["United Arab Emirates", "Security Technology & Support"],
              ["Asia", "Regional Engineering & Technical Support"],
            ].map(([location, category]) => (
              <div
                key={location}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                  {location}
                </p>
                <h3 className="mt-3 text-xl font-bold text-white">
                  {category}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Verified project details, equipment scope and service
                  information will be added during the final content phase.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold">
            International Security Equipment Support
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Equipment supply, installation, commissioning, maintenance,
            calibration, spare parts and technical support can be organized
            according to project requirements.
          </p>
        </div>
      </section>
    </main>
  );
}
