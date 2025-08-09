import { additionalData } from "@repo/ui/configs/scss-additional-data";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  sassOptions: {
    additionalData: additionalData,
  },
};

export default nextConfig;
