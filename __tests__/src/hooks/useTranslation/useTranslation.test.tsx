import { act, fireEvent, render, screen } from "@testing-library/react";
import TranslationTest from "@/../__tests__/src/hooks/useTranslation/translationTest.component";
import { Language } from "@/lib/contexts/language/language.constants";
import { translations } from "@/hooks/useTranslation/translations";

describe("TranslationTest", () => {
  test("renders helloWorld text in English by default", () => {
    render(<TranslationTest />);

    const helloWorldText = screen.getByText(
      translations.helloWorld[Language.EN]
    );

    expect(helloWorldText).toBeInTheDocument();
  });

  test("changes helloWorld text to Portuguese when clicking the button", async () => {
    render(<TranslationTest />);

    const switchLanguageButton = screen.getByText(
      translations.switchLanguage[Language.EN]
    );

    fireEvent.click(switchLanguageButton);

    await act(async () => {
      const helloWorldText = await screen.findByText(
        translations.helloWorld[Language.PT_BR]
      );

      expect(helloWorldText).toBeInTheDocument();
    });
  });

  test("changes button text to Portuguese when clicking the button", async () => {
    render(<TranslationTest />);

    const switchLanguageButton = screen.getByText(
      translations.switchLanguage[Language.PT_BR]
    );

    fireEvent.click(switchLanguageButton);

    await act(async () => {
      const switchLanguageButtonText = await screen.findByText(
        translations.switchLanguage[Language.EN]
      );

      expect(switchLanguageButtonText).toBeInTheDocument();
    });
  });
});
