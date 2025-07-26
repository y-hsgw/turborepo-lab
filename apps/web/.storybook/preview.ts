import type { Decorator, Preview } from "@storybook/nextjs";
import { withScreenshot } from "storycap";

const preview: Preview = {
  decorators: [withScreenshot as Decorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
