import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe(Button, () => {
  it("ボタンが表示される", () => {
    render(<Button label="aaa" />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
