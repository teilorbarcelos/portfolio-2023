import { render } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  test("renders the TopBar", () => {
    const { getByTestId } = render(<Home />);

    const topBar = getByTestId("top-bar");

    expect(topBar).toBeInTheDocument();
  });
});
