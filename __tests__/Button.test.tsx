import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

test("renders button text", () => {
  render(<Button text="Submit" />);
  expect(screen.getByText("Submit")).toBeInTheDocument();
});