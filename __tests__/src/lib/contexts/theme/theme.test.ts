import { Theme, useThemeStore } from "@/lib/contexts/theme";
import { act } from "@testing-library/react";

describe("useThemeStore", () => {
  test("should set theme to light when setLight is called", () => {
    act(() => {
      useThemeStore.getState().setLight();
    });
    expect(useThemeStore.getState().theme).toBe(Theme.LIGHT);
  });

  test("should set theme to dark when setDark is called", () => {
    act(() => {
      useThemeStore.getState().setDark();
    });
    expect(useThemeStore.getState().theme).toBe(Theme.DARK);
  });
});
