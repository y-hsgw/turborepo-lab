export const STYLE_PATHS = ["styles/variables/size"] as const;

export const additionalData = STYLE_PATHS.map(
  (path) => `@use "@repo/ui/${path}";`,
).join("\n");
