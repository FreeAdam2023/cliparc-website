import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Conservative: only restrict embedding. Omitting script-src/style-src
    // leaves existing first-party and inline Next.js assets unrestricted.
    key: "Content-Security-Policy",
    value: "frame-ancestors 'self'",
  },
];

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/",
        headers: securityHeaders,
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/zh",
        destination: "/zh-Hans/",
        permanent: true,
      },
      {
        source: "/zh/:path*",
        destination: "/zh-Hans/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
