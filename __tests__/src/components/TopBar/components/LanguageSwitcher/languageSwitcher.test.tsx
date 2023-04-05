import React from "react";
import { render, fireEvent, renderHook } from "@testing-library/react";
import { useLanguageStore } from "@/lib/contexts/language";
import { Language } from "@/lib/contexts/language/language.constants";
import { LanguageSwitcher } from "@/components/TopBar/components/LanguageSwitcher";

describe("LanguageSwitcher", () => {
  it("should switch language when clicked", () => {
    const { result } = renderHook(() => useLanguageStore());
    const { getByTestId } = render(<LanguageSwitcher />);
    const switcher = getByTestId("language-switcher");
    fireEvent.click(switcher);
    expect(result.current.language).toBe(Language.EN);
    fireEvent.click(switcher);
    expect(result.current.language).toBe(Language.PT_BR);
  });
});
