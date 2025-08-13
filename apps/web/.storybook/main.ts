import type { StorybookConfig } from "@storybook/nextjs";

import path, { join, dirname } from "node:path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["storycap"],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {
      image: {
        loading: "eager",
      },
      nextConfigPath: path.resolve(__dirname, "../next.config.ts"),
    },
  },
  features: {
    experimentalRSC: true,
  },
  staticDirs: ["../public"],
};
export default config;
