import { STYLE_PATHS } from "./src/configs/scss-additional-data";
import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    additionalData: (content: string, loaderContext: any) => {
      const { resourcePath, rootContext } = loaderContext;

      const absoluteCSSPaths = STYLE_PATHS.map((stylePath) =>
        path.join(rootContext, "src", stylePath),
      );
      const header = absoluteCSSPaths
        .map((absoluteCSSPath) => {
          const relativePath = path.relative(
            path.dirname(resourcePath),
            absoluteCSSPath,
          );
          return `@use "${relativePath}";`;
        })
        .join("\n");
      console.log("header", header);
      return `${header}${content}`;
    },
  },
  output: "standalone",
};

export default nextConfig;
