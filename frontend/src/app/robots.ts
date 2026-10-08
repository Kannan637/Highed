import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function robots(): MetadataRoute.Robots {
  const disallowedPaths = ["/api/", "/admin/", "/admin/*"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedPaths,
      },
      // Search engine bots
      {
        userAgent: ["Googlebot", "Bingbot", "Applebot"],
        allow: "/",
        disallow: disallowedPaths,
      },
      // Legitimate AI search, citation & agentic crawlers
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "ChatGPT-User",
          "anthropic-ai",
          "Cohere-ai",
          "CCBot",
          "Meta-ExternalAgent",
        ],
        allow: "/",
        disallow: disallowedPaths,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

