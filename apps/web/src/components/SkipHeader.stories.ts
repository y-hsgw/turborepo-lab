import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { Header } from "./Header";

const meta = {
  title: "components/SkipHeader",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    screenshot: {
      skip: true,
    },
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "I am Skip Header",
    },
  },
};

export const LoggedOut: Story = {};
