import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  devIndicators: {
    position: "bottom-right", // ✅ Clean & valid
  },
};

export default nextConfig;
