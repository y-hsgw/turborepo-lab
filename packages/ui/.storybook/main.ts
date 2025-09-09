import type { StorybookConfig } from "@storybook/nextjs";

import path, { join, dirname } from "node:path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.ts"),
    },
  },
  webpackFinal: (config) => {
    const fileLoaderRule = config.module?.rules?.find(
      (rule) =>
        typeof rule === "object" &&
        rule?.test instanceof RegExp &&
        rule.test.test(".svg"),
    );

    if (typeof fileLoaderRule === "object" && fileLoaderRule !== null) {
      config.module?.rules?.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [/url/] },
          use: ["@svgr/webpack"],
        },
      );
      fileLoaderRule.exclude = /\.svg$/i;
    }
    return config;
  },
};
export default config;
