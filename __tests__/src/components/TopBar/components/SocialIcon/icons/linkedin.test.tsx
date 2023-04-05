import React from "react";
import { render } from "@testing-library/react";
import { LinkedinIcon } from "@/components/TopBar/components/SocialIcon/icons/linkedin";
import { act } from "react-dom/test-utils";
import { useThemeStore } from "@/lib/contexts/theme";

describe("LinkedinIcon", () => {
  it("should render with correct color and link", () => {
    const { getByTestId } = render(<LinkedinIcon />);
    const link = getByTestId("linkedin-link-icon");
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/teilorsb"
    );
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
