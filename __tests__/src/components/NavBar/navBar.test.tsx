import React from "react";
import { render, fireEvent, renderHook } from "@testing-library/react";
import { NavBar } from "@/components/NavBar";
import { useMenuStore } from "@/lib/contexts/menu";

describe("NavBar component", () => {
  it("should toggle menu open and closed when clicking on the close icon", () => {
    const { result } = renderHook(() => useMenuStore());
    const { getByTestId } = render(<NavBar />);

    const closeIcon = getByTestId("close-icon");

    expect(result.current.isOpen).toBe(true);

    fireEvent.click(closeIcon);

    expect(result.current.isOpen).toBe(false);

    fireEvent.click(closeIcon);

    expect(result.current.isOpen).toBe(true);
  });

  it("Should have to render all links correctly", () => {
    const { getByTestId } = render(<NavBar />);

    const aboutLink = getByTestId("about-link");
    const projectsLink = getByTestId("projects-link");
    const blogLink = getByTestId("blog-link");
    const resumeLink = getByTestId("resume-link");
    const contactLink = getByTestId("contact-link");

    expect(aboutLink).toHaveAttribute("href", "/");
    expect(projectsLink).toHaveAttribute("href", "/projects");
    expect(blogLink).toHaveAttribute("href", "/blog");
    expect(resumeLink).toHaveAttribute("href", "/resume");
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
