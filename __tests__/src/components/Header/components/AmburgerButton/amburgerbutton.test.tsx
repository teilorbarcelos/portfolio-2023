import { render, fireEvent, renderHook } from "@testing-library/react";
import { useMenuStore } from "@/lib/contexts/menu";
import { AmburgerButton } from "@/components/Header/components/AmburgerButton";

describe("AmburgerButton", () => {
  it("should render properly", () => {
    const { getByTestId } = render(<AmburgerButton />);
    const button = getByTestId("amburger-button");
    expect(button).toBeInTheDocument();
  });

  it("should toggle the menu on click", () => {
    const { result } = renderHook(() => useMenuStore());
    const { getByTestId } = render(<AmburgerButton />);
    const button = getByTestId("amburger-button");
    expect(result.current.isOpen).toBe(true);
    fireEvent.click(button);
    expect(result.current.isOpen).toBe(false);
    fireEvent.click(button);
    expect(result.current.isOpen).toBe(true);
  });
});
