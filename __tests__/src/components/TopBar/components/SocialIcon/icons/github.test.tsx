import React from "react";
import { render, act } from "@testing-library/react";
import { useThemeStore } from "@/lib/contexts/theme";
import { GitHub } from "@/components/TopBar/components/SocialIcon/GitHub";
import { themeConstants } from "@/styles/theme.constants";

describe("GithubIcon", () => {
  it("should render with correct color and link", () => {
    const { getByTestId } = render(<GitHub />);
    const link = getByTestId("github-link-icon");
    expect(link).toHaveAttribute("href", "https://github.com/teilorbarcelos");
    expect(link.firstChild?.firstChild).toHaveAttribute(
      "fill",
      themeConstants.dark.socialIconColor
    );

    act(() => {
      useThemeStore.getState().setLight();
    });

    expect(link.firstChild?.firstChild).toHaveAttribute(
      "fill",
      themeConstants.light.socialIconColor
    );
  });
});
