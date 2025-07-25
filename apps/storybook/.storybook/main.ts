import type { StorybookConfig } from "@storybook/nextjs";

import { join, dirname } from "path";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  refs: {
    web: {
      title: "web",
      url: "http://localhost:7007",
    },
    ui: {
      title: "@repo/ui",
      url: "http://localhost:7008",
    },
  },
  addons: ["@storybook/addon-docs"],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
};
export default config;
