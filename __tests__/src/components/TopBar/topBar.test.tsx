import { TopBar } from "@/components/TopBar";
import { render, screen } from "@testing-library/react";

describe("TopBar", () => {
  it("should render all components", () => {
    render(<TopBar />);

    const amburgerButton = screen.getByTestId("amburger-button");
    expect(amburgerButton).toBeInTheDocument();

    const themeSwitcher = screen.getByTestId("theme-switcher");
    expect(themeSwitcher).toBeInTheDocument();

    const languageSwitcher = screen.getByTestId("language-switcher");
    expect(languageSwitcher).toBeInTheDocument();

    const githubIcon = screen.getByTestId("github-link-icon");
    expect(githubIcon).toBeInTheDocument();

    const linkedinIcon = screen.getByTestId("linkedin-link-icon");
    expect(linkedinIcon).toBeInTheDocument();

    const hireMeButton = screen.getByTestId("hire-me-button");
    expect(hireMeButton).toBeInTheDocument();
  });
});
