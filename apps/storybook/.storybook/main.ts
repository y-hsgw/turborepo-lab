import type { StorybookConfig } from "@storybook/nextjs";

import { join, dirname } from "path";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    {
      directory: "../../../packages/ui/src",
      titlePrefix: "ui",
    },
    {
      directory: "../../web/src",
      titlePrefix: "web",
    },
  ],
  addons: [],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  staticDirs: ["../public"],
};
export default config;
