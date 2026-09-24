import EquipmentBrandLogos from "../EquipmentBrandLogos";
import HandHandMetalManufacturerIdentityGrid from "@/app/components/HandHandMetalManufacturerIdentityGrid";

const hhmdBrands = [
  "Garrett",
  "CEIA",
  "Smiths Detection",
  "Rapiscan Systems",
  "Nuctech",
];

const wtmdBrands = [
  "CEIA",
  "Garrett",
  "Smiths Detection",
  "Rapiscan Systems",
  "Nuctech",
];
const manufacturers = [
  ["Garrett", ""],
  ["CEIA", ""],
  ["Rapiscan Systems", ""],
  ["Smiths Detection", ""],
  ["Nuctech", ""],
  ["ZKTeco", ""],
  ["Westminster International", ""],
  ["Adani Defence", ""],
  ["Fisher Research Labs", ""],
  ["Minelab", ""],
  ["Skanray Technologies", ""],
  ["DetectaChem", ""],
  ["WIPOTEC-OCS", ""],
  ["Security Metal Detectors", ""],
  ["Autoclear", ""],
  ["VMI Security", ""],
  ["Viken Detection", ""],
  ["Metrasens", ""],
  ["Metal Detector Corporation", ""],
  ["KJB Security Products", ""],
];

export default function HandHeldMetalDetectorPage() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Technical Services
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Inspection & Troubleshooting",
              "Preventive Maintenance",
              "Corrective Repair",
              "Performance Testing",
              "Spare Parts Support",
              "Technical Consultation",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-[#0a1728] p-7"
              >
                <h3 className="font-bold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          SecureTech Equipment
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Need Technical Support for Your Metal Detector?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
          Contact our technical team for inspection, maintenance, repair,
          calibration-related support and equipment service requirements.
        </p>
        <a
          href="/service-request"
          className="mt-9 inline-flex rounded-xl bg-sky-500 px-7 py-3.5 font-semibold transition hover:bg-sky-400"
        >
          Submit Service Request
        </a>
      </section>
    
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-8">
        <EquipmentBrandLogos brands={wtmdBrands} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-8">
        <EquipmentBrandLogos brands={hhmdBrands} />
      </div>
</main>
  );
}
