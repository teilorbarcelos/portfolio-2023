import { useLanguageStore } from "@/lib/contexts/language";
import { Language } from "@/lib/contexts/language/language.constants";
import { act, renderHook } from "@testing-library/react";

describe("useLanguageStore", () => {
  test("initial language is English", () => {
    const { result } = renderHook(() => useLanguageStore());
    expect(result.current.language).toBe(Language.EN);
  });

  test("setLanguage updates the language", () => {
    const { result } = renderHook(() => useLanguageStore());
    const { setLanguage } = result.current;

    act(() => {
      setLanguage(Language.PT_BR);
    });

    expect(result.current.language).toBe(Language.PT_BR);
  });
});
