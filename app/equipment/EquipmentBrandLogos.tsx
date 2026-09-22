"use client";

type Props = {
  brands: string[];
};

export default function EquipmentBrandLogos({ brands }: Props) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
      {brands.map((brand) => (
        <div
          key={brand}
          className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300"
        >
          {brand}
        </div>
      ))}
    </div>
  );
}
