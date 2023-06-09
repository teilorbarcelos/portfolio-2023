import { Header } from "@/components/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("should render all components", () => {
    render(<Header />);

    const amburgerButton = screen.getByTestId("amburger-button");
    expect(amburgerButton).toBeInTheDocument();

    const themeSwitcher = screen.getByTestId("theme-switcher");
    expect(themeSwitcher).toBeInTheDocument();

    const languageSwitcher = screen.getByTestId("language-switcher");
    expect(languageSwitcher).toBeInTheDocument();

    const githubIcon = screen.getAllByTestId("github-link-icon");
    expect(githubIcon[0].firstChild).toBeInTheDocument();

    const linkedinIcon = screen.getAllByTestId("linkedin-link-icon");
    expect(linkedinIcon[0].firstChild).toBeInTheDocument();

    const hireMeButton = screen.getByTestId("hire-me-button");
    expect(hireMeButton).toBeInTheDocument();
  });
});
