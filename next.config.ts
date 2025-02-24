import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'githubusercontent.com',
      'raw.githubusercontent.com',
      'private-user-images.githubusercontent.com'
    ],
    unoptimized: true,  // disable Image Optimization
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  /* config options here */
};

export default nextConfig;