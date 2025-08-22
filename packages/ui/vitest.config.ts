import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { additionalData } from "./src/configs/scss-additional-data";
import { NodePackageImporter } from "sass";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: additionalData,
        importers: [new NodePackageImporter()],
      },
    },
  },
  test: {
    environment: "jsdom",
    css: true,
    setupFiles: "./src/testing/setup.ts",
  },
});
