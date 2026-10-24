import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [50, 75, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
