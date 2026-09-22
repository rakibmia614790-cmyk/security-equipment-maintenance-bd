import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://securetechequipment.com";

  const routes = [
    "/",
    "/equipment",
    "/equipment/baggage-scanner",
    "/equipment/walk-through-metal-detector",
    "/equipment/hand-held-metal-detector",
    "/equipment/explosive-trace-detector",
    "/equipment/cctv",
    "/equipment/road-barrier",
    "/equipment/road-blocker",
    "/equipment/access-control",
    "/equipment/car-parking-management",
    "/equipment/bollard",
    "/equipment/human-body-scanner",
    "/equipment/walkie-talkie",
    "/service",
    "/service-request",
    "/bangladesh-clients",
    "/international-projects",
    "/our-team",
    "/about-us",
    "/contact",
    "/partner-login",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
