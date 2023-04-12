import { act, render, renderHook, waitFor } from "@testing-library/react";
import { cloneElement } from "react";
import { Theme, useThemeStore } from "@/lib/contexts/theme";
import { themeConstants } from "@/styles/theme.constants";
import { SocialIcon } from "@/components/Header/components";

describe("SocialIcon", () => {
  it("should render properly with the correct link and fill color", async () => {
    const { result } = renderHook(() => useThemeStore());
    const url = "https://www.example.com";
    const dataTestId = "social-icon";
    const icon = <svg />;
    const { getByTestId } = render(
      <SocialIcon url={url} dataTestId={dataTestId}>
        {icon}
      </SocialIcon>
    );
    const socialIcon = getByTestId(dataTestId);
    expect(socialIcon).toBeInTheDocument();
    expect(socialIcon).toHaveAttribute("href", url);
    expect(socialIcon).toHaveAttribute("target", "_blank");
    expect(socialIcon).toHaveAttribute("rel", "noreferrer");

    let expectedColor =
      result.current.themeState === Theme.DARK
        ? themeConstants.dark.socialIconColor
        : themeConstants.light.socialIconColor;

    expect(socialIcon.firstChild).toHaveAttribute("fill", expectedColor);

    act(() => result.current.setLight());

    expectedColor =
      result.current.themeState === Theme.DARK
        ? themeConstants.dark.socialIconColor
        : themeConstants.light.socialIconColor;

    expect(socialIcon.firstChild).toHaveAttribute("fill", expectedColor);
  });
});
