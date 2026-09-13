import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HighEd Study Abroad Advisory",
    short_name: "HighEd",
    description: "Official representative for 500+ global universities",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#253A7B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
