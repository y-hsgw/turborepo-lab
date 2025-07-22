import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { Button } from "./button";
import { join, dirname } from "node:path";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};
