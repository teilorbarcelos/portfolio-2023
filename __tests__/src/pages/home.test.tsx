import { render } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  test("renders the Home", () => {
    const { getByTestId } = render(<Home />);

    const home = getByTestId("home-page");

    expect(home).toBeInTheDocument();
  });
});
