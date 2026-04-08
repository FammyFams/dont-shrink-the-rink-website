import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dont-shrink-the-rink-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
