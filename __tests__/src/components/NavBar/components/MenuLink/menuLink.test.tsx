import { act, render, renderHook, screen } from "@testing-library/react";
import { MenuLink } from "@/components/NavBar/components/MenuLink";
import { useThemeStore } from "@/lib/contexts/theme";
import { useRouter } from "next/router";
import { ProfileIcon } from "@/components/Icons/profile";
import { themeConstants } from "@/styles/theme.constants";

describe("MenuLink", () => {
  const title = "Title";
  const testId = "menu-link";
  const pathname = "/same";

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ pathname });
  });

  it("should render the link with the correct href, title and test id", () => {
    const path = "/same";
    render(
      <MenuLink path={path} title={title} testId={testId}>
        <svg />
      </MenuLink>
    );

    const link = screen.getByTestId(testId);
    expect(link).toHaveAttribute("href", path);
    expect(link).toHaveTextContent(title);
  });

  it("should render the child component with the fill color passed as prop", () => {
    const path = "/same";
    render(
      <MenuLink path={path} title={title} testId={testId}>
        <svg />
      </MenuLink>
    );

    const child = screen.getByTestId(testId);
    expect(child.firstChild?.firstChild).toHaveAttribute(
      "fill",
      themeConstants.dark.menuLinkActiveColor
    );
  });

  it("should set the color of the menu link according to the current page", () => {
    const path = "/dif";
    const { result } = renderHook(() => useThemeStore());
    render(
      <MenuLink path={path} title={title} testId={testId}>
        <ProfileIcon />
      </MenuLink>
    );
    const link = screen.getByTestId(testId);
    expect(link.firstChild?.firstChild).toHaveAttribute(
      "fill",
      themeConstants.dark.menuLinkColor
    );

    act(() => result.current.setLight());

    expect(link.firstChild?.firstChild).toHaveAttribute(
      "fill",
      themeConstants.light.menuLinkColor
    );
  });
});
