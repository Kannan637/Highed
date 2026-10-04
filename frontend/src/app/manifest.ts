import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HighEd Study Abroad Advisory",
    short_name: "HighEd",
    description: "Premier overseas education advisory across 7 top global study destinations",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#253A7B",
    icons: [
      {
        src: "/icons/Favicon.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
