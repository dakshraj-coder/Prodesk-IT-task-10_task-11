import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Hello Storybook",
  },
};

export const Laptop: Story = {
  args: {
    title: "ASUS TUF F15",
  },
};

export const Phone: Story = {
  args: {
    title: "iPhone 16",
  },
};