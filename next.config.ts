import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Static CSP (no nonce) so pages can be statically generated and cached at
// the edge. This is a marketing site with no auth/sensitive data, so the
// extra hardening from a per-request nonce isn't worth losing static
// rendering + CDN caching for.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self';
  frame-src 'self' https://www.google.com https://www.youtube-nocookie.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
`;

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Content-Security-Policy",
    value: cspHeader.replace(/\s{2,}/g, " ").trim(),
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
