import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drdantegonzales.com",
      },
      {
        protocol: "https",
        hostname: "www.drdantegonzales.com",
      },
    ],
  },
};

export default nextConfig;
