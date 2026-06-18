import { render, screen } from "@testing-library/react";

function Card(props: any) {
  return <h2>{props.title}</h2>;
}

test("renders card title", () => {
  render(<Card title="Movie Card" />);

  expect(screen.getByText("Movie Card")).toBeInTheDocument();
});