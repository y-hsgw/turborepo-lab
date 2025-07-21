import { defineConfig } from "vitest/config";

export const baseConfig = defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: "istanbul",
      enabled: true,
    },
  },
});
