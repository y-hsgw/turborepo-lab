import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  sassOptions: {
    additionalData: '@use "@repo/ui/styles/variables/size";',
  },
};

export default nextConfig;
