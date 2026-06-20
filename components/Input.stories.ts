import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
  },
};

export const Email: Story = {
  args: {
    placeholder: "Enter your email",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter your password",
  },
};