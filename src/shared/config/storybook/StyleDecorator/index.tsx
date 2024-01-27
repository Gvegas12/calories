import { StoryFn } from "@storybook/react";
import "@/shared/assets/styles/main.scss";

export const StyleDecorator = (StoryComponent: StoryFn): JSX.Element => (
  <StoryComponent />
);
