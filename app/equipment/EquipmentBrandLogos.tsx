"use client";

type Props = {
  brands: string[];
};

const logoMap: Record<string, string> = {
  "Smiths Detection": "/equipment/logos/smiths-detection.png",
  "Rapiscan Systems": "/equipment/logos/rapiscan-systems.png",
  "Nuctech": "/equipment/logos/nuctech.png",
  "CEIA": "/equipment/logos/ceia.png",
  "Garrett": "/equipment/logos/garrett.png",
  "L3Harris": "/equipment/logos/l3harris.png",
  "Analogic": "/equipment/logos/analogic.png",
  "Astrophysics": "/equipment/logos/astrophysics.png",
  "Gilardoni": "/equipment/logos/gilardoni.png",
  "Scanna MSC": "/equipment/logos/scanna-msc.png",
};

export default function EquipmentBrandLogos({ brands }: Props) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
      {brands.map((brand) => {
        const logo = logoMap[brand];

        return (
          <div
            key={brand}
            className="flex min-h-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2"
          >
            {logo ? (
              <img
                src={logo}
                alt={`${brand} logo`}
                className="max-h-7 max-w-[110px] object-contain"
              />
            ) : (
              <span className="text-xs text-slate-300">{brand}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
