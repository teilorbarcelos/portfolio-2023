import { act, render, renderHook } from "@testing-library/react";
import { Language } from "@/lib/contexts/language/language.constants";
import { useLanguageStore } from "@/lib/contexts/language";
import { headerMock } from "./pageHeader.mock";
import { PageHeader } from "@/components/PageHeader";

describe("PageHeader", () => {
  it("should render with English header text", () => {
    const { getByText, getByAltText } = render(<PageHeader {...headerMock} />);

    expect(getByText(headerMock.profileName)).toBeInTheDocument();
    expect(
      getByAltText(`${headerMock.profileName} profile image`)
    ).toBeInTheDocument();
    expect(getByText(headerMock.headerTextEN)).toBeInTheDocument();
  });

  it("should render with Portuguese header text", () => {
    const { result } = renderHook(() => useLanguageStore());
    act(() => result.current.setLanguage(Language.PT_BR));

    const { getByText, getByAltText } = render(<PageHeader {...headerMock} />);

    expect(getByText(headerMock.profileName)).toBeInTheDocument();
    expect(
      getByAltText(`${headerMock.profileName} profile image`)
    ).toBeInTheDocument();
    expect(getByText(headerMock.headerTextPT)).toBeInTheDocument();
  });

  it("should render the view resume button", () => {
    const { getByTestId } = render(<PageHeader {...headerMock} />);

    expect(getByTestId("view-resume-button")).toBeInTheDocument();
  });
});
