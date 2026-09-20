import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/partner-dashboard/",
        "/partner-signup/",
        "/reset-password/",
        "/forgot-password/",
      ],
    },
    sitemap: "https://securetechequipment.com/sitemap.xml",
  };
}
