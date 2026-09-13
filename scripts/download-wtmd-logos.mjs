import fs from "fs";
import path from "path";

const brands = [
  { name: "CEIA", file: "ceia.png", domain: "ceia.net" },
  { name: "Garrett Metal Detectors", file: "garrett.png", domain: "garrett.com" },
  { name: "Rapiscan Systems", file: "rapiscan.png", domain: "rapiscansystems.com" },
  { name: "Smiths Detection", file: "smiths-detection.png", domain: "smithsdetection.com" },
  { name: "Nuctech", file: "nuctech.png", domain: "nuctech.com" },
  { name: "ZKTeco", file: "zkteco.png", domain: "zkteco.com" },
  { name: "Vallon", file: "vallon.png", domain: "vallon.de" },
  { name: "Metrasens", file: "metrasens.com.png", domain: "metrasens.com" },
  { name: "Adani Systems", file: "adani-systems.png", domain: "adanisystems.com" },
  { name: "Elektral", file: "elektral.png", domain: "elektral.com.tr" },
  { name: "Westminster International", file: "westminster.png", domain: "westminster.co.uk" },
  { name: "Autoclear", file: "autoclear.png", domain: "autoclear.com" },
  { name: "Fisher Research Laboratory", file: "fisher.png", domain: "fisherlab.com" },
  { name: "Safeway Inspection Systems", file: "safeway.png", domain: "safeway-system.com" },
  { name: "Kumahira", file: "kumahira.png", domain: "kumahira.co.jp" },
  { name: "Shanghai Eastimage", file: "eastimage.png", domain: "eastimagesecurity.com" },
  { name: "Beijing Zhongdun Anmin", file: "zhongdun-anmin.png", domain: "zdam.com.cn" },
];

const outputDirectory = path.join(
  process.cwd(),
  "public",
  "brands",
  "wtmd"
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
      console.log(`Failed: ${brand.name}`);
      return;
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    fs.writeFileSync(outputFile, buffer);

    console.log(`Downloaded: ${brand.name}`);
  } catch {
    console.log(`Failed: ${brand.name}`);
  }
}

async function main() {
  console.log("");
  console.log("Downloading WTMD brand logos...");
  console.log("");

  for (const brand of brands) {
    await downloadLogo(brand);
  }

  console.log("");
  console.log("WTMD logo download process completed.");
  console.log("");
}

main();