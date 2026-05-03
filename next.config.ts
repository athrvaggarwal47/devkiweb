import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.instagram.com https://connect.facebook.net",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.instagram.com https://graph.instagram.com",
              "frame-src 'self' https://www.instagram.com",
              "media-src 'self' https://www.instagram.com https://scontent.cdninstagram.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
