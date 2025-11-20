import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'se-images.campuslabs.com',
      },
    ],
  },
};

export default nextConfig;
