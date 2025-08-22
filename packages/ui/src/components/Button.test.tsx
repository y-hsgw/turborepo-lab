import { describe, expect, test } from "vitest";
import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("ボタンが表示される", () => {
    render(<Button>a</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
