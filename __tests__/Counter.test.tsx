import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

test("increments count when button is clicked", async () => {
  render(<Counter />);

  const button = screen.getByRole("button");

  await userEvent.click(button);

  expect(screen.getByText("1")).toBeInTheDocument();
});