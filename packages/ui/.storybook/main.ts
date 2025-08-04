import type { StorybookConfig } from "@storybook/react-webpack5";

import { join, dirname } from "node:path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
};
export default config;
