import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
    transpilePackages: ["react-map-gl", "mapbox-gl"],


};

export default nextConfig;
