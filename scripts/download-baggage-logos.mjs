import fs from "fs";
import path from "path";

const brands = [
  {
    name: "Smiths Detection",
    file: "smiths-detection.png",
    domain: "smithsdetection.com",
  },
  {
    name: "Rapiscan Systems",
    file: "rapiscan-systems.png",
    domain: "rapiscansystems.com",
  },
  {
    name: "Astrophysics Inc.",
    file: "astrophysics.png",
    domain: "astrophysicsinc.com",
  },
  {
    name: "Leidos",
    file: "leidos.png",
    domain: "leidos.com",
  },
  {
    name: "Gilardoni",
    file: "gilardoni.png",
    domain: "gilardoni.it",
  },
  {
    name: "Nuctech",
    file: "nuctech.png",
    domain: "nuctech.com",
  },
  {
    name: "L3Harris",
    file: "l3harris.png",
    domain: "l3harris.com",
  },
  {
    name: "Analogic",
    file: "analogic.com.png",
    domain: "analogic.com",
  },
  {
    name: "VOTI Detection",
    file: "voti-detection.png",
    domain: "votidetection.com",
  },
  {
    name: "CEIA",
    file: "ceia.png",
    domain: "ceia.net",
  },
  {
    name: "Adani Systems",
    file: "adani-systems.png",
    domain: "adanisystems.com",
  },
  {
    name: "Safeway Inspection Systems",
    file: "safeway.png",
    domain: "safeway-system.com",
  },
  {
    name: "Vanderlande",
    file: "vanderlande.png",
    domain: "vanderlande.com",
  },
  {
    name: "LINEV Systems",
    file: "linev-systems.png",
    domain: "linevsystems.com",
  },
  {
    name: "Westminster International",
    file: "westminster.png",
    domain: "westminster.co.uk",
  },
  {
    name: "Autoclear",
    file: "autoclear.png",
    domain: "autoclear.com",
  },
  {
    name: "Micro-X",
    file: "micro-x.png",
    domain: "micro-x.com",
  },
];

const outputDirectory = path.join(
  process.cwd(),
  "public",
  "brands",
  "baggage-scanner"
);

fs.mkdirSync(outputDirectory, { recursive: true });

async function downloadLogo(brand) {
  const url =
    "https://www.google.com/s2/favicons?domain=" +
    encodeURIComponent(brand.domain) +
    "&sz=128";

  const outputFile = path.join(outputDirectory, brand.file);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(`Could not download: ${brand.name}`);
      return;
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    fs.writeFileSync(outputFile, buffer);

    console.log(`Downloaded: ${brand.name}`);
  } catch (error) {
    console.log(`Failed: ${brand.name}`);
  }
}

async function main() {
  console.log("");
  console.log("Downloading baggage scanner brand logos...");
  console.log("");

  for (const brand of brands) {
    await downloadLogo(brand);
  }

  console.log("");
  console.log("Logo download process completed.");
  console.log("");
}

main();