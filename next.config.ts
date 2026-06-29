import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const staticAssetHeaders = [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ];

    return [
      {
        source: "/brand/:path*",
        headers: staticAssetHeaders,
      },
      {
        source: "/images/:path*",
        headers: staticAssetHeaders,
      },
      {
        source: "/projects/:path*",
        headers: staticAssetHeaders,
      },
      {
        source: "/videos/:path*",
        headers: staticAssetHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
