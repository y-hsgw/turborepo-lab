import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { additionalData } from "@repo/ui/configs/scss-additional-data";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: additionalData,
      },
    },
  },
  test: {
    environment: "jsdom",
    css: true,
    setupFiles: "./src/testing/setup.ts",
  },
});
