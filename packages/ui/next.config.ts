import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    additionalData: (content: any, loaderContext: any) => {
      const { resourcePath, rootContext } = loaderContext;
      const absoluteCSSPath = path.join(
        rootContext,
        "src",
        "styles",
        "variables",
        "size",
      );
      const relativePath = path.relative(
        path.dirname(resourcePath),
        absoluteCSSPath,
      );

      return `@use "${relativePath}";\n${content}`;
    },
  },
  output: "standalone",
};

export default nextConfig;
