import { FlatCompat } from "@eslint/eslintrc";
import base from "@repo/eslint-config/base";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...base,
];

export default eslintConfig;
