import { defineConfig } from "vitest/config";
import { baseConfig } from "@repo/vitest-config/base-config";

export default defineConfig({
  ...baseConfig,
  test: {
    ...baseConfig.test,
  },
});
