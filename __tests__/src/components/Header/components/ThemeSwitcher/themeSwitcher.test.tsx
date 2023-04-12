import React from "react";
import { render, fireEvent, renderHook } from "@testing-library/react";
import { Theme, useThemeStore } from "@/lib/contexts/theme";
import { ThemeSwitcher } from "@/components/Header/components/ThemeSwitcher";

describe("ThemeSwitcher", () => {
  it("should toggle theme on click", () => {
    const { result } = renderHook(() => useThemeStore());
    const { getByTestId } = render(<ThemeSwitcher />);
    const switcher = getByTestId("theme-switcher");

    fireEvent.click(switcher);

    expect(result.current.themeState).toBe(Theme.LIGHT);

    fireEvent.click(switcher);

    expect(result.current.themeState).toBe(Theme.DARK);
  });
});
