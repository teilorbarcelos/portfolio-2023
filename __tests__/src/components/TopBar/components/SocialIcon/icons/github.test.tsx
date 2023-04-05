import React from "react";
import { render, renderHook } from "@testing-library/react";
import { GithubIcon } from "@/components/TopBar/components/SocialIcon/icons/github";
import { useThemeStore } from "@/lib/contexts/theme";
import { act } from "react-dom/test-utils";

describe("GithubIcon", () => {
  it("should render with correct color and link", () => {
    const { getByTestId } = render(<GithubIcon />);
    const link = getByTestId("github-link-icon");
    expect(link).toHaveAttribute("href", "https://github.com/teilorbarcelos");
    expect(link.firstChild?.firstChild?.firstChild).toHaveAttribute(
      "fill",
      "#a5b3ce"
    );

    act(() => {
      useThemeStore.getState().setLight();
    });

    expect(link.firstChild?.firstChild?.firstChild).toHaveAttribute(
      "fill",
      "#4f6591"
    );
  });
});
