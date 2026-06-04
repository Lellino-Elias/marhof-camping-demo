import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are pre-sized to WebP at build time, so serve them statically
    // (no on-demand optimization) → instant loads, no per-request CPU.
    unoptimized: true,
  },
};

export default nextConfig;
