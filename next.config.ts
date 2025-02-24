import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'githubusercontent.com',
      'raw.githubusercontent.com',
      'private-user-images.githubusercontent.com'
    ],
  },
  /* config options here */
};

export default nextConfig;