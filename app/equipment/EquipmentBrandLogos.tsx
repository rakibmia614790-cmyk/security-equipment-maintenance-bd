type Props = {
  brands: string[];
};

const logoMap: Record<string, string> = {
  "Smiths Detection": "/equipment/logos/smiths-detection.png",
  "Rapiscan Systems": "/equipment/logos/rapiscan-systems.png",
  "Nuctech": "/equipment/logos/nuctech.png",
  "L3Harris": "/equipment/logos/l3harris.png",
  "Analogic": "/equipment/logos/analogic.png",
  "Astrophysics": "/equipment/logos/astrophysics.png",
  "Gilardoni": "/equipment/logos/gilardoni.png",
  "Scanna MSC": "/equipment/logos/scanna-msc.png",
  "CEIA": "/equipment/logos/ceia.png",
  "Garrett": "/equipment/logos/garrett.png",
};

export default function EquipmentBrandLogos({ brands }: Props) {
  return (
    <div className="mt-8">
      <h2 className="mb-5 text-xl font-bold text-white">
        Manufacturers &amp; Brands
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {brands.map((brand) => {
          const logo = logoMap[brand];

          return (
            <div
              key={brand}
              className="flex min-h-[100px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center"
            >
              {logo && (
                <img
                  src={logo}
                  alt={`${brand} logo`}
                  className="mb-3 max-h-12 max-w-[140px] object-contain"
                />
              )}

              <span className="text-sm font-semibold text-slate-200">
                {brand}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
