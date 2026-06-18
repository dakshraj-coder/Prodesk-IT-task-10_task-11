import { render, screen } from "@testing-library/react";

function Input(props: any) {
  return <input placeholder={props.placeholder} />;
}

test("renders input placeholder", () => {
  render(<Input placeholder="Search movie" />);

  expect(screen.getByPlaceholderText("Search movie")).toBeInTheDocument();
});