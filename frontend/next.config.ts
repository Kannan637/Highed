import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "X-XSS-Protection",
    value: "0",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin-allow-popups",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
        : "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://wa.me https://*.supabase.co ws: wss:",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Allow mobile devices and local network IPs to connect to HMR WebSocket
  allowedDevOrigins: [
    "192.168.0.111",
    "192.168.*.*",
    "10.*.*.*",
    "localhost",
    "127.0.0.1",
  ],

  // Delegate typecheck to dedicated CLI tasks to prevent V8 heap exhaustion on Windows
  typescript: {
    ignoreBuildErrors: true,
  },

  // Package treeshaking & build optimization
  experimental: {
    optimizePackageImports: ["lucide-react", "country-flag-icons"],
    cpus: 1,
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  // Permanent Redirects for canonical SEO
  async redirects() {
    return [
      {
        source: "/services/sop-lop-assistance",
        destination: "/services/sop-lor-assistance",
        permanent: true,
      },
      {
        source: "/services/sop-and-lor-assistance",
        destination: "/services/sop-lor-assistance",
        permanent: true,
      },
      {
        source: "/services/accommodation",
        destination: "/services/accommodation-pre-departure",
        permanent: true,
      },
      {
        source: "/services/pre-departure-support",
        destination: "/services/accommodation-pre-departure",
        permanent: true,
      },
      {
        source: "/services/acc-pre",
        destination: "/services/accommodation-pre-departure",
        permanent: true,
      },
      {
        source: "/services/Acc&pre",
        destination: "/services/accommodation-pre-departure",
        permanent: true,
      },
    ];
  },

  // Headers (Security, SEO Protection & Long-Term Static Caching)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/admin/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/icons/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/logos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

