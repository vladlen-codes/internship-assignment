import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json higher up the filesystem confuses root detection.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
