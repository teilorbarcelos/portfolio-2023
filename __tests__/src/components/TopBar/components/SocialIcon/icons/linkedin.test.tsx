import React from "react";
import { render, act } from "@testing-library/react";
import { useThemeStore } from "@/lib/contexts/theme";
import { Linkedin } from "@/components/TopBar/components/SocialIcon/Linkedin";
import { themeConstants } from "@/styles/theme.constants";

describe("LinkedinIcon", () => {
  it("should render with correct color and link", () => {
    const { getByTestId } = render(<Linkedin />);
    const link = getByTestId("linkedin-link-icon");
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/teilorsb"
    );
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
