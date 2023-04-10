import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { useThemeStore } from "@/lib/contexts/theme";
import { CloseIconComponent } from "@/components/NavBar/components/CloseIcon";
import { themeConstants } from "@/styles/theme.constants";

const closeFunctionMock = jest.fn();

describe("CloseIconComponent", () => {
  const { result } = renderHook(() => useThemeStore());

  it("renders a close icon component", () => {
    render(<CloseIconComponent onClick={closeFunctionMock} />);
    expect(screen.getByTestId("close-icon")).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    render(<CloseIconComponent onClick={closeFunctionMock} />);
    const closeIcon = screen.getByTestId("close-icon");
    fireEvent.click(closeIcon);
    expect(closeFunctionMock).toHaveBeenCalledTimes(1);
  });

  it("renders the close icon with the correct color based on the current theme", () => {
    result.current.setDark();
    render(<CloseIconComponent onClick={closeFunctionMock} />);
    const closeIcon = screen.getByTestId("close-icon");
    expect(closeIcon.firstChild).toHaveAttribute(
      "fill",
      themeConstants.dark.singleAmburgerBarColor
    );
  });

  it("renders the close icon with the correct color based on the current theme", () => {
    result.current.setLight();
    render(<CloseIconComponent onClick={closeFunctionMock} />);
    const closeIcon = screen.getByTestId("close-icon");
    expect(closeIcon.firstChild).toHaveAttribute(
      "fill",
      themeConstants.light.singleAmburgerBarColor
    );
  });
});
