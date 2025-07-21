import { describe, expect } from "vitest";
import { add } from "../src/add";
import { it } from "vitest";

describe(add, () => {
  it("引数の数値を足す", () => {
    const result = add(1, 2);

    expect(result).toBe(3);
  });
});
